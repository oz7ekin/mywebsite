const language = {
    en: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
      // Add more English text content here
    },
    fr: {
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact:"Contact"
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
  