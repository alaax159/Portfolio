// ──────────────────────────────────────────────
// Central data store for the portfolio
// ──────────────────────────────────────────────

export interface Project {
    title: string;
    description: string;
    techs: string[];
    github: string;
    external?: string;
    featured?: boolean;
}

export interface Experience {
    company: string;
    title: string;
    date: string;
    bullets: string[];
}

export interface Certification {
    issuer: string;
    title: string;
    date: string;
    bullets: string[];
}

export interface Education {
    school: string;
    degree: string;
    date: string;
    note?: string;
}

// ── Personal Info ──────────────────────────────
export const personalInfo = {
    name: "Alaa Emad Faraj",
    shortName: "Alaa Faraj",
    title: "Computer Engineering Student",
    bio: `I'm a Computer Engineering student at Birzeit University with a strong foundation in software development, machine learning, and system design. I love building things that live on the internet — from full-stack web apps to deep learning classifiers and hardware processors.`,
    email: "alaaemadf4@gmail.com",
    phone: "+972(594528583)",
    location: "Palestine, Ramallah",
    profileImage: "https://i.postimg.cc/3db49LsW/image.webp",
    resumeLink: "",
    social: {
        github: "https://github.com/alaax159",
        linkedin: "https://www.linkedin.com/in/alaa-faraj-2b26a2209/",
    },
};

// ── Skills ─────────────────────────────────────
export const skills: string[] = [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "TypeScript",
    "MySQL",
    "HTML / CSS",
    "FastAPI",
    "TensorFlow",
    "Verilog",
    "Linux",
    "MATLAB",
];

// ── Experience ─────────────────────────────────
// ── Experience ─────────────────────────────────
export const experiences: Experience[] = [
    {
        company: "Foothill Technology Solutions",
        title: "Boot.dev Intern Trainee",
        date: "Feb 2026 – Present",
        bullets: [
            "Selected for the competitive Boot.dev TypeScript Internship Training Program.",
            "Following a structured engineering roadmap covering Git, TypeScript, HTTP clients/servers, SQL, and Docker.",
            "Building hands-on projects including a Pokédex application and a Blog Aggregator in TypeScript.",
            "Gaining practical experience in CI/CD using GitHub Actions and containerization with Docker.",
            "Training progress tracked through weekly milestones, project delivery, and technical evaluations.",
        ],
    },
];

// ── Certifications ─────────────────────────────
export const certifications: Certification[] = [
    {
        issuer: "Udacity",
        title: "AI Programming with Python Nanodegree",
        date: "June 2025 – August 2025",
        bullets: [
            "Built a complete Image Classifier with Deep Learning using TensorFlow, trained on the Oxford 102 Flower Categories Dataset.",
            "Applied transfer learning with pre-trained CNNs, data augmentation, model evaluation, and checkpointing.",
            "Optimized the neural network for high classification accuracy across 102 flower categories.",
        ],
    },
    {
        issuer: "The Hope International",
        title: "Front-End Development Training",
        date: "August 2024 – October 2024",
        bullets: [
            "Completed a 40-hour intensive course on Front-End development.",
            "Learned core concepts: HTML, CSS, JavaScript, and responsive web design.",
            "Built multiple projects demonstrating modern web development practices.",
        ],
    },
];

// ── Education ──────────────────────────────────
export const education: Education[] = [
    {
        school: "Birzeit University",
        degree: "Bachelor of Computer Engineering",
        date: "Expected Graduation: 2027",
        note: "GPA: 82.9%",
    },
    {
        school: "Al-Hashimiya Secondary School for Boys",
        degree: "Secondary School Certificate",
        date: "2022",
        note: "Score: 90.9%",
    },
];

// ── Projects ───────────────────────────────────
export const projects: Project[] = [
    {
        title: "Jewelry Shop Database",
        description:
            "A full-stack database management system for a jewelry shop. Features inventory management, customer records, and sales tracking with a modern dashboard UI.",
        techs: ["Python", "FastAPI", "MySQL", "HTML/CSS", "JavaScript"],
        github: "https://github.com/alaax159/jewelry_shop_DataBaseProject",
        featured: true,
    },
    {
        title: "Image Classifier (TensorFlow)",
        description:
            "A deep learning image classifier built with TensorFlow using transfer learning on pre-trained CNNs. Trained on the Oxford 102 Flower Categories Dataset with data augmentation and checkpointing.",
        techs: ["Python", "TensorFlow", "Deep Learning"],
        github: "https://github.com/alaax159/Image-Classifier-Project-TensorFlow",
        featured: true,
    },
    {
        title: "Pipelined RISC Processor",
        description:
            "A 5-stage pipelined 32-bit RISC processor with predicated execution support in Verilog. Features hazard detection, data forwarding, and comprehensive pipeline control.",
        techs: ["Verilog", "Computer Architecture"],
        github: "https://github.com/alaax159/Pipelined-Predicated-RISC-Processor",
        featured: true,
    },
    {
        title: "Decision Tree Classifier & Regressor",
        description:
            "Decision Tree algorithms through three practical implementations: classification on Iris dataset, hyperparameter optimization via GridSearchCV, and regression on diabetes progression.",
        techs: ["Python", "scikit-learn", "Machine Learning"],
        github: "https://github.com/alaax159/Decision-Tree-Classifier-Regressor-Implementation-and-Optimization",
    },
    {
        title: "Dog Breed Classifier",
        description:
            "A pre-trained image classifier to identify dog breeds using machine learning. Built with Python for accurate breed recognition from images.",
        techs: ["Python", "Machine Learning"],
        github: "https://github.com/alaax159/pre-trained_image_Classifier_to_identify_dog_Breeds",
    },
    {
        title: "Webflyx",
        description:
            "A Netflix-inspired web application showcasing modern front-end development techniques and responsive UI design.",
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/alaax159/webflyx",
    },
    {
        title: "Android Project",
        description:
            "A native Android application built with Java featuring modern mobile development patterns and Material Design.",
        techs: ["Java", "Android"],
        github: "https://github.com/alaax159/Android-Project",
    },
    {
        title: "Non-Linear & Logistic Regression",
        description:
            "Implementation of non-linear regression and logistic regression algorithms for machine learning coursework.",
        techs: ["Python", "Machine Learning"],
        github: "https://github.com/alaax159/assignment_2_Non-Linear-Regression_and_Logistic-Regression",
    },
    {
        title: "ML Assignment 3",
        description:
            "Machine learning assignment covering advanced ML concepts with practical Jupyter Notebook implementations.",
        techs: ["Python", "Jupyter", "ML"],
        github: "https://github.com/alaax159/ML_assignment_3",
    },
];

// ── Navigation Links ───────────────────────────
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
