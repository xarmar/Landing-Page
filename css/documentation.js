var readyState = document;

if (readyState = "complete") {
    if (window.innerWidth <= 1365) {

        function off () {
            var chkBox = document.getElementById('toggle-mobile-menu');
            if (chkBox.checked)
            {
                chkBox.checked=false;
            }
        }

        window.onload = function() {
            var listener = document.querySelector("#main-menu");    
            listener.addEventListener('click', function () {
                off();
            })
    }
}
}