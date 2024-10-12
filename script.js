document.addEventListener('DOMContentLoaded', function() {
    // Função para expandir/recolher os cards
    const readMoreButtons = document.querySelectorAll(".btn");

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const text = card.querySelector('.text');

            // Verifica se o card está expandido
            if (card.classList.contains('active')) {
                text.style.maxHeight = '50px'; // Recolhe o texto
                button.textContent = 'Read More';
                button.style.backgroundColor = '#6046ff';
            } else {
                text.style.maxHeight = text.scrollHeight + 'px'; // Expande o texto
                button.textContent = 'Read Less';
                button.style.backgroundColor = '#e74c3c';
            }

            // Alterna a classe active
            card.classList.toggle('active');
        });
    });

    // Função de busca
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector('.title').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                card.style.display = 'block'; // Mostra os cards correspondentes
            } else {
                card.style.display = 'none'; // Oculta os cards que não correspondem
            }
        });
    });
});
