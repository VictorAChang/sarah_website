// Book animation and interaction functionality
document.addEventListener('DOMContentLoaded', function() {
  let currentPage = 0;
  const totalPages = 5;
  const pages = document.querySelectorAll('.page');
  const indicators = document.querySelectorAll('.indicator');
  const book = document.querySelector('.book');
  let autoFlipInterval;
  
  // Start auto-flip
  startAutoFlip();
  
  // Click handlers for pages
  pages.forEach(page => {
    page.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!e.target.closest('a')) {
        nextPage();
      }
    });
  });
  
  // Click handlers for indicators
  indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetPage = parseInt(indicator.dataset.page);
      goToPage(targetPage);
      resetAutoFlip();
    });
  });
  
  function startAutoFlip() {
    autoFlipInterval = setInterval(() => {
      nextPage();
    }, 4000);
  }
  
  function resetAutoFlip() {
    clearInterval(autoFlipInterval);
    setTimeout(startAutoFlip, 8000); // Resume after 8 seconds
  }
  
  function nextPage() {
    currentPage = currentPage >= totalPages - 1 ? 0 : currentPage + 1;
    goToPage(currentPage);
  }
  
  function goToPage(pageNum) {
    currentPage = pageNum;
    
    // Add or remove open class for centering
    if (pageNum > 0) {
      book.classList.add('open');
    } else {
      book.classList.remove('open');
    }
    
    // Update left page image based on current page
    updateLeftPageImage(pageNum);
    
    pages.forEach((page, index) => {
      if (index < pageNum) {
        page.classList.add('flipped');
      } else {
        page.classList.remove('flipped');
      }
    });
    
    indicators.forEach((indicator, index) => {
      indicator.classList.remove('active');
      if (index === pageNum) {
        indicator.classList.add('active');
      }
    });
  }
  
  function updateLeftPageImage(pageNum) {
    const coverBackImage = document.querySelector('.cover-back-image');
    const coverBackText = document.querySelector('.cover-back-text');
    
    // Define images and text for each page
    const pageData = {
      0: { 
        image: 'assets/about/dogs.png', 
        alt: 'Pam and Benny', 
        text: 'Meet Pam & Benny' 
      },
      1: { 
        image: 'assets/author/henry_bookcover.jpg', 
        alt: 'Henry Goes to Zoo Book Cover', 
        text: 'Published Author' 
      },
      2: { 
        image: 'assets/yoga/yoga1.png', 
        alt: 'Sarah doing yoga', 
        text: 'Yoga Instructor' 
      },
      3: { 
        image: 'assets/about/hiking.png', 
        alt: 'Sarah hiking', 
        text: 'Photographer' 
      },
      4: { 
        image: 'assets/about/sanfran1.png', 
        alt: 'Sarah in San Francisco', 
        text: 'About Sarah' 
      }
    };
    
    const data = pageData[pageNum];
    if (data && coverBackImage && coverBackText) {
      coverBackImage.src = data.image;
      coverBackImage.alt = data.alt;
      coverBackText.textContent = data.text;
    }
  }
  
  // Pause auto-flip on hover
  document.querySelector('.book').addEventListener('mouseenter', () => {
    clearInterval(autoFlipInterval);
  });
  
  document.querySelector('.book').addEventListener('mouseleave', () => {
    resetAutoFlip();
  });
});