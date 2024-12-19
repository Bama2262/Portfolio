window.onload = function() {
    const audio = document.getElementById('backgroundMusic');
    window.addEventListener('click', () => audio.play().catch(error => console.log('Autoplay error:', error)));
    window.addEventListener('scroll', () => audio.play().catch(error => console.log('Autoplay error:', error)));
}