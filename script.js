const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  // Check if the clicked element is the 'next' or 'prev' button
  if (e.target.matches('.next')) {
    slider.append(items[0]); // Move the first item to the end
  } 
  else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]); // Move the last item to the beginning
  }
}

// Attach the event listener to the document
document.addEventListener('click', activate, false);
