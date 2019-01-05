(function() {
    document.addEventListener("touchend", function(e) {
        var input = document.getElementsByClassName('menu_checkbox')[0],
            computedStyles = window.getComputedStyle(input);
        if (computedStyles.display !== 'none') {
            if (e.target.className.indexOf('navLink') > -1) {
                input.checked = false;
            }
        }
    });
})();