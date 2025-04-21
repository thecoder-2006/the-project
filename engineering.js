const collegesData = [
    {
        id: "iit-bombay",
        name: "Indian Institute of Technology, Bombay",
        category: "iit",
        state: "maharashtra",
        location: "Powai, Mumbai, Maharashtra 400076, India",
        established: 1958,
        nirfRanking: 3,
        logo: "https://www.educationworld.in/wp-content/uploads/2018/10/IIT-Bombay_Logo_JPG.jpg",
        headerImage: "https://static.theprint.in/wp-content/uploads/2022/08/IIT-Bombay-main-building.jpg",
        type: ["Public Research University", "Indian Institute of Technology", "Autonomous Institute of National Importance"],
        campus: {
            size: "550 acres",
            setting: "Urban/Suburban",
            location: "Powai, Mumbai"
        },
        students: {
            total: "~11,000",
            undergraduate: "~5,500",
            postgraduate: "~5,500"
        },
        courses: ["Engineering & Technology", "Sciences", "Management", "Humanities", "Interdisciplinary Programs"],
        about: [
            "IIT Bombay, established in 1958, is a premier technical and research university in Mumbai, recognized globally for its engineering education and research.",
            "Located on a scenic 550-acre campus by Powai Lake, it offers state-of-the-art facilities and a vibrant academic environment."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "B.Des", duration: "4 years" },
                { name: "Dual Degree", duration: "5 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Aerospace Engineering",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science & Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Metallurgical Engineering & Materials Science",
                "Physics",
                "Chemistry",
                "Mathematics",
                "Design"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "18 hostels with modern amenities" },
                { name: "Sports", description: "Facilities for cricket, football, swimming, and more" },
                { name: "Cultural", description: "Clubs for music, dance, and drama" },
                { name: "Library", description: "Central library with extensive resources" }
            ],
            gallery: [
                { src: "https://th.bing.com/th/id/R.11dc8775e54e58eab0d47efa5f426221?rik=0m8MAwwKSSeE3g&riu=http%3a%2f%2fwww.eduvidya.com%2fadmin%2fUpload%2fInstitutes%2f635134676511299561_IIT+Bombay.jpg&ehk=II77RmwI1bFD6hHy0k9qUeEfXHOUb6HmhzWiBuim3Ms%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1", alt: "Main Building", caption: "IIT Bombay Main Building" },
                { src: "https://i0.wp.com/architecture.live/wp-content/uploads/2017/09/IIT-Library-Mumbai-SANJAY-UDAMALE-ARCHITECTS-6-Central-Library-IITB.jpg?ssl=1", alt: "Library", caption: "Central Library" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main",
                "Appear for JEE Advanced",
                "Participate in JoSAA counseling"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score + interview" },
                { program: "M.Sc", criteria: "JAM score" },
                { program: "MBA", criteria: "CAT score + interview" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science", closingRank: 68 },
            { discipline: "Electrical Engineering", closingRank: 113 },
            { discipline: "Mechanical Engineering", closingRank: 150 }
        ],
        researchInnovation: {
            centers: ["Centre for Environmental Science", "Centre for AI"],
            achievements: ["Pioneering nanotechnology research", "Indigenous satellite development"]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "650+" },
                { label: "PhD Holders", value: "90%" }
            ],
            description: "Highly qualified faculty engaged in cutting-edge research."
        },
        contact: {
            phone: "+91-22-2576-7022",
            email: "registrar@iitb.ac.in",
            address: "Powai, Mumbai, Maharashtra 400076, India",
            website: "https://www.iitb.ac.in"
        }
    },
    {
        id: "iit-delhi",
        name: "Indian Institute of Technology, Delhi",
        category: "iit",
        state: "delhi",
        location: "Hauz Khas, New Delhi, Delhi 110016, India",
        established: 1961,
        nirfRanking: 2,
        logo: "https://th.bing.com/th/id/OIP.-XLHCaDPnMwh4C9-rTOI-QHaHW?rs=1&pid=ImgDetMain",
        headerImage: "https://th.bing.com/th/id/OIP.kcyB-d7llRrS-FNiBy2PIAHaEU?rs=1&pid=ImgDetMain",
        type: ["Public Research University", "Indian Institute of Technology", "Autonomous Institute of National Importance"],
        campus: {
            size: "325 acres",
            setting: "Urban",
            location: "Hauz Khas, New Delhi"
        },
        students: {
            total: "~10,000",
            undergraduate: "~4,500",
            postgraduate: "~5,500"
        },
        courses: ["Engineering & Technology", "Sciences", "Management", "Design", "Interdisciplinary Programs"],
        about: [
            "The Indian Institute of Technology Delhi (IIT Delhi), established in 1961, is a public technical and research university recognized as an Institute of National Importance.",
            "Located in Hauz Khas, New Delhi, the 325-acre campus provides state-of-the-art facilities for academics, research, and student life, fostering a vibrant and innovative environment.",
            "IIT Delhi is renowned for producing world-class professionals and researchers, with a strong emphasis on engineering education and cutting-edge research."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "B.Des", duration: "4 years" },
                { name: "Dual Degree", duration: "5 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Des", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Computer Science & Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Civil Engineering",
                "Chemical Engineering",
                "Textile Technology",
                "Applied Mechanics",
                "Physics",
                "Chemistry",
                "Mathematics",
                "Design",
                "Management Studies"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "15 hostels for male and female students" },
                { name: "Sports", description: "Cricket ground, football field, swimming pool, tennis courts, and gymnasium" },
                { name: "Cultural", description: "Clubs for music, dance, literature, photography, and dramatics" },
                { name: "Technical", description: "Annual technical festival (Tryst), hackathons, and robotics competitions" },
                { name: "Healthcare", description: "On-campus hospital with 24/7 services" },
                { name: "Library", description: "Central Library with extensive physical and digital collections" }
            ],
            gallery: [
                { src: "https://home.iitd.ac.in/images/for-faculty/camp8.jpg", alt: "Main Building", caption: "IIT Delhi Campus - Main Building" },
                { src: "https://home.iitd.ac.in/images/for-faculty/lib2.jpg", alt: "Library", caption: "IIT Delhi Campus - Library" },
                { src: "https://indiaeducation.net/wp-content/uploads/2022/03/IMG15161.jpg", alt: "Hostel", caption: "IIT Delhi Campus - Hostel" },
                { src: "https://home.iitd.ac.in/public/storage/uploads/mittal_2_1648897631.jpg", alt: "Sports Complex", caption: "IIT Delhi Campus - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities at the institute"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score and/or interview" },
                { program: "M.Des", criteria: "CEED and interview" },
                { program: "M.Sc", criteria: "JAM or other entrance exams" },
                { program: "MBA", criteria: "CAT score and/or interview" },
                { program: "Ph.D", criteria: "Entrance test and/or interview" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science and Engineering", closingRank: 116 },
            { discipline: "Mathematics and Computing", closingRank: 332 },
            { discipline: "Electrical Engineering", closingRank: 625 },
            { discipline: "Engineering Physics", closingRank: 2560 },
            { discipline: "Chemical Engineering", closingRank: 2221 },
            { discipline: "Mechanical Engineering", closingRank: 1782 },
            { discipline: "Production and Industrial Engineering", closingRank: 3089 },
            { discipline: "Civil Engineering", closingRank: 4169 },
            { discipline: "Biotechnology and Biochemical Engineering", closingRank: 4849 },
            { discipline: "Textile Technology", closingRank: 6102 }
        ],
        researchInnovation: {
            centers: [
                "Centre for Artificial Intelligence",
                "Centre for Biomedical Engineering",
                "Centre for Rural Development and Technology",
                "Centre for Automotive Research and Tribology",
                "Centre for Sensors, Instrumentation and Cyber-Physical Systems",
                "Nanoscale Research Facility"
            ],
            achievements: [
                "Breakthroughs in artificial intelligence and machine learning",
                "Innovations in renewable energy technologies",
                "Advancements in biomedical devices and healthcare solutions",
                "Contributions to smart city and sustainable development projects",
                "Patents in nanotechnology and materials science"
            ]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "600+" },
                { label: "PhD Holders", value: "95%" },
                { label: "Research Projects", value: "200+" }
            ],
            description: "IIT Delhi has a distinguished faculty with expertise across various domains, many of whom are recognized globally for their contributions. They are actively involved in teaching, research, and consultancy, mentoring students and contributing to academic excellence."
        },
        contact: {
            phone: "+91-11-2659-1718",
            email: "registrar@iitd.ac.in",
            address: "Hauz Khas, New Delhi, Delhi 110016, India",
            website: "https://www.iitd.ac.in"
        }
    },
    {
        id: "iit-madras",
        name: "Indian Institute of Technology, Madras",
        category: "iit",
        state: "tamil-nadu",
        location: "Sardar Patel Road, Chennai, Tamil Nadu 600036, India",
        established: 1959,
        nirfRanking: 1,
        logo: "https://app.onlinedegree.iitm.ac.in/static/img/logo.png",
        headerImage: "https://th.bing.com/th/id/OIP.fv7-TEdyp5HrGs-mM3dmkwHaE8?rs=1&pid=ImgDetMain",
        type: ["Public Research University", "Indian Institute of Technology", "Autonomous Institute of National Importance"],
        campus: {
            size: "620 acres",
            setting: "Urban",
            location: "Adyar, Chennai"
        },
        students: {
            total: "~8,000",
            undergraduate: "~3,600",
            postgraduate: "~4,400"
        },
        courses: ["Engineering & Technology", "Sciences", "Management", "Humanities", "Interdisciplinary Programs"],
        about: [
            "The Indian Institute of Technology Madras (IIT Madras), established in 1959, is a premier public technical and research university recognized as an Institute of National Importance.",
            "Located in Chennai, the 620-acre campus is known for its lush greenery and state-of-the-art facilities, fostering innovation and academic excellence.",
            "IIT Madras is globally recognized for its contributions to research, education, and industry collaboration, consistently ranking as the top engineering institute in India."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "Dual Degree (B.Tech + M.Tech)", duration: "5 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "M.A", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Aerospace Engineering",
                "Applied Mechanics",
                "Biotechnology",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Engineering Design",
                "Mechanical Engineering",
                "Metallurgical and Materials Engineering",
                "Ocean Engineering",
                "Physics",
                "Chemistry",
                "Mathematics",
                "Humanities and Social Sciences",
                "Management Studies"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "22 hostels for male and female students with modern amenities" },
                { name: "Sports", description: "Facilities for cricket, football, hockey, swimming, and indoor sports" },
                { name: "Cultural", description: "Annual cultural festival (Saarang) and clubs for music, dance, and dramatics" },
                { name: "Technical", description: "Annual technical festival (Shaastra), hackathons, and innovation challenges" },
                { name: "Healthcare", description: "On-campus hospital with 24/7 medical services" },
                { name: "Library", description: "Central Library with over 700,000 volumes and digital resources" }
            ],
            gallery: [
                { src: "https://www.iitm.ac.in/sites/default/files/2020-03/2_0.jpg", alt: "Main Building", caption: "IIT Madras Campus - Main Building" },
                { src: "https://www.iitm.ac.in/sites/default/files/2020-03/library_0.jpg", alt: "Library", caption: "IIT Madras Campus - Library" },
                { src: "https://www.iitm.ac.in/sites/default/files/2020-03/hostel_0.jpg", alt: "Hostel", caption: "IIT Madras Campus - Hostel" },
                { src: "https://www.iitm.ac.in/sites/default/files/2020-03/sports_0.jpg", alt: "Sports Complex", caption: "IIT Madras Campus - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities at the institute"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score and/or interview" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score and/or interview" },
                { program: "M.A", criteria: "HSEE entrance exam" },
                { program: "Ph.D", criteria: "Entrance test and/or interview" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science and Engineering", closingRank: 148 },
            { discipline: "Electrical Engineering", closingRank: 844 },
            { discipline: "Mechanical Engineering", closingRank: 2321 },
            { discipline: "Chemical Engineering", closingRank: 3702 },
            { discipline: "Civil Engineering", closingRank: 5727 },
            { discipline: "Aerospace Engineering", closingRank: 3678 },
            { discipline: "Engineering Design", closingRank: 4433 },
            { discipline: "Metallurgical and Materials Engineering", closingRank: 5898 },
            { discipline: "Naval Architecture and Ocean Engineering", closingRank: 7509 },
            { discipline: "Biological Engineering", closingRank: 7046 }
        ],
        researchInnovation: {
            centers: [
                "Centre for Innovation (CFI)",
                "National Centre for Combustion Research and Development",
                "Centre for Computational Brain Research",
                "Centre for Artificial Intelligence and Robotics",
                "Robert Bosch Centre for Data Science and Artificial Intelligence",
                "Sudha Gopalakrishnan Brain Centre"
            ],
            achievements: [
                "Pioneering research in artificial intelligence and data science",
                "Innovations in renewable energy and sustainable technologies",
                "Advancements in healthcare and biomedical engineering",
                "Contributions to smart manufacturing and Industry 4.0",
                "Over 200 patents filed in diverse domains"
            ]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "550+" },
                { label: "PhD Holders", value: "98%" },
                { label: "Research Projects", value: "300+" }
            ],
            description: "IIT Madras boasts a highly qualified faculty with expertise in cutting-edge research and teaching, mentoring students and driving innovation through industry and academic collaborations."
        },
        contact: {
            phone: "+91-44-2257-4000",
            email: "registrar@iitm.ac.in",
            address: "Sardar Patel Road, Chennai, Tamil Nadu 600036, India",
            website: "https://www.iitm.ac.in"
        }
    },
    {
        id: "iit-kanpur",
        name: "Indian Institute of Technology, Kanpur",
        category: "iit",
        state: "uttar-pradesh",
        location: "Kalyanpur, Kanpur, Uttar Pradesh 208016, India",
        established: 1959,
        nirfRanking: 4,
        logo: "https://th.bing.com/th/id/OIP.Wojqm6aC4LbY07-7NIQq6gHaHQ?rs=1&pid=ImgDetMain",
        headerImage: "https://th.bing.com/th/id/R.ef6e69686d81da6f7a5df1a00ac866fc?rik=47kSqN19Uo1c7A&riu=http%3a%2f%2fassets.skyfilabs.com%2fimages%2fblog%2fcampusexploration-iitk.JPG&ehk=8Mz51Oe0pcrYZtboO6FIQYEBi%2flStyMtkopWRNIMmZQ%3d&risl=1&pid=ImgRaw&r=0",
        type: ["Public Research University", "Indian Institute of Technology", "Autonomous Institute of National Importance"],
        campus: {
            size: "1055 acres",
            setting: "Suburban",
            location: "Kanpur"
        },
        students: {
            total: "~8,000",
            undergraduate: "~4,000",
            postgraduate: "~4,000"
        },
        courses: ["Engineering & Technology", "Sciences", "Management", "Design", "Humanities"],
        about: [
            "IIT Kanpur, established in 1959, is known for its strong emphasis on research and innovation in engineering and sciences.",
            "Its 1055-acre campus in Kanpur is equipped with advanced facilities and a robust entrepreneurial ecosystem."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "B.S.", duration: "4 years" },
                { name: "Dual Degree", duration: "5 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Aerospace Engineering",
                "Biological Sciences & Bioengineering",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science & Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Materials Science",
                "Physics",
                "Chemistry",
                "Mathematics"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "12 hostels with modern amenities" },
                { name: "Sports", description: "Facilities for cricket, tennis, and more" },
                { name: "Cultural", description: "Events like Antaragni and Techkriti" },
                { name: "Library", description: "P.K. Kelkar Library with extensive resources" }
            ],
            gallery: [
                { src: "https://www.iitk.ac.in/images/campus.jpg", alt: "Main Building", caption: "IIT Kanpur Main Building" },
                { src: "https://www.iitk.ac.in/images/library.jpg", alt: "Library", caption: "P.K. Kelkar Library" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main",
                "Appear for J \#JEE Advanced",
                "Participate in JoSAA counseling"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score + interview" },
                { program: "M.Sc", criteria: "JAM score" },
                { program: "MBA", criteria: "CAT score + interview" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science", closingRank: 200 },
            { discipline: "Electrical Engineering", closingRank: 300 },
            { discipline: "Mechanical Engineering", closingRank: 400 }
        ],
        researchInnovation: {
            centers: ["National Centre for Flexible Electronics", "Centre for Lasers and Photonics"],
            achievements: ["Development of indigenous defense technologies", "Advancements in AI"]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "400+" },
                { label: "PhD Holders", value: "95%" }
            ],
            description: "Renowned faculty with significant contributions to global research."
        },
        contact: {
            phone: "+91-512-259-0151",
            email: "registrar@iitk.ac.in",
            address: "Kalyanpur, Kanpur, Uttar Pradesh 208016, India",
            website: "https://www.iitk.ac.in"
        }
    },
    {
        id: "iit-kharagpur",
        name: "Indian Institute of Technology, Kharagpur",
        category: "iit",
        state: "west-bengal",
        location: "Kharagpur, West Bengal 721302, India",
        established: 1951,
        nirfRanking: 5,
        logo: "https://collegesakha.com/wp-content/uploads/2021/02/jpg-1.jpg",
        headerImage: "https://wallpaperaccess.com/full/5824844.jpg",
        type: ["Public Research University", "Indian Institute of Technology", "Autonomous Institute of National Importance"],
        campus: {
          size: "2100 acres",
          setting: "Suburban",
          location: "Kharagpur"
        },
        students: {
          total: "~12,000",
          undergraduate: "~6,000",
          postgraduate: "~6,000"
        },
        courses: ["Engineering & Technology", "Sciences", "Architecture", "Management", "Law", "Humanities"],
        about: [
          "IIT Kharagpur, established in 1951, is the oldest IIT and a leader in engineering education and research in India.",
          "Its sprawling 2100-acre campus, one of the largest among IITs, fosters a vibrant academic and cultural environment with world-class facilities."
        ],
        academicPrograms: {
          programs: [
            { name: "B.Tech", duration: "4 years" },
            { name: "B.Arch", duration: "5 years" },
            { name: "Dual Degree", duration: "5 years" },
            { name: "M.Tech", duration: "2 years" },
            { name: "M.Sc", duration: "2 years" },
            { name: "MBA", duration: "2 years" },
            { name: "LLB", duration: "3 years" },
            { name: "Ph.D", duration: "Variable" }
          ],
          departments: [
            "Aerospace Engineering",
            "Agricultural & Food Engineering",
            "Architecture & Regional Planning",
            "Biotechnology",
            "Chemical Engineering",
            "Civil Engineering",
            "Computer Science & Engineering",
            "Electrical Engineering",
            "Electronics & Electrical Communication Engineering",
            "Mechanical Engineering",
            "Mining Engineering",
            "Ocean Engineering & Naval Architecture",
            "Physics",
            "Chemistry",
            "Mathematics",
            "Humanities & Social Sciences"
          ]
        },
        campusLife: {
          facilities: [
            { name: "Hostels", description: "22 hostels with modern amenities for boys and girls" },
            { name: "Sports", description: "Facilities for cricket, football, basketball, swimming, and more" },
            { name: "Cultural", description: "Major events like Spring Fest (cultural) and Kshitij (techno-management)" },
            { name: "Library", description: "Central Library with over 3 lakh volumes and extensive digital resources" }
          ],
          gallery: [
            { src: "https://www.iitkgp.ac.in/assets/images/main-building.jpg", alt: "Main Building", caption: "IIT Kharagpur Main Building" },
            { src: "https://www.iitkgp.ac.in/assets/images/library.jpg", alt: "Library", caption: "Central Library" }
          ]
        },
        admissionProcess: {
          undergraduate: [
            "Qualify JEE Main",
            "Appear for JEE Advanced",
            "Participate in JoSAA counseling"
          ],
          postgraduate: [
            { program: "M.Tech", criteria: "GATE score + interview" },
            { program: "M.Sc", criteria: "JAM score" },
            { program: "MBA", criteria: "CAT score + interview" },
            { program: "LLB", criteria: "Entrance exam + interview" }
          ]
        },
        cutOffRanks: [
          { discipline: "Computer Science", closingRank: 300 },
          { discipline: "Electrical Engineering", closingRank: 400 },
          { discipline: "Mechanical Engineering", closingRank: 500 }
        ],
        researchInnovation: {
          centers: [
            "Centre for Artificial Intelligence",
            "Centre for Railway Research",
            "P.K. Sinha Centre for Bioenergy"
          ],
          achievements: [
            "Development of autonomous vehicle technologies",
            "Innovations in sustainable agriculture and food processing"
          ]
        },
        facultyStaff: {
          stats: [
            { label: "Faculty", value: "700+" },
            { label: "PhD Holders", value: "90%" }
          ],
          description: "Distinguished faculty with expertise in diverse fields, contributing to global research and innovation."
        },
        contact: {
          phone: "+91-3222-255221",
          email: "registrar@iitkgp.ac.in",
          address: "Kharagpur, West Bengal 721302, India",
          website: "https://www.iitkgp.ac.in"
        }
      },
    {
        id: "nit-trichy",
        name: "National Institute of Technology, Trichy",
        category: "nit",
        state: "tamil-nadu",
        location: "Tiruchirappalli, Tamil Nadu 620015, India",
        established: 1964,
        nirfRanking: 9,
        logo: "https://th.bing.com/th/id/OIP.UmNl-UlKeOb96a4AEWl5sAAAAA?rs=1&pid=ImgDetMain",
        headerImage: "https://th.bing.com/th/id/OIP.U-VGKjm0WDEeug9AeQOerAHaEK?rs=1&pid=ImgDetMain",
        type: ["Public Technical University", "National Institute of Technology"],
        campus: {
            size: "800 acres",
            setting: "Urban",
            location: "Tiruchirappalli"
        },
        students: {
            total: "~6,500",
            undergraduate: "~3,500",
            postgraduate: "~3,000"
        },
        courses: ["Engineering", "Sciences", "Management", "Architecture"],
        about: [
            "NIT Trichy, established in 1964, is a leading technical institute known for its academic excellence and industry connections.",
            "The 800-acre campus offers modern facilities and a vibrant student life."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "B.Arch", duration: "5 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" }
            ],
            departments: [
                "Computer Science & Engineering",
                "Mechanical Engineering",
                "Civil Engineering",
                "Architecture"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "25 hostels for students" },
                { name: "Sports", description: "Cricket, football, and swimming facilities" }
            ],
            gallery: [
                { src: "https://www.nitt.edu/home/academics/departments/cse/cse1.jpg", alt: "Main Building", caption: "NIT Trichy Main Building" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main",
                "Participate in JoSAA counseling"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score + CCMT counseling" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science", closingRank: 714 },
            { discipline: "Mechanical Engineering", closingRank: 4512 }
        ],
        researchInnovation: {
            centers: ["Centre for AI and Data Science"],
            achievements: ["Innovations in sustainable energy"]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "350+" }
            ],
            description: "Expert faculty guiding academic excellence."
        },
        contact: {
            phone: "+91-431-250-3000",
            email: "deanac@nitt.edu",
            address: "Tiruchirappalli, Tamil Nadu 620015, India",
            website: "https://www.nitt.edu"
        }
    },
    {
        id: "nit-karnatak",
        name: "National Institute of Technology Karnataka (Surathkal)",
        category: "nit",
        state: "karnataka",
        location: "NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka 575025, India",
        established: 1960,
        nirfRanking: 13,
        logo: "https://nitk.ac.in/sites/default/files/nitk-logo.png",
        headerImage: "https://nitk.ac.in/sites/default/files/2021-03/main-campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "295 acres",
            setting: "Coastal Urban",
            location: "Surathkal, Mangalore"
        },
        students: {
            total: "~6,000",
            undergraduate: "~2,800",
            postgraduate: "~3,200"
        },
        courses: ["Engineering", "Sciences", "Management", "Humanities"],
        about: [
            "The National Institute of Technology Karnataka (NITK) Surathkal, established in 1960, is a premier technical institution recognized as an Institute of National Importance.",
            "Located on the western coast of India in Mangalore, the 295-acre campus offers a blend of natural beauty and advanced academic facilities.",
            "NITK is known for its strong engineering programs and research contributions, attracting students from across the country."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical and Electronics Engineering",
                "Mechanical Engineering",
                "Chemical Engineering",
                "Metallurgical and Materials Engineering",
                "Mining Engineering",
                "Applied Mechanics",
                "Mathematics",
                "Physics",
                "Chemistry",
                "Humanities"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, basketball, and swimming facilities" },
                { name: "Cultural", description: "Annual cultural fest (Incident) and various clubs" },
                { name: "Technical", description: "Annual technical fest (Engineer's Day) and workshops" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Well-stocked central library with digital resources" }
            ],
            gallery: [
                { src: "https://nitk.ac.in/sites/default/files/2021-03/academic-block.jpg", alt: "Academic Block", caption: "NITK Surathkal - Academic Block" },
                { src: "https://nitk.ac.in/sites/default/files/2021-03/library.jpg", alt: "Library", caption: "NITK Surathkal - Library" },
                { src: "https://nitk.ac.in/sites/default/files/2021-03/hostel.jpg", alt: "Hostel", caption: "NITK Surathkal - Hostel" },
                { src: "https://nitk.ac.in/sites/default/files/2021-03/sports.jpg", alt: "Sports Complex", caption: "NITK Surathkal - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-824-2474000",
            email: "registrar@nitk.ac.in",
            address: "NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka 575025, India",
            website: "https://www.nitk.ac.in"
        }
    },
    {
        id: "nit-roukela",
        name: "National Institute of Technology Rourkela (NITRKL)",
        category: "nit",
        state: "odisha",
        location: "Sector 1, Rourkela, Odisha 769008, India",
        established: 1961,
        nirfRanking: 16,
        logo: "https://nitp.ac.in/wp-content/uploads/2020/04/nitrkl-logo.png",
        headerImage: "https://nitp.ac.in/wp-content/uploads/2020/04/nitrkl-campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "650 acres",
            setting: "Urban",
            location: "Rourkela"
        },
        students: {
            total: "~5,500",
            undergraduate: "~2,500",
            postgraduate: "~3,000"
        },
        courses: ["Engineering", "Sciences", "Management", "Humanities"],
        about: [
            "The National Institute of Technology Rourkela (NITRKL), established in 1961, is a leading technical institution in eastern India.",
            "Spanning 650 acres in Rourkela, the campus is equipped with modern infrastructure and research facilities.",
            "NITRKL is renowned for its engineering education and contributions to industrial research and development."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Biotechnology",
                "Ceramic Engineering",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Metallurgical and Materials Engineering",
                "Mining Engineering",
                "Chemistry",
                "Mathematics",
                "Physics",
                "Humanities"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Several hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and indoor sports facilities" },
                { name: "Cultural", description: "Annual cultural fest (NITRUTSAV) and clubs" },
                { name: "Technical", description: "Annual technical fest (INNOVISION) and competitions" },
                { name: "Healthcare", description: "On-campus medical facility" },
                { name: "Library", description: "Extensive library with digital access" }
            ],
            gallery: [
                { src: "https://nitp.ac.in/wp-content/uploads/2020/04/nitrkl-academic.jpg", alt: "Academic Block", caption: "NITRKL - Academic Block" },
                { src: "https://nitp.ac.in/wp-content/uploads/2020/04/nitrkl-library.jpg", alt: "Library", caption: "NITRKL - Library" },
                { src: "https://nitp.ac.in/wp-content/uploads/2020/04/nitrkl-hostel.jpg", alt: "Hostel", caption: "NITRKL - Hostel" },
                { src: "https://nitp.ac.in/wp-content/uploads/2020/04/nitrkl-sports.jpg", alt: "Sports Complex", caption: "NITRKL - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-661-246-2001",
            email: "registrar@nitrkl.ac.in",
            address: "Sector 1, Rourkela, Odisha 769008, India",
            website: "https://www.nitrkl.ac.in"
        }
    },
    {
        id: "nit-waranga",
        name: "National Institute of Technology Warangal (NITW)",
        category: "nit",
        state: "telangana",
        location: "Warangal, Telangana 506004, India",
        established: 1959,
        nirfRanking: 11,
        logo: "https://www.nitw.ac.in/images/nitw-logo.png",
        headerImage: "https://www.nitw.ac.in/images/campus-main.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "250 acres",
            setting: "Urban",
            location: "Warangal"
        },
        students: {
            total: "~5,800",
            undergraduate: "~2,700",
            postgraduate: "~3,100"
        },
        courses: ["Engineering", "Sciences", "Management", "Humanities"],
        about: [
            "The National Institute of Technology Warangal (NITW), established in 1959, is a leading technical institution in southern India.",
            "The 250-acre campus in Warangal offers a serene environment with excellent academic and research facilities.",
            "NITW is recognized for its engineering education and significant contributions to technology and innovation."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Biotechnology",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Metallurgical and Materials Engineering",
                "Chemistry",
                "Mathematics",
                "Physics",
                "Humanities"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and tennis facilities" },
                { name: "Cultural", description: "Annual cultural fest (Spring Spree) and clubs" },
                { name: "Technical", description: "Annual technical fest (Technozion) and events" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with extensive resources" }
            ],
            gallery: [
                { src: "https://www.nitw.ac.in/images/academic-block.jpg", alt: "Academic Block", caption: "NITW - Academic Block" },
                { src: "https://www.nitw.ac.in/images/library.jpg", alt: "Library", caption: "NITW - Library" },
                { src: "https://www.nitw.ac.in/images/hostel.jpg", alt: "Hostel", caption: "NITW - Hostel" },
                { src: "https://www.nitw.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "NITW - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-870-245-9191",
            email: "registrar@nitw.ac.in",
            address: "Warangal, Telangana 506004, India",
            website: "https://www.nitw.ac.in"
        }
    },
    {
        id: "nit-calicut",
        name: "National Institute of Technology Calicut (NITC)",
        category: "nit",
        state: "kerala",
        location: "NIT Campus P.O., Calicut, Kerala 673601, India",
        established: 1961,
        nirfRanking: 23,
        logo: "https://www.nitc.ac.in/images/nitc-logo.png",
        headerImage: "https://www.nitc.ac.in/images/campus-view.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "300 acres",
            setting: "Rural",
            location: "Calicut"
        },
        students: {
            total: "~6,200",
            undergraduate: "~2,900",
            postgraduate: "~3,300"
        },
        courses: ["Engineering", "Sciences", "Management", "Architecture"],
        about: [
            "The National Institute of Technology Calicut (NITC), established in 1961, is a premier technical institution in Kerala.",
            "The 300-acre campus near Calicut offers a peaceful setting with modern academic and research facilities.",
            "NITC is known for its engineering programs and contributions to technological advancements."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Architecture",
                "Biotechnology",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Chemistry",
                "Mathematics",
                "Physics",
                "Humanities"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and aquatic sports facilities" },
                { name: "Cultural", description: "Annual cultural fest (Ragam) and clubs" },
                { name: "Technical", description: "Annual technical fest (Tathva) and events" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with digital resources" }
            ],
            gallery: [
                { src: "https://www.nitc.ac.in/images/academic.jpg", alt: "Academic Block", caption: "NITC - Academic Block" },
                { src: "https://www.nitc.ac.in/images/library.jpg", alt: "Library", caption: "NITC - Library" },
                { src: "https://www.nitc.ac.in/images/hostel.jpg", alt: "Hostel", caption: "NITC - Hostel" },
                { src: "https://www.nitc.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "NITC - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-495-228-6100",
            email: "registrar@nitc.ac.in",
            address: "NIT Campus P.O., Calicut, Kerala 673601, India",
            website: "https://www.nitc.ac.in"
        }
    },
    {
        id: "nit-nagpur",
        name: "Visvesvaraya National Institute of Technology (VNIT) Nagpur",
        category: "nit",
        state: "maharashtra",
        location: "South Ambazari Road, Nagpur, Maharashtra 440010, India",
        established: 1960,
        nirfRanking: 27,
        logo: "https://vnit.ac.in/images/vnit-logo.png",
        headerImage: "https://vnit.ac.in/images/campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "220 acres",
            setting: "Urban",
            location: "Nagpur"
        },
        students: {
            total: "~4,800",
            undergraduate: "~2,200",
            postgraduate: "~2,600"
        },
        courses: ["Engineering", "Sciences", "Architecture"],
        about: [
            "The Visvesvaraya National Institute of Technology (VNIT) Nagpur, established in 1960, is a leading technical institution in central India.",
            "The 220-acre campus in Nagpur provides a conducive environment for learning and research.",
            "VNIT is recognized for its engineering education and contributions to technological innovation."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Architecture and Planning",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Metallurgical and Materials Engineering",
                "Mining Engineering",
                "Applied Physics",
                "Applied Chemistry",
                "Applied Mathematics"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and gymnasium facilities" },
                { name: "Cultural", description: "Annual cultural fest and clubs" },
                { name: "Technical", description: "Annual technical fest and workshops" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with extensive collections" }
            ],
            gallery: [
                { src: "https://vnit.ac.in/images/academic-block.jpg", alt: "Academic Block", caption: "VNIT Nagpur - Academic Block" },
                { src: "https://vnit.ac.in/images/library.jpg", alt: "Library", caption: "VNIT Nagpur - Library" },
                { src: "https://vnit.ac.in/images/hostel.jpg", alt: "Hostel", caption: "VNIT Nagpur - Hostel" },
                { src: "https://vnit.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "VNIT Nagpur - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-712-222-2828",
            email: "registrar@vnit.ac.in",
            address: "South Ambazari Road, Nagpur, Maharashtra 440010, India",
            website: "https://www.vnit.ac.in"
        }
    },
    {
        id: "nit-jaipur",
        name: "Malaviya National Institute of Technology (MNIT) Jaipur",
        category: "nit",
        state: "rajasthan",
        location: "JLN Marg, Jaipur, Rajasthan 302017, India",
        established: 1963,
        nirfRanking: 37,
        logo: "https://www.mnit.ac.in/images/mnit-logo.png",
        headerImage: "https://www.mnit.ac.in/images/campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "325 acres",
            setting: "Urban",
            location: "Jaipur"
        },
        students: {
            total: "~5,000",
            undergraduate: "~2,300",
            postgraduate: "~2,700"
        },
        courses: ["Engineering", "Sciences", "Management", "Architecture"],
        about: [
            "The Malaviya National Institute of Technology (MNIT) Jaipur, established in 1963, is a leading technical institution in northern India.",
            "The 325-acre campus in Jaipur offers a blend of modern infrastructure and cultural heritage.",
            "MNIT is known for its engineering programs and research in diverse fields."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Architecture",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Metallurgical and Materials Engineering",
                "Chemistry",
                "Mathematics",
                "Physics",
                "Management Studies"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and tennis facilities" },
                { name: "Cultural", description: "Annual cultural fest (MUSE) and clubs" },
                { name: "Technical", description: "Annual technical fest (Technophilia) and events" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with digital resources" }
            ],
            gallery: [
                { src: "https://www.mnit.ac.in/images/academic.jpg", alt: "Academic Block", caption: "MNIT Jaipur - Academic Block" },
                { src: "https://www.mnit.ac.in/images/library.jpg", alt: "Library", caption: "MNIT Jaipur - Library" },
                { src: "https://www.mnit.ac.in/images/hostel.jpg", alt: "Hostel", caption: "MNIT Jaipur - Hostel" },
                { src: "https://www.mnit.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "MNIT Jaipur - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-141-252-9087",
            email: "registrar@mnit.ac.in",
            address: "JLN Marg, Jaipur, Rajasthan 302017, India",
            website: "https://www.mnit.ac.in"
        }
    },
    {
        id: "nit-kurukshetra",
        name: "National Institute of Technology Kurukshetra (NITKKR)",
        category: "nit",
        state: "haryana",
        location: "Kurukshetra, Haryana 136119, India",
        established: 1963,
        nirfRanking: 40,
        logo: "https://nitkkr.ac.in/images/nitkkr-logo.png",
        headerImage: "https://nitkkr.ac.in/images/campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "300 acres",
            setting: "Urban",
            location: "Kurukshetra"
        },
        students: {
            total: "~4,700",
            undergraduate: "~2,100",
            postgraduate: "~2,600"
        },
        courses: ["Engineering", "Sciences", "Management"],
        about: [
            "The National Institute of Technology Kurukshetra (NITKKR), established in 1963, is a leading technical institution in northern India.",
            "The 300-acre campus in Kurukshetra provides a blend of academic excellence and cultural significance.",
            "NITKKR is recognized for its engineering programs and research initiatives."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Civil Engineering",
                "Computer Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Production and Industrial Engineering",
                "Chemistry",
                "Mathematics",
                "Physics",
                "Humanities"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and gymnasium facilities" },
                { name: "Cultural", description: "Annual cultural fest and clubs" },
                { name: "Technical", description: "Annual technical fest and competitions" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with extensive resources" }
            ],
            gallery: [
                { src: "https://nitkkr.ac.in/images/academic.jpg", alt: "Academic Block", caption: "NITKKR - Academic Block" },
                { src: "https://nitkkr.ac.in/images/library.jpg", alt: "Library", caption: "NITKKR - Library" },
                { src: "https://nitkkr.ac.in/images/hostel.jpg", alt: "Hostel", caption: "NITKKR - Hostel" },
                { src: "https://nitkkr.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "NITKKR - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-1744-233-208",
            email: "registrar@nitkkr.ac.in",
            address: "Kurukshetra, Haryana 136119, India",
            website: "https://www.nitkkr.ac.in"
        }
    },
    {
        id: "nit-siliguri",
        name: "National Institute of Technology Silchar (NITS)",
        category: "nit",
        state: "assam",
        location: "Silchar, Assam 788010, India",
        established: 1967,
        nirfRanking: 49,
        logo: "https://www.nits.ac.in/images/nits-logo.png",
        headerImage: "https://www.nits.ac.in/images/campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "600 acres",
            setting: "Rural",
            location: "Silchar"
        },
        students: {
            total: "~4,000",
            undergraduate: "~1,800",
            postgraduate: "~2,200"
        },
        courses: ["Engineering", "Sciences", "Management"],
        about: [
            "The National Institute of Technology Silchar (NITS), established in 1967, is a leading technical institution in northeast India.",
            "The 600-acre campus in Silchar offers a serene environment with modern facilities.",
            "NITS is known for its engineering education and research in regional development."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Chemistry",
                "Mathematics",
                "Physics"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and indoor sports facilities" },
                { name: "Cultural", description: "Annual cultural fest and clubs" },
                { name: "Technical", description: "Annual technical fest and events" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with digital resources" }
            ],
            gallery: [
                { src: "https://www.nits.ac.in/images/academic.jpg", alt: "Academic Block", caption: "NITS - Academic Block" },
                { src: "https://www.nits.ac.in/images/library.jpg", alt: "Library", caption: "NITS - Library" },
                { src: "https://www.nits.ac.in/images/hostel.jpg", alt: "Hostel", caption: "NITS - Hostel" },
                { src: "https://www.nits.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "NITS - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-3842-242-273",
            email: "registrar@nits.ac.in",
            address: "Silchar, Assam 788010, India",
            website: "https://www.nits.ac.in"
        }
    },
    {
        id: "nit-durgapur",
        name: "National Institute of Technology Durgapur (NITDGP)",
        category: "nit",
        state: "west-bengal",
        location: "Mahatma Gandhi Avenue, Durgapur, West Bengal 713209, India",
        established: 1960,
        nirfRanking: 45,
        logo: "https://nitdgp.ac.in/images/nitdgp-logo.png",
        headerImage: "https://nitdgp.ac.in/images/campus.jpg",
        type: ["Public Technical University", "National Institute of Technology", "Institute of National Importance"],
        campus: {
            size: "187 acres",
            setting: "Urban",
            location: "Durgapur"
        },
        students: {
            total: "~4,500",
            undergraduate: "~2,000",
            postgraduate: "~2,500"
        },
        courses: ["Engineering", "Sciences", "Management"],
        about: [
            "The National Institute of Technology Durgapur (NITDGP), established in 1960, is a leading technical institution in eastern India.",
            "The 187-acre campus in Durgapur offers modern facilities and a vibrant academic environment.",
            "NITDGP is recognized for its engineering programs and research contributions."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "M.Tech", duration: "2 years" },
                { name: "M.Sc", duration: "2 years" },
                { name: "MBA", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Biotechnology",
                "Chemical Engineering",
                "Civil Engineering",
                "Computer Science and Engineering",
                "Electrical Engineering",
                "Electronics and Communication Engineering",
                "Mechanical Engineering",
                "Metallurgical and Materials Engineering",
                "Chemistry",
                "Mathematics",
                "Physics",
                "Management Studies"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels for male and female students" },
                { name: "Sports", description: "Cricket, football, and gymnasium facilities" },
                { name: "Cultural", description: "Annual cultural fest (Abhivyakti) and clubs" },
                { name: "Technical", description: "Annual technical fest (Aakaar) and events" },
                { name: "Healthcare", description: "On-campus health center" },
                { name: "Library", description: "Central library with digital resources" }
            ],
            gallery: [
                { src: "https://nitdgp.ac.in/images/academic.jpg", alt: "Academic Block", caption: "NITDGP - Academic Block" },
                { src: "https://nitdgp.ac.in/images/library.jpg", alt: "Library", caption: "NITDGP - Library" },
                { src: "https://nitdgp.ac.in/images/hostel.jpg", alt: "Hostel", caption: "NITDGP - Hostel" },
                { src: "https://nitdgp.ac.in/images/sports.jpg", alt: "Sports Complex", caption: "NITDGP - Sports Complex" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main examination with required percentile",
                "Appear for JEE Advanced examination",
                "Qualify JEE Advanced with required rank",
                "Participate in JoSAA counseling for seat allocation",
                "Complete admission formalities"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" },
                { program: "M.Sc", criteria: "JAM entrance exam" },
                { program: "MBA", criteria: "CAT score" },
                { program: "Ph.D", criteria: "Entrance test and interview" }
            ]
        },
        contact: {
            phone: "+91-343-254-6397",
            email: "registrar@nitdgp.ac.in",
            address: "Mahatma Gandhi Avenue, Durgapur, West Bengal 713209, India",
            website: "https://www.nitdgp.ac.in"
        }
    },
    {
        id: "bit-mesra",
        name: "Birla Institute of Technology, Mesra",
        category: "gfti",
        state: "jharkhand",
        location: "Mesra, Ranchi, Jharkhand 835215, India",
        established: 1955,
        nirfRanking: 46,
        logo: "https://www.bitmesra.ac.in/images/BIT_Mesra_Logo.png",
        headerImage: "https://www.campusoption.com/images/colleges/gallery/17_05_16_021534_413089-bit-mesra-website.jpg",
        type: ["Deemed University", "Government-Funded Technical Institute"],
        campus: {
            size: "780 acres",
            setting: "Suburban",
            location: "Mesra, Ranchi"
        },
        students: {
            total: "~12,000",
            undergraduate: "~8,000",
            postgraduate: "~4,000"
        },
        courses: ["Engineering", "Sciences", "Management", "Architecture"],
        about: [
            "BIT Mesra, founded in 1955, is a premier technical institute known for its strong academic programs and industry linkages.",
            "The 780-acre campus provides a serene environment with modern facilities."
        ],
        academicPrograms: {
            programs: [
                { name: "B.Tech", duration: "4 years" },
                { name: "B.Arch", duration: "5 years" },
                { name: "MBA", duration: "2 years" }
            ],
            departments: [
                "Computer Science & Engineering",
                "Mechanical Engineering",
                "Architecture"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Multiple hostels with amenities" },
                { name: "Sports", description: "Facilities for various sports" }
            ],
            gallery: [
                { src: "https://www.campusoption.com/images/colleges/gallery/17_05_16_021534_413089-bit-mesra-website.jpg", alt: "Campus", caption: "BIT Mesra Campus" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify JEE Main",
                "Participate in JoSAA/CSAB counseling"
            ],
            postgraduate: [
                { program: "M.Tech", criteria: "GATE score" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science", closingRank: 3000 },
            { discipline: "Mechanical Engineering", closingRank: 10000 }
        ],
        researchInnovation: {
            centers: ["Centre for Renewable Energy"],
            achievements: ["Patents in materials science"]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "400+" }
            ],
            description: "Dedicated faculty with research expertise."
        },
        contact: {
            phone: "+91-651-2275444",
            email: "registrar@bitmesra.ac.in",
            address: "Mesra, Ranchi, Jharkhand 835215, India",
            website: "https://www.bitmesra.ac.in"
        }
    },
    {
        id: "jadavpur-university",
        name: "Jadavpur University",
        category: "state",
        state: "west-bengal",
        location: "Kolkata, West Bengal 700032, India",
        established: 1955,
        nirfRanking: 4,
        logo: "https://www.nicepng.com/png/detail/832-8323858_jadavpur-university-jadavpur-university-logo.png",
        headerImage: "https://images.indianexpress.com/2017/05/jadavpur.jpg",
        type: ["State University", "Public Research University"],
        campus: {
            size: "58 acres",
            setting: "Urban",
            location: "Kolkata"
        },
        students: {
            total: "~11,000",
            undergraduate: "~6,000",
            postgraduate: "~5,000"
        },
        courses: ["Engineering", "Sciences", "Arts", "Architecture"],
        about: [
            "Jadavpur University, established in 1955, is a leading state university known for its academic excellence and research contributions.",
            "Located in Kolkata, it offers a vibrant urban campus with comprehensive facilities."
        ],
        academicPrograms: {
            programs: [
                { name: "B.E.", duration: "4 years" },
                { name: "M.E.", duration: "2 years" },
                { name: "Ph.D", duration: "Variable" }
            ],
            departments: [
                "Computer Science & Engineering",
                "Electrical Engineering",
                "Mechanical Engineering"
            ]
        },
        campusLife: {
            facilities: [
                { name: "Hostels", description: "Accommodation for students" },
                { name: "Library", description: "Extensive academic resources" }
            ],
            gallery: [
                { src: "https://images.indianexpress.com/2017/05/jadavpur.jpg", alt: "Campus", caption: "Jadavpur University Campus" }
            ]
        },
        admissionProcess: {
            undergraduate: [
                "Qualify WBJEE",
                "Participate in counseling"
            ],
            postgraduate: [
                { program: "M.E.", criteria: "GATE score and/or interview" },
                { program: "Ph.D", criteria: "Entrance test and/or interview" }
            ]
        },
        cutOffRanks: [
            { discipline: "Computer Science & Engineering", closingRank: 150 },
            { discipline: "Electrical Engineering", closingRank: 300 },
            { discipline: "Mechanical Engineering", closingRank: 450 }
        ],
        researchInnovation: {
            centers: ["Centre for Advanced Studies", "Centre for Computer Science"],
            achievements: ["Innovations in renewable energy", "Advancements in AI research"]
        },
        facultyStaff: {
            stats: [
                { label: "Faculty", value: "700+" },
                { label: "PhD Holders", value: "85%" }
            ],
            description: "Highly qualified faculty with expertise in diverse fields."
        },
        contact: {
            phone: "+91-33-2457-2227",
            email: "registrar@jadavpuruniversity.in",
            address: "Kolkata, West Bengal 700032, India",
            website: "http://www.jaduniv.edu.in"
        }
    }
    // Add more colleges here following the same structure
];

function generateCollegeDetails(collegeId) {
    const college = collegesData.find(c => c.id === collegeId);
    if (!college) {
        alert("College details not found.");
        return;
    }

    const detailsHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${college.name} - Details</title>
    <style>
        :root {
            --main-bg-color: #0a192f;
            --card-bg-color: #112240;
            --accent-color: #64ffda;
            --text-primary: #e6f1ff;
            --text-secondary: #a8b2d1;
            --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
            --transition-speed: 0.3s;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background-color: var(--main-bg-color);
            color: var(--text-primary);
            min-height: 100vh;
        }
        header {
            background-color: rgba(17, 34, 64, 0.9);
            padding: 15px 20px;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .back-button {
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
            display: flex;
            align-items: center;
        }
        .back-button:hover {
            color: #80ffdf;
            transform: translateX(-3px);
        }
        .back-button svg {
            margin-right: 8px;
        }
        .college-header {
            padding: 60px 20px;
            background: linear-gradient(to right, #0e2143, #172a45);
            position: relative;
            overflow: hidden;
        }
        .college-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('${college.headerImage}') center/cover;
            opacity: 0.15;
            z-index: 0;
        }
        .college-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 40px;
        }
        .college-logo {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background-color: white;
            padding: 10px;
            box-shadow: var(--card-shadow);
            border: 3px solid var(--accent-color);
        }
        .college-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 50%;
        }
        .college-title h1 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            color: var(--text-primary);
        }
        .college-title p {
            color: var(--text-secondary);
            font-size: 1.2rem;
            margin-bottom: 5px;
        }
        .ranking-badge {
            background-color: var(--accent-color);
            color: var(--main-bg-color);
            padding: 5px 15px;
            border-radius: 20px;
            display: inline-block;
            margin-top: 10px;
        }
        .quick-info {
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 20px;
        }
        .info-box {
            flex: 1 1 200px;
            background-color: var(--card-bg-color);
            padding: 20px;
            border-radius: 12px;
            box-shadow: var(--card-shadow);
        }
        .info-box h3 {
            margin-bottom: 15px;
            color: var(--accent-color);
        }
        .info-box p {
            color: var(--text-secondary);
        }
        .college-content {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
        }
        .content-section {
            background-color: var(--card-bg-color);
            padding: 25px;
            border-radius: 12px;
            box-shadow: var(--card-shadow);
            margin-bottom: 30px;
        }
        .content-section h2 {
            color: var(--accent-color);
            margin-bottom: 20px;
        }
        .content-section p, .content-section li {
            color: var(--text-secondary);
            line-height: 1.8;
            margin-bottom: 15px;
        }
        .course-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 15px;
        }
        .course-box {
            background-color: rgba(30, 48, 80, 0.6);
            padding: 15px;
            border-radius: 8px;
            border-left: 3px solid var(--accent-color);
        }
        .course-box h4 {
            color: var(--text-primary);
        }
        .course-box p {
            color: var(--accent-color);
        }
        .campus-gallery {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        .gallery-img img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            border-radius: 8px;
        }
        .cutoff-table {
            width: 100%;
            border-collapse: collapse;
        }
        .cutoff-table th, .cutoff-table td {
            padding: 10px;
            border-bottom: 1px solid #233554;
            color: var(--text-secondary);
        }
        .cutoff-table th {
            color: var(--accent-color);
        }
        .sidebar-section {
            background-color: var(--card-bg-color);
            padding: 25px;
            border-radius: 12px;
            box-shadow: var(--card-shadow);
        }
        .contact-info li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: var(--text-secondary);
        }
        .contact-info svg {
            margin-right: 10px;
            color: var(--accent-color);
        }
        .cta-button {
            display: block;
            background-color: var(--accent-color);
            color: var(--main-bg-color);
            text-align: center;
            padding: 12px;
            border-radius: 8px;
            text-decoration: none;
        }
        footer {
            text-align: center;
            padding: 30px 20px;
            color: var(--text-secondary);
            background-color: rgba(10, 25, 47, 0.8);
        }
        @media (max-width: 992px) {
            .college-content {
                grid-template-columns: 1fr;
            }
            .college-container {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <header>
        <a href="index.html" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Directory
        </a>
        <h3>Indian Colleges Directory</h3>
    </header>
    <div class="college-header">
        <div class="college-container">
            <div class="college-logo">
                <img src="${college.logo}" alt="${college.name} Logo">
            </div>
            <div class="college-title">
                <h1>${college.name}</h1>
                <p>${college.location}</p>
                <p>Established: ${college.established}</p>
                <div class="ranking-badge">NIRF Ranking: #${college.nirfRanking}</div>
            </div>
        </div>
    </div>
    <div class="quick-info">
        <div class="info-box">
            <h3>Type</h3>
            ${college.type.map(t => `<p>${t}</p>`).join('')}
        </div>
        <div class="info-box">
            <h3>Campus</h3>
            <p>${college.campus.size}</p>
            <p>${college.campus.setting}</p>
        </div>
        <div class="info-box">
            <h3>Students</h3>
            <p>Total: ${college.students.total}</p>
        </div>
        <div class="info-box">
            <h3>Courses</h3>
            ${college.courses.map(c => `<p>${c}</p>`).join('')}
        </div>
    </div>
    <div class="college-content">
        <div class="main-content">
            <div class="content-section">
                <h2>About</h2>
                ${college.about.map(p => `<p>${p}</p>`).join('')}
            </div>
            <div class="content-section">
                <h2>Academic Programs</h2>
                <div class="course-container">
                    ${college.academicPrograms.programs.map(p => `
                        <div class="course-box">
                            <h4>${p.name}</h4>
                            <p>${p.duration}</p>
                        </div>
                    `).join('')}
                </div>
                <h3>Departments</h3>
                <ul>
                    ${college.academicPrograms.departments.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
            <div class="content-section">
                <h2>Campus Life</h2>
                <ul>
                    ${college.campusLife.facilities.map(f => `<li><strong>${f.name}:</strong> ${f.description}</li>`).join('')}
                </ul>
                <h3>Gallery</h3>
                <div class="campus-gallery">
                    ${college.campusLife.gallery.map(g => `
                        <div class="gallery-img">
                            <img src="${g.src}" alt="${g.alt}">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="content-section">
                <h2>Admission Process</h2>
                <h3>Undergraduate</h3>
                <ul>
                    ${college.admissionProcess.undergraduate.map(step => `<li>${step}</li>`).join('')}
                </ul>
                <h3>Postgraduate</h3>
                <ul>
                    ${college.admissionProcess.postgraduate.map(pg => `<li><strong>${pg.program}:</strong> ${pg.criteria}</li>`).join('')}
                </ul>
            </div>
            <div class="content-section">
                <h2>Cut-Off Ranks</h2>
                <table class="cutoff-table">
                    <thead>
                        <tr>
                            <th>Discipline</th>
                            <th>Closing Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${college.cutOffRanks.map(r => `
                            <tr>
                                <td>${r.discipline}</td>
                                <td>${r.closingRank}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <div class="content-section">
                <h2>Research & Innovation</h2>
                <h3>Centers</h3>
                <ul>
                    ${college.researchInnovation.centers.map(c => `<li>${c}</li>`).join('')}
                </ul>
                <h3>Achievements</h3>
                <ul>
                    ${college.researchInnovation.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
            <div class="content-section">
                <h2>Faculty & Staff</h2>
                <p>${college.facultyStaff.description}</p>
                <ul>
                    ${college.facultyStaff.stats.map(s => `<li><strong>${s.label}:</strong> ${s.value}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="sidebar">
            <div class="sidebar-section">
                <h3>Contact Information</h3>
                <ul class="contact-info">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        ${college.contact.phone}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        ${college.contact.email}
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${college.contact.address}
                    </li>
                </ul>
                <a href="${college.contact.website}" target="_blank" class="cta-button">Visit Website</a>
            </div>
        </div>
    </div>
    <footer>
        <p>Indian Colleges Directory © 2025</p>
        <p>Information is for general purposes. Verify details with official sources.</p>
    </footer>
</body>
</html>
    `;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(detailsHtml);
    newWindow.document.close();
}

document.addEventListener('DOMContentLoaded', () => {
    const collegeBoxes = document.querySelectorAll('.college-box');
    collegeBoxes.forEach(box => {
        box.addEventListener('click', (e) => {
            e.preventDefault();
            const collegeName = box.querySelector('p').textContent.trim();
            const collegeId = collegeName.toLowerCase().replace(/\s+/g, '-').replace(/\(.*\)/, '').replace(/,/g, '');
            generateCollegeDetails(collegeId);
        });
    });
});