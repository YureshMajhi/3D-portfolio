const words = [
  { text: "Ideas", imgPath: "/images/idea.png" },
  { text: "Concepts", imgPath: "/images/concept.png" },
  { text: "Designs", imgPath: "/images/design.png" },
  { text: "Code", imgPath: "/images/code.png" },
  { text: "Ideas", imgPath: "/images/idea.png" },
  { text: "Concepts", imgPath: "/images/concept.png" },
  { text: "Designs", imgPath: "/images/design.png" },
  { text: "Code", imgPath: "/images/code.png" },
];
const counterItems = [
  { value: 1, suffix: "+", label: "Years of Practical Experience" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 2, suffix: "", label: "Company Worked With (Paisa Experience Pvt. Ltd.)" },
  { value: 100, suffix: "%", label: "Commitment to Learning & Growth" },
];

const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const logoIconsList = [
  {
    imgPath: "/images/Yuresh.png",
    name: "logo1",
  },
  {
    imgPath: "/images/express-logo-name.png",
    name: "logo2",
  },
  {
    imgPath: "/images/firebase-logo-name.png",
    name: "logo13",
  },
  {
    imgPath: "/images/material-logo-name.png",
    name: "logo3",
  },
  {
    imgPath: "/images/gsap-logo-name.png",
    name: "logo14",
  },
  {
    imgPath: "/images/mongodb-logo-name.png",
    name: "logo4",
  },
  {
    imgPath: "/images/next-logo-name.png",
    name: "logo5",
  },
  {
    imgPath: "/images/node-logo-name.png",
    name: "logo6",
  },
  {
    imgPath: "/images/react-logo-name.png",
    name: "logo7",
  },

  {
    imgPath: "/images/three-js-name.png",
    name: "logo15",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo8",
  },
  {
    imgPath: "/images/express-logo-name.png",
    name: "logo9",
  },
  {
    imgPath: "/images/firebase-logo-name.png",
    name: "logo12",
  },
  {
    imgPath: "/images/material-logo-name.png",
    name: "logo10",
  },
  {
    imgPath: "/images/gsap-logo-name.png",
    name: "logo12",
  },
  {
    imgPath: "/images/mongodb-logo-name.png",
    name: "logo11",
  },

  {
    imgPath: "/images/three-js-name.png",
    name: "logo16",
  },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Full-Stack Expertise",
    desc: "Building efficient and scalable solutions across frontend and backend using React, Node.js, and MongoDB.",
  },
  {
    imgPath: "/images/innovation.png",
    title: "Adaptability",
    desc: "Quickly adapting to new technologies and diverse codebases to deliver effective results.",
  },
  {
    imgPath: "/images/performance.png",
    title: "Clean & Responsive UI",
    desc: "Designing responsive, user-friendly web apps using Material UI, Redux, and Tailwind CSS.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Completing tasks and projects efficiently without compromising on quality.",
  },
];

const expCards = [
  {
    review:
      "Yuresh quickly picked up new skills during his internship and showed strong problem-solving abilities. He adapted well to the team and contributed to real-world projects.",
    imgPath: "/images/intern.png",
    logoPath: "/images/internlogo.png",
    title: "Frontend Engineer",
    date: "Jan 2025 - Mar 2025",
    responsibilities: [
      "Built a Material UI library with 20+ components, ensuring design consistency and reducing bugs.",
      "Architected real-time data sync using Socket.io and Redux Toolkit for dashboard views.",
      "Implemented RTK Query for automated caching, cutting down unnecessary API calls.",
    ],
  },
  {
    review:
      "As a Frontend Developer at Paisa, Yuresh delivered clean, responsive, and efficient web applications. His ability to adapt to large codebases made him a valuable contributor.",
    imgPath: "/images/frontend.png",
    logoPath: "/images/paisa.png",
    title: "Software Performance Specialist",
    date: "Mar 2025 - Present",
    responsibilities: [
      "Migrated legacy CRA projects to Vite, cutting dev server start times from 40s to 3s.",
      "Boosted frame rates and reduced DOM load by 60% via Virtualization and Intersection Observer.",
      "Optimized Core Web Vitals and LCP using React.lazy and dynamic code splitting.",
      "Eliminated dead code and unused dependencies to significantly shrink bundle sizes.",
    ],
  },
  {
    review:
      "Yuresh took ownership of both frontend and backend tasks, demonstrating his full-stack capabilities. His solutions added significant value to ongoing projects.",
    imgPath: "/images/fullstack.png",
    logoPath: "/images/paisa.png",
    title: "Full Stack Systems Developer",
    date: "July 2025 - Present",
    responsibilities: [
      "Integrated Google Maps API for live rider tracking and manual location syncing.",
      "Developed end-to-end Node.js/MongoDB APIs for order status and notification systems.",
      "Designed database schemas for real-time location updates and secure authentication.",
      "Performed deep manual testing to ensure app stability after major architectural shifts.",
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Github",
    modelPath: "/models/github.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
];

const testimonials = [
  {
    name: "Omkar Shrestha",
    mentions: "@omkarshrestha",
    review:
      "Yuresh has been a wonderful asset for us. Rapid learning, adaptability towards challenges, and outcomes have impressed us all. Professionalism and dedication are always reflected by him.",
    imgPath: "/images/omkar.jpeg",
  },
  {
    name: "Bijay Ghimire",
    mentions: "@bijayghimire",
    review:
      "I was able to personally work with Yuresh, and I can truly report that he has very good technical expertise and a problem-solving attitude. He also adapts well to a new code base and consistently produces quality output.",
    imgPath: "/images/bijay.jpeg",
  },
  {
    name: "Arbin Khadka",
    mentions: "@arbinkhadka",
    review:
      "The collaboration was smooth with Yuresh. He gave us customized solutions and was always there ready for any kind of feedback. His knowledge of frontend and backend enabled him to deliver a successful project.",
    imgPath: "/images/arbin.jpeg",
  },
];

const socialImgs = [
  {
    name: "facebook",
    imgPath: "/images/facebook.png",
    url: "https://www.facebook.com/Yurush.myo",
  },
  {
    name: "instagram",
    imgPath: "/images/instagram.png",
    url: "/",
  },
  {
    name: "twitter",
    imgPath: "/images/twitter.png",
    url: "/",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/yuresh-majhi-9206b61a1/",
  },
];

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  abilities,
  expCards,
  techStackIcons,
  testimonials,
  socialImgs,
};
