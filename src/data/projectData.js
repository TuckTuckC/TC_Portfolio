// src/data/projectsData.js

const projects = [
    {
      id: 1,
      name: "Memora",
      description: "Memora is a note-taking app designed for forgetful people who need help remembering important information. With built-in reminders and an intuitive interface, Memora makes it easy to capture and organize your thoughts, ideas, to-do lists, tasks, and events.",
      technologies: ['Svelte', 'Firebase', 'Firestore', 'Tailwind', 'Flowbite', 'JavaScript'],
      image: require('../images/MemoraDetails.jpg'), // Assuming Create React App's handling of static assets
      deployedUrl: "https://memora-jeffli117.vercel.app",
      sourceCodeUrl: "https://github.com/TuckTuckC/Memora"
    },
    {
      id: 2,
      name: "Phone Store",
      description: "Experience the best shopping expereice with a wide selection of phones to choose from, including SMASHED phones! To LOGIN use credentials EMAIL: sb-irt2k8927479@personal.example.com PASSWORD: 7giBD_i^",
      technologies: ['React', 'Bootstrap', 'Styled Components', 'Context API', 'PayPal API'],
      image: require('../images/PhoneStore.jpg'), // Assuming Create React App's handling of static assets
      deployedUrl: "https://tucker-craig-phone-store.netlify.app/",
      sourceCodeUrl: "https://github.com/TuckTuckC/phone-store"
    },
    {
      id: 3,
      name: "Typing Game",
      description: "Think you can type fast?? This app will push you to your limits. You will see a new random word after each one you finish typing, get as many words correct as possible in a set amount of time. You can see how many you got correct and incorrect at the end of the time to benchmark yourself!",
      technologies: ['React'],
      image: require('../images/TypingGame.jpg'), // Assuming Create React App's handling of static assets
      deployedUrl: "https://typing-game.tuckermcraig.com/",
      sourceCodeUrl: "https://github.com/TuckTuckC/typing-game"
    },
    {
      id: 4,
      name: "Easy Message",
      description: "Easy Message makes it easy to chat with anyone worldwide with the click of a button! All you have to do it type in your name and get to chatting!",
      technologies: ['React', 'Firebase'],
      image: require('../images/EasyMessage.jpg'), // Assuming Create React App's handling of static assets
      deployedUrl: "https://messaging-4849d.web.app/",
      sourceCodeUrl: "https://github.com/TuckTuckC/messaging-app"
    },
    // Add more projects here
  ];
  
  export default projects;
  