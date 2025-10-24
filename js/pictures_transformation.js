
// Reinvented Picture Transformation JS

const photoSets = [
	{
		main: '../assets/photography/IMG_5816.jpg',
		polaroid: '../assets/photography/IMG_5816_Edit.jpg',
	},
	{
		main: '../assets/photography/IMG_4780.jpg',
		polaroid: '../assets/photography/IMG_4780_Edit.jpg',
	},
	{
		main: '../assets/photography/IMG_6115.jpg',
		polaroid: '../assets/photography/IMG_6115_Edit.jpg',
	},
	{
		main: '../assets/photography/IMG_5610.jpg',
		polaroid: '../assets/photography/IMG_5610_Edit.jpg',
	},
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
