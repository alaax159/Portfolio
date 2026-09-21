// ──────────────────────────────────────────────
// Central data store for the portfolio
// Vocabulary is defined in CONTEXT.md — Project, Coursework,
// Credential and Experience are not interchangeable.
// Source of truth for the facts below: public/Alaa_Faraj_CV.pdf
// ──────────────────────────────────────────────

import { partitionWork, type WorkKind } from './partitionWork';

export interface WorkEntry {
    title: string;
    description: string;
    techs: string[];
    github: string;
    external?: string;
    featured?: boolean;
    kind: WorkKind;
    /** Set while the canonical URL is unknown; the repo link is withheld. */
    linkPending?: boolean;
}

export interface Experience {
    company: string;
    title: string;
    date: string;
    location?: string;
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
    bio: `I'm a Computer Engineering student at Birzeit University with hands-on experience building and evaluating AI systems — RAG pipelines, backend services and machine learning models — through an AI engineering internship and independent work. I work across Python and TypeScript stacks, and I care as much about how a system is evaluated as about getting it to run.`,
    email: "alaaemadf4@gmail.com",
    phone: "+970 594 528 583",
    location: "Ramallah, Palestine",
    languages: "Arabic (Native) · English (B2 Upper Intermediate, EFSET Certified)",
    profileImage: "https://i.postimg.cc/3db49LsW/image.webp",
    // Served from public/ — BASE_URL keeps it correct under the '/Portfolio/' base.
    cvLink: `${import.meta.env.BASE_URL}Alaa_Faraj_CV.pdf`,
    social: {
        github: "https://github.com/alaax159",
        linkedin: "https://www.linkedin.com/in/alaa-faraj-2b26a2209/",
    },
};

// ── Skills ─────────────────────────────────────
export const skills: string[] = [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C",
    "SQL",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "HuggingFace Transformers",
    "scikit-learn",
    "RAG & Vector Search",
    "NestJS",
    "FastAPI",
    "PostgreSQL / pgvector",
    "MySQL",
    "Redis & BullMQ",
    "Docker",
    "Azure AI Foundry",
    "Git",
];

// ── Experience ─────────────────────────────────
export const experiences: Experience[] = [
    {
        company: "ASAL Technologies",
        title: "Artificial Intelligence Engineer — Internship",
        date: "July 2026 – September 2026",
        location: "Rawabi, West Bank (Hybrid)",
        bullets: [
            "Designed and evaluated a RAG pipeline over FDA DailyMed drug labels: pgvector search with SQL-level filtering that scopes evidence to each patient's own medications, versioned embedding profiles, and an audited Azure AI Foundry gateway.",
            "Built the grounding guardrails: every AI answer is citation-validated against retrieved source text and can never override the deterministic checker — the same ungrounded-claim and forced-inference failures quality review must catch.",
            "Implemented a deterministic medication-safety engine (DDInter drug–drug interactions, allergy checks) with immutable runs, and added prescription scanning via Azure Document Intelligence OCR.",
            "Built the backend end to end: NestJS/TypeScript REST APIs, PostgreSQL with Drizzle ORM, Redis/BullMQ job queues, and Docker.",
        ],
    },
];

// ── Credentials ────────────────────────────────
export const credentials: Credential[] = [
    {
        issuer: "Udacity — Palestine Launchpad",
        title: "Intro to Machine Learning with TensorFlow (Nanodegree)",
        date: "March 2026",
        bullets: [
            "Completed the nanodegree covering supervised learning, neural networks with TensorFlow, and unsupervised learning.",
            "Worked through model evaluation and error analysis on real datasets, not aggregate accuracy alone.",
        ],
    },
    {
        issuer: "Udacity",
        title: "AI Programming with Python & TensorFlow (Nanodegree)",
        date: "July 2025",
        bullets: [
            "Built a complete image classifier with deep learning using TensorFlow, trained on the Oxford 102 Flower Categories dataset.",
            "Applied transfer learning with pre-trained CNNs, data augmentation, model evaluation, and checkpointing.",
            "Optimised the neural network for high classification accuracy across 102 flower categories.",
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
        date: "Sep 2022 – Jun 2027 (expected)",
        note: "Ramallah, Palestine · GPA: 81.1%",
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
export const work: WorkEntry[] = [
    {
        title: "Moeen — AI Medication Management Platform",
        description:
            "A mobile app and backend that track prescriptions and doses, check drug interactions and allergies, and answer medication questions with cited, label-grounded AI guidance. Built during the ASAL Technologies internship: a RAG pipeline over FDA DailyMed labels with pgvector retrieval scoped to each patient's own medications, citation validation on every answer, and a deterministic medication-safety engine the model can never override.",
        techs: ["NestJS", "TypeScript", "PostgreSQL + pgvector", "Drizzle ORM", "BullMQ", "Azure AI Foundry", "Docker"],
        github: "https://github.com/alaax159/Moeen",
        featured: true,
        kind: "project",
    },
    {
        title: "OffPI — Offline Emergency Communication System",
        description:
            "A fully offline emergency communication platform built at a 48-hour hackathon, combining an iOS app with Raspberry Pi edge nodes over LoRa long-range radio. Implements P2P mesh networking, store-and-forward buffering, and on-device AI inference for emergency classification.",
        techs: ["iOS", "Raspberry Pi", "LoRa", "Mesh Networking", "Edge AI"],
        github: "https://github.com/alaax159",
        linkPending: true,
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
        title: "Time-of-Day Classification — Multimodal ML Evaluation Study",
        description:
            "A controlled comparison of three approaches to one task: a KNN baseline on handcrafted colour features, an EfficientNetV2-L transfer-learning CNN at 87.4% test accuracy, and a RoBERTa text classifier at 76.4%. The dataset was hand-labelled and quality-reviewed against a consistent labelling standard; each model was scored with accuracy, F1 and confusion matrices on an imbalanced set, with per-class failure modes diagnosed and F1 improved by 12% over the baseline through partial fine-tuning, augmentation and early stopping.",
        techs: ["Python", "TensorFlow", "Keras", "RoBERTa", "EfficientNetV2", "scikit-learn"],
        github: "https://github.com/alaax159",
        linkPending: true,
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
            "A retrieval-augmented fact-verification pipeline for Arabic claims, classifying each as Supported, Refuted or Not Enough Info, trained on the AraFacts and Arabic News Stance datasets. Model outputs were compared side by side across retrieval and verdict variants, inspecting per-claim differences rather than aggregate scores alone: BM25 (test R@20 0.98, MRR 0.83) against a dense AraBERT bi-encoder with in-batch contrastive negatives, and TF-IDF with logistic regression against an AraBERT/MARBERT cross-encoder.",
        techs: ["Python", "PyTorch", "HuggingFace Transformers", "AraBERT", "MARBERT", "FAISS", "BM25"],
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

// Partitioned once, at the source. Components consume these, never `work`,
// so the two sections can never disagree about what is Coursework.
export const { projects, coursework } = partitionWork(work);

// ── Navigation Links ───────────────────────────
export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
