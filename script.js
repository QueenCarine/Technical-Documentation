AOS.init();

const searchBox = document.querySelector('.search-box');
const sidebarLinks = document.querySelectorAll('.sidebar a');
searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  sidebarLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.parentElement.style.display = text.includes(query) ? 'block' : 'none';
  });
});

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    
    modalImg.style.transform = "none";
    modalImg.style.boxShadow = "none";
    modalImg.style.border = "none";
    modalImg.style.animation = "none";
    modalImg.style.transition = "none";
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});