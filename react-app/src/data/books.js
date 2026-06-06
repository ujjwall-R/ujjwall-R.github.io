export const books = [
  // ── Tech ─────────────────────────────────────────────────────────────────
  {
    title: "Designing Data-Intensive Applications",
    about:
      "Covers scalable, reliable, and maintainable distributed systems. A single resource for almost everything about distributed systems. I believe it is worth reading twice or even thrice (my personal opinion).",
    category: "Tech",
    ratings: {
      "Beginner friendly": 2,
      "Conceptual depth": 5,
      "Practical applicability": 3,
    },
    tags: ["distributed-systems", "databases", "scalability", "system-design"],
    image: "/images/ddia.png",
  },
  {
    title:
      "Balancing Coupling in Software Design: Universal Design Principles for Architecting Modular Software Systems",
    about:
      "A practical exploration of coupling in software systems, how to strike the right balance between flexibility and maintainability. This piece breaks down universal design principles that help architects build modular, scalable systems without over-engineering or creating rigid dependencies.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 4,
      "Conceptual depth": 3,
      "Practical applicability": 4,
    },
    tags: ["software-architecture", "design-principles"],
    image: "/images/bcsd.png",
  },
  {
    title: "Clean Architecture",
    about:
      "One of the best and few resources that explains the SOLID principles in detail. Uncle Bob presents a unique and effective way of organizing a codebase.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 4,
      "Practical applicability": 4,
    },
    tags: [
      "software-architecture",
      "design-principles",
      "clean-architecture",
      "scalability",
    ],
    image: "/images/carch.png",
  },
  {
    title: "The Art of Statistics: Learning from Data",
    about:
      "An interesting book where the author shows how data speaks in day-to-day life, even before the advent of strong AI tools. The story of data analysis is engaging. It requires a good interest in maths and probability to fully enjoy it.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 4,
      "Conceptual depth": 3,
      "Practical applicability": 2,
    },
    tags: ["statistics", "data-analysis", "probability", "data-literacy"],
    image: "/images/artofstat.png",
  },
  {
    title: "Clean Code",
    about:
      "Improves the practice of writing good and clean code. It helps junior engineers ship code to production faster. A must-read for all beginners.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 3,
      "Practical applicability": 4,
    },
    tags: [
      "software-engineering",
      "code-quality",
      "best-practices",
      "maintainability",
    ],
    image: "/images/ccode.png",
  },
  {
    title: "System Design Series by Alex Xu",
    about:
      "Although it is positioned as an interview resource, I personally loved the way Alex lucidly explains the requirements of building good backend systems. A must-read for all backend developers.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 3,
      "Practical applicability": 3,
    },
    tags: [
      "system-design",
      "scalable-systems",
      "backend-engineering",
      "interview-prep",
    ],
    image: "/images/alexxu.png",
  },
  {
    title: "Linux From Scratch",
    about:
      "Build a Linux OS manually to understand its internals deeply. This feels more like documentation and a hands-on journey.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 1,
      "Conceptual depth": 4,
      "Practical applicability": 4,
    },
    tags: [
      "operating-systems",
      "linux-internals",
      "low-level",
      "systems-programming",
    ],
    image: "/images/LFS.png",
  },
  {
    title:
      "Linux System Programming: Talking Directly to the Kernel and C Library",
    about:
      "A good resource to understand the fundamentals of system programming in C and the interfaces of the kernel. This book is not related to kernel development.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 2,
      "Conceptual depth": 4,
      "Practical applicability": 3,
    },
    tags: ["linux", "system-programming", "kernel", "c-programming"],
    image: "/images/linuxsp.png",
  },
  {
    title: "Docker: Up & Running, 2nd Edition",
    about:
      "A solid introduction to Docker and containerization. Covers the full lifecycle of building, shipping, and running containers in production. Great for engineers who want to understand containers beyond just running commands.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 4,
      "Conceptual depth": 5,
      "Practical applicability": 5,
    },
    tags: ["docker", "containers", "devops", "infrastructure"],
    image: "/images/docker.png",
  },
  {
    title: "Understanding Distributed Systems",
    about:
      "I recommend this book to everyone who wants to read Martin Kleppmann's DDIA. It is a very good starting point before the Red Book.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 4,
      "Conceptual depth": 5,
      "Practical applicability": 4,
    },
    tags: [
      "distributed-systems",
      "consistency",
      "fault-tolerance",
      "system-architecture",
    ],
    image: "/images/uds.png",
  },
  {
    title: "Righting Software",
    about:
      "This book is divided into two parts—System Design and Project Management. Juval Lowey introduces volatility-based decomposition as an alternative to functional decomposition. It is a fantastic read. The second part is pending for my second read.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 3,
      "Conceptual depth": 3,
      "Practical applicability": 5,
    },
    tags: ["system-design", "project-management"],
    image: "/images/rs.png",
  },
  {
    title: "Domain-Driven Design",
    about:
      "A must-read for all software developers. A senior architect recommended it to me, and I am always thankful. It will improve your skills in detailed design.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 3,
      "Conceptual depth": 3,
      "Practical applicability": 5,
    },
    tags: [
      "domain-driven-design",
      "software-modeling",
      "architecture",
      "enterprise-systems",
    ],
    image: "/images/ddd.png",
  },
  {
    title: "Building Applications with AI Agents",
    about:
      "A practical guide to designing and building production-ready AI agent applications. I picked this up as part of being in a reading club. Covers agent architectures, tool use, memory, and multi-agent orchestration.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 4,
      "Conceptual depth": 3,
      "Practical applicability": 5,
    },
    tags: [
      "ai-agents",
      "llms",
      "application-development",
      "artificial-intelligence",
    ],
    image: "/images/bawaa.png",
  },
  {
    title: "Build a Large Language Model (From Scratch)",
    about:
      "Recommended for anyone who has the zeal to understand how modern-day LLMs function. The author builds a GPT-2 model in the book, making it a hands-on experience. One big advantage is that it gives you a strong head start in understanding research papers published by Gemini, OpenAI, or Meta, making those reads more satisfying.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 2,
      "Conceptual depth": 5,
      "Practical applicability": 1,
    },
    tags: ["machine-learning", "deep-learning", "llms", "neural-networks"],
    image: "/images/llmfromscratch.png",
  },
  {
    title: "The Hundred-page Machine Learning Book",
    about:
      "I read this during college. It is a good beginner resource for anyone who wants to learn the basics of AI and ML. Make sure to take notes or at least underline important sections. You will not regret reading it if you have an interest in basic maths.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 5,
      "Practical applicability": 3,
    },
    tags: [
      "machine-learning",
      "ml-fundamentals",
      "overview",
      "data-science",
    ],
    image: "/images/100pgML.png",
  },
  {
    title: "Cracking the Coding Interview",
    about:
      "Recommended for beginners targeting algorithm interviews. A good resource to cover the basics of OOP.",
    category: "Tech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 5,
      "Practical applicability": 1,
    },
    tags: [
      "data-structures",
      "algorithms",
      "interview-prep",
      "problem-solving",
    ],
    image: "/images/cci.png",
  },

  // ── Non-Tech ──────────────────────────────────────────────────────────────
  {
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    about:
      "A naive explanation that encourages a builder mentality by the PayPal founder. A popular Bangalore-based founder recommended this book to me for my 2026 reading list, and I am glad I picked it.",
    category: "NonTech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 2,
      "Practical applicability": 3,
    },
    tags: ["startup", "business", "entrepreneurship"],
    image: "/images/0to1.png",
  },
  {
    title: "Truth Without Apology: For Those Tired of Sweet Lies",
    about:
      "Bought this at Mumbai Airport and I am forever grateful. The more you read, the more your ego breaks down. The short chapters awaken something within you.",
    category: "NonTech",
    ratings: {
      "Beginner friendly": 5,
      "Conceptual depth": 3,
      "Practical applicability": 4,
    },
    tags: ["philosophy", "self-awareness", "ego"],
    image: "/images/twa.png",
  },
];
