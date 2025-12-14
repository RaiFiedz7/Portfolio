function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// dropdown func
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*color pallete of themes*/
const themes = {
    autumn: {
        text: "saddlebrown",
        background: "#F6EFE7",
        headerFooter: "#E09789",
        bioCard: "#C8DBD7",
        contactCard: "#DDEAD1",
        btnBg: "#A3D39C",
        btnText: "#saddlebrown",
        btnHover: "#8CBB85",
        navStart: "#F9B3A7",
        navEnd: "#FCD5CE"
    },
    summer: {
        text: "#7B4019",
        background: "#FEFFD2",
        headerFooter: "#FFBF78",
        bioCard: "#FFF0CE",
        contactCard: "#FFFDF0",
        btnBg: "#FFFDF0",
        btnText: "#7B4019",
        btnHover: "#FFF0CE",
        navStart: "#FFD7C4",
        navEnd: "#F5D2D2"
    },
    spring: {
        text: "#355F3B",
        background: "#FFF9BD",
        headerFooter: "#A3DC9A",
        bioCard: "#FFE4EF",
        contactCard: "#FFF5F2",
        btnBg: "#FFBDBD",
        btnText: "#355F3B",
        btnHover: "#FFA4A4",
        navStart: "#C7DB9C",
        navEnd: "#D3E671"
    },
    winter: {
        text: "#1F3A5F",
        background: "#EAE0CF",
        headerFooter: "#A8C7E6",
        bioCard: "#E1CCEC",
        contactCard: "#E5D9F2",
        btnBg: "#E5D9F2",
        btnText: "#1F3A5F",
        btnHover: "#E1CCEC",
        navStart: "#A8C7E6",
        navEnd: "#58A0C8"
    },
    night: {
        text: "#DFD0B8",
        background: "#121212",
        headerFooter: "#1F1F1F",
        bioCard: "#1C1C1C",
        contactCard: "#242424",
        btnBg: "#333333",
        btnText: "#DFD0B8",
        btnHover: "#444444",
        navStart: "#333333",
        navEnd: "#555555"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    applyTheme("autumn");
});

//change theme 
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    document.documentElement.setAttribute("data-theme", themeName);

    document.documentElement.style.setProperty("--text-color", theme.text);
    document.documentElement.style.setProperty("--page-bg", theme.background);
    document.documentElement.style.setProperty("--header-footer-bg", theme.headerFooter);
    document.documentElement.style.setProperty("--bio-card-bg", theme.bioCard);
    document.documentElement.style.setProperty("--contact-card-bg", theme.contactCard);

    document.documentElement.style.setProperty("--btn-bg", theme.btnBg);
    document.documentElement.style.setProperty("--btn-text", theme.btnText);
    document.documentElement.style.setProperty("--btn-hover-bg", theme.btnHover);

    document.documentElement.style.setProperty("--nav-gradient-start", theme.navStart);
    document.documentElement.style.setProperty("--nav-gradient-end", theme.navEnd);
}

document.querySelectorAll("[data-theme]").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        applyTheme(this.dataset.theme);
    });
});


//notif
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const sentNotification = document.getElementById('sent-notification');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            sentNotification.style.display = 'block';

            contactForm.reset();

            setTimeout(() => {
                sentNotification.style.display = 'none';
            }, 4000);
        });
    }
});
