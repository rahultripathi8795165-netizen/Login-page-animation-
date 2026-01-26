const pullString = document.getElementById('pull-string');

// When the user clicks the string
pullString.addEventListener('click', () => {
    // Add or remove the "on" class from the body
    document.body.classList.toggle('on');
});
