const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Liste des variables nécessaires au carrousel
const arrowRight = document.getElementById('next');
const arrowLeft = document.getElementById('prev');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dots .dot');

let currentSlide = 0; // Index du slide actuel

function updateSlide(index) {
    currentSlide = index;

    // // Mettre à jour le bullet, l'image et le texte correspondant à la slide actuelle
    dots.forEach((dot, idx) => {
        if (idx == currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
    bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
}

// Changement d'affichage au clic sur la flèche droite
arrowRight.addEventListener('click', () => {
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlide(currentSlide);
    console.log('Clic flèche droite');
});

// Changement d'affichage au clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    updateSlide(currentSlide);
    console.log('Clic flèche gauche');
});