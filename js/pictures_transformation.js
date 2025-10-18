// Photography page transformation functionality

function transformImage(itemId) {
  const comparisonItem = document.getElementById(`comparison-${itemId}`);
  const afterImage = comparisonItem.querySelector('.after-img, .after-image');
  const transformOverlay = comparisonItem.querySelector('.transform-overlay');
  const transformBtn = comparisonItem.querySelector('.transform-btn');
  
  // Start the transformation
  afterImage.classList.remove('blurred');
  afterImage.classList.add('transformed');
  
  // Hide the transform button with a slight delay
  setTimeout(() => {
    transformOverlay.classList.add('hidden');
  }, 300);
  
  // Add a "Reset" button after transformation
  setTimeout(() => {
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '<i class="fas fa-undo"></i> <span>Reset</span>';
    resetBtn.className = 'transform-btn';
    resetBtn.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
    resetBtn.onclick = () => resetImage(itemId);
    
    transformOverlay.innerHTML = '';
    transformOverlay.appendChild(resetBtn);
    transformOverlay.classList.remove('hidden');
  }, 1500);
}

function resetImage(itemId) {
  const comparisonItem = document.getElementById(`comparison-${itemId}`);
  const afterImage = comparisonItem.querySelector('.after-img, .after-image');
  const transformOverlay = comparisonItem.querySelector('.transform-overlay');
  
  // Reset the image
  afterImage.classList.add('blurred');
  afterImage.classList.remove('transformed');
  
  // Hide reset button
  transformOverlay.classList.add('hidden');
  
  // Show original transform button again
  setTimeout(() => {
    transformOverlay.innerHTML = `
      <button class="transform-btn" onclick="transformImage(${itemId})">
        <i class="fas fa-magic"></i>
        <span>Transform</span>
      </button>
    `;
    transformOverlay.classList.remove('hidden');
  }, 500);
}

// Photography Carousel Functionality
let currentWeddingIndex = 0;
const photographyCategories = [
  {
    before: '../assets/about/sanfran1.png',
    after: '../assets/about/sanfran2.png',
    beforeAlt: 'Wedding Ceremony Before Editing',
    afterAlt: 'Wedding Ceremony After Editing',
    title: 'Wedding Photography',
    icon: 'fas fa-heart text-danger',
    description: 'Capturing your special day with timeless elegance'
  },
  {
    before: '../assets/about/hiking.png',
    after: '../assets/about/sanfran1.png',
    beforeAlt: 'Graduation Portrait Before Editing',
    afterAlt: 'Graduation Portrait After Editing',
    title: 'Graduation Photography',
    icon: 'fas fa-graduation-cap text-primary',
    description: 'Celebrating academic achievements and new beginnings'
  },
  {
    before: '../assets/author/author_bg.jpg',
    after: '../assets/about/hiking.png',
    beforeAlt: 'Family Portrait Before Editing',
    afterAlt: 'Family Portrait After Editing',
    title: 'Family Photography',
    icon: 'fas fa-users text-success',
    description: 'Preserving precious moments and family bonds'
  },
  {
    before: '../assets/about/sanfran2.png',
    after: '../assets/author/author_bg.jpg',
    beforeAlt: 'Corporate Headshot Before Editing',
    afterAlt: 'Corporate Headshot After Editing',
    title: 'Corporate Photography',
    icon: 'fas fa-briefcase text-info',
    description: 'Professional headshots and corporate events'
  },
  {
    before: '../assets/about/hiking.png',
    after: '../assets/about/sanfran2.png',
    beforeAlt: 'Portrait Session Before Editing',
    afterAlt: 'Portrait Session After Editing',
    title: 'Portrait Photography',
    icon: 'fas fa-camera text-warning',
    description: 'Creative portraits and artistic expressions'
  }
];

function updateWeddingCarousel() {
  const beforeImg = document.getElementById('wedding-before-img');
  const afterImg = document.getElementById('wedding-after-img');
  const counter = document.getElementById('carousel-counter');
  const sectionIcon = document.getElementById('section-icon');
  const sectionName = document.getElementById('section-name');
  const sectionDescription = document.getElementById('section-description');
  
  if (beforeImg && afterImg && counter) {
    const currentCategory = photographyCategories[currentWeddingIndex];
    
    // Update images
    beforeImg.src = currentCategory.before;
    beforeImg.alt = currentCategory.beforeAlt;
    
    afterImg.src = currentCategory.after;
    afterImg.alt = currentCategory.afterAlt;
    afterImg.classList.add('blurred');
    afterImg.classList.remove('transformed');
    
    // Update counter
    counter.textContent = `${currentWeddingIndex + 1} of ${photographyCategories.length}`;
    
    // Update dynamic header
    if (sectionIcon && sectionName && sectionDescription) {
      sectionIcon.className = currentCategory.icon + ' me-2';
      sectionName.textContent = currentCategory.title;
      sectionDescription.textContent = currentCategory.description;
    }
    
    // Reset transform overlay
    const overlay = document.getElementById('wedding-transform-overlay');
    if (overlay) {
      overlay.innerHTML = `
        <button class="transform-btn" onclick="transformWeddingImage()">
          <i class="fas fa-magic"></i>
          <span>Transform</span>
        </button>
      `;
      overlay.classList.remove('hidden');
    }
  }
}

function nextWeddingImage() {
  currentWeddingIndex = (currentWeddingIndex + 1) % photographyCategories.length;
  updateWeddingCarousel();
}

function previousWeddingImage() {
  currentWeddingIndex = (currentWeddingIndex - 1 + photographyCategories.length) % photographyCategories.length;
  updateWeddingCarousel();
}

function transformWeddingImage() {
  const afterImage = document.getElementById('wedding-after-img');
  const transformOverlay = document.getElementById('wedding-transform-overlay');
  
  // Start the transformation
  afterImage.classList.remove('blurred');
  afterImage.classList.add('transformed');
  
  // Hide the transform button with a slight delay
  setTimeout(() => {
    transformOverlay.classList.add('hidden');
  }, 300);
  
  // Add a "Reset" button after transformation
  setTimeout(() => {
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '<i class="fas fa-undo"></i> <span>Reset</span>';
    resetBtn.className = 'transform-btn';
    resetBtn.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
    resetBtn.onclick = () => resetWeddingImage();
    
    transformOverlay.innerHTML = '';
    transformOverlay.appendChild(resetBtn);
    transformOverlay.classList.remove('hidden');
  }, 1500);
}

function resetWeddingImage() {
  const afterImage = document.getElementById('wedding-after-img');
  const transformOverlay = document.getElementById('wedding-transform-overlay');
  
  // Reset the image
  afterImage.classList.add('blurred');
  afterImage.classList.remove('transformed');
  
  // Hide reset button
  transformOverlay.classList.add('hidden');
  
  // Show original transform button again
  setTimeout(() => {
    transformOverlay.innerHTML = `
      <button class="transform-btn" onclick="transformWeddingImage()">
        <i class="fas fa-magic"></i>
        <span>Transform</span>
      </button>
    `;
    transformOverlay.classList.remove('hidden');
  }, 500);
}