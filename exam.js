document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const headerUl = document.querySelector('header ul');
    
    menuIcon.addEventListener('click', function() {
        headerUl.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if (icon.classList.contains('bx-menu')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
    
    const filterButtons = document.querySelectorAll('.exam-filters button');
    const searchInput = document.getElementById('examSearch');
    let searchTimeout;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterExamCards(this.textContent, searchInput.value.trim());
        });
    });
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const activeFilter = document.querySelector('.exam-filters button.active')?.textContent || 'All';
            filterExamCards(activeFilter, this.value.trim());
        }, 300);
    });
    
    function filterExamCards(category, searchTerm = '') {
        const examCards = document.querySelectorAll('.exam-card');
        const examContainer = document.querySelector('.exam-card-container');
        
        examContainer.classList.add('loading');
        
        // Reset card styles
        examCards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        });

        setTimeout(() => {
            examCards.forEach(card => {
                const examName = card.querySelector('h2').textContent;
                let shouldShow = true;
                
                if (searchTerm) {
                    shouldShow = examName.toLowerCase().includes(searchTerm.toLowerCase());
                }
                
                if (shouldShow && category !== 'All') {
                    switch(category) {
                        case 'Engineering':
                            shouldShow = ['JEE Main', 'GATE'].includes(examName);
                            break;
                        case 'Medical':
                            shouldShow = ['NEET'].includes(examName);
                            break;
                        case 'Govt Jobs':
                            shouldShow = ['UPSC CSE', 'SSC CGL', 'IBPS PO', 'NDA'].includes(examName);
                            break;
                        case 'Abroad':
                            shouldShow = ['GRE', 'IELTS', 'TOEFL', 'GMAT'].includes(examName);
                            break;
                        case 'Others':
                            shouldShow = ['CAT', 'CLAT'].includes(examName);
                            break;
                    }
                }
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    setTimeout(() => {
                        card.classList.remove('fade-in');
                    }, 500);
                }
            });
            
            examContainer.classList.remove('loading');
        }, 300);
    }
    
    const examLinks = document.querySelectorAll('.exam-card a[data-exam]');
    
    examLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const examName = this.getAttribute('data-exam');
            if (examName) {
                showExamDetails(examName);
            } else {
                showToast('Error: Exam details not found');
            }
        });
    });
    
    function showExamDetails(examName) {
        const examDetails = {
            'JEE Main': {
                fullName: 'Joint Entrance Examination Main',
                description: 'National level competitive test for admission to various technical undergraduate programs in engineering, architecture, and planning across India.',
                eligibility: 'Students who have passed their class 12th examination or equivalent.',
                importantDates: ['Registration: November-December', 'January Session: January', 'April Session: April'],
                examPattern: 'Computer Based Test with Multiple Choice Questions and Numerical Value Questions',
                syllabus: 'Physics, Chemistry, Mathematics for B.Tech/B.E programs',
                website: 'https://jeemain.nta.nic.in',
                icon: 'fa-graduation-cap'
            },
            'NEET': {
                fullName: 'National Eligibility cum Entrance Test',
                description: 'Single entrance examination for admissions to MBBS, BDS, AYUSH and other medical courses in India.',
                eligibility: 'Students who have completed class 12th with Physics, Chemistry, Biology/Biotechnology.',
                importantDates: ['Application: March-April', 'Examination: May', 'Results: June'],
                examPattern: 'Pen and paper test with Multiple Choice Questions',
                syllabus: 'Physics, Chemistry, Biology (Botany & Zoology)',
                website: 'https://neet.nta.nic.in',
                icon: 'fa-heartbeat'
            },
            'CAT': {
                fullName: 'Common Admission Test',
                description: 'National level management entrance exam for admission to IIMs and other top B-schools in India.',
                eligibility: 'Bachelor\'s degree with minimum 50% marks or equivalent CGPA.',
                importantDates: ['Registration: August-September', 'Examination: November', 'Results: January'],
                examPattern: 'Computer Based Test with MCQs and non-MCQs',
                syllabus: 'Verbal Ability & Reading Comprehension, Data Interpretation & Logical Reasoning, Quantitative Ability',
                website: 'https://iimcat.ac.in',
                icon: 'fa-briefcase'
            },
            'GATE': {
                fullName: 'Graduate Aptitude Test in Engineering',
                description: 'National level exam for M.Tech admissions and PSU recruitment.',
                eligibility: 'Bachelor\'s degree in Engineering/Technology/Architecture or Master\'s degree in any branch of Science/Mathematics/Statistics/Computer Applications.',
                importantDates: ['Registration: September-October', 'Examination: February', 'Results: March'],
                examPattern: 'Computer Based Test with MCQs, MSQs, and NAT questions',
                syllabus: 'Subject-specific technical knowledge and General Aptitude',
                website: 'https://gate.iitk.ac.in',
                icon: 'fa-cogs'
            },
            'UPSC CSE': {
                fullName: 'UPSC Civil Services Examination',
                description: 'Nationwide competitive examination for recruitment to various Civil Services of the Government of India.',
                eligibility: 'Indian citizen with a bachelor\'s degree from a recognized university.',
                importantDates: ['Notification: February', 'Prelims: June', 'Mains: September', 'Interview: March-May'],
                examPattern: 'Three stages: Preliminary, Main, and Interview',
                syllabus: 'General Studies, Current Affairs, Optional Subject',
                website: 'https://upsc.gov.in',
                icon: 'fa-university'
            },
            'GRE': {
                fullName: 'Graduate Record Examination',
                description: 'Standardized test required for admissions to graduate schools, particularly in the United States.',
                eligibility: 'No specific eligibility criteria. Anyone can take the test.',
                importantDates: ['Available throughout the year'],
                examPattern: 'Computer-adaptive test with Verbal Reasoning, Quantitative Reasoning, and Analytical Writing',
                syllabus: 'Verbal Reasoning, Quantitative Reasoning, Analytical Writing',
                website: 'https://www.ets.org/gre',
                icon: 'fa-book'
            },
            'SSC CGL': {
                fullName: 'Staff Selection Commission Combined Graduate Level',
                description: 'National level exam for various Group B and C posts in government ministries and departments.',
                eligibility: 'Bachelor\'s degree from a recognized university.',
                importantDates: ['Registration: April-May', 'Tier I: June-July', 'Tier II: September-October'],
                examPattern: 'Four tiers: Tier I & II (CBT), Tier III (Descriptive), Tier IV (Skill Test)',
                syllabus: 'Quantitative Aptitude, English, General Intelligence & Reasoning, General Awareness',
                website: 'https://ssc.nic.in',
                icon: 'fa-building'
            },
            'IBPS PO': {
                fullName: 'Institute of Banking Personnel Selection Probationary Officer',
                description: 'Entrance exam for Probationary Officer/Management Trainee posts in public sector banks.',
                eligibility: 'Bachelor\'s degree from a recognized university.',
                importantDates: ['Registration: August-September', 'Prelims: October', 'Mains: November'],
                examPattern: 'Three phases: Preliminary, Main, and Interview',
                syllabus: 'Quantitative Aptitude, Reasoning, English, General Awareness, Computer Knowledge',
                website: 'https://www.ibps.in',
                icon: 'fa-bank'
            },
            'IELTS': {
                fullName: 'International English Language Testing System',
                description: 'Global test to assess English proficiency for study, work, or migration abroad.',
                eligibility: 'No specific eligibility; recommended for those over 16.',
                importantDates: ['Available multiple times a month throughout the year'],
                examPattern: 'Four sections: Listening, Reading, Writing, Speaking',
                syllabus: 'English language skills in academic or general contexts',
                website: 'https://www.ielts.org',
                icon: 'fa-globe'
            },
            'TOEFL': {
                fullName: 'Test of English as a Foreign Language',
                description: 'Standardized test to measure English proficiency for academic purposes worldwide.',
                eligibility: 'No specific eligibility criteria. Open to all.',
                importantDates: ['Available multiple times a month throughout the year'],
                examPattern: 'Four sections: Reading, Listening, Speaking, Writing',
                syllabus: 'English language skills for academic settings',
                website: 'https://www.ets.org/toefl',
                icon: 'fa-language'
            },
            'CLAT': {
                fullName: 'Common Law Admission Test',
                description: 'National level entrance exam for admission to undergraduate and postgraduate law programs in India.',
                eligibility: 'Class 12th or equivalent with minimum 45% marks for UG programs.',
                importantDates: ['Registration: July-August', 'Examination: December', 'Results: January'],
                examPattern: 'Computer Based Test with Multiple Choice Questions',
                syllabus: 'English, Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative Techniques',
                website: 'https://consortiumofnlus.ac.in',
                icon: 'fa-balance-scale'
            },
            'NDA': {
                fullName: 'National Defence Academy Examination',
                description: 'Entrance exam for admission to the Army, Navy, and Air Force wings of the NDA and Naval Academy.',
                eligibility: 'Class 12th or equivalent; unmarried male candidates aged 16.5-19.5 years.',
                importantDates: ['Registration NDA I: December-January', 'Registration NDA II: June-July', 'Examination: April & September'],
                examPattern: 'Written exam (Mathematics & General Ability Test) followed by SSB Interview',
                syllabus: 'Mathematics, English, General Knowledge',
                website: 'https://upsc.gov.in',
                icon: 'fa-shield-alt'
            },
            'GMAT': {
                fullName: 'Graduate Management Admission Test',
                description: 'Standardized test for admission to MBA programs worldwide.',
                eligibility: 'No specific eligibility; typically for candidates with a bachelor\'s degree.',
                importantDates: ['Available throughout the year'],
                examPattern: 'Computer-adaptive test with Analytical Writing, Integrated Reasoning, Quantitative, and Verbal sections',
                syllabus: 'Quantitative Reasoning, Verbal Reasoning, Integrated Reasoning, Analytical Writing',
                website: 'https://www.mba.com',
                icon: 'fa-chart-line'
            }
        };
        
        if (!examDetails[examName]) {
            showToast(`Error: Details for ${examName} not found`);
            return;
        }
        
        const examData = examDetails[examName];
        
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const modal = document.createElement('div');
        modal.className = 'exam-details-modal';
        
        modal.innerHTML = `
            <i class="fas ${examData.icon} modal-icon"></i>
            <div class="modal-header">
                <h2>${examName}</h2>
                <button class="close-modal"><i class='bx bx-x'></i></button>
            </div>
            <div class="modal-body">
                <h3>${examData.fullName}</h3>
                <p class="description">${examData.description}</p>
                
                <div class="detail-section">
                    <h4>Eligibility</h4>
                    <p>${examData.eligibility}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Important Dates</h4>
                    <div class="timeline">
                        ${examData.importantDates.map(date => `
                            <div class="timeline-item">
                                <p>${date}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Exam Pattern</h4>
                    <p>${examData.examPattern}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Syllabus Highlights</h4>
                    <p>${examData.syllabus}</p>
                </div>
                
                <div class="detail-section">
                    <h4>Official Website</h4>
                    <p><a href="${examData.website}" target="_blank">${examData.website}</a></p>
                </div>
                
                <div class="action-buttons">
                    <button class="btn-secondary bookmark-btn">
                        <i class='bx bx-bookmark-plus'></i> Save for Later
                    </button>
                    <button class="btn-primary website-btn">
                        <i class='bx bx-link-external'></i> Visit Official Website
                    </button>
                    <button class="btn-share share-btn">
                        <i class='bx bx-share-alt'></i> Share
                    </button>
                </div>
            </div>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Ensure modal is visible
        setTimeout(() => {
            overlay.classList.add('show');
            modal.scrollTop = 0; // Reset scroll position
        }, 10);
        
        const closeButton = modal.querySelector('.close-modal');
        closeButton.addEventListener('click', function() {
            overlay.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        });
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            }
        });
        
        const bookmarkBtn = modal.querySelector('.bookmark-btn');
        bookmarkBtn.addEventListener('click', function() {
            if (this.classList.contains('bookmarked')) {
                this.classList.remove('bookmarked');
                this.innerHTML = '<i class="bx bx-bookmark-plus"></i> Save for Later';
                showToast(`${examName} removed from bookmarks`);
            } else {
                this.classList.add('bookmarked');
                this.innerHTML = '<i class="bx bxs-bookmark-star"></i> Bookmarked';
                showToast(`${examName} added to bookmarks`);
            }
        });
        
        const websiteBtn = modal.querySelector('.website-btn');
        websiteBtn.addEventListener('click', function() {
            window.open(examData.website, '_blank');
        });

        const shareBtn = modal.querySelector('.share-btn');
        shareBtn.addEventListener('click', function() {
            const shareUrl = window.location.href;
            const shareText = `Check out details for ${examName} on Student Sphere! ${examData.website}`;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText).then(() => {
                    showToast('Link copied to clipboard!');
                }).catch(() => {
                    showToast('Failed to copy link');
                });
            } else {
                showToast('Clipboard not supported; please copy manually');
            }
        });
    }
    
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    const newAccountLink = document.querySelector('.head-right a');
    newAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        showRegistrationModal();
    });
    
    function showRegistrationModal() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const modal = document.createElement('div');
        modal.className = 'exam-details-modal';
        
        modal.innerHTML = `
            <i class="fas fa-user-plus modal-icon"></i>
            <div class="modal-header">
                <h2>Create New Account</h2>
                <button class="close-modal"><i class='bx bx-x'></i></button>
            </div>
            <div class="modal-body">
                <form id="registrationForm">
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" required>
                    </div>
                    <div class="form-group">
                        <label for="regEmail">Email</label>
                        <input type="email" id="regEmail" required>
                    </div>
                    <div class="form-group">
                        <label for="regPassword">Password</label>
                        <input type="password" id="regPassword" required>
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" required>
                    </div>
                    <div class="form-group">
                        <label>I am a:</label>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="userType" value="student" checked> Student
                            </label>
                            <label>
                                <input type="radio" name="userType" value="parent"> Parent
                            </label>
                            <label>
                                <input type="radio" name="userType" value="teacher"> Teacher
                            </label>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button type="submit" class="btn-primary">Create Account</button>
                    </div>
                </form>
            </div>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.classList.add('show');
        }, 10);
        
        const closeButton = modal.querySelector('.close-modal');
        closeButton.addEventListener('click', function() {
            overlay.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        });
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            }
        });
        
        const form = modal.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = form.querySelector('#fullName').value;
            const email = form.querySelector('#regEmail').value;
            const password = form.querySelector('#regPassword').value;
            const confirmPassword = form.querySelector('#confirmPassword').value;
            const userType = form.querySelector('input[name="userType"]:checked').value;
            
            if (password !== confirmPassword) {
                showToast('Passwords do not match');
                return;
            }
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Creating Account...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                modal.innerHTML = `
                    <i class="fas fa-check-circle modal-icon"></i>
                    <div class="modal-header">
                        <h2>Account Created!</h2>
                        <button class="close-modal"><i class='bx bx-x'></i></button>
                    </div>
                    <div class="modal-body">
                        <p>Congratulations, ${fullName}! Your account has been successfully created.</p>
                        <p>You can now explore all exams with your account.</p>
                        <div class="action-buttons">
                            <button class="btn-primary continue-btn">Continue</button>
                        </div>
                    </div>
                `;
                
                const closeButton = modal.querySelector('.close-modal');
                closeButton.addEventListener('click', function() {
                    overlay.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                    }, 300);
                });
                
                modal.querySelector('.continue-btn').addEventListener('click', function() {
                    overlay.classList.remove('show');
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                    }, 300);
                });
            }, 1500);
        });
    }
});