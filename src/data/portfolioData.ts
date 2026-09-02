// ──────────────────────────────────────────────
// Central data store for the portfolio
// Vocabulary is defined in CONTEXT.md — Project, Coursework,
// Credential and Experience are not interchangeable.
// ──────────────────────────────────────────────

import type { WorkKind } from './partitionWork';

export interface Project {
    title: string;
    description: string;
    techs: string[];
    github: string;
    external?: string;
    featured?: boolean;
    kind: WorkKind;
}

export interface Experience {
    company: string;
    title: string;
    date: string;
    bullets: string[];
}

export interface Credential {
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
    // Served from public/ — BASE_URL keeps it correct under the '/Portfolio/' base.
    resumeLink: `${import.meta.env.BASE_URL}Alaa_Faraj_CV.pdf`,
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
export const experiences: Experience[] = [
    {
        company: "ASAL Technologies — Microsoft Team",
        title: "Artificial Intelligence Engineer",
        date: "July 2026 – Present",
        bullets: [
            "Working as an AI Engineer within the Microsoft team, building production applications and AI-driven features.",
        ],
    },
];

// ── Credentials ────────────────────────────────
export const credentials: Credential[] = [
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

// ── Work ───────────────────────────────────────
// Projects are self-directed and shipped; Coursework was scoped by an
// assigned brief. Both live here and are split by partitionWork().
export const projects: Project[] = [
    {
        title: "OffPI — Offline Emergency Communication System",
        description:
            "A fully offline emergency communication platform built at a 48-hour hackathon, combining an iOS app with Raspberry Pi edge nodes over LoRa long-range radio. Implements P2P mesh networking, store-and-forward buffering, and on-device AI inference for emergency classification.",
        techs: ["iOS", "Raspberry Pi", "LoRa", "Mesh Networking", "Edge AI"],
        // TODO: replace with the real Devpost/GitHub link for OffPI.
        github: "https://github.com/alaax159",
        featured: true,
        kind: "project",
    },
    {
        title: "AI Legal Aid for Palestine",
        description:
            "A voice-based AI legal assistant helping Palestinian citizens understand their rights under the Palestinian Basic Law, in both Arabic and English. Full RAG pipeline over ChromaDB with multilingual sentence transformers, Whisper for Arabic speech-to-text, and automatic PDF form auto-fill for legal documents.",
        techs: ["Python", "FastAPI", "ChromaDB", "Whisper", "SauLM-7B", "QLoRA"],
        github: "https://github.com/alaax159/AI_hackathon",
        featured: true,
        kind: "project",
    },
    {
        title: "Pipelined RISC Processor",
        description:
            "A 5-stage pipelined 32-bit RISC processor with predicated execution support in Verilog. Features hazard detection, data forwarding, and comprehensive pipeline control.",
        techs: ["Verilog", "Computer Architecture"],
        github: "https://github.com/alaax159/Pipelined-Predicated-RISC-Processor",
        featured: true,
        kind: "project",
    },
    {
        title: "Time-of-Day Classification — Multimodal ML",
        description:
            "A multimodal time-of-day classifier (morning/afternoon/evening) comparing three approaches: a KNN baseline on handcrafted colour features, a CNN using EfficientNetV2-L transfer learning at 87.4% test accuracy, and a RoBERTa transformer over text descriptions at 76.4%. Improved overall F1-score by 12% over the KNN baseline.",
        techs: ["Python", "TensorFlow", "Keras", "RoBERTa", "EfficientNetV2", "scikit-learn"],
        // TODO: replace with the real GitHub link for this project.
        github: "https://github.com/alaax159",
        kind: "project",
    },
    {
        title: "Space Habitat Explorer",
        description:
            "An interactive 3D visualisation of a compact space habitat module for a four-person crew on long-duration missions, built at a NASA hackathon. Renders a 60 m³ cylindrical module across eight functional areas following NASA and ESA standards, with rotate, zoom and per-room detail on click.",
        techs: ["React", "Three.js", "react-three-fiber", "Vite", "JavaScript"],
        github: "https://github.com/alaax159/NASA_Hackathon-",
        kind: "project",
    },
    {
        title: "Jewelry Shop Database",
        description:
            "A full-stack database management system for a jewelry shop. Features inventory management, customer records, and sales tracking with a modern dashboard UI.",
        techs: ["Python", "FastAPI", "MySQL", "HTML/CSS", "JavaScript"],
        github: "https://github.com/alaax159/jewelry_shop_DataBaseProject",
        kind: "project",
    },
    {
        title: "Image Classifier (TensorFlow)",
        description:
            "A deep learning image classifier built with TensorFlow using transfer learning on pre-trained CNNs. Trained on the Oxford 102 Flower Categories Dataset with data augmentation and checkpointing.",
        techs: ["Python", "TensorFlow", "Deep Learning"],
        github: "https://github.com/alaax159/Image-Classifier-Project-TensorFlow",
        kind: "project",
    },
    {
        title: "Webflyx",
        description:
            "A Netflix-inspired web application showcasing modern front-end development techniques and responsive UI design.",
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/alaax159/webflyx",
        kind: "project",
    },
    {
        title: "Android Project",
        description:
            "A native Android application built with Java featuring modern mobile development patterns and Material Design.",
        techs: ["Java", "Android"],
        github: "https://github.com/alaax159/Android-Project",
        kind: "project",
    },
    {
        title: "Wathiq — Arabic Fact Verification",
        description:
            "A retrieval-augmented fact-verification system for Arabic claims, classifying each as Supported, Refuted or Not Enough Info. Compares a BM25 lexical baseline against a dense AraBERT bi-encoder trained with contrastive learning for evidence retrieval, then TF-IDF with logistic regression against a fine-tuned AraBERT/MARBERT cross-encoder for the verdict. Trained on the AraFacts and Arabic News Stance datasets.",
        techs: ["Python", "PyTorch", "AraBERT", "MARBERT", "FAISS", "BM25"],
        github: "https://github.com/alaax159/Wathiq-Retrieval-Augmented-Fact-Verification-for-Arabic-Claims-NLP-Project-",
        kind: "coursework",
    },
    {
        title: "Dog Breed Classifier",
        description:
            "A pre-trained image classifier to identify dog breeds using machine learning. Built with Python for accurate breed recognition from images.",
        techs: ["Python", "Machine Learning"],
        github: "https://github.com/alaax159/pre-trained_image_Classifier_to_identify_dog_Breeds",
        kind: "coursework",
    },
    {
        title: "Decision Tree Classifier & Regressor",
        description:
            "Decision Tree algorithms through three practical implementations: classification on Iris dataset, hyperparameter optimization via GridSearchCV, and regression on diabetes progression.",
        techs: ["Python", "scikit-learn", "Machine Learning"],
        github: "https://github.com/alaax159/Decision-Tree-Classifier-Regressor-Implementation-and-Optimization",
        kind: "coursework",
    },
    {
        title: "Non-Linear & Logistic Regression",
        description:
            "Implementation of non-linear regression and logistic regression algorithms for machine learning coursework.",
        techs: ["Python", "Machine Learning"],
        github: "https://github.com/alaax159/assignment_2_Non-Linear-Regression_and_Logistic-Regression",
        kind: "coursework",
    },
    {
        title: "ML Assignment 3",
        description:
            "Machine learning assignment covering advanced ML concepts with practical Jupyter Notebook implementations.",
        techs: ["Python", "Jupyter", "ML"],
        github: "https://github.com/alaax159/ML_assignment_3",
        kind: "coursework",
    },
];

// ── Navigation Links ───────────────────────────
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
