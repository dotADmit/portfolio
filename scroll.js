const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    const block = document.getElementById(blockID);
    
    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
