document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    hamburger.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
