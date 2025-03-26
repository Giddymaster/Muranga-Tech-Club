export const leaders = [
  {
    id: 1,
    name: "Dr. John Ndia",
    role: "Patron",
    email: "jndia@mut.ac.ke",
    bio: "Senior Lecturer and Dean at Murang'a University of Technology specializing in software engineering and cybersecurity.",
    extendedBio: `
      Dr. John Ndia is a senior lecturer and the Dean, School of Computing and Information Technology, 
      Murang'a University of Technology (MUT). He holds a PhD (Information Technology) from Masinde Muliro 
      University of Science and Technology (2020), Master of Science in Data Communication (KCA-U, 2013), 
      and Bachelor of Information Technology (Busoga University-Uganda, 2009). Dr. Ndia has served in several 
      capacities at MUT such as Departmental Examination Officer, Chairman of Department, and currently as Dean 
      of School. His research interests are Software Quality, Software Measurement, Software Testing, AI 
      Applications in Software Engineering and Networks Security.
    `,
    education: [
      "2020: Ph.D. (Information Technology) - Masinde Muliro University",
      "2013: M.Sc. (Data Communications) - KCA University",
      "2009: Bachelor of Information Technology - Busoga University",
    ],
    publications: [
      "King'ori, A. W., Muketha, G. M., & Ndia, J. G. (2024). A Suite of Metrics for UML Behavioral Diagrams...",
      "Ochieng, F., Kaburu, D., & Ndia, J. G. (2023). Automation-Based User Input Sql Injection...",
    ],
    links: {
      googleScholar:
        "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=John+Gichuki+Ndia",
      researchGate: "https://www.researchgate.net/profile/John-Ndia",
      linkedin: "https://linkedin.com/in/dr-john-ndia",
    },
    responsibilities: "Club oversight, Strategic planning, Industry linkages",
    image: "/assets/images/leaders/Dr.-John-Ndia.webp",
  },
  {
    id: 2,
    name: "Victory Njeri",
    role: "Chairperson",
    email: "vnjeri@mut.ac.ke",
    bio: "Computer Science student and tech community builder with expertise in AI systems.",
    extendedBio: `
      Victory Njeri is a final year Computer Science student at Murang'a University of Technology specializing 
      in Artificial Intelligence. She has led three successful university hackathons and represented Kenya 
      in the 2023 Africa Tech Challenge. As Microsoft Learn Student Ambassador, she has organized over 20 tech 
      workshops reaching 500+ students. Her research focuses on ethical AI applications for African contexts.
    `,
    education: [
      "2021-present: B.Sc. Computer Science - Murang'a University of Technology",
      "2017-2020: Diploma in Software Engineering - Technical University of Kenya",
    ],
    achievements: [
      "1st Place - Africa Tech Challenge 2023",
      "Microsoft Learn Student Ambassador 2022-2024",
      "Google Developer Student Clubs Lead 2021",
    ],
    links: {
      linkedin: "https://linkedin.com/in/victory-njeri",
      github: "https://github.com/victory-njeri",
      twitter: "https://twitter.com/victory_njeri",
    },
    responsibilities:
      "Overall club leadership, Event coordination, External relations",
    image: "/assets/images/leaders/victory-njeri.jpeg",
  },
  {
    id: 3,
    name: "Allan Muhari",
    role: "Vice Chairperson",
    email: "amuhari@mut.ac.ke",
    bio: "Cloud Architect and Microsoft Certified Azure Solutions Expert.",
    extendedBio: `
      Allan Muhari is a third-year Software Engineering student with expertise in cloud architectures. 
      As a Microsoft Learn Student Ambassador, he has conducted 15+ cloud computing workshops and 
      led the migration of university systems to Azure. His research focuses on serverless architectures 
      for African SMEs.
    `,
    education: [
      "2020-present: B.Sc. Software Engineering - Murang'a University of Technology",
      "Azure Solutions Architect Expert Certification",
    ],
    certifications: [
      "Microsoft Certified: Azure Solutions Architect Expert",
      "AWS Certified Cloud Practitioner",
      "Google Cloud Associate Engineer",
    ],
    links: {
      linkedin: "https://linkedin.com/in/allan-muhari",
      twitter: "https://twitter.com/allan_muhari",
    },
    responsibilities:
      "Deputizing chairperson, Membership development, Workshop facilitation",
    image: "/assets/images/leaders/Allan-muhari.jpeg",
  },
  {
    id: 4,
    name: "Bridget Gitonga",
    role: "Secretary",
    email: "bgitonga@mut.ac.ke",
    bio: "IT student specializing in database systems and information management.",
    extendedBio: `
      Bridget Gitonga is a second-year IT student with exceptional organizational skills. 
      She maintains all club records and ensures smooth communication between members and leadership. 
      Bridget developed the club's digital record-keeping system that improved operational efficiency by 40%.
    `,
    education: [
      "2022-present: B.Sc. Information Technology - Murang'a University of Technology",
    ],
    achievements: [
      "Developed MUTC Digital Records System",
      "Oracle Database Certified Associate",
    ],
    links: {
      linkedin: "https://linkedin.com/in/bridget-gitonga",
      twitter: "https://twitter.com/bridget_gitonga",
    },
    responsibilities:
      "Documentation, Meeting minutes, Communication coordination",
    image: "/assets/images/leaders/bridget-gitonga.jpeg",
  },
  {
    id: 5,
    name: "Ruth Mutisya",
    role: "Treasurer",
    email: "rmutisya@mut.ac.ke",
    bio: "Business IT student with accounting certification and financial management expertise.",
    extendedBio: `
      Ruth Mutisya is a third-year Business IT student with a CPA-K certification. 
      She manages all club finances and has successfully secured sponsorships from 5 tech companies. 
      Ruth implemented a transparent financial reporting system that increased donor confidence by 60%.
    `,
    education: [
      "2021-present: B.Sc. Business IT - Murang'a University of Technology",
      "CPA-K Section 1-4 (Kenya Accountants and Secretaries National Board)",
    ],
    certifications: [
      "Certified Public Accountant (CPA-K)",
      "QuickBooks Certified User",
    ],
    links: {
      linkedin: "https://linkedin.com/in/ruth-mutisya",
      instagram: "https://instagram.com/ruth.mutisya",
    },
    responsibilities: "Budget management, Fundraising, Financial reporting",
    image: "/assets/images/leaders/ruth-mutisya.jpeg",
  },
  {
    id: 6,
    name: "Webster Ifedha",
    role: "Cyber Security Lead",
    email: "wifedha@mut.ac.ke",
    bio: "Certified Ethical Hacker and cybersecurity researcher with industry experience.",
    extendedBio: `
      Webster Ifedha is a cybersecurity professional with certifications in CEH, CISSP, and CompTIA Security+. 
      He has worked as a security analyst at Safaricom PLC and currently leads MUTC's cybersecurity track. 
      Webster organizes the annual Cyber Defense Challenge and has trained over 200 students in ethical hacking.
    `,
    education: [
      "2022: M.Sc. Cybersecurity - Africa Nazarene University",
      "2019: B.Sc. Computer Security - Jomo Kenyatta University",
    ],
    certifications: [
      "Certified Ethical Hacker (CEH)",
      "Certified Information Systems Security Professional (CISSP)",
      "CompTIA Security+",
    ],
    links: {
      linkedin: "https://linkedin.com/in/webster-ifedha",
      twitter: "https://twitter.com/webster_ifedha",
    },
    responsibilities:
      "Security workshops, CTF competitions, Security awareness",
    image: "/assets/images/leaders/webster-ifedha.jpeg",
  },
  {
    id: 7,
    name: "Manase Gunga",
    role: "UI/UX Lead",
    email: "mgunga@mut.ac.ke",
    bio: "Product Designer with 2 published apps on Play Store and design system expertise.",
    extendedBio: `
      Manase Gunga is a UI/UX specialist who has designed for Safaricom's M-Pesa app and other fintech solutions. 
      He runs the Design Thinking Lab at MUTC and mentors students in human-centered design. 
      Manase's design system framework reduced development time by 30% for student projects.
    `,
    education: [
      "2021-present: B.Sc. Human-Computer Interaction - Murang'a University of Technology",
    ],
    achievements: [
      "Google Certified UX Designer",
      "2 Published Mobile Applications",
      "Adobe Creative Educator",
    ],
    links: {
      linkedin: "https://linkedin.com/in/manase-gunga",
      behance: "https://behance.net/manase-gunga",
    },
    responsibilities: "Design workshops, Portfolio reviews, Design challenges",
    image: "/assets/images/leaders/manase-gunga.jpeg",
  },
  {
    id: 8,
    name: "Carolyne Githenduka",
    role: "Web Development Lead",
    email: "cgithenduka@mut.ac.ke",
    bio: "Full-stack JavaScript developer specializing in React and Node.js ecosystems.",
    extendedBio: `
      Carolyne Githenduka is a full-stack developer who has built solutions for 3 local startups. 
      She organizes the annual Web Dev Bootcamp that has trained 200+ students. Carolyne's open-source 
      contribution to the Kenya Open Data Initiative improved data accessibility for developers.
    `,
    education: [
      "2020-present: B.Sc. Software Development - Murang'a University of Technology",
    ],
    certifications: [
      "Google Developer Certification - Web Development",
      "AWS Certified Developer Associate",
    ],
    links: {
      linkedin: "https://linkedin.com/in/carolyne-githenduka",
      github: "https://github.com/carolyne-gith",
    },
    responsibilities: "Web workshops, Hackathons, Project mentorship",
    image: "/assets/images/leaders/carolyne-githenduka.jpeg",
  },
  {
    id: 9,
    name: "Stanley Amunze",
    role: "Mobile Apps Lead",
    email: "samunze@mut.ac.ke",
    bio: "Flutter expert with 5 published apps and cross-platform development experience.",
    extendedBio: `
      Stanley Amunze leads the Mobile Dev Circle that meets weekly to build and publish apps. 
      His health app 'AfyaTrack' won the 2023 Kenya Health Innovation Challenge. Stanley has 
      contributed to the Flutter Kenya community and mentored 50+ mobile developers.
    `,
    education: [
      "2019-present: B.Sc. Mobile Application Development - Murang'a University of Technology",
    ],
    achievements: [
      "1st Place - Kenya Health Innovation Challenge 2023",
      "5 Published Mobile Applications",
      "Flutter Kenya Community Lead",
    ],
    links: {
      linkedin: "https://linkedin.com/in/stanley-amunze",
      playStore: "https://play.google.com/stanley-amunze",
    },
    responsibilities:
      "Mobile workshops, App development, Play Store/App Store publishing",
    image: "/assets/images/leaders/stanley-amunze.jpeg",
  },
  {
    id: 10,
    name: "Paul Karanja",
    role: "Cloud Engineering Lead",
    email: "pkaranja@mut.ac.ke",
    bio: "AWS Certified Solutions Architect and multi-cloud infrastructure specialist.",
    extendedBio: `
      Paul Karanja runs the Cloud Study Group preparing students for cloud certifications. 
      He has deployed solutions across AWS, Azure and GCP for university projects. Paul's 
      research on cost-optimized cloud architectures for African startups has been featured 
      in 3 international conferences.
    `,
    education: [
      "2021-present: B.Sc. Cloud Computing - Murang'a University of Technology",
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Microsoft Certified: Azure Administrator",
      "Google Cloud Professional Architect",
    ],
    links: {
      linkedin: "https://linkedin.com/in/paul-karanja",
      twitter: "https://twitter.com/paul_karanja",
    },
    responsibilities: "Cloud workshops, Certification prep, Cloud challenges",
    image: "/assets/images/leaders/paul-karanja.jpeg",
  },
  {
    id: 11,
    name: "Evyonn Mbithe",
    role: "Power Platform Lead",
    email: "embithe@mut.ac.ke",
    bio: "Microsoft Power Platform Specialist with business automation expertise.",
    extendedBio: `
      Evyonn Mbithe is a low-code evangelist who has automated processes for 10+ campus departments. 
      She conducts monthly Power Platform workshops for business and IT students. Evyonn's student 
      attendance tracking solution reduced administrative workload by 70% for the Dean's office.
    `,
    education: [
      "2022-present: B.Sc. Business Information Systems - Murang'a University of Technology",
    ],
    certifications: [
      "Microsoft Power Platform Fundamentals",
      "Microsoft Power Apps + Dynamics 365 Developer",
      "Microsoft Certified: Data Analyst Associate",
    ],
    links: {
      linkedin: "https://linkedin.com/in/evyonn-mbithe",
      twitter: "https://twitter.com/evyonn_mbithe",
    },
    responsibilities:
      "Power Platform training, Business automation projects, Microsoft partnership",
    image: "/assets/images/leaders/evyonn-mbithe.jpeg",
  },
];
