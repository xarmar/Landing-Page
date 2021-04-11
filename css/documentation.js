let readyState = document;

if (readyState = "complete") {
    if (window.innerWidth <= 1365) {

        function off () {
            subMenu = "off";
        }

        window.onload = function() {
            var subMenu = document.getElementById("toggle-mobile-menu").value;
            var listener = document.getElementsByClassName("nav-link");    
            listener.addEventListener('click', off);
    }
}
}