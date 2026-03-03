window.addEventListener("load", function(){
    const sardineTin = document.getElementById("sardine-can");
    const sardineCount = this.document.getElementById("sardine-count");

    let count = 0;
    let sardinesPerClick = 1;
    let sardinesPerSecond = 0;
    let catsOwned = 0;

    sardineTin.style.transition = "transform 0.2s";
    sardineTin.style.cursor = "pointer";

    const shopItems = document.querySelectorAll(".shelf");

    //disabling & enabling shop buttons
    function updateShopButtons() {
        for (let i = 0; i < shopItems.length; i++) {
            const item = shopItems[i];
            const cost = parseInt(item.dataset.cost);

            if (count >= cost) {
                item.style.opacity = "1";
                item.style.backgroundColor = "";
                item.style.pointerEvents = "auto";
            } else {
                item.style.opacity = "0.5";
                item.style.backgroundColor = "rgb(192, 192, 192)";
                item.style.pointerEvents = "none";
            }
        }
    }

    //click animation
    sardineTin.addEventListener("click", function() {
        sardineTin.style.transform = "scale(1.1)";

        setTimeout(function() {
            sardineTin.style.transform = "scale(1)";
        }, 50);

        count += sardinesPerClick;
        sardineCount.innerHTML = count;
        updateShopButtons();
        rewards();
    });

    //automatic sardine counter
    setInterval(function() {
        count += sardinesPerSecond;
        sardineCount.innerHTML = count;
        updateShopButtons();
        rewards();
    }, 1000);
    
    const livingRoom = document.querySelector(".cat-container");

    //shop mechanisms
    for (let i = 0; i < shopItems.length; i++) {
        const item = shopItems[i];
        const shopCount = item.querySelector('.upgrade-count');
        const upgradeName = item.querySelector("h2").innerHTML;

        let upgradeCounter = 0;
        item.style.cursor = "pointer";

        item.addEventListener("click", function(){
            const cost = parseInt(item.dataset.cost);
            if (count < cost) return; //not enough sardines
            count -= cost;
            sardineCount.innerHTML = count;

            item.dataset.cost = Math.floor(cost * 1.5); //multiply cost everytime you buy
            item.querySelector("p").innerHTML = "Cost: " + item.dataset.cost; //update cost display
            
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
                catsOwned += 1;
                new Cat("images/lazycatclear.png", livingRoom);
            }
            if (upgradeName === "Regular Cat") {
                sardinesPerSecond += 10;
                catsOwned += 1;
                new Cat("images/regulargreycat105x130.png", livingRoom);  
            }
            if (upgradeName === "Rich Cat") {
                sardinesPerSecond += 15;
                catsOwned += 1;
                new Cat("images/richcat.png", livingRoom);
            }
            if (upgradeName === "Fat Cat") {
                sardinesPerSecond += 25;
                catsOwned += 1;
                new Cat("images/fatcat.png", livingRoom);
            }
        });
    }

    //cat object for living room
    class Cat {
    constructor(imageSrc, container) {
        this.image = document.createElement("img");
        this.image.src = imageSrc;
        this.image.style.position = "absolute";
        this.image.style.width = "70px";

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const catWidth = 70;
        const catHeight = 70;

        //center area
        const zoneWidth = containerWidth * 0.5;
        const zoneHeight = containerHeight * 0.5;

        //starting points of center area
        const zoneStartX = (containerWidth - zoneWidth) / 2;
        const zoneStartY = (containerHeight - zoneHeight) / 2;

        //random position generator
        const randomX = zoneStartX + Math.random() * (zoneWidth - catWidth);
        const randomY = zoneStartY + Math.random() * (zoneHeight - catHeight);

        this.image.style.left = randomX + "px";
        this.image.style.top = randomY + "px";

        container.appendChild(this.image);
    }
    }

    //achievements & reward messages
    function rewards() {
        const message = document.getElementById("rewardMessage");

        if (count >= 100 && document.getElementById("Ach1").style.display !== "block") {
            document.getElementById("Ach1").style.display = "block";

            message.innerHTML = "Achievement Unlocked!";

            setTimeout(function(){
                message.innerHTML = "Living Room";
            }, 4000);
        }
        else if (catsOwned >= 1 && document.getElementById("Ach2").style.display !== "block") {
            document.getElementById("Ach2").style.display = "block";
            message.innerHTML = "Achievement Unlocked!";

            setTimeout(function(){
                message.innerHTML = "Living Room";
            }, 4000);
        }
        else if (count>= 1000 && document.getElementById("Ach3").style.display !== "block") {
            document.getElementById("Ach3").style.display = "block";
            message.innerHTML = "Achievement Unlocked!";

            setTimeout(function(){
                message.innerHTML = "Living Room";
            }, 4000);
        }
        else if (catsOwned >= 10 && document.getElementById("Ach4").style.display !== "block") {
            document.getElementById("Ach4").style.display = "block";
            message.innerHTML = "Achievement Unlocked!";

            setTimeout(function(){
                message.innerHTML = "Living Room";
            }, 4000);
        }
        else if (catsOwned >= 25 && document.getElementById("Ach5").style.display !== "block") {
            document.getElementById("Ach5").style.display = "block";
            message.innerHTML = "Achievement Unlocked!";

            setTimeout(function(){
                message.innerHTML = "Living Room";
            }, 4000);
        }
        else if (count >= 100000 && document.getElementById("Ach6").style.display !== "block") {
            document.getElementById("Ach6").style.display = "block";
            message.innerHTML = "Achievement Unlocked!";

            setTimeout(function(){
                message.innerHTML = "Living Room";
            }, 4000);
        }
    }
});