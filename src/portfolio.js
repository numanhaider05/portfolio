/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Kriptl from "../src/assets/images/Kriptl.png";
import Artstory from "../src/assets/images/artstory.png";

import SocialTagWriter from "../src/assets/images/socialtag.png";
import Udda from "../src/assets/images/udda.png";
import CommunityBond from "../src/assets/images/bond.png";
import Nurflix from "../src/assets/images/nurflix.png";
import BigAir from "../src/assets/images/bigair.png";
import Movement from "../src/assets/images/movement.png";
import Marbles from "../src/assets/images/MarblesCBT.webp";
import WrestletalkMagazine from "../src/assets/images/WrestletalkMagazine.webp";
import GotOne from "../src/assets/images/GotOne.jpg";
import PublicaAssisstenza from "../src/assets/images/PubblicaAssistenzaCrevalcore.webp";
import Chetibra from "../src/assets/images/Chetibra.webp";
import MiniFarms from "../src/assets/images/Minifarms.webp"; // For CBT
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
  username: "Numan Haider",
  title: "Hi all, I'm Numan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19ZnW7UsxJw5IjjJ1yYkuk33_DsbOgr5Q/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/numanhaider05",
  linkedin: "https://www.linkedin.com/in/numan-haider-338570166/",
  gmail: "numanhaider05@gmail.com",
  gitlab: "https://gitlab.com/numanhaider05",
  facebook: "https://www.facebook.com/jojorao",
  skype: "https://join.skype.com/invite/ouDPpCVhOEHt",
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
    emoji("⚡ Blockchain And NFTs Enthusiasts"),
    emoji(
      "⚡  Integration of third party services such as Firebase/ AWS / serverless/ DynamoDB / CloudFront/ AWS amplifier"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebaseswift",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development /Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Server handling",
      progressPercentage: "80%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  title: "Projects I worked on or made",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: Kriptl,
      projectName: "Kriptl",
      name: "Kriptl",
      projectDesc:
        "A Mobile Application for New way to share the Social media details and many more!",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.application.kriptl"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/kriptl/id1570810906"
        }
      ]
    },
    {
      image: Artstory,
      projectName: "ArtStory",
      projectDesc:
        "The Art Story is your guide to understanding and enjoying the best of the visual arts.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.theartstory"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/the-art-story/id1112423608"
        }
      ]
    },
    {
      image: SocialTagWriter,
      projectName: "Social Tag Writer",
      projectDesc:
        "Social Tag Writer is a companion app to our Social Tag Products",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.app.socialtagWriter"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/pk/app/social-tag-writer/id1527288226"
        }
      ]
    },
    {
      image: Udda,
      projectName: "UDDA Sportsbook & Games",
      projectDesc: "The #1 FREE-TO-PLAY Sportsbook & Gaming App.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.udda"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/udda-sports/id1484047531"
        }
      ]
    },
    {
      image: CommunityBond,
      projectName: "Community Bond",
      projectDesc:
        "Social Platform which gives Discounts on several activities!",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.startbonding"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/community-bond/id1489994731"
        }
      ]
    },
    {
      image: Nurflix,
      projectName: "Nurflix",
      projectDesc:
        "A premium Stream TV, Radio & Podcast Application for Islamic shows",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.app.nurflixtv&hl=en&gl=US"
        },
        {
          name: "App Store",
          url: "https://numanhaider05.github.io/portfolio/"
        }
      ]
    },
    {
      image: BigAir,
      projectName: "Big Air",
      projectDesc:
        "Application for the Tampoline Parks in US for rewards and coupons!",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.bigair"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/big-air/id1489358873?ign-mpt=uo%3D4"
        }
      ]
    },
    {
      image: Movement,
      projectName: "Movement Social",
      projectDesc:
        "The Social Platform for the people to get everything done under one App!",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.app.socialNetwork"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/the-movement-social/id1550149161"
        }
      ]
    },

    {
      image: WrestletalkMagazine,
      projectName: "Wrestletalk Magazine",
      projectDesc:
        "WrestleTalk Magazine turns the world’s top wrestling show and news site into a print edition, new talent, and updates on upcoming WWE matches.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.triactivemedia.fightingspiritmagazine&hl=en"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/wrestletalk-magazine/id406350122"
        }
      ]
    },
    {
      image: MiniFarms,
      projectName: "MiniFarms",
      projectDesc:
        "Minifarms connects communities to buy fresh local produce directly from farmers, modernizing the traditional food co-op model.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.fishvision.minifarms&hl=en"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/au/app/minifarms/id1566107935"
        }
      ]
    },
    {
      image: GotOne,
      projectName: "GotOne!",
      projectDesc:
        "GotOne! is a simple fishing log app that helps you improve your fishing skills through data insights while supporting research to protect fisheries.",

      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.gotone.media&hl=en"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/gotone/id6443849200"
        }
      ]
    },

    {
      image: Chetibra,
      projectName: "Chetibra",
      projectDesc:
        "Chetibra is the social network for cycling lovers, created by cyclists to connect enthusiasts, explore new itineraries and transform every ride into a unique adventure.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.chetibra.workout&hl=en"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/developer/chetibra-srl/id1759350431"
        }
      ]
    },
    {
      image: PublicaAssisstenza,
      projectName: "Pubblica Assistenza Crevalcore",
      projectDesc:
        "The official app for association members keeps you updated on early warnings and emergencies.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=avap.crevalcore&hl=it"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/it/app/pubblica-assistenza-crevalcore/id6612030217"
        }
      ]
    },
    {
      image: Marbles,
      projectName: " Marbles CBT",
      name: " Marbles CBT",
      projectDesc:
        "Marbles CBT is an easy-to-use app for learning and practicing tools from CBT therapy.",
      footerLink: [
        {
          name: "Google Playstore",
          url: "https://play.google.com/store/apps/details?id=com.omrisadeh.marblescbt&hl=en"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/marbles-cbt/id1527560798"
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Numanpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Numanpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Numan-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
    "Discuss a project or just want to say hi? My Inbox is open for all. Whatsapp/TeleGram",
  number: "+92-3454329844",
  email_address: "numanhaider05@gmail.com"
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
