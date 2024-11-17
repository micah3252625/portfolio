export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Premiere Telekkom - DITO API Portal",
    desc: "An API platform developed to manage transactions and reloader company registrations, using DITO API for load transactions.",
    subdesc:
      "Developed with PHP, MySQL, and Bootstrap, this platform enables API-based load management and registration features.",
    href: "https://pt.zambo.tech/",
    texture: "/textures/project/project-pt.mp4",
    logo: "/assets/ptlogo.png",
    logoStyle: {
      backgroundColor: "#ffffff",
      border: "0.2px solid #ffffff",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "PHP",
        path: "/assets/php.svg",
      },
      {
        id: 2,
        name: "JQuery",
        path: "/assets/jquery.png",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "assets/bootstrap.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
    ],
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my software development skills and projects.",
    subdesc:
      "Built using React.js for dynamic UI, Three.js for 3D rendering, and Tailwind CSS for a responsive design, this portfolio demonstrates my development experience and projects.",
    href: "https://micahmustaham.netlify.app/",
    texture: "/textures/project/project-portfolio.mp4",
    logo: "/assets/logo.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Email JS",
        path: "/assets/emailjs.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Three.js",
        path: "/assets/threejs.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-22, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
    gitHubLogoPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -11, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Zamboanga City Medical Center",
    pos: "Back-end Developer",
    duration: "Jun 2024 - Present",
    title:
      "Lead back-end development for hospital systems, specializing in API creation and optimization using Laravel. Integrated PNPKI for secure digital signatures, enhancing system security. Collaborated with cross-functional teams to streamline workflows across departments and ensured system stability.",
    icon: "/assets/laravel.svg",
    animation: "victory", // Retain or replace with a fitting animation
  },
  {
    id: 2,
    name: "Ateneo de Zamboanga University",
    pos: "System Developer",
    duration: "Jan 2023 - Jun 2024",
    title:
      "Maintained and upgraded legacy systems, focusing on performance improvements using PHP, MySQL, and VB6. Developed and optimized full-stack web applications, including the University Portal and Procurement System, ensuring seamless data handling and system reliability for users.",
    icon: "/assets/php.svg",
    animation: "clapping", // Retain or replace with a fitting animation
  },
  {
    id: 3,
    name: "Ateneo de Zamboanga University",
    pos: "College Professor (Part-time)",
    duration: "Aug 2023 - Present",
    title:
      "Teach core computer science subjects, including programming fundamentals, algorithm analysis, and object-oriented programming. Provide practical, hands-on experience with languages such as C++ and Python, preparing students for real-world software development challenges.",
    icon: "/assets/adzu.svg",
    animation: "salute", // Retain or replace with a fitting animation
  },
  {
    id: 4,
    name: "Freelance Developer (Fiverr)",
    pos: "Freelance Developer",
    duration: "Jan 2023 - Jun 2024",
    title:
      "Developed diverse projects including C++ algorithms, Django-based e-commerce sites, and Laravel web applications. Delivered responsive, user-friendly portfolio websites for global clients. Specialized in debugging and enhancing applications to meet client-specific needs efficiently.",
    icon: "/assets/fiverr.svg",
    animation: "idle", // Retain or replace with a fitting animation
  },
  {
    id: 5,
    name: "Symph",
    pos: "Development Intern",
    duration: "Apr 2021 - Jun 2021",
    title:
      "Contributed to the development of client websites using React and Node.js. Improved user interfaces and resolved bugs to enhance overall site functionality. Gained experience in working with modern JavaScript frameworks and streamlined deployment processes.",
    icon: "/assets/symph.png", // Replace with a React icon or any appropriate icon
    animation: "clapping", // Retain or replace with a fitting animation
  },
];
