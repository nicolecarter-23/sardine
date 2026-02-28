window.onload = function(){
    const sardineTin = document.getElementById("sardine-can");
    const sardineCount = this.document.getElementById("sardine-count");

    let count = 0;
    let sardinesPerClick = 1;
    let sardinesPerSecond = 0;

    sardineTin.style.transition = "transform 0.2s";
    sardineTin.style.cursor = "pointer";

    sardineTin.addEventListener("click", function() {
        sardineTin.style.transform = "scale(1.1)";

        setTimeout(function() {
            sardineTin.style.transform = "scale(1)";
        }, 50);

        count += sardinesPerClick;
        sardineCount.textContent = count;
    });

    setInterval(function() {
        count += sardinesPerSecond;
        sardineCount.textContent = count;
    }, 1000);
    
    const shopItems = document.querySelectorAll(".shelf");

    for (i=0; i<shopItems.length; i++){
        const item = shopItems[i];
        const shopCount = item.querySelector('.upgrade-count');
        const upgradeName = item.querySelector("h2").textContent;

        let upgradeCounter = 0;
        item.style.cursor = "pointer";

        item.addEventListener("click", function(){
            upgradeCounter += 1;
            shopCount.textContent = upgradeCounter;

            if (upgradeName === "Extra Paw") {
                sardinesPerClick += 1;
            }
            if (upgradeName === "Can Opener") {
                sardinesPerClick += 5;
            }
            if (upgradeName === "Bigger Tin") {
                sardinesPerClick += 10;
            }

            if (upgradeName === "Lazy Cat") {
                sardinesPerSecond += 1;
            }
            if (upgradeName === "Regular Cat") {
                sardinesPerSecond += 10;
            }
            if (upgradeName === "Rich Cat") {
                sardinesPerSecond += 1;
            }
            if (upgradeName === "Fat Cat") {
                sardinesPerSecond += 25;
            }
        })
    }



};