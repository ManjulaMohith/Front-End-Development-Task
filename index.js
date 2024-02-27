
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const isExpanded = box.classList.contains('expanded');
        
        // Collapsing all boxes expect opened one.
        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
                otherBox.querySelector('.dropdowns').style.display = 'none';
            }
        });

        // Toggle class to expand/collapse the clicked box
        box.classList.toggle('expanded');

        // Toggle display of dropdowns within the clicked box
        const dropdowns = box.querySelector('.dropdowns');
        dropdowns.style.display = isExpanded ? 'none' : 'block';
    });
});
