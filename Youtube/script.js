
let ham = document.getElementById("ham");
let sideBar = document.getElementById("sidebar");
let miniBar = document.getElementById("miniBar");
let main = document.getElementById("main");
let shorts = document.getElementById('shrtvid');

let isSideBar = true;

ham.addEventListener("click", () => {

    if (isSideBar) {
        sideBar.style.display = 'none';
        miniBar.style.display = 'block';
        main.style.marginLeft = '100px';
        main.style.width = '92.5vw';
        shorts.style.gap = '30px'
        isSideBar = false;
    }
    else {
        sideBar.style.display = 'block';
        miniBar.style.display = 'none';
        main.style.marginLeft = '0px';
        main.style.width = '80vw';
        shorts.style.gap = '20px';
        isSideBar = true;

    }

})

