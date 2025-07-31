/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arbaz Ahmad",
  title: "Hi all, I'm Arbaz Ahmad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12D_N9cAB1WsLNNaHlgjIAwwl1LOM_N9j/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Arbaz-Ahmad95",
  linkedin: "https://www.linkedin.com/in/arbazahmad95/",
  gmail: "arbazahmad3211@gmail.com",
  
  facebook: "https://www.facebook.com/arbaz.ahmad.779857/",
  
  Leetcode: "https://leetcode.com/u/arbaz121/",
  GFG:"https://www.geeksforgeeks.org/user/arbaz121/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Talwind CSS",
       fontAwesomeClassname: "fas fa-wind"

    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Nextjs",
     fontAwesomeClassname: "fas fa-code"

    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
  skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"

    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-seedling"

    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RGPV University",
      logo: require("./assets/images/RGPV_logo.png"),
      subHeader: " Bachelor of Computer Science ",
      duration: "June 2023 - May 2026",
      desc: "Pursuing B.Tech in Computer Science (expected graduation: 2026). Working on MERN stack projects, participated in hackathons, internships, and team projects. Also learning machine learning basics",
      
    },
    {
      schoolName: "Maulana Azad National Urdu University Hyderabad",
      logo: require("./assets/images/Manuu=logo.png"),
      subHeader: "Diploma in Computer Science",
      duration: "September 2020 - April 2023",
      desc: "Completed Diploma in Computer Science. Built MERN stack projects, joined hackathons, internships, and started learning ML Took courses about Software Engineering, Web Security, Operating Systems, ...",
     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "ZIDIO Development",
      companylogo: require("./assets/images/zidio-logo.png"),
      date: "June 2025 – Present",
      desc: `Worked on frontend using React.js and JavaScript.
            Built backend using Node.js and Express.js.
            Connected frontend and backend with APIs.
            Used MongoDB to store and manage data.
            Improved UI design and made it mobile responsive.

`,
      
    },
    {
      role: "Front-End Developer",
      company: "BlueStock",
      companylogo: require("./assets/images/logo-bluestcock.webp"),
      date: "April 2025 – june 2025",
      desc: `Developed and maintained scalable frontend features using React.js and JavaScript.
        Collaborated with cross-functional teams to design and implement responsive user interfaces.
         Worked on integrating APIs and enhancing user experience for web applications.`
    },
    {
      role: "Front-End Developer",
      company: "Swecha",
      companylogo: require("./assets/images/swechaa.jpeg"),
      date: "Aug 2021 – Sep 2021",
      desc: `Created an interactive learn to code web platform using simple UI
            Designed accessible website sections using HTML, CSS, JavaScript, and React.js, improving user experience.`
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [

    {
      image: require("./assets/images/faiz-hos.png"),
      projectName:"Faiz Hospital – AI-Powered Healthcare Web App",
      projectDesc: "Developed a full-stack hospital web app using MERN stack integrated with Google Generative AI for chatbot, appointment booking, and symptom checking. Enabled real-time AI interactions to assist patients and automate support.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://faizcare.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Screenshot 2025-07-24 114051.png"),
      projectName:"NK & SONS - E-Commerce Website",
      projectDesc: "I created a project named NK & SONS.This is an eCommerce website.I made this project for my friend’s shop to help them sell products online.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nk-sons.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Screenshot 2024-09-04 123236.png"),
      projectName: "Video Call Website",
      projectDesc: "A real-time video calling platform allowing users to connect instantly..",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://arbaz-ahmad95.github.io/video-call-website/"
        }
      ]
    },


    {
      image: require("./assets/images/Screenshot 2024-06-02 003458.png"),
      projectName: "Restursnt Website",
      projectDesc: "A fully functional resturant website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://arbaz-ahmad95.github.io/Food_-Application/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "LeetCode 100 Days Coding Challenge",
      subtitle:
        "Solved 200+ LeetCode problems across arrays, strings, trees & more.",
      image: require("./assets/images/Screenshot 2025-07-23 112141.png"),
      imageAlt: "100 Days-Batch",
      footerLink: [
        {
          name: "Visit LeetCode Profile",
          url: "https://leetcode.com/u/arbaz121/"
        },
       
      ]
    },
    {
      title: "Data analytics (Deloitte) ",
      subtitle:
        "I’ve completed the Data Analytics Virtual Job Simulation with hashtag#Deloitte and earned a Certificate of Completion!",
      image: require("./assets/images/WhatsApp Image 2025-07-24 at 11.49.31_95f06b51.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Introduction to Generative Al with Google Cloud",
      subtitle: "I’ve completed the Introduction to Generative AI with Google Cloud and earned a Certificate of Completion!",
      image: require("./assets/images/WhatsApp Image 2025-07-24 at 11.53.56_f3c87561.jpg"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Certificate",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};





// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9525703538",
  email_address: "arbazahmad3611@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  
 
 
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
