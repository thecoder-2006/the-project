
const scholarships = [
    {
        id: "INSPIRE",
        title: "INSPIRE Scholarship",
        criteria: "Top 1% in Class 12 board exams in natural sciences. Pursuing B.Sc./Integrated M.Sc. in basic/natural sciences. Age 17-22. Admission to recognized Indian institutions.",
        amount: "₹80,000/year (₹60,000 scholarship + ₹20,000 mentorship).",
        documents: "Class 12 mark sheet, Admission proof, Bank details, Caste certificate (if applicable).",
        details: "Focuses on promoting research in basic sciences. Mentorship grant is for summer projects/training. Continuation of scholarship depends on academic performance.",
        applyLink: "https://www.online-inspire.gov.in/"
    },
    {
        id: "PMRF",
        title: "Prime Minister's Research Fellowship (PMRF)",
        criteria: "Ph.D. in STEM from IITs, IISERs, IIITs, NITs, etc. Excellent academic record (CGPA/percentage). GATE score or equivalent. Direct entry and Lateral entry streams.",
        amount: "₹70,000-₹80,000/month + ₹2 lakh/year research grant.",
        documents: "Academic transcripts, GATE score, Research proposal, Recommendation letters, Admission proof.",
        details: "Aims to attract talent for research. Fellows expected to contribute to national research goals. Rigorous selection process.",
        applyLink: "https://www.pmrf.in/"
    },
    {
        id: "CSSS",
        title: "Central Sector Scheme of Scholarship for College and University Students (CSSS)",
        criteria: "Above 80th percentile in Class 12. Family income < ₹8 lakh/year. Regular UG/PG students.",
        amount: "₹10,000/year (UG), ₹20,000/year (PG).",
        documents: "Class 12 mark sheet, Income certificate, Bank details, Caste certificate (if applicable).",
        details: "Focuses on financially needy, meritorious students. Renewed annually based on academic performance.",
        applyLink: "https://www.myscheme.gov.in/schemes/csss-cus"
    },
    {
        id: "NMMS",
        title: "National Means-cum-Merit Scholarship Scheme (NMMS)",
        criteria: "Class 9 students in govt./aided schools. 55% in Class 8 (50% for SC/ST). Family income < ₹1.5 lakh/year.",
        amount: "₹12,000/year.",
        documents: "Class 8 mark sheet, Income certificate, Caste certificate (if applicable), School verification.",
        details: "Aims to reduce dropout rates. State-level selection exam.",
        applyLink: "https://scholarships.gov.in/"
    },
    {
        id: "NTSE",
        title: "Scholarship of National Talent Search Scheme (NTSE)",
        criteria: "Class 10 students. Two-stage selection exam by NCERT.",
        amount: "₹1,250/month (Class 11-12), ₹2,000/month (UG/PG).",
        documents: "Class 10 admit card, School verification, Caste certificate (if applicable).",
        details: "Identifies and nurtures talent. Highly competitive.",
        applyLink: "https://ncert.nic.in/national-talent-examination.php"
    },
    {
        id: "Pragati",
        title: "AICTE Pragati Scholarship for Girls",
        criteria: "Girl students in 1st-year diploma/degree technical courses. Family income < ₹8 lakh/year. Maximum of 2 girls per family.",
        amount: "₹50,000/year.",
        documents: "Class 12/diploma certificate, Income certificate, Admission proof, Aadhar card.",
        details: "Promotes girls' education in technical fields.",
        applyLink: "https://yashasvi.aicte.gov.in/login.php?r=session_invalid"
    },
    {
        id: "HDFC",
        title: "HDFC Educational Crisis Scholarship Support",
        criteria: "Students Class 6-PG facing family crises. Varies by crisis.",
        amount: "Varies.",
        documents: "Academic records, Crisis proof, Income proof.",
        details: "Provides emergency financial aid.",
        applyLink: "https://www.hdfcbankecss.com/index.html"
    },
    {
        id: "FAEA",
        title: "Foundation for Academic Excellence and Access (FAEA) Scholarship",
        criteria: "Economically disadvantaged students. Good academic record. UG in arts, commerce, science.",
        amount: "Varies.",
        documents: "Academic records, Income certificate, Caste certificate (if applicable), Admission proof.",
        details: "Focuses on rural students.",
        applyLink: "https://www.faeaindia.org/"
    },
    {
        id: "IndianOil",
        title: "Indian Oil Academic Scholarships",
        criteria: "Engineering, MBBS, MBA students. Merit-based.",
        amount: "Varies.",
        documents: "Academic records, Admission proof, Income proof.",
        details: "Various scholarship programs are offered.",
        applyLink: "https://iocl.com/Scholarships"
    },
    {
        id: "AdityaBirla",
        title: "Aditya Birla Scholarship",
        criteria: "Professional courses at premier institutions. Merit and leadership qualities.",
        amount: "Varies.",
        documents: "Academic records, Admission proof, Recommendation letters, Essays.",
        details: "Highly prestigious.",
        applyLink: "https://www.adityabirlascholars.net/"
    },
    {
        id: "Sashakt",
        title: "The Sashakt Scholarship",
        criteria: "Varies by contributing company.",
        amount: "₹8,00,000 per annum.",
        documents: "Varies by contributing company.",
        details: "Many companies contribute to this scholarship.",
        applyLink: "https://www.sashaktscholarship.org/"
    },
    {
        id: "PostMatric",
        title: "Post-Matric Scholarship for Disabled, Maharashtra",
        criteria: "Disabled students who are permanent residents of Maharashtra. Pursuing post-matriculation studies.",
        amount: "Varies depending on the course of study.",
        documents: "Valid disability certificate, Residence proof, Academic mark sheets, Income certificate, Caste certificate (if applicable), Aadhar card.",
        details: "Aims to provide financial assistance to disabled students.",
        applyLink: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A054A8D0DAA702B64"
    },
    {
        id: "MeritDelhi",
        title: "Merit Scholarship for SC/ST/OBC/Minority Students, Delhi",
        criteria: "Students belonging to SC, ST, OBC, or minority communities. Permanent residents of Delhi.",
        amount: "Varies depending on the category of the student.",
        documents: "Caste or community certificate, Residence proof, Academic mark sheets, Income certificate, Aadhar card.",
        details: "Aims to provide financial assistance to students from disadvantaged communities.",
        applyLink: "https://scstwelfare.delhi.gov.in/"
    },
    {
        id: "RajarshiShahu",
        title: "Rajarshi Shahu Maharaj Scholarship, Maharashtra",
        criteria: "Students belonging to economically backward classes in Maharashtra.",
        amount: "Varies depending on the course of study.",
        documents: "Income certificate, Residence proof, Academic mark sheets, Caste certificate (if applicable), Aadhar card.",
        details: "Aims to provide financial assistance to students from economically disadvantaged backgrounds.",
        applyLink: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3160277BCF2AA7C6"
    },
    {
        id: "StateMerit",
        title: "State Merit Scholarship, Kerala",
        criteria: "Meritorious students who are permanent residents of Kerala.",
        amount: "Varies depending on the course of study.",
        documents: "Residence proof, Academic mark sheets, Income certificate (if applicable), Aadhar card.",
        details: "Aims to reward and support meritorious students in Kerala.",
        applyLink: "https://highereducation.kerala.gov.in/"
    },
    {
        id: "SwamiVivekananda",
        title: "Swami Vivekananda Merit-cum-Means Scholarship for Minorities, West Bengal",
        criteria: "Students belonging to minority communities who are permanent residents of West Bengal.",
        amount: "Varies depending on the course of study.",
        documents: "Minority community certificate, Residence proof, Academic mark sheets, Income certificate, Aadhar card.",
        details: "Aims to provide financial assistance to minority students in West Bengal.",
        applyLink: "https://svmcm.wb.gov.in/"
    },
    {
        id: "Fulbright",
        title: "Fulbright Program (USA)",
        criteria: "Varies by country and program. Generally requires a bachelor's degree, strong academic record, and often language proficiency.",
        amount: "Varies, typically covers tuition, living expenses, travel, and health insurance.",
        documents: "Application form, Academic transcripts, Letters of recommendation, Statement of purpose/study objective.",
        details: "Aims to promote cultural exchange.",
        applyLink: "https://foreign.fulbrightonline.org/"
    },
    {
        id: "Chevening",
        title: "Chevening Scholarships (UK)",
        criteria: "Must be a citizen of a Chevening-eligible country. Must have an undergraduate degree and at least two years of work experience.",
        amount: "Covers tuition fees, living expenses, and a return flight.",
        documents: "Application form, Academic transcripts, References, Unconditional UK university offer.",
        details: "Aims to develop global leaders.",
        applyLink: "https://www.chevening.org/apply/"
    },
    {
        id: "ErasmusMundus",
        title: "Erasmus Mundus Joint Masters Degrees (European Union)",
        criteria: "Varies by program. Generally requires a bachelor's degree and strong academic record.",
        amount: "Covers tuition fees, living expenses, and travel.",
        documents: "Application form, Academic transcripts, Letters of recommendation.",
        details: "Promotes international cooperation in higher education.",
        applyLink: "https://www.eacea.ec.europa.eu/erasmus-plus/actions/erasmus-mundus_en"
    },
    {
        id: "Commonwealth",
        title: "Commonwealth Scholarships (UK)",
        criteria: "Must be a citizen of a Commonwealth country. Must have a bachelor's degree and intend to return to your home country after the scholarship.",
        amount: "Covers tuition fees, living expenses, and a return flight.",
        documents: "Application form, Academic transcripts, References.",
        details: "Aims to support students from low and middle-income Commonwealth countries.",
        applyLink: "https://cscuk.fcdo.gov.uk/apply/"
    },
    {
        id: "DAAD",
        title: "DAAD Scholarships (Germany)",
        criteria: "Varies by program. Generally requires a bachelor's degree.",
        amount: "Varies, often covers living expenses, health insurance, and travel.",
        documents: "Application form, CV, Letter of motivation.",
        details: "Supports international students in Germany.",
        applyLink: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
    },
    {
        id: "MEXT",
        title: "MEXT Scholarship (Japan)",
        criteria: "Varies by program (research, undergraduate, specialized training).",
        amount: "Covers tuition fees, living allowance, and travel.",
        documents: "Application form, Academic transcripts, Recommendation letters.",
        details: "Promotes international exchange and cooperation.",
        applyLink: "https://www.in.emb-japan.go.jp/Education/japanese_government_scholarships.html"
    },
    {
        id: "Rotary",
        title: "Rotary Foundation Global Grants",
        criteria: "Applicants must be Rotary club members. Grants support graduate-level studies or research aligned with Rotary's areas of focus.",
        amount: "Global grants have a minimum budget of $30,000.",
        documents: "Detailed project plan, Community assessment results.",
        details: "Supports international activities with sustainable outcomes.",
        applyLink: "https://www.rotary.org/grants"
    },
    {
        id: "Swiss",
        title: "Swiss Government Excellence Scholarships (Switzerland)",
        criteria: "Varies by scholarship type. Applicants must have a master's degree or equivalent for Ph.D. and research scholarships.",
        amount: "Covers living expenses, tuition fees, and health insurance.",
        documents: "Application form, CV, Letter of motivation.",
        details: "Supports international students in Switzerland.",
        applyLink: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships-for-foreign-scholars-and-artists.html"
    },
    {
        id: "Swedish",
        title: "Swedish Institute Scholarships (Sweden)",
        criteria: "Citizens of eligible developing countries. Must have a bachelor's degree.",
        amount: "Covers tuition fees and living expenses.",
        documents: "Application form, CV, Letters of recommendation.",
        details: "Supports students from developing countries.",
        applyLink: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
    },
    {
        id: "RTP",
        title: "Australian Government Research Training Program (RTP) Scholarships (Australia)",
        criteria: "Domestic and international students pursuing higher degrees by research.",
        amount: "Covers tuition fees and provides a living allowance.",
        documents: "Application form, Academic transcripts, Research proposal.",
        details: "Supports research students in Australia.",
        applyLink: "https://www.sydney.edu.au/scholarships/australian-government-research-training-program.html"
    },
    {
        id: "Vanier",
        title: "Vanier Canada Graduate Scholarships (Canada)",
        criteria: "Ph.D. students in health research, natural sciences and engineering, social sciences and humanities.",
        amount: "$50,000 per year for up to three years.",
        documents: "Application form, Academic transcripts, Research proposal.",
        details: "Aims to attract and retain world-class doctoral students.",
        applyLink: "http://www.vanier.gc.ca/en/home-accueil.html"
    }
];

// Initialize the Page
document.addEventListener('DOMContentLoaded', () => {
    const scholarshipList = document.getElementById('scholarship-list');
    const scholarshipDetails = document.getElementById('scholarship-details');
    const backButton = document.getElementById('back-button');
    const applyNowButton = document.getElementById('applyNow');
    const searchInput = document.getElementById('scholarshipSearch');
    const filterChips = document.querySelectorAll('.filter-chip');
    const categoryCards = document.querySelectorAll('.card');
    const loadingIndicator = document.getElementById('loadingIndicator');

    let currentFilter = 'all'; // For filter chips (undergraduate, postgraduate, etc.)
    let currentCategory = 'all'; // For category cards (indian, international, etc.)
    let currentSearchTerm = '';

    // Helper function to truncate text
    function truncateText(text, maxLength) {
        return text.length <= maxLength ? text : text.substring(0, maxLength) + '...';
    }

    // Helper function to determine category badge and filter
    function getCategoryBadge(scholarship) {
        if (['INSPIRE', 'PMRF', 'CSSS', 'NMMS', 'NTSE', 'Pragati', 'HDFC', 'FAEA', 'IndianOil', 'AdityaBirla', 'Sashakt', 'PostMatric', 'MeritDelhi', 'RajarshiShahu', 'StateMerit', 'SwamiVivekananda'].includes(scholarship.id)) return 'indian';
        if (['Fulbright', 'Chevening', 'ErasmusMundus', 'Commonwealth', 'DAAD', 'MEXT', 'Rotary', 'Swiss', 'Swedish', 'RTP', 'Vanier'].includes(scholarship.id)) return 'international';
        if (['PMRF', 'RTP', 'Vanier'].includes(scholarship.id)) return 'research';
        if (['Pragati'].includes(scholarship.id)) return 'girls';
        if (['FAEA', 'MeritDelhi', 'SwamiVivekananda'].includes(scholarship.id)) return 'minority';
        if (['CSSS', 'RajarshiShahu'].includes(scholarship.id)) return 'bpl';
        return 'all';
    }

    // Display Scholarship List (Enhanced with badges & truncation)
    function displayScholarships(scholarshipsToDisplay = scholarships) {
        scholarshipList.innerHTML = '';
        
        scholarshipsToDisplay.forEach(scholarship => {
            const item = document.createElement('div');
            item.className = 'scholarship-item animate-in';
            item.innerHTML = `
                <h3>${scholarship.title}</h3>
                <p>${truncateText(scholarship.criteria, 100)}</p>
                <div><span class="scholarship-badge">${getCategoryBadge(scholarship)}</span></div>
                <span class="arrow-icon">▶</span>
            `;
            item.addEventListener('click', () => showDetails(scholarship));
            scholarshipList.appendChild(item);
        });
    }

    // Show Details
    function showDetails(scholarship) {
        scholarshipList.style.display = 'none';
        scholarshipDetails.style.display = 'block';
        document.getElementById('scholarship-title').textContent = scholarship.title;
        document.getElementById('criteria').textContent = scholarship.criteria;
        document.getElementById('amount').textContent = scholarship.amount;
        document.getElementById('documents').textContent = scholarship.documents;
        document.getElementById('details-info').textContent = scholarship.details;
        applyNowButton.onclick = () => window.open(scholarship.applyLink, '_blank');
        scholarshipDetails.scrollIntoView({ behavior: 'smooth' });
    }

    // Back Button
    backButton.addEventListener('click', () => {
        scholarshipList.style.display = 'grid';
        scholarshipDetails.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Filter Scholarships
    function filterScholarships() {
        loadingIndicator.style.display = 'block';
        scholarshipList.style.opacity = '0.5';
        
        setTimeout(() => {
            let filtered = scholarships.filter(scholarship => {
                // Search filter
                const matchesSearch = currentSearchTerm 
                    ? scholarship.title.toLowerCase().includes(currentSearchTerm) || 
                      scholarship.criteria.toLowerCase().includes(currentSearchTerm) ||
                      scholarship.details.toLowerCase().includes(currentSearchTerm)
                    : true;

                // Filter chip filter (undergraduate, postgraduate, etc.)
                const matchesFilter = currentFilter === 'all' ? true : 
                    currentFilter === 'undergraduate' ? /class|ug|undergrad/i.test(scholarship.criteria) :
                    currentFilter === 'postgraduate' ? /pg|postgrad|masters/i.test(scholarship.criteria) :
                    currentFilter === 'research' ? /research/i.test(scholarship.criteria) || scholarship.id === 'PMRF' :
                    currentFilter === 'merit' ? /merit/i.test(scholarship.criteria) || scholarship.id === 'NTSE' :
                    currentFilter === 'need' ? /income|bpl|need/i.test(scholarship.criteria) : true;

                // Category filter (indian, international, etc.)
                const matchesCategory = currentCategory === 'all' ? true :
                    currentCategory === 'indian' ? ['INSPIRE', 'PMRF', 'CSSS', 'NMMS', 'NTSE', 'Pragati', 'HDFC', 'FAEA', 'IndianOil', 'AdityaBirla', 'Sashakt', 'PostMatric', 'MeritDelhi', 'RajarshiShahu', 'StateMerit', 'SwamiVivekananda'].includes(scholarship.id) :
                    currentCategory === 'international' ? ['Fulbright', 'Chevening', 'ErasmusMundus', 'Commonwealth', 'DAAD', 'MEXT', 'Rotary', 'Swiss', 'Swedish', 'RTP', 'Vanier'].includes(scholarship.id) :
                    currentCategory === 'research' ? ['PMRF', 'RTP', 'Vanier'].includes(scholarship.id) :
                    currentCategory === 'girls' ? ['Pragati'].includes(scholarship.id) :
                    currentCategory === 'minority' ? ['FAEA', 'MeritDelhi', 'SwamiVivekananda'].includes(scholarship.id) :
                    currentCategory === 'bpl' ? ['CSSS', 'RajarshiShahu'].includes(scholarship.id) :
                    currentCategory === 'search' ? true : true;

                return matchesSearch && matchesFilter && matchesCategory;
            });
            
            displayScholarships(filtered);
            loadingIndicator.style.display = 'none';
            scholarshipList.style.opacity = '1';
            
            if (filtered.length === 0) showNotification('No scholarships found matching your criteria');
        }, 500);
    }

    // Search input event listener
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim().toLowerCase();
        filterScholarships();
    });

    // Filter chips event listeners
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.getAttribute('data-filter');
            filterScholarships();
        });
    });

    // Category cards event listeners
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentCategory = card.getAttribute('data-category');
            
            // If the "Search Scholarships" card is clicked, focus the search input
            if (currentCategory === 'search') {
                searchInput.focus();
                currentCategory = 'all'; // Reset category to show all scholarships
            }
            
            filterScholarships();
        });
    });

    // Show notification function
    function showNotification(message) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 3000);
    }

    // Initial display
    displayScholarships();
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed')) || 1;
        element.style.transform = `translateY(${scrollPosition * speed / 10}px)`;
    });
});