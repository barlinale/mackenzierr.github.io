
function shownavbar() {
  const nav = document.querySelector('nav');
  const bottle = document.querySelector('.bottle');

  nav.classList.toggle('active');
  bottle.classList.toggle('open');

  if (nav.classList.contains('active')) {
    // Wait for the CSS transition to finish before scrolling
    nav.addEventListener('transitionend', function scrollHandler() {
      nav.scrollIntoView({ behavior: 'smooth', block: 'end' });
      
      // Remove the listener so it doesn't fire again until next click
      nav.removeEventListener('transitionend', scrollHandler);
    }, { once: true });
  }
}

function handleButtonChange() {
  const btn = document.getElementById('submitBtn');
  if (btn) {
    btn.innerText = "Cheers!";
    btn.style.backgroundColor = "D10026" ; 
    btn.style.color = "f9f9f9";
    // Optional: make it look unclickable now that it's done
    btn.style.cursor = "default";
    btn.disabled = true; 
  }
}