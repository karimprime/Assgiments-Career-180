document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamicText');
    const form = document.getElementById('styleForm');

    form.addEventListener('change', (event) => {
        const target = event.target;

        if (target.name === 'fontFamily') {
            dynamicText.style.fontFamily = target.value;
        }

        if (target.name === 'textAlign') {
            dynamicText.style.textAlign = target.value;
        }

        if (target.name === 'lineHeight') {
            dynamicText.style.lineHeight = target.value;
        }

        if (target.name === 'letterSpacing') {
            dynamicText.style.letterSpacing = target.value;
        }

        if (target.name === 'textTransform') {
            dynamicText.style.textTransform = target.value;
        }

        if (target.name === 'textDecoration') {
            dynamicText.style.textDecoration = target.value;
        }

        if (target.name === 'textBorder') {
            dynamicText.style.borderStyle = target.value;
        }

        if (target.name === 'borderColor') {
            dynamicText.style.borderColor = target.value;
        }
    });
});
