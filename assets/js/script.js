/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjusted for header height
        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/* ==================== DYNAMIC THEME CHANGER ==================== */
const themeButton = document.getElementById('theme-button');
const body = document.body;
const darkTheme = 'dark-theme'; // In case you want a specific class
const lightTheme = 'light-theme';
const iconTheme = 'fa-sun'; // Class to add for the light theme icon

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => body.classList.contains(lightTheme) ? 'light' : 'dark';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-circle-half-stroke' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedTheme === 'light' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
});