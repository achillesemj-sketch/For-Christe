// Floating Hearts Effect
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';
  
  // Random horizontal position
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Random font size (between 12px and 28px)
  const size = Math.random() * 16 + 12;
  heart.style.fontSize = size + 'px';
  
  // Random animation duration (3s to 7s)
  const duration = Math.random() * 4 + 3;
  heart.style.animationDuration = duration + 's';

  heartsContainer.appendChild(heart);

  // Remove heart from DOM after animation completes
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Generate a heart every 400ms
setInterval(createHeart, 400);

// Modal Controls
const surpriseBtn = document.getElementById('surprise-btn');
const noteModal = document.getElementById('note-modal');
const closeBtn = document.getElementById('close-btn');

surpriseBtn.addEventListener('click', () => {
  noteModal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  noteModal.classList.add('hidden');
});

// Close modal if user clicks outside content box
window.addEventListener('click', (event) => {
  if (event.target === noteModal) {
    noteModal.classList.add('hidden');
  }
});