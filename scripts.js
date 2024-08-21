document.addEventListener('DOMContentLoaded', function() {
    const modules = document.querySelectorAll('.module h3');
    modules.forEach(module => {
        module.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
