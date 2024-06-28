document.addEventListener('DOMContentLoaded', function() {
    let imagens = document.querySelectorAll('.imagem-carrossel img');
    let atual = 0;

    imagens[atual].style.display = 'block';
    imagens[atual].classList.add('ativo');

    setInterval(() => {
        imagens[atual].classList.remove('ativo');
        imagens[atual].style.display = 'none'; // Esconde a imagem atual
        atual = (atual + 1) % imagens.length; // Move para a próxima imagem
        imagens[atual].style.display = 'block'; // Mostra a próxima imagem
        imagens[atual].classList.add('ativo');
    }, 5000); // Muda a imagem a cada 5 segundos
});
