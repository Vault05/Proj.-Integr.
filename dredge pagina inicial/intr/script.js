
        function filterFish(type) {
            const cards = document.querySelectorAll('.fish-card');
            const buttons = document.querySelectorAll('.filters button');

            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            cards.forEach(card => {
                if (type === 'all') {
                    card.style.display = 'block';
                } else if (card.classList.contains(type)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    