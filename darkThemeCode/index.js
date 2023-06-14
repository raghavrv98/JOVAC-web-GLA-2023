const themeToggle = document.getElementById('theme-toggle-btn');
const themeStylesheet = document.getElementById('theme-stylesheet');

themeToggle.addEventListener('click', function () {
 
  if (themeStylesheet.getAttribute('href') === 'light-theme.css') {
    themeStylesheet.setAttribute('href', 'dark-theme.css');
  } else {
    themeStylesheet.setAttribute('href', 'light-theme.css');
  }

  if (contentElement.className === 'light-theme') {
    contentElement.className = 'dark-theme';
  } else {
    contentElement.className = 'light-theme';
  }

 

});

const handleCheckbox = () => {
  const themeToggleSwitch = document.getElementById('switch-toggle');
  if (themeToggleSwitch.checked) {
    contentElement.className = 'dark-theme';
    themeStylesheet.setAttribute('href', 'dark-theme.css');
  } else {
    contentElement.className = 'light-theme';
    themeStylesheet.setAttribute('href', 'light-theme.css');
  }
}

