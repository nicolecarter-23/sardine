window.onload = function(){
        const sardineTin = document.getElementById("sardine-can")

        sardineTin.style.transition = "transform 0.2s";
        sardineTin.style.cursor = "pointer";

        sardineTin.addEventListener('click', function() {
            sardineTin.style.transform = "scale(1.1)";

        setTimeout(function() {
            sardineTin.style.transform = "scale(1)";
        }, 200);
    });
};