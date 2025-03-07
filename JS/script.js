        // Gestion du toggle pour l'affichage du menu
        const container = document.querySelector('.container');
        container.onclick = function() {
            const navBar = document.querySelector('.nav-bar');
            navBar.classList.toggle('active');
        }

        // Gestion des liens de navigation
        const navLinks = document.querySelectorAll('.nav-bar a');

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Empêche le comportement par défaut du lien
                // Supprime la classe active de tous les liens
                navLinks.forEach(nav => nav.classList.remove('active'));
                // Ajoute la classe active au lien cliqué
                this.classList.add('active');
            });
        });

        document.querySelectorAll('.nav-bar a').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault();
        
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                const headerHeight = document.querySelector("header").offsetHeight; // Hauteur du header
        
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight - 20, // Décalage ajusté
                        behavior: 'smooth'
                    });
                }
            });
        });

const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalProjects = document.querySelectorAll('.project').length;

let autoScroll = setInterval(nextSlide, 6000); // Démarrer l'auto-défilement

function nextSlide() {
    index = (index + 1) % totalProjects;
    updateCarousel();
}

// Fonction pour déplacer le carrousel
function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

}
function resetAutoScroll() {
    clearInterval(autoScroll); // Stoppe le timer actuel
    autoScroll = setInterval(nextSlide, 8000); // Redémarre le timer
}

// Bouton suivant
nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalProjects;
    updateCarousel();
    resetAutoScroll();
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalProjects) % totalProjects;
    updateCarousel();
    resetAutoScroll();
});
