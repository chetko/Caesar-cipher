(() => {
    const button = document.querySelector('.settings-button');
    const form = document.querySelector('.settings-form');

    button.addEventListener('click', function() {
        if (this.classList.contains('-blackout')) {
            form.classList.remove('-visible');
            setTimeout(() => this.classList.remove('-blackout'), 300);
        } else {
            this.classList.add('-blackout');
            setTimeout(() => form.classList.add('-visible'), 400);
        }
    });
})();