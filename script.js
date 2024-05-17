const images = ["imagem1.avif", "imagem2.avif", "imagem3.avif"]; // Substitua os nomes dos arquivos pelas suas imagens

const imageContainer = document.getElementById("imageContainer");
const startButton = document.getElementById("startAnimation");

startButton.addEventListener("click", startAnimation);

function startAnimation() {
  let currentIndex = 0;
  const interval = setInterval(() => {
    if (currentIndex < images.length) {
      const img = new Image();
      img.src = images[currentIndex];
      img.classList.add("image");
      imageContainer.innerHTML = ''; // Limpa o conteúdo anterior
      imageContainer.appendChild(img);
      currentIndex++;
    } else {
      clearInterval(interval); // Para a animação quando todas as imagens forem exibidas
    }
  }, 1000); // Intervalo de 1 segundo entre cada imagem
}
