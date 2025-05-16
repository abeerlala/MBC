// Load Header In All Pages

const header = document.getElementById('headerMain');

fetch('Components/header.html')
    .then(response => response.text())
    .then(headerData => {
        header.innerHTML = headerData;
    })
    .catch(error => console.error('Error loading header:', error));

// Load Nav In All Pages

const nav = document.getElementById("nav");

fetch('Components/nav.html')
    .then(response => response.text())
    .then(navData => {
        nav.innerHTML = navData;
    })
    .then(() => {
        // Toggle Nav In Smaller Devices

        const navList = document.querySelector('.navList');
        const menuBtn = document.querySelector('#menu');
        const closeNav = document.querySelector('.closeNav i');

        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('activeNavList')
        })

        closeNav.addEventListener('click', () => {
            navList.classList.remove('activeNavList')
        })

        // Highlight Current Page's Link

        const homeLink = document.querySelector('.navLink a');
        const navLinks = document.querySelectorAll('.navLink a');
        const currentPage = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');

            if (linkPage === currentPage) {
                link.parentElement.classList.add('activeNavLink');
            } else if (currentPage == '') {
                homeLink.parentElement.classList.add('activeNavLink')
            }
        });
    })
    .catch(error => console.log('Error loading footer:', error))

// Load Side Icons In All Pages

const sideIcons = document.getElementById("sideIcons");

fetch('Components/sideIcons.html')
    .then(response => response.text())
    .then(sideIconsData => {
        sideIcons.innerHTML = sideIconsData;
    })
    .then(() => {
        // Toggle To-Top Button

        const toTopBtn = document.getElementById('toTop');

        window.addEventListener('scroll', () => {
            window.scrollY > 300 ? toTopBtn.classList.add('showBtn') : toTopBtn.classList.remove('showBtn');
        });
    })
    .catch(error => console.log('Error loading footer:', error))

// Load Footer In All Pages

const footer = document.getElementById("footerMain");

fetch('Components/footer.html')
    .then(response => response.text())
    .then(footerData => {
        footer.innerHTML = footerData;
    })
    .catch(error => console.log('Error loading footer:', error))

// Show the first background

const bgLayers = document.querySelectorAll('.mainSection .bgLayer');
let currentBg = 0;

bgLayers[currentBg].classList.add('active');

// Cycle through background images

setInterval(() => {
    bgLayers[currentBg].classList.remove('active');
    currentBg = (currentBg + 1) % bgLayers.length;
    bgLayers[currentBg].classList.add('active');
}, 8000);
