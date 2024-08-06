const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener('input', () => {
        if (code.value.length === 1) {
            if (index < 5) {
                codes[index + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (code.value.length === 0) {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            }
        }
    });
});