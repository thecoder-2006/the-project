document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})

// SIGNIN PAGE OPEN AND CLOSE ANIMATION

const signinButton = document.getElementById('signinButton');
const signinPage = document.getElementById('signinPage');
const closeIcon = document.getElementById('closeIcon');

signinButton.addEventListener('click', function(){
    signinPage.classList.remove('closeSignin');
    signinPage.classList.add("openSignin")
});

closeIcon.addEventListener('click', function(){
    signinPage.classList.remove("openSignin");
    signinPage.classList.add('closeSignin');
})

// SIDEBAR ELEMENTS
const sideBar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');

// OPEN SIDEBAR
menuButton.addEventListener("click", function(){
    sideBar.classList.remove('close-sidebar')
    sideBar.classList.add('open-sidebar')
})

closeButton.addEventListener("click", function(){
    sideBar.classList.remove('open-sidebar')
    sideBar.classList.add('close-sidebar')
})
// In your MainPage.js
document.querySelectorAll('.features-card a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Show loading indicator
        document.body.classList.add('loading');
        
        // Open new tab after short delay
        setTimeout(() => {
            window.open(link.href, '_blank');
            document.body.classList.remove('loading');
        }, 500);
    });
});
  // Smooth scrolling for Get Started button
  const getStartedButton = document.querySelector('#getStartedButton');
  const featuresSection = document.querySelector('.features-section');
  getStartedButton.addEventListener('click', () => {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Explore button scroll to features section
  const exploreButton = document.querySelector('#exploreButton');
  const sidebarExploreButton = document.querySelector('#sidebarExploreButton');
  exploreButton.addEventListener('click', (e) => {
      e.preventDefault();
      featuresSection.scrollIntoView({ behavior: 'smooth' });
  });
  sidebarExploreButton.addEventListener('click', (e) => {
      e.preventDefault();
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      sidebar.style.display = 'none'; // Close sidebar after clicking
  });

  // Scholarship "Try It Now" button
  const tryScholarshipButton = document.querySelector('#tryScholarshipButton');
  tryScholarshipButton.addEventListener('click', () => {
      window.location.href = 'scholarship.html';
  });

  // Books "Try It Now" button
  const tryBooksButton = document.querySelector('#tryBooksButton');
  tryBooksButton.addEventListener('click', () => {
      window.location.href = 'book.html';
  });

  // Doubt Solving "Try It Now" button
  const tryDoubtButton = document.querySelector('#tryDoubtButton');
  tryDoubtButton.addEventListener('click', () => {
      window.location.href = 'chatbot.html';
  });