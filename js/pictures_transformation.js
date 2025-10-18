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