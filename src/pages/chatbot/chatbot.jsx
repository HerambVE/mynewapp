import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(null);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); // Minimized state

  // Hardcoded responses for mental health-related prompts
  const hardcodedResponses = {
    "i feel sad": {
      hinglish: "Mujhe afsos hai ki aap udaas mehsoos kar rahe hain. Kya aap kisi baare mein baat karna chahte hain?",
      english: "I'm sorry to hear that you're feeling sad. Would you like to talk about what's bothering you?"
    },
    "i am anxious": {
      hinglish: "Anxiety ko samajhna mushkil ho sakta hai. Deep breaths lein aur agar aap baat karna chahte hain, main yahan hoon.",
      english: "Anxiety can be hard to deal with. Take deep breaths, and if you’d like to talk, I’m here for you."
    },
    "i can't sleep": {
      hinglish: "Neend ke liye ek relaxing routine banane ki koshish karein. Aap agar chahein toh main aapko kuch relaxation tips bata sakta hoon.",
      english: "Try to create a relaxing bedtime routine. If you’d like, I can share some relaxation tips with you."
    },
    "i feel lonely": {
      hinglish: "Akele mehsoos karna bahut mushkil ho sakta hai. Kya aap kisi dost ko call kar sakte hain? Ya main aapke saath baat kar sakta hoon.",
      english: "Feeling lonely can be tough. Can you call a friend? If not, I’m happy to talk with you."
    },
    "how do i manage stress": {
      hinglish: "Stress ko manage karne ke liye deep breathing, exercise, aur time management ka istemal karein. Kya aap ek technique try karna chahenge?",
      english: "To manage stress, try deep breathing, exercise, or time management. Would you like to try a technique together?"
    },
    "i am overwhelmed": {
      hinglish: "Jab cheezen overwhelming lagti hain, toh ek break lena aur apni priorites ko assess karna madadgar ho sakta hai. Main aapki madad karne ke liye yahan hoon.",
      english: "When things feel overwhelming, taking a break and assessing priorities can help. I'm here to support you."
    },
    "i don't know what to do with my life": {
      hinglish: "Ye ek common feeling hai. Aapko kya cheezein excite karti hain ya interest deti hain?",
      english: "That's a common feeling. What are the things that excite or interest you?",
      followUp: {
        hinglish: "Aapne kaha ke aapko painting pasand thi, lekin ab aap nahi karte. Kya koi khaas wajah hai jiske kaaran aapne painting bandh kar di?",
        english: "You mentioned you used to enjoy painting, but haven’t done it in a while. Is there any particular reason you stopped?"
      }
    },
    "i feel stressed all the time at work, like i'm not good enough": {
      hinglish: "Mujhe afsos hai ke aap aise mehsoos kar rahe hain. Kya aapne kisi se apne stress ke baare mein baat ki hai?",
      english: "I'm sorry you're feeling that way. Have you talked to anyone about how stressed you're feeling?",
      followUp: {
        hinglish: "Apni feelings share karna theek hai. Aap apne dost ya kisi ko baat karne ke liye consider karte hain?",
        english: "It's okay to share your feelings. Do you have a friend or someone you trust that you can talk to?"
      }
    },
    "i guess i could talk to my friend, but i don’t know if they’d understand": {
      hinglish: "Samjhna mushkil ho sakta hai, lekin shayad chhoti baat se shuru karna madadgar ho sakta hai. Aap kya sochte hain?",
      english: "It can be hard, but maybe starting small, like sharing one aspect of your stress, could help. What do you think?",
      followUp: {
        hinglish: "Agar unhe solution nahi mile, tab bhi aapko halka mehsoos ho sakta hai. Kya aapne kabhi kisi ko vent kar ke accha mehsoos kiya hai?",
        english: "Even if they don’t have a solution, it might help to just talk. Have you felt better after venting to someone before?"
      }
    },
    "yeah, i guess it helps a bit": {
      hinglish: "Ye acchi baat hai. Chhote steps lena zaroori hai. Kya aapne painting ko dobara shuru karne ka socha hai?",
      english: "That’s great. Taking small steps is important. Have you thought about starting painting again?",
      followUp: {
        hinglish: "Chahe thodi der ke liye, painting se aapko farak mehsoos ho sakta hai. Kya aap guilt mehsoos kar rahe hain khud ke liye waqt lene mein?",
        english: "Even for a short while, painting could make a difference. Do you feel guilty about taking time for yourself?"
      }
    },
    "i feel guilty taking time for myself": {
      hinglish: "Ye normal hai, lekin self-care bahut zaroori hota hai. Agar aap apne liye kuch karte hain, toh aap zyada recharge mehsoos karte hain aur productive hote hain.",
      english: "It's normal, but self-care is very important. Taking time for yourself can actually help you recharge and be more productive.",
      followUp: {
        hinglish: "Shayad weekend par painting try karna accha idea ho. Aap is baare mein kya soch rahe hain?",
        english: "Maybe trying to paint again this weekend could be a good idea. How do you feel about that?"
      }
    },
    "maybe i should try painting again this weekend": {
      hinglish: "Ye ek accha idea lag raha hai! Thoda waqt apne liye nikalne se kaafi fark pad sakta hai. Aapko kaisa mehsoos ho raha hai?",
      english: "That sounds like a great idea! Taking some time for yourself could make a big difference. How do you feel about that?",
      followUp: {
        hinglish: "Dheere dheere chalein, ek step ek waqt par. Aap ye zaroor kar sakte hain!",
        english: "Take it one step at a time, and go slowly. You can definitely do this!"
      }
    }
  };

  // Function to get the chatbot's hardcoded response based on input
  const getHardcodedResponse = (input) => {
    const lowerInput = input.toLowerCase();
    for (const prompt in hardcodedResponses) {
      if (lowerInput.includes(prompt)) {
        return language === 'hinglish' ? hardcodedResponses[prompt].hinglish : hardcodedResponses[prompt].english;
      }
    }
    return language === 'hinglish'
      ? "Mujhe aapka message samajh nahi aaya, lekin main yahan hoon agar aap kuch aur puchna chahte hain."
      : "I didn't quite understand, but I'm here if you'd like to ask something else.";
  };

  // Handle user input and chatbot response
  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    setInput('');
    setLoading(true); // Show loader

    // Simulate a delay for bot response
    setTimeout(() => {
      const botResponse = getHardcodedResponse(input);

      const botMessage = { sender: 'bot', text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setLoading(false); // Hide loader
    }, 1000); // Simulated delay for bot response
  };

  // Handle language selection
  const handleLanguageSelection = (lang) => {
    setLanguage(lang);
    setIsLanguageSelected(true);
  };

  // Toggle chatbot minimize state
  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <div className="chatbot-container">
  <div className="p-6 bg-red-500 backdrop-blur-md rounded-lg shadow-md max-w-md mx-auto">
    <button
      onClick={toggleMinimize}
      className="mb-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-sm transition-colors duration-200 flex items-center gap-2"
    >
      {isMinimized ? 'Open Chatbot' : 'Minimize Chatbot '}
      {!isMinimized && (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      )}
    </button>
    {!isMinimized && (
      <>
        {!isLanguageSelected ? (
          <div className="flex flex-col items-center ">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Language</h2>
            <button
              onClick={() => handleLanguageSelection('english')}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md mb-3 transition-colors duration-200"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelection('hinglish')}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
            >
              Hinglish
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chatbot</h2>
            <div className="border border-gray-300 bg-white p-4 h-64 rounded-md overflow-y-auto shadow-inner">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${
                    message.sender === 'bot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              {loading && <div className="text-center text-gray-500">Loading...</div>}
            </div>
            <div className="flex mt-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
              />
              <button
                onClick={handleSend}
                className="ml-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-md transition-colors duration-200"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </>
    )}
  </div>
</div>
  );
};

export default Chatbot;
