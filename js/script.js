const menuToggle  = document.querySelector('#menu-toggle');
const menulist  = document.querySelector('#menu-list');

menuToggle.addEventListener('click', function(){
    menulist.classList.toggle('active');
})


// removing class code

document.addEventListener('DOMContentLoaded', function() {
    const removeButton = document.getElementById('removeButton');
  
    removeButton.addEventListener('click', () => {
      // Select the element(s) with the 'my-class' class and remove it
      const elementsToModify = document.querySelectorAll('.active');
      elementsToModify.forEach((element) => {
        element.classList.remove('active');
      });
    });
  });

  
  
  
  