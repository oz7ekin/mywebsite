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
  const language = {
    en: {
      greeting:"Selim Oztekin",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      notice: "Get in Touch",
      send: "Send a Message",
      // Add more English text content here
    },
    fr: {
      greeting:"Selim Oztekin",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact:"Contact",
      notice: "entrer en contact",
      send: "envoyer le message",
      // Add more French text content here
    },
  };
  
  let selectedLanguage = "en"; // default language is English
  const languageSwitcher = document.querySelector(".language-switcher");
  console.log(languageSwitcher); // add this line

  
  languageSwitcher.addEventListener("click", function(event) {
    // prevent the default action of the button
    event.preventDefault();
    
    // update the selected language based on the button clicked
    if (event.target.id === "en") {
      selectedLanguage = "en";
    } else if (event.target.id === "fr") {
      selectedLanguage = "fr";
    }
    
    // call a function to update the page content with the selected language
    updatePageContent();
  });
  
  function updatePageContent() {
    console.log("updatePageContent called"); // add this line
    const i18nElements = document.querySelectorAll("[data-i18n]");

    
    // loop through each element and replace its text content with the corresponding text in the selected language
    i18nElements.forEach(function(element) {
      const key = element.getAttribute("data-i18n");
      element.textContent = language[selectedLanguage][key];
    });
  }
  
  
    
};