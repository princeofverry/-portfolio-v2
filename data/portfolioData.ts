import { Project, ExperienceItem, NoteItem, AwardItem, SkillCategoryMap } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Dopamind+",
    category: "ai",
    role: "Android & ML Engineer",
    period: "2024",
    description:
      "Bangkit Academy capstone app that tracks users' mood through daily diary entries and provides mental health insights.",
    fullDetails:
      "Bangkit Academy capstone app that tracks users' mood through daily diary entries and provides mental health insights. Implemented on-device machine learning with TensorFlow Lite for sentiment analysis and personalized mental health recommendations.",
    tags: ["Android", "Kotlin", "Firebase", "ML", "TensorFlow Lite"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["Bangkit Capstone App", "TFLite On-Device ML", "Mental Health Insights"],
  },
  {
    id: 2,
    title: "CodeLingo",
    category: "fullstack",
    role: "Frontend Engineer",
    period: "2024",
    description:
      "Coding platform for elementary students that teaches fundamentals through games and challenges.",
    fullDetails:
      "Coding platform for elementary students that teaches fundamentals through games and challenges. Honored as Top 10 Web Design at Techcomfest 2024 for clean UI and interactive learning modules.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["Top 10 Techcomfest 2024", "Gamified Learning", "Next.js & TypeScript"],
  },
  {
    id: 3,
    title: "The Ace",
    category: "fullstack",
    role: "Fullstack Developer",
    period: "2024",
    description:
      "Competition registration website for Computer Engineering UNDIP, streamlining event sign-ups.",
    fullDetails:
      "Official competition registration platform for Computer Engineering Department UNDIP, handling participant sign-ups, team management, file submission, and payment verification.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["Official UNDIP Platform", "Streamlined Sign-ups", "Firebase Auth & RTDB"],
  },
  {
    id: 4,
    title: "Ship Monitoring",
    category: "fullstack",
    role: "Software Engineer",
    period: "2024–2025",
    description:
      "Real-time ship monitoring for autonomous applications: speed, direction, angle, and mission status.",
    fullDetails:
      "Real-time ship monitoring telemetry dashboard for autonomous vessels: streaming speed, heading direction, pitch/roll angle, GPS route pathing, and mission waypoints.",
    tags: ["React", "Leaflet", "Firebase RTDB", "WebSocket"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["< 100ms Telemetry Stream", "Leaflet GIS Map", "Autonomous Vessel Status"],
  },
  {
    id: 5,
    title: "KKI 2025",
    category: "ai",
    role: "Computer Vision Engineer",
    period: "2025",
    description:
      "Computer Vision algorithm development for Indonesian Ship Contest (KKI) 2025.",
    fullDetails:
      "Computer Vision algorithm development for Indonesian Ship Contest (KKI) 2025. Engineered real-time object detection and buoy tracking algorithms in Python/OpenCV/YOLO, securing 1st Place (Fun Race) and 2nd Runner-Up (ASV).",
    tags: ["Python", "OpenCV", "YOLO", "Edge / Robotics"],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["1st Place Fun Race", "2nd Runner-Up ASV", "Real-Time OpenCV & YOLO"],
  },
  {
    id: 6,
    title: "Capstone Project Drone",
    category: "ai",
    role: "AI & Hardware Engineer",
    period: "2024–2025",
    description:
      "Custom YOLOv8 for real-time drone-based fire & smoke detection on Raspberry Pi 5 with Hailo-8L.",
    fullDetails:
      "Custom YOLOv8 model for real-time drone-based fire & smoke detection. Exported to ONNX runtime format to run on Raspberry Pi 5 equipped with Hailo-8L M.2 AI accelerator for sub-200ms offline detection.",
    tags: ["YOLOv8", "Python", "Raspberry Pi 5", "Hailo-8L", "ONNX"],
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["< 200ms Frame Latency", "Hailo-8L NPU Acceleration", "100% Offline Edge AI"],
  },
  {
    id: 7,
    title: "Backend E-commerce with Golang",
    category: "be",
    role: "Backend Engineer",
    period: "2024",
    description:
      "High-concurrency RESTful e-commerce backend built with Golang, Gin framework, GORM ORM, MySQL database, and JWT authentication.",
    fullDetails:
      "High-concurrency RESTful e-commerce backend built with Golang, Gin framework, GORM ORM, MySQL database, and JWT authentication. Includes cart operations, transaction handling, and role-based authorization.",
    tags: ["Go", "Gin", "GORM", "MySQL", "JWT"],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["High Concurrency Go", "Gin & GORM Stack", "JWT Authorization"],
  },
  {
    id: 8,
    title: "Amunisi PTN",
    category: "be",
    role: "Backend Developer",
    period: "2024",
    description:
      "Backend developer for Amunisi PTN, a comprehensive university entrance tryout platform built with Laravel.",
    fullDetails:
      "Engineered scalable REST APIs and relational database schemas for Amunisi PTN, an online tryout platform helping students prepare for national university entrance exams (SNBT/UTBK).",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&q=80",
    link: "https://github.com",
    metrics: ["Laravel REST API", "Tryout Platform Backend", "UTBK Exam Engine"],
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    title: "Software Engineer (JDT Training Apprentice)",
    org: "Indivara Group",
    type: "Full-time",
    period: "MAY 2026 — PRESENT",
    bulletPoints: [
      "Participating in an intensive Java Backend Development program focused on enterprise application architecture.",
      "Developing practical skills in Java, Spring Boot, PostgreSQL, RESTful API design, and React.js frontend integration.",
      "Implementing unit testing with JUnit & JaCoCo code coverage reporting, plus automated software quality assurance (SQA) using Katalon Studio.",
      "Building containerized workflows with Docker, GitLab CI/CD pipelines, and Agile team collaboration using Git & GitLab.",
    ],
  },
  {
    title: "Teaching Assistant (Digital Systems & Mobile Development)",
    org: "Universitas Diponegoro Semarang",
    type: "Part-time · 4 mos · On-site",
    period: "SEP 2025 — DEC 2025",
    bulletPoints: [
      "Teaching Assistant (Digital Systems): Mentored undergraduate students in digital logic design, logic gates, and hardware fundamentals.",
      "Teaching Assistant (Mobile Development): Guided hands-on lab sessions on mobile application development, REST API integration, and UI design.",
      "Evaluated lab assignments, conducted code reviews, and assisted students with technical troubleshooting.",
    ],
  },
  {
    title: "Computer Vision Engineer (Staff)",
    org: "Aterkia Roboboat UNDIP",
    type: "Contract / Team",
    period: "NOV 2023 — DEC 2025",
    bulletPoints: [
      "Engineered real-time object detection models for autonomous water vessel navigation.",
      "Optimized OpenCV and YOLO algorithms in C++ for outdoor, low-light marine environments.",
      "Awarded 1st Place (Fun Race Category) and 2nd Runner-Up (ASV Category) in Kontes Kapal Indonesia (KKI) 2025.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Diskominfo Kota Semarang",
    type: "Internship · On-site",
    period: "JUL 2024 — AUG 2024",
    bulletPoints: [
      "Deployed YOLOv8 computer vision model for automated road pothole inspection.",
      "Integrated real-time detection alerts into a municipal GIS mapping dashboard.",
    ],
  },
];

export const awardsData: AwardItem[] = [
  {
    id: 1,
    year: "2025",
    date: "DEC 2025",
    title: "1st Place — Fun Race Competition",
    issuer: "Direktorat Pembelajaran & Kemahasiswaan (Belmawa Dikti)",
    association: "Aterkia Roboboat UNDIP",
    description:
      "Achieved 1st place in the Kontes Kapal Indonesia (KKI) 2025 Fun Race boat speed competition, demonstrating outstanding vessel speed, control, and teamwork throughout the race.",
    category: "ROBOTIC",
    badge: "1ST PLACE",
  },
  {
    id: 2,
    year: "2025",
    date: "DEC 2025",
    title: "2nd Runner-Up — Autonomous Surface Vehicle (ASV)",
    issuer: "Direktorat Pembelajaran & Kemahasiswaan (Belmawa Dikti)",
    association: "Aterkia Roboboat UNDIP",
    description:
      "Awarded 2nd Runner-Up in the KKI 2025 Autonomous Surface Vehicle category, featuring autonomous telemetry monitoring, route tracking, and computer vision–based navigation systems.",
    category: "ROBOTIC",
    badge: "2ND RUNNER-UP",
  },
  {
    id: 3,
    year: "2024",
    date: "DEC 2024",
    title: "Top 10 Web Design Techcomfest 2024",
    issuer: "Politeknik Negeri Semarang (POLINES)",
    association: "CodeLingo Frontend",
    description:
      "Honored to be among the Top 10 in Web Design for creating CodeLingo, a modern frontend application built with Next.js, Tailwind CSS, React Query, and shadcn/ui combining clean design and smooth user experience.",
    category: "SOFTWARE ENGINEERING",
    badge: "TOP 10",
  },
  {
    id: 4,
    year: "2024",
    date: "OCT 2024",
    title: "Finalist — PPK Ormawa 2024",
    issuer: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI",
    association: "Diponegoro University",
    description:
      "Contributed to the development of an IoT-based temperature monitoring system for cow manure composting to support efficient organic fertilizer production and community empowerment.",
    category: "IOT",
    badge: "NATIONAL FINALIST",
  },
  {
    id: 5,
    year: "2023",
    date: "DEC 2023",
    title: "Top 5 Web Design Techcomfest 2023",
    issuer: "Politeknik Negeri Semarang (POLINES)",
    association: "Sinau Platform",
    description:
      "Top 5 winner in Web Design for creating Sinau, a responsive and visually engaging educational website using Next.js and Tailwind CSS.",
    category: "SOFTWARE ENGINEERING",
    badge: "TOP 5",
  },
  {
    id: 6,
    year: "2023",
    date: "SEP 2023",
    title: "3rd Place — UI/UX Competition UPN Veteran Jatim",
    issuer: "UPN \"Veteran\" Jawa Timur",
    association: "Nourish+ Product Design",
    description:
      "Designed Nourish+, an innovative mobile product addressing maternal and child health & stunting prevention through user-centered research and wireframing.",
    category: "UI UX",
    badge: "3RD PLACE",
  },
];

export const skillsData: SkillCategoryMap = {
  Frontend: ["JavaScript / TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
  Backend: ["Java", "Spring Boot", "Golang (Gin/GORM)", "Laravel", "Node.js / Express"],
  "Testing & QA": ["JUnit", "JaCoCo", "Katalon Studio", "Automated E2E Testing"],
  "AI & Vision": ["YOLOv8", "OpenCV", "TensorFlow / TFLite", "ONNX Runtime", "Hailo-8L NPU"],
  Database: ["PostgreSQL", "MySQL", "Firebase RTDB", "Supabase", "SQLite"],
  DevOps: ["Docker", "Git / GitLab", "GitLab CI/CD", "REST APIs", "WebSocket"],
};

export const notesData: NoteItem[] = [
  {
    slug: "high-concurrency-spring-boot-virtual-threads",
    date: "NOVEMBER 04, 2024",
    title: "High-Concurrency Java Backends with Spring Boot 3 & Virtual Threads",
    excerpt:
      "A deep technical breakdown of harnessing Java 21 Virtual Threads (Project Loom), reactive database pooling, and asynchronous messaging pipelines for sub-10ms enterprise REST APIs.",
    tags: ["Java", "Spring Boot", "Concurrency", "Architecture"],
    readTime: "14 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&q=80",
    content: `
For decades, Java enterprise backends relied on the classical OS thread-per-request model. Operating system threads are expensive resources, carrying stack allocations upwards of 1MB per thread and incurring heavy context-switching overhead when scaling beyond a few thousand concurrent connections.

With the release of Java 21 and Project Loom, Virtual Threads introduce lightweight user-mode threads managed by the Java Virtual Machine (JVM) rather than the underlying operating system kernel. Millions of Virtual Threads can run concurrently on a handful of OS carrier threads, fundamentally shifting the paradigm for I/O-bound microservices and RESTful API gateways.

### 1. Understanding Carrier Threads vs Virtual Threads

Unlike traditional platform threads, Virtual Threads do not block the underlying OS thread during blocking I/O operations (such as SQL queries, HTTP client requests, or disk writes). When a Virtual Thread encounters a blocking call, the JVM unmounts the Virtual Thread from its OS carrier thread and parks it until the I/O operation completes.

This allows carrier threads to execute work for other active Virtual Threads continuously. In Spring Boot 3.2+, enabling Virtual Threads is as simple as configuring \`spring.threads.virtual.enabled=true\`.

### 2. Avoiding Carrier Thread Pinning

While Virtual Threads dramatically increase throughput, developers must be vigilant about "Carrier Thread Pinning." Pinning occurs when a Virtual Thread cannot be unmounted during a blocking operation, holding onto its OS carrier thread and degrading system concurrency.

The two main causes of pinning are:
- Executing blocking I/O inside a \`synchronized\` block or method.
- Invoking native methods (JNI) or foreign functions.

To prevent pinning, legacy \`synchronized\` blocks in enterprise Java codebases should be migrated to modern \`java.util.concurrent.locks.ReentrantLock\` instances. ReentrantLocks allow the JVM to unmount the Virtual Thread cleanly without pinning carrier threads.

### 3. Database Connection Pool & Reactive Integration

A common misconception when adopting Virtual Threads is that database connection pools can be scaled infinitely. Even if the JVM can handle 100,000 Virtual Threads, relational databases like PostgreSQL or MySQL have finite connection limits and thread overhead on the database server itself.

Sizing HikariCP connection pools correctly (e.g. 20–50 connections) paired with asynchronous Redis caching layer and reactive non-blocking drivers guarantees that database servers are not overwhelmed under sudden traffic surges.

### 4. Enterprise Observability & JaCoCo Coverage Metrics

Deploying high-concurrency Spring Boot applications to production environments requires robust telemetry. Combining Micrometer metrics with Prometheus, Grafana, and Zipkin distributed tracing provides real-time visibility into Virtual Thread park counts, carrier pool utilization, and garbage collection pauses.

Furthermore, enforcing 90%+ branch code coverage via automated JUnit 5 tests and JaCoCo coverage reports in GitLab CI/CD pipelines ensures that race conditions and concurrency edge cases are caught long before deployment to production staging servers.
    `,
    takeaways: [
      "Virtual Threads enable millions of concurrent I/O-bound requests on minimal JVM heap allocations.",
      "Replace synchronized blocks with ReentrantLock to prevent carrier thread pinning.",
      "Keep HikariCP database pool sizes modest and handle caching via Redis to protect underlying database instances.",
      "Integrate JUnit 5 and JaCoCo coverage reporting into CI/CD to prevent concurrency regressions."
    ]
  },
  {
    slug: "embracing-monolithic-designs-in-microservices-era",
    date: "OCTOBER 12, 2024",
    title: "Embracing Monolithic Designs in a Microservices Era",
    excerpt:
      "Exploring the counter-intuitive performance benefits of scaling up monolithic architectures before prematurely breaking them into distributed microservices.",
    tags: ["Architecture", "Backend"],
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    content: `
In recent years, microservice architecture has become the default recommendation for scaling software applications. However, premature decomposition often introduces unnecessary network latency, complex distributed state management, and operational overhead that small to mid-sized engineering teams struggle to maintain.

Scaling a well-structured modular monolith inside a single process boundary allows developers to maintain transactional integrity, refactor domain models without API contract breakages, and leverage high-density single-node compute before incurring distributed system complexity.

Key strategies for sustainable monolith scaling include enforcing strict internal module boundaries, utilizing asynchronous event buses within the process, and isolating database connections cleanly.
    `,
    takeaways: [
      "Modular monoliths drastically reduce network hops and operational telemetry overhead.",
      "Refactoring domain logic inside a single codebase is significantly faster than managing multi-repo RPCs.",
      "Decompose into microservices only when independent team scaling or hardware requirements strictly dictate it."
    ]
  },
  {
    slug: "css-grid-in-structural-typography",
    date: "SEPTEMBER 28, 2024",
    title: "The Case for CSS Grid in Structural Typography",
    excerpt:
      "How leveraging native CSS Grid can lead to more predictable, editorial-quality web layouts without relying on heavy framework dependencies.",
    tags: ["Design", "CSS"],
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=600&fit=crop&q=80",
    content: `
Modern web typography demands structural precision that traditional block-and-flexbox layouts often fail to deliver cleanly. By using native CSS Grid with named grid lines and explicit fractional units, developers can construct magazine-grade editorial layouts directly in vanilla CSS.

CSS Grid eliminates the need for deeply nested wrapper elements and arbitrary margin hacks. Aligning display headlines, monospaced metadata labels, and multi-column body measure on a single 12-column or fluid grid track guarantees layout stability across fluid screen widths.

Pairing CSS Grid with fluid clamp() typography calculations yields predictable baseline alignment and prevents layout shift during responsive viewport transitions.
    `,
    takeaways: [
      "CSS Grid named template areas reduce DOM node depth and improve layout readability.",
      "Combining subgrid with monospaced metadata columns ensures vertical baseline alignment.",
      "Native CSS Grid removes reliance on heavy utility frameworks for complex editorial layouts."
    ]
  },
  {
    slug: "real-time-systems-when-websocket-matters",
    date: "AUGUST 15, 2024",
    title: "Real-Time Edge Systems: When WebSocket Matters",
    excerpt:
      "A practical guide to implementing real-time streaming telemetry and computer vision overlays without over-engineering server infrastructure.",
    tags: ["Performance", "Computer Vision"],
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&q=80",
    content: `
In autonomous vehicle navigation and low-latency computer vision pipelines, delivering telemetry to client dashboards requires careful protocol selection. While HTTP polling or Server-Sent Events (SSE) suffice for simple notification feeds, persistent full-duplex WebSocket connections are essential when streaming 60+ Hz sensor data streams.

Optimizing WebSocket frame serialization using compact binary arrays or protocol buffers (Protobuf) reduces bandwidth consumption by over 60% compared to raw JSON strings. Furthermore, deploying edge gateways on lightweight ARM hardware ensures frame ingestion latency stays below 100ms.

Architecting client-side canvas renderers with requestAnimationFrame ensures smooth trajectory mapping and overlay bounding boxes without blocking the main UI thread.
    `,
    takeaways: [
      "Use Protobuf or ArrayBuffers for high-frequency WebSocket payload serialization.",
      "Deploy local edge processing nodes (e.g. ONNX runtime on Hailo-8L) to eliminate cloud round-trip delay.",
      "Decouple WebSocket message ingestion from UI DOM rendering via requestAnimationFrame buffers."
    ]
  },
];

export const guestbookData = [
  {
    id: "gb-1",
    name: "Alex Rivera",
    message: "Insanely clean portfolio design! Loving the minimal editorial typography and high-density project metrics. Keep crushing it, Verry!",
    date: "JULY 25, 2026",
  },
  {
    id: "gb-2",
    name: "Sarah Chen",
    message: "Great work on the KKI 2025 Autonomous Boat vision algorithms! Your drone fire detection project with Hailo-8L NPU is super impressive.",
    date: "JULY 22, 2026",
  },
  {
    id: "gb-3",
    name: "Devon Vance",
    message: "Solid Java Spring Boot & Golang backend projects. The Virtual Threads article was a fantastic read!",
    date: "JULY 18, 2026",
  },
];
