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
  { value: 6, suffix: "+", label: "Months of Practical Experience" },
  { value: 8, suffix: "+", label: "Completed Projects" },
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
    imgPath: "/images/Yuresh.png",
    name: "logo2",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo3",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo4",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo5",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo6",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo7",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo8",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo9",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo10",
  },
  {
    imgPath: "/images/Yuresh.png",
    name: "logo11",
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
    title: "Software Development Intern",
    date: "Jan 2025 - Mar 2025",
    responsibilities: [
      "Assisted in building frontend components using React and Material UI.",
      "Learned and applied Git/GitHub for version control in collaborative projects.",
      "Gained hands-on experience with basic backend logic using Node.js.",
    ],
  },
  {
    review:
      "As a Frontend Developer at Paisa, Yuresh delivered clean, responsive, and efficient web applications. His ability to adapt to large codebases made him a valuable contributor.",
    imgPath: "/images/frontend.png",
    logoPath: "/images/paisa.png",
    title: "Frontend Developer",
    date: "Mar 2025 - Present",
    responsibilities: [
      "Developed menu themes with Material UI and Redux Toolkit integrated into billing systems.",
      "Enhanced mobile responsiveness across web apps for a seamless user experience.",
      "Migrated large-scale applications from CRA to Vite, improving performance and maintainability.",
    ],
  },
  {
    review:
      "Yuresh took ownership of both frontend and backend tasks, demonstrating his full-stack capabilities. His solutions added significant value to ongoing projects.",
    imgPath: "/images/fullstack.png",
    logoPath: "/images/paisa.png",
    title: "Full Stack Developer",
    date: "July 2025 - Present",
    responsibilities: [
      "Created an automated quotation system with backend implementation in Node.js and MongoDB.",
      "Wrote custom scripts to manage and manipulate MongoDB databases efficiently.",
      "Adapted quickly to diverse and complex codebases, contributing across the stack.",
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

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  abilities,
  expCards,
  techStackIcons,
};
