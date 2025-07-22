import emoji from "react-easy-emoji";
import {
  EducationType,
  QuotesType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  AchievementsType,
  ExecutiveExperiencesType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Andika snm",
  title: "Hi, I'm Andika Supriyadi Nur Maulana",
  description:
    "A Full-Stack Developer and Project Manager with strong expertise in both front-end and backend technologies. Skilled in leading projects end-to-end, ensuring quality, efficiency, and time delivery. Adept at public communication, with fluent English proficiency for effective collaboration across diverse teams and stakeholders.",
  resumeLink: "https://drive.google.com/file/d/1b3zd8QTP5yro05u83MNZEYgnRW68zbcA/view?usp=drive_link",
};

export const quotes: QuotesType = {
  quote: "Like Kim Dokja, I walk ahead of the script, unseen, unchosen, yet followed by constellations who wager on the unwritten scenarios",
  name: "Andika Supriyadi Nur Maulana",
  title: "Full-Stack Developer & Project Manager",
  img: "https://ik.imagekit.io/tdqizhhci/foto%20andika%20yb.jpg?updatedAt=1751735087750",
}

export const openSource = {
  githubUserName: "ArvinoDel",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:andikasupriyadinurmaulana@gmail.com",
  linkedin: "https://www.linkedin.com/in/andika-supriyadi-nur-maulana/",
  github: "https://github.com/ArvinoDel",
  instagram: "https://www.instagram.com/itsmedikaa_",
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://x.com/Dikaa_49/',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "AGILE FULL STACK DEVELOPER WITH A DESIGNER'S EYE AND A STRATEGIST'S MIND",
  data: [
    {
      title: "Full Stack Development & Project Management",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Crafting responsive and dynamic user interfaces with React.js"),
        emoji("⚡ Architecting scalable APIs and backend logic using Laravel 12"),
        emoji("⚡ Designing sleek, mobile-first layouts with Tailwind CSS"),
        emoji("⚡ Leading Agile sprints, stakeholder meetings, and release planning"),
        emoji("⚡ Managing source control and CI/CD pipelines with GitHub and Vite"),
      ],
      softwareSkills: [
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "React.js",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "Vite",
          iconifyTag: "logos:vitejs",
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "Postman",
          iconifyTag: "logos:postman-icon",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};


export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Project Management", //Insert stack or technology you have experience in
    progressPercentage: "100", //Insert relative proficiency in percentage
  },
  {
    Stack: "Frontend / Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "85",
  },
  {
    Stack: "Presentation & Communication",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "State Vocational High School 1 Cirebon",
    img: "https://smkn1-cirebon.sch.id/website_neper_laravel/public/logo-neper.png",
    link: "https://pplg-smkn1cirebon.sch.id/",
    subHeader: "Software Engineering",
    duration: "May 2022 - May 2025",
    desc: "Graduated from State Vocational High School 1 Cirebon in Software Engineering, with hands-on experience in programming, databases, and web/mobile app development.",
    grade: "Scores: 88.37",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Project Manager",
    company: "PT Grage Media Technology",
    companyLogo: "https://media.licdn.com/dms/image/v2/C560BAQGBCV5LuLQkKg/company-logo_200_200/company-logo_200_200/0/1674809054642?e=1756944000&v=beta&t=gMBsZ1BY7iLZdV8vnqGVppMy6Gy-jouFSWZP95KO80g",
    date: "Jul 2024 - Dec 2024",
    desc: "Spearheaded the Pandai Digital project by orchestrating cross-functional collaboration, managing stakeholder communication, and aligning delivery with client expectations. Ensured project success by leading Agile ceremonies, mitigating scope creep, and implementing strategic feature prioritization. Delivered impactful milestones on time while fostering synergy between frontend, backend, and business teams.",
  },
  {
    role: "Full-Stack Developer",
    company: "PT Grage Media Technology",
    companyLogo: "https://media.licdn.com/dms/image/v2/C560BAQGBCV5LuLQkKg/company-logo_200_200/company-logo_200_200/0/1674809054642?e=1756944000&v=beta&t=gMBsZ1BY7iLZdV8vnqGVppMy6Gy-jouFSWZP95KO80g",
    date: "Jul 2024 - Dec 2024",
    desc: "Built dynamic and scalable web solutions using Laravel, React, and Tailwind CSS for the Pandai Digital platform. Engineered secure RESTful APIs, optimized MySQL queries, and implemented responsive UIs. Managed deployment pipelines using shared hosting tools and Git-based workflows. Acted as the bridge between development and design, ensuring technical feasibility and visual excellence.",
  },
];


export const projects: ProjectType[] = [
  {
    name: "Pandai Digital",
    img: "https://ik.imagekit.io/tdqizhhci/logo_web.png?updatedAt=1751533310399",
    tech: ["Laravel", "Tailwind CSS"],
    desc:
      "A comprehensive learning management system built for educators and digital bootcamp providers. Developed using Laravel 11 and Tailwind CSS, Pandai Digital streamlines course creation, participant management, and online learning experiences with modern UI and robust backend support.",
    link: "https://pandaidigital.id",
    preview: "https://ik.imagekit.io/tdqizhhci/Screenshot%202025-07-04%20191359.png?updatedAt=1751631269197",
  },
  {
    name: "TerasKBK",
    img: "https://ik.imagekit.io/tdqizhhci/logo-removebg-preview.png?updatedAt=1751533310391",
    tech: ["Laravel", "Tailwind CSS"],
    desc:
      "A local e-commerce platform that empowers creators to publish, promote, and monetize digital audio content. With seamless digital payments, TerasKBK supports fast and secure transactions, bringing local commerce and creative economy into the frontier.",
    link: "https://github.com/gragemediatechnology/keyFood",
    preview: "https://ik.imagekit.io/tdqizhhci/Screenshot%202025-07-04%20195307.png?updatedAt=1751633593701",
  },
  {
    name: "SMK1Presence",
    img: "https://ik.imagekit.io/tdqizhhci/logo-ct-dark.png?updatedAt=1751532959330",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    desc:
      "A digital presence and attendance management system built for vocational schools. SMK1Presence leverages Next.js and modern web technologies to simplify student tracking and administrative workflows, tailored specifically for the Indonesian education landscape.",
    link: "https://github.com/ArvinoDel/SMK1Presence",
    preview: "https://ik.imagekit.io/tdqizhhci/Screenshot%202025-07-04%20201831.png?updatedAt=1751635121295",
  },
  {
    name: "Djajanan",
    img: "https://media.licdn.com/dms/image/v2/C560BAQGBCV5LuLQkKg/company-logo_200_200/company-logo_200_200/0/1674809054642?e=1756944000&v=beta&t=gMBsZ1BY7iLZdV8vnqGVppMy6Gy-jouFSWZP95KO80g",
    tech: ["Laravel", "Tailwind CSS"],
    desc:
      "An e-commerce platform for local snacks and products, blending modern shopping experiences with digital payments. Djajanan offers a secure, user-friendly interface for both buyers and sellers in the digital marketplace.",
    link: "https://github.com/PT-Grage-Media-Technology/djajanan",
    preview: "https://ik.imagekit.io/tdqizhhci/Screenshot%202025-07-04%20195449.png?updatedAt=1751633674564",
  },
];


export const feedbacks: FeedbackType[] = [
  {
    name: "Rendi Ramadhan",
    role: "Senior Programmer at Grage Media Technology",
    feedback:
      "Andika embodies the rare harmony of precision and passion. His technical intuition is backed by a mastery of modern frameworks, from Laravel to React, resulting in solutions that are not only functional but future-proof. In our time working together, he consistently demonstrated the ability to decode complexity into clean, scalable architecture. One of his most impressive feats was accelerating our project lifecycle by 30% without compromising code quality. Truly, a Senior-level talent who thinks like a systems architect but moves like an agile craftsman. Any engineering squad would be lucky to have him steering the helm.",
  },
  {
    name: "Calista Yudhistira",
    role: "CEO at Grage Media Technology",
    feedback:
      "In a world overflowing with digital noise, Andika builds platforms that speak. His involvement in our rebranding initiative was nothing short of transformational. Not only did he restructure our digital ecosystem with elegance, but he also aligned our tech infrastructure with the soul of our brand. He was both visionary and pragmatic, blending corporate objectives with seamless user journeys. His leadership inspired our team, his delivery exceeded expectations, and his professionalism set a new internal benchmark. I’ve worked with many developers, but few possess Andika’s caliber of insight, execution, and empathy. He doesn't just code, he curates digital excellence.",
  },
  {
    name: "Sabiq Sabirullah",
    role: "Product Strategist",
    feedback:
      "As a client, I had high expectations, and Andika exceeded every single one. From the very first kickoff call to post-launch refinement, his professionalism, communication, and technical expertise stood out. He transformed our product vision into a dynamic, scalable web platform, all while maintaining crystal-clear transparency throughout the development cycle. Despite shifting requirements and tight timelines, Andika remained composed and solution-oriented, always proposing smart, sustainable approaches. What impressed me most was his rare ability to translate business goals into technical execution without losing sight of user experience."
  },
];

export const achievements: AchievementsType[] = [
  {
    title: "TOEIC Listening & Reading Certificate",
    issuer: "ETS Educational Testing Service, Inc.",
    credentials: "1738921",
    description: "Achieved a TOEIC score of 815, demonstrating strong proficiency in English for professional and business communication. Skilled in understanding spoken and written English in workplace contexts, effective communication in international environments, and professional correspondence.",
    tags: ["TOEIC", "English Proficiency", "C2 Level"],
    link: "https://drive.google.com/file/d/11v5hxEz5fVte0gK0u6AI3q2TcrhG0-NH/view?usp=sharing",
    scores: "815",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*WzmsmHBf7l0T0DBTtmsUqQ.png",
    date: "November 2024",
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    credentials: "CEEC3EB99457ECA2",
    description: "Achieved the Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900) certification in 2024, validating a solid foundation in enterprise security, compliance, and identity concepts within Microsoft environments. Skilled in understanding and applying key principles such as Zero Trust, access management, threat protection, and regulatory compliance across Microsoft Azure and Microsoft 365 platforms. Demonstrates capability in supporting organizational security strategies and navigating cloud-based governance in modern digital infrastructures.",
    tags: ["Cybersecurity", "Microsoft Azure", "SC-900"],
    link: "https://drive.google.com/file/d/1nBtHozS5cJqo5WI783AqJ_WYkUo9iETy/view?usp=sharing",
    scores: "980",
    img: "https://media.licdn.com/dms/image/v2/D5612AQHkhBzht3-ziw/article-cover_image-shrink_600_2000/B56ZV0YwQWHsAU-/0/1741414402092?e=2147483647&v=beta&t=UQfk5K3zHLAN_jVXcH-QpIhgvVRFPYKOn416VzpDdi4",
    date: "October 2024",
  },
];

export const executiveexperiences: ExecutiveExperiencesType[] = [
  {
    title: "President of Nesco",
    organization: "SMKN 1 Cirebon",
    timeframe: "2023 – 2024",
    description:
      "Spearheaded initiatives to enhance English proficiency across the student body, fostering cross-cultural communication and leadership through debate forums and international speaking simulations.",
    location: "Cirebon, Indonesia",
    icon: "https://ik.imagekit.io/tdqizhhci/nesco-removebg-preview.png",
    color: "#3b82f6"
  },
  {
    title: "Co-Founder of Mathematics Club",
    organization: "SMKN 1 Cirebon",
    timeframe: "2023 – 2024",
    description:
      "Spearheaded the foundational framework of the Mathematics Club, co-designing engaging problem-solving sessions while fostering a collaborative culture of analytical thinking and academic growth.",
    location: "Cirebon, Indonesia",
    icon: "https://ik.imagekit.io/tdqizhhci/logo-ct-dark.png",
    color: "#f51b0bff"
  },
  {
    title: "Student Council Member (MPK)",
    organization: "SMKN 1 Cirebon",
    timeframe: "2023 – 2024",
    description:
      "Collaborated with faculty and student leadership to streamline student governance, advocating for educational and extracurricular excellence.",
    location: "Cirebon, Indonesia",
    icon: "https://ik.imagekit.io/tdqizhhci/mpksmkn-removebg-preview.png",
    color: "#f59e0b"
  },
  {
    title: "Zero Waste Lifestyle Ambassador",
    organization: "SMKN 1 Cirebon",
    timeframe: "2022 – 2023",
    description:
      "Advocated for sustainable living through school-wide zero waste initiatives, led awareness campaigns, and collaborated with environmental groups to promote responsible consumption and ecological mindfulness among students.",
    location: "Cirebon, Indonesia",
    icon: "https://ik.imagekit.io/tdqizhhci/logo-ct-dark.png",
    color: "#04a818ff"
  },
  {
    title: "Student Council Member (OSIS)",
    organization: "SMPN 2 Plered",
    timeframe: "2021 – 2022",
    description:
      "Actively engaged in planning and executing student events, championing a culture of inclusivity and student engagement at the junior high level.",
    location: "Cirebon, Indonesia",
    icon: "https://ik.imagekit.io/tdqizhhci/smpn.png",
    color: "#10b981"
  }
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Portfolio of Andika Supriyadi Nur Maulana",
  description: greetings.description,
  author: "Andika Supriyadi Nur Maulana",
  image: "https://avatars.githubusercontent.com/u/133538317?v=4",
  url: "https://www.andikasnm.my.id/",
  keywords: [
    "Andika",
    "Andika Supriyadi Nur Maulana",
    "@itsmedikaa_",
    "Andika Portfolio",
    "Portfolio",
    "Andika SNM",
    "Andika SNM Portfolio",
  ],
};
