AOS.init();

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

        const menu = document.querySelector("input");
        const navList = document.querySelector(".navList");
        const menuIcon = document.querySelector(".fa-solid");
        const closenav = document.querySelector(".closenav");

        menu.addEventListener("click", () => {
            if (menu.checked) {
                navList.style.display = "flex";
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        navList.classList.add("activeNavList");
                    });
                });
            } else {
                navList.classList.remove("activeNavList");
                setTimeout(() => {
                    navList.style.display = "none";
                }, 500);
            }
        });

        closenav.addEventListener("click", () => {
            navList.classList.remove("activeNavList");
                setTimeout(() => {
                    navList.style.display = "none";
                }, 500);
            menu.checked = false;
        });

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

// Initialize first active

const bgLayers = document.querySelectorAll('.mainSection .bgLayer');
const leftBtn = document.getElementById("mainImgLeft");
const rightBtn = document.getElementById("mainImgRight");
let currentBg = 0;
let intervalId;

bgLayers[currentBg].classList.add('active');

function updateActiveSlide(newIndex) {
    bgLayers.forEach(layer => layer.classList.remove('active'));
    currentBg = newIndex;
    bgLayers[currentBg].classList.add('active');
}

function startAutoSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        updateActiveSlide((currentBg + 1) % bgLayers.length);
    }, 8000);
}

startAutoSlide();

rightBtn.addEventListener("click", () => {
    if (currentBg < bgLayers.length - 1) {
        updateActiveSlide(currentBg + 1);
        startAutoSlide();
    } else if (currentBg = 4) {
        updateActiveSlide(0);
        startAutoSlide();
    }
});

leftBtn.addEventListener("click", () => {
    if (currentBg > 0) {
        updateActiveSlide(currentBg - 1);
        startAutoSlide();
    } else if (currentBg == 0) {
        updateActiveSlide(4);
    }
});