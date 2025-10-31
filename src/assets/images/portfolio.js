/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
import Kriptl from "./assests/images/Kriptl.png";
import Artstory from "./assests/images/artstory.png";
import emoji from "react-easy-emoji";
import SocialTagWriter from "./assests/images/socialtag.png";
import Udda from "./assests/images/udda.png";
import CommunityBond from "./assests/images/bond.png";
import Nurflix from "./assests/images/nurflix.png";
import BigAir from "./assests/images/bigair.png";
import Movement from "./assests/images/movement.png";
const greeting = {
  /* Your Summary And Greeting Section */
  username: "Numan Haider",
  title: "Hi all, I'm Numan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19ZnW7UsxJw5IjjJ1yYkuk33_DsbOgr5Q/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/numanhaider05",
  linkedin: "https://www.linkedin.com/in/numan-haider-338570166/",
  gmail: "numanhaider05@gmail.com",
  gitlab: "https://gitlab.com/numanhaider05",
  facebook: "https://www.facebook.com/jojorao",
  skype: "https://join.skype.com/invite/ouDPpCVhOEHt",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Blockchain And NFTs Enthusiast"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / serverless/ DynamoDB / CloudFront/ AWS amplifier"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    {
      skillName: "firebaseswift",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "appstore",
      fontAwesomeClassname: "fab fa-app-store-ios",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development /Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Server handling", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken:
    "OGMyOGE1NmQ4MGI2MzBiZmUyMjBmNzM1NDJkNGRlNjBkZGE1YWQ0Yg==",
  githubUserName: "aghaaliabbas",
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects I worked on or made",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      icon: Kriptl,
      projectName: "Kriptl",
      name: "Kriptl",
      description:
        "A Mobile Application for New way to share the Social media details and many more!",
      webUrl: null,
      appStoreUrl: "https://apps.apple.com/us/app/kriptl/id1570810906",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.application.kriptl",
    },
    {
      icon: Artstory,
      name: "ArtStory",
      description:
        "The Art Story is your guide to understanding and enjoying the best of the visual arts.",
      appStoreUrl: "https://apps.apple.com/us/app/the-art-story/id1112423608",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.theartstory",
    },
    {
      icon: SocialTagWriter,
      name: "Social Tag Writer",
      description:
        "Social Tag Writer is a companion app to our Social Tag Products",
      appStoreUrl:
        "https://apps.apple.com/pk/app/social-tag-writer/id1527288226",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.socialtagWriter",
    },
    {
      icon: Udda,
      name: "UDDA Sportsbook & Games",
      description: "The #1 FREE-TO-PLAY Sportsbook & Gaming App.",
      appStoreUrl: "https://apps.apple.com/us/app/udda-sports/id1484047531",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.udda",
    },
    {
      icon: CommunityBond,
      name: "Community Bond",
      description:
        "Social Platform which gives Discounts on several activities!",

      appStoreUrl: "https://apps.apple.com/us/app/community-bond/id1489994731",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.startbonding",
    },
    {
      icon: Nurflix,
      name: "Nurflix",
      description:
        "A premium Stream TV, Radio & Podcast Application for Islamic shows",
      appStoreUrl: "https://numanhaider05.github.io/portfolio/",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.nurflixtv&hl=en&gl=US",
    },
    {
      icon: BigAir,
      name: "Big Air",
      description:
        "Application for the Tampoline Parks in US for rewards and coupons!",
      appStoreUrl:
        "https://apps.apple.com/us/app/big-air/id1489358873?ign-mpt=uo%3D4",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.bigair",
    },
    {
      icon: Movement,
      name: "Movement Social",
      description:
        "The Social Platform for the people to get everything done under one App!",
      appStoreUrl:
        "https://apps.apple.com/us/app/the-movement-social/id1550149161",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.socialNetwork",
    },
    {
      icon: Kriptl,
      projectName: "Kriptl",
      name: "Kriptl",
      description:
        "A Mobile Application for New way to share the Social media details and many more!",
      webUrl: null,
      appStoreUrl: "https://apps.apple.com/us/app/kriptl/id1570810906",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.application.kriptl",
    },
    {
      icon: Artstory,
      name: "ArtStory",
      description:
        "The Art Story is your guide to understanding and enjoying the best of the visual arts.",
      appStoreUrl: "https://apps.apple.com/us/app/the-art-story/id1112423608",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.theartstory",
    },
    {
      icon: SocialTagWriter,
      name: "Social Tag Writer",
      description:
        "Social Tag Writer is a companion app to our Social Tag Products",
      appStoreUrl:
        "https://apps.apple.com/pk/app/social-tag-writer/id1527288226",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.socialtagWriter",
    },
    {
      icon: Udda,
      name: "UDDA Sportsbook & Games",
      description: "The #1 FREE-TO-PLAY Sportsbook & Gaming App.",
      appStoreUrl: "https://apps.apple.com/us/app/udda-sports/id1484047531",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.udda",
    },
    {
      icon: CommunityBond,
      name: "Community Bond",
      description:
        "Social Platform which gives Discounts on several activities!",

      appStoreUrl: "https://apps.apple.com/us/app/community-bond/id1489994731",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.startbonding",
    },
    {
      icon: Nurflix,
      name: "Nurflix",
      description:
        "A premium Stream TV, Radio & Podcast Application for Islamic shows",
      appStoreUrl: "https://numanhaider05.github.io/portfolio/",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.nurflixtv&hl=en&gl=US",
    },
    {
      icon: BigAir,
      name: "Big Air",
      description:
        "Application for the Tampoline Parks in US for rewards and coupons!",
      appStoreUrl:
        "https://apps.apple.com/us/app/big-air/id1489358873?ign-mpt=uo%3D4",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.bigair",
    },
    {
      icon: Movement,
      name: "Movement Social",
      description:
        "The Social Platform for the people to get everything done under one App!",
      appStoreUrl:
        "https://apps.apple.com/us/app/the-movement-social/id1550149161",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.app.socialNetwork",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
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
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me  ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. Whatsapp/TeleGram",
  number: "+92-3454329844",
  email_address: "numanhaider05@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
