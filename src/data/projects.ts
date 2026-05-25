import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "alumni-connect",
    title: "IIITDM Alumni Connect",
    subtitle: "Full-Stack Django Web App",
    description: "A comprehensive alumni management platform for IIITDM Jabalpur featuring secure authentication, event coordination, content management, and role-based permissions.",
    techStack: ["Python", "Django", "SQLite", "Django ORM", "Semantic UI", "GitHub", "SonarLint"],
    liveUrl: "https://alumni.iiitdmj.ac.in/",
    dateRange: "Sep – Oct 2024",
    highlights: [
      "Developed a full-stack alumni management platform for IIITDM Jabalpur featuring authentication, event coordination, content management, and role-based access.",
      "Built responsive frontend interfaces with Django templates, Semantic UI, crispy-forms, and CKEditor to support rich content and smooth user interaction.",
      "Handled database design, schema migrations, and admin customization via Django ORM; followed Git workflows and enforced code quality using SonarLint."
    ]
  },
  {
    id: "library-management",
    title: "Library Management System",
    subtitle: "Flask Web App",
    description: "A role-based library management platform with clean modular architecture, blueprint routing, DAO patterns, and persistent MySQL database storage.",
    techStack: ["Python", "Flask", "MySQL", "Jinja2", "DAO Pattern", "SQL", "Git"],
    githubUrl: "https://github.com/Nadnaps96/Library-Management-System",
    dateRange: "Dec 2024",
    highlights: [
      "Designed and developed a fully functional Library Management System with role-based access for users, admins, and book managers.",
      "Built using a clean modular architecture with Flask Blueprints, DAO pattern, Jinja2 templates, and integrated session-based authentication for secure access.",
      "Connected to a MySQL database for persistent storage of books and user data, and configured local deployment using Flask CLI."
    ]
  },
  {
    id: "studywise",
    title: "StudyWise",
    subtitle: "Smart Study & Review Scheduler",
    description: "A customized study planner web application that generates dynamic review schedules based on scientific learning models like spaced repetition and active recall.",
    techStack: ["Python", "Flask", "SQLite", "JavaScript", "Jinja2", "Algorithms", "GitHub"],
    githubUrl: "https://github.com/Nadnaps96/studywise",
    dateRange: "Sep – Dec 2023",
    highlights: [
      "Developed a full-stack study planner web app using spaced repetition and active recall to generate personalized daily schedules.",
      "Implemented custom scheduling algorithms based on Barbara Oakley’s learning principles, with lesson CRUD, delay/finish controls, and bulk management.",
      "Integrated secure user authentication, session management, and dynamic dashboards for persistent progress tracking."
    ]
  }
];
