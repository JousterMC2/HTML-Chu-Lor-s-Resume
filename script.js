document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleSection = document.getElementById('toggleSection');

    toggleButton.addEventListener('click', function() {
        if (toggleSection.style.display === "none") {
            toggleSection.style.display = "block";
        } else {
            toggleSection.style.display = "none";
        }
    });
});
