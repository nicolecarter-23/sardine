window.onload = function(){
    const sardineTin = document.getElementById("sardine-can");
    const sardineCount = this.document.getElementById("sardine-count");

    let count = 0;

    sardineTin.style.transition = "transform 0.2s";
    sardineTin.style.cursor = "pointer";

    sardineTin.addEventListener("click", function() {
        sardineTin.style.transform = "scale(1.1)";

    setTimeout(function() {
        sardineTin.style.transform = "scale(1)";
    }, 100);

    count += 1;
    sardineCount.textContent = count;
    });
    
    const shopItems = document.querySelectorAll(".shelf");

    for (i=0; i<shopItems.length; i++){
        const item = shopItems[i];
        const shopCount = item.querySelector('.upgrade-count');
        let upgradeCounter = 0;
        item.style.cursor = "pointer";

        item.addEventListener("click", function(){
            upgradeCounter += 1;
            shopCount.textContent = upgradeCounter;
        })
    }

};