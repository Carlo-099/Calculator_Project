const startBtn1 = document.querySelector(".startBtn");
            const popupInfo1 = document.querySelector(".popup-info1");
            const main = document.querySelector(".main");


            startBtn1.onclick = () => {
            popupInfo1.classList.add("active");
            main.classList.add("active");
            }