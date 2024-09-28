
document.getElementById("toggleButton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("nav-a-1").classList.toggle("px-3");
    document.getElementById("nav-a-1").classList.toggle("px-1");
    document.getElementById("nav-a-2").classList.toggle("px-3");
    document.getElementById("nav-a-2").classList.toggle("px-1");
    document.getElementById("nav-a-3").classList.toggle("px-3");
    document.getElementById("nav-a-3").classList.toggle("px-1");
    document.getElementById("nav-a-4").classList.toggle("px-3");
    document.getElementById("nav-a-4").classList.toggle("px-1");
    document.getElementById("nav-a-5").classList.toggle("px-3");
    document.getElementById("nav-a-5").classList.toggle("px-1");
    document.getElementById("login-btn").classList.toggle("px-3");
    document.getElementById("login-btn").classList.toggle("px-1");
});

function toggleSidebarClassBasedOnWidth() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById("toggleButton")
  
    if (window.innerWidth < 768) {
        sidebar.classList.add('collapsed');
        toggle.classList.remove('active');
        document.getElementById("nav-a-1").classList.remove("px-3");
        document.getElementById("nav-a-1").classList.add("px-1");
        document.getElementById("nav-a-2").classList.remove("px-3");
        document.getElementById("nav-a-2").classList.add("px-1");
        document.getElementById("nav-a-3").classList.remove("px-3");
        document.getElementById("nav-a-3").classList.add("px-1");
        document.getElementById("nav-a-4").classList.remove("px-3");
        document.getElementById("nav-a-4").classList.add("px-1");
        document.getElementById("nav-a-5").classList.remove("px-3");
        document.getElementById("nav-a-5").classList.add("px-1");
        document.getElementById("login-btn").classList.remove("px-3");
        document.getElementById("login-btn").classList.add("px-1");
    } else {
        sidebar.classList.remove('collapsed');
        toggle.classList.add('active');
        document.getElementById("nav-a-1").classList.add("px-3");
        document.getElementById("nav-a-1").classList.remove("px-1");
        document.getElementById("nav-a-2").classList.add("px-3");
        document.getElementById("nav-a-2").classList.remove("px-1");
        document.getElementById("nav-a-3").classList.add("px-3");
        document.getElementById("nav-a-3").classList.remove("px-1");
        document.getElementById("nav-a-4").classList.add("px-3");
        document.getElementById("nav-a-4").classList.remove("px-1");
        document.getElementById("login-btn").classList.add("px-3");
        document.getElementById("login-btn").classList.remove("px-1");
    }
  }
  
toggleSidebarClassBasedOnWidth();
  
window.addEventListener('resize', toggleSidebarClassBasedOnWidth);

var myModal = new bootstrap.Modal(document.getElementById('formModal'), {
    backdrop: 'static',
    keyboard: false
});

document.getElementById('flipToRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.flip-card').classList.add('flipped');
});

document.getElementById('flipToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.flip-card').classList.remove('flipped');
});

document.addEventListener('DOMContentLoaded', function() {
    var js_static_authentication = false;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        authenticateUser();
    });

    function authenticateUser() {
        var username = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        if (username === "admin@gmail.com" && password === "12345678") {
            js_static_authentication = true;
            toggleNavButtons(true);
            closeModal();
        } else {
            alert("Invalid username or password");
        }
    }

    function closeModal() {
        var closeButton = document.querySelector('.btn-close[data-bs-dismiss="modal"]');
        if (closeButton) {
            closeButton.click();
        }
    }
    
    function callModal() {
        var callButton = document.querySelector('#login-btn[data-bs-toggle="modal"]');
        if (callButton) {
            callButton.click();
        }
    }

    const logoutLink = document.getElementById('nav-a-2');

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        const userConfirmed = confirm('Are you sure you want to logout?');

        if (userConfirmed) {
            window.location.href = logoutLink.href; 
        }
    });

    document.getElementById('upload-media').addEventListener('click', function (event) {
        event.preventDefault();
        var element = document.getElementById('nav-menus-login');
        var displayStyle = window.getComputedStyle(element).display;

        if (displayStyle === 'block') {
            callModal();
        } else {
            console.log('logged in');
        }
    });

    function toggleNavButtons(show) {
        var navLink = document.getElementById('nav-menus');
        var navLinklogin = document.getElementById('nav-menus-login');
        if (navLink && navLinklogin) {
            if (show) {
                navLink.style.display = 'block';
                navLinklogin.style.display = 'none';
            } else {
                navLink.style.display = 'none';
                navLinklogin.style.display = 'block';
            }
        } else {
            console.error('Navigation links not found.');
        }
    }
});