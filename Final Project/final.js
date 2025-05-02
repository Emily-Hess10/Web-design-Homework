
console.log("Welcome to Emily Hess's Portfolio Website!");

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.classList.contains('active')) {
      link.style.backgroundColor = '#006f98';
      link.style.borderRadius = '5px';
    }
  });


  const listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.color = '#004b6b';
      item.style.fontWeight = 'bold';
    });
    item.addEventListener('mouseleave', () => {
      item.style.color = '';
      item.style.fontWeight = '';
    });
  });
});
