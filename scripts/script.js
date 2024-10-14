document.querySelectorAll('.cards .card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.cards .card').forEach(sibling => {
            if (sibling !== card) {
                sibling.style.filter = 'blur(2px)';

            }
        });

        const explorerButtons = document.getElementsByClassName("Explorer");
        for (let i = 0; i < explorerButtons.length; i++) {
            if (explorerButtons[i].parentNode === card) {
                explorerButtons[i].style.opacity = 1;
                explorerButtons[i].style.bottom = '20px';
            }
        }

    });

    card.addEventListener('mouseleave', () => {
        document.querySelectorAll('.cards .card').forEach(sibling => {
            sibling.style.transform = 'scale(1)';
            sibling.style.filter = 'none';
        });

        const explorerButtons = document.getElementsByClassName("Explorer");
        for (let i = 0; i < explorerButtons.length; i++) {
            if (explorerButtons[i].parentNode === card) {
                explorerButtons[i].style.opacity = 0;
                explorerButtons[i].style.bottom = '-25px';
            }
        }

    });
});