//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    code.addEventListener('keyup', (e) => {
        if (e.target.value.length === 1) {
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        } else if (e.key === 'Backspace' && index > 0) {
            codes[index - 1].focus();
            codes[index - 1].select();
        }
    });
});