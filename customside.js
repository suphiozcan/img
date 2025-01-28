




let siteLanguage = 'tr';

const sidebarBig = document.querySelector('.sidebar-big');

const newDiv = document.createElement('div');
newDiv.classList.add('sidebar__link', 'custom_side');

const link = document.createElement('a');
link.classList.add('sidebar__link', 'sidebar__link--casino', 'custom_a');
link.href = '#';
link.style.height = '46';


if (siteLanguage === 'en') {
  link.style.background = 'url("https://betesbet.live/640x156-en.png") no-repeat center';
} else {
  link.style.background = 'url("https://betesbet.live/640x156-EMPTY.png") no-repeat center';
}
link.style.backgroundSize = 'cover';

newDiv.appendChild(link);

if (sidebarBig.children.length >= 1) {
  sidebarBig.insertBefore(newDiv, sidebarBig.children[1]);
} else {
  sidebarBig.appendChild(newDiv);
}

function updateLanguage(newLanguage) {
  siteLanguage = newLanguage;
  if (siteLanguage === 'en') {
    link.style.background = 'url("https://betesbet.live/640x156-en.png") no-repeat center';
  } else {
    link.style.background = 'url("https://betesbet.live/640x156-EMPTY.png") no-repeat center';
  }
  link.style.backgroundSize = 'cover';
}

updateLanguage('en');
