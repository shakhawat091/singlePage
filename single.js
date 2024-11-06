const logos = document.querySelectorAll('.logo');
const titles = document.querySelectorAll('.title');

logos.forEach((logo, index) => {
    logo.addEventListener('mouseover', function() {
        titles[index].style.color = '#1e7df7'; 
        logo.style.transform = 'scale(1.03)';
    });

    logo.addEventListener('mouseout', function() {
        titles[index].style.color = '';
        logo.style.transform = 'none';
    });
});

titles.forEach((title, index) => {
    title.addEventListener('mouseover', function() {
        title.style.color = '#1e7df7'; 
        logos[index].style.transform = 'scale(1.03)';
    });

    title.addEventListener('mouseout', function() {
        title.style.color = '';
        logos[index].style.transform = 'none';
    });
});





  