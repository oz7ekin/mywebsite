window.onload = function() {
    function openAboutModal() {
      document.querySelector('.open-modal-about').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#about-modal').style.display = 'block';
      });
    }
    function openExperienceModal() {
      document.querySelector('.open-modal-experience').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#experience-modal').style.display = 'block';
      });
    }
    function openProjectsModal() {
      document.querySelector('.open-modal-projects').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#projects-modal').style.display = 'block';
      });
    }
  
    openAboutModal();
    openExperienceModal();
    openProjectsModal();
  
  
  // Close modals when close button is clicked
  document.querySelector('.close-modal-about').addEventListener('click', function() {
    document.querySelector('#about-modal').style.display = 'none';
  });
  
  document.querySelector('.close-modal-experience').addEventListener('click', function() {
    document.querySelector('#experience-modal').style.display = 'none';
  });
  
  document.querySelector('.close-modal-projects').addEventListener('click', function() {
    document.querySelector('#projects-modal').style.display = 'none';
  });
  
  // Close modals when clicked outside of the modal
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
};