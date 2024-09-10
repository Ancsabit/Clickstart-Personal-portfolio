document.querySelectorAll('.port-card .image img').forEach(img => {
    img.addEventListener('click', function() {
        const parentCard = this.closest('.port-card'); 
        const link = parentCard.querySelector('a');
        if (link) {
            window.open(link.href, '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('iframe');
    if (form) {
        form.addEventListener('load', function() {
            console.log('Google Form is loaded.');
        });
    }
});



