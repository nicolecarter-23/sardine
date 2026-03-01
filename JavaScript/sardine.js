window.addEventListener("load", function(){
    const sardineTin = document.getElementById("sardine-can");
    const sardineCount = this.document.getElementById("sardine-count");

    let count = 0;
    let sardinesPerClick = 1;
    let sardinesPerSecond = 0;

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
        sardineCount.textContent = count;
        updateShopButtons();

    });

    //automatic sardine counter
    setInterval(function() {
        count += sardinesPerSecond;
        sardineCount.textContent = count;
        updateShopButtons();
    }, 1000);
    
    const livingRoom = document.querySelector(".cat-container");

    //shop mechanisms
    for (let i = 0; i < shopItems.length; i++) {
        const item = shopItems[i];
        const shopCount = item.querySelector('.upgrade-count');
        const upgradeName = item.querySelector("h2").textContent;

        let upgradeCounter = 0;
        item.style.cursor = "pointer";

        item.addEventListener("click", function(){
            const cost = parseInt(item.dataset.cost);
            if (count < cost) return; //not enough sardines
            count -= cost;
            sardineCount.textContent = count;
            //multiply cost everytime you buy
            item.dataset.cost = Math.floor(cost * 1.5);
            item.querySelector("p").innerHTML = "Cost: " + item.dataset.cost;
            
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
                new Cat("images/lazycatclear.png", livingRoom);
            }
            if (upgradeName === "Regular Cat") {
                sardinesPerSecond += 10;
                new Cat("images/regulargreycat105x130.png", livingRoom);
            }
            if (upgradeName === "Rich Cat") {
                sardinesPerSecond += 1;
                new Cat("images/richcat.png", livingRoom);
            }
            if (upgradeName === "Fat Cat") {
                sardinesPerSecond += 25;
                new Cat("images/fatcat.png", livingRoom);
            }
        });
    }
/*
    function updateShop(){

    }

    const BtnLazyCat = this.document.getElementById("LazyCat");
    const BtnRegCat = this.document.getElementById("RegCat");
    const BtnRichCat = this.document.getElementById("RichCat");
    const BtnFatCat = this.document.getElementById("FatCat");

    const LazyCat0 = document.getElementById("LazyCat0");
    const LazyCat1 = document.getElementById("LazyCat1");
    const LazyCat2 = document.getElementById("LazyCat2");
    const LazyCat3 = document.getElementById("LazyCat3");
    const LazyCat4 = document.getElementById("LazyCat4");

    let LcurrentCat = 0;

    BtnLazyCat.addEventListener("click", function(event) {

        if (LcurrentCat < 5) {
        document.getElementById("LazyCat" + LcurrentCat).style.visibility = "visible";
        LcurrentCat++;
        }

    });

    let RecurrentCat = 0;

    BtnRegCat.addEventListener("click", function(event) {
        const RegCat0 = document.getElementById("RegCat0");
        const RegCat1 = document.getElementById("RegCat1");
        const RegCat2 = document.getElementById("RegCat2");
        const RegCat3 = document.getElementById("RegCat3");
        const RegCat4 = document.getElementById("RegCat4");

        if (RecurrentCat < 5) {
        document.getElementById("RegCat" + RecurrentCat).style.visibility = "visible";
        RecurrentCat++;
        }


    });

    let RicurrentCat = 0;

    BtnRichCat.addEventListener("click", function(event) {
        const RichCat0 = document.getElementById("RichCat0");
        const RichCat1 = document.getElementById("RichCat1");
        const RichCat2 = document.getElementById("RichCat2");
        const RichCat3 = document.getElementById("RichCat3");
        const RichCat4 = document.getElementById("RichCat4");

        if (RicurrentCat < 5) {
        document.getElementById("RichCat" + RicurrentCat).style.visibility = "visible";
        RicurrentCat++;
        }

    });

    let FcurrentCat = 0;

    BtnFatCat.addEventListener("click", function(event) {
        const FatCat0 = document.getElementById("FatCat0");
        const FatCat1 = document.getElementById("FatCat1");
        const FatCat2 = document.getElementById("FatCat2");
        const FatCat3 = document.getElementById("FatCat3");
        const FatCat4 = document.getElementById("FatCat4");

        if (FcurrentCat < 5) {
        document.getElementById("FatCat" + FcurrentCat).style.visibility = "visible";
        FcurrentCat++;
        }

    });
    */

    class Cat {
    constructor(imageSrc, container) {
        this.image = document.createElement("img");
        this.image.src = imageSrc;
        this.image.style.position = "absolute";
        this.image.style.width = "80px";

        const maxX = container.clientWidth - 80;
        const maxY = container.clientHeight - 80;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        this.image.style.left = randomX + "px";
        this.image.style.top = randomY + "px";

        container.appendChild(this.image);
    }
    }
});