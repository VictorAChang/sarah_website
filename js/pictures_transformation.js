
// Reinvented Picture Transformation JS

const photoSets = [
	{
		main: '../assets/about/sanfran1.png',
		polaroid: '../assets/about/sanfran2.png',
	},
	{
		main: '../assets/about/hiking.png',
		polaroid: '../assets/about/sanfran1.png',
	},
	{
		main: '../assets/author/author_bg.jpg',
		polaroid: '../assets/about/hiking.png',
	},
	{
		main: '../assets/about/sanfran2.png',
		polaroid: '../assets/author/author_bg.jpg',
	},
	{
		main: '../assets/about/hiking.png',
		polaroid: '../assets/about/sanfran2.png',
	}
];

let currentIndex = 0;
let polaroidVisible = false;

function updatePhotos() {
	const mainPhoto = document.getElementById('main-photo');
	const polaroidPhoto = document.getElementById('polaroid-photo');
	const polaroidContainer = document.getElementById('polaroid-container');
	const editBtn = document.getElementById('edit-btn');

	mainPhoto.src = photoSets[currentIndex].main;
	polaroidPhoto.src = photoSets[currentIndex].polaroid;
	polaroidPhoto.classList.remove('polaroid-clear');
	polaroidPhoto.classList.add('polaroid-blur');
	polaroidContainer.style.display = polaroidVisible ? 'flex' : 'none';
	editBtn.style.display = polaroidVisible ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
	updatePhotos();
	document.getElementById('edit-btn').addEventListener('click', function() {
		polaroidVisible = true;
		updatePhotos();
		setTimeout(() => {
			const polaroidPhoto = document.getElementById('polaroid-photo');
			polaroidPhoto.classList.remove('polaroid-blur');
			polaroidPhoto.classList.add('polaroid-clear');
		}, 100);
	});
	document.getElementById('prev-photo').addEventListener('click', function() {
		currentIndex = (currentIndex - 1 + photoSets.length) % photoSets.length;
		polaroidVisible = false;
		updatePhotos();
	});
	document.getElementById('next-photo').addEventListener('click', function() {
		currentIndex = (currentIndex + 1) % photoSets.length;
		polaroidVisible = false;
		updatePhotos();
	});
});
