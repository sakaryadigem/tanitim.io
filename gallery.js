let currentImageIndex = 0;
let images = [];

function openModal(element) {
  // Tüm galeri resimlerini topla
  images = Array.from(document.querySelectorAll('.gallery-item img'));
  currentImageIndex = images.indexOf(element);
  
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  
  modal.style.display = "block";
  modalImg.src = element.src;
  captionText.innerHTML = element.alt;
  
  // Klavye olaylarını dinle
  document.addEventListener('keydown', handleKeyPress);
}

function closeModal() {
  document.getElementById('imageModal').style.display = "none";
  document.removeEventListener('keydown', handleKeyPress);
}

// Klavye ile kontrol (ESC, sol/sağ ok)
function handleKeyPress(e) {
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    changeImage(-1);
  } else if (e.key === 'ArrowRight') {
    changeImage(1);
  }
}

// Önceki/Sonraki resim fonksiyonu
function changeImage(direction) {
  currentImageIndex += direction;
  
  // Döngüsel geçiş
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  
  modalImg.src = images[currentImageIndex].src;
  captionText.innerHTML = images[currentImageIndex].alt;
}

// Modal dışına tıklayınca kapat
document.getElementById('imageModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});