/* ----- NAVIGATION BAR FUNCTIONS ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    var menuIcon = document.querySelector(".nav-menu-btn i");

    if (menuBtn.classList.contains("responsive")){
        menuBtn.classList.remove("responsive");
        if (menuIcon) {
            menuIcon.classList.remove("uil-multiply");
            menuIcon.classList.add("uil-bars");
        }
    } else {
        menuBtn.classList.add("responsive");
        if (menuIcon) {
            menuIcon.classList.remove("uil-bars");
            menuIcon.classList.add("uil-multiply");
        }
    }
}

function closeMenu(){
    var menuBtn = document.getElementById("myNavMenu");
    var menuIcon = document.querySelector(".nav-menu-btn i");

    if (menuBtn && menuBtn.classList.contains("responsive")){
        menuBtn.classList.remove("responsive");
        if (menuIcon) {
            menuIcon.classList.remove("uil-multiply");
            menuIcon.classList.add("uil-bars");
        }
    }
}

// Close menu when clicking on any nav link
var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside of nav on mobile
document.addEventListener('click', function(event) {
    var nav = document.getElementById("header");
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn && menuBtn.classList.contains("responsive") && !nav.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when resizing window past mobile breakpoint
window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        closeMenu();
    }
});


/* ----- DOWNLOAD CV ----- */
function downloadCV() {
    var filePath = "aditya_resume.pdf";
    var link = document.createElement('a');
    link.href = filePath;
    link.download = 'Aditya_Verma_Resume.pdf';
    link.click();
    showToast("Resume download started!");
}

function redirectToEmail() {
    window.location.href = "mailto:adityaverma0244@gmail.com";
}

var downloadButtons = document.querySelectorAll('.download-cv');
downloadButtons.forEach(function(button) {
    button.addEventListener('click', downloadCV);
});


/* ----- COPY TO CLIPBOARD & TOAST ----- */
function copyToClipboard(text, message) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function() {
            showToast(message || "Copied to clipboard!");
        }).catch(function() {
            fallbackCopy(text, message);
        });
    } else {
        fallbackCopy(text, message);
    }
}

function fallbackCopy(text, message) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
        showToast(message || "Copied to clipboard!");
    } catch (err) {
        showToast("Press Ctrl+C to copy");
    }
    document.body.removeChild(textarea);
}

function showToast(message) {
    var toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function() {
        toast.classList.remove("show");
    }, 2800);
}


/* ----- BACK TO TOP ----- */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/* ----- SCROLL EVENT HANDLER ----- */
window.onscroll = function() {
    headerShadow();
    scrollActive();
    handleBackToTop();
};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.08)";
        navHeader.style.height = "75px";
        navHeader.style.lineHeight = "75px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

function handleBackToTop() {
    var backBtn = document.getElementById("backToTop");
    if (backBtn) {
        if (window.scrollY > 400) {
            backBtn.classList.add("visible");
        } else {
            backBtn.classList.remove("visible");
        }
    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Software Developer", "Backend Developer", "Full Stack Developer", "Java Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
});


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false     
});

/* -- HOME -- */
sr.reveal('.status-pill', {delay: 50});
sr.reveal('.featured-text-card', {delay: 100});
sr.reveal('.featured-name', {delay: 150});
sr.reveal('.featured-text-info', {delay: 200});
sr.reveal('.featured-location', {delay: 200});
sr.reveal('.featured-text-btn', {delay: 250});
sr.reveal('.social_icons', {delay: 250});
sr.reveal('.featured-image', {delay: 200});

/* -- EXPERIENCE & PROJECT CARDS -- */
sr.reveal('.experience-card', {interval: 150});
sr.reveal('.project-card', {interval: 150});

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 1800,
    reset: false
});

srLeft.reveal('.about-info', {delay: 100});
srLeft.reveal('.contact-info', {delay: 100});

const srRight = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 1800,
    reset: false
});

srRight.reveal('.skills-card', {delay: 100});
srRight.reveal('.form-control', {delay: 100});


/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 85,
              sectionId = current.getAttribute('id');

        const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}
