//function to automatically scroll to sites bottom
function scrollToContact() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

//toggling the mobile navigation menu
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});

//function to fill the dropdown to be displayed
//verknüpfung felt
window.onload = function() {
    // reference to dropdown
    const dropdown = document.getElementById('dropdown');
  
    // Durch die Liste iterieren und Optionen zum Dropdown hinzufügen
    meineListe.forEach((element) => {
      const option = document.createElement('option');
      option.value = element;
      option.text = element;
      dropdown.appendChild(option);
    });
}

fetch('http://localhost:8080/swagger-ui/index.html/menus/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netzwerkfehler: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fehler beim Fetchen der Daten:', error);
  });
