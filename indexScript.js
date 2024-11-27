function toggleMenu()
{
    var menu = document.querySelector(".menu");
    var menuButton = document.querySelector(".menuButton");
    var menuWidth = getComputedStyle(menu).width;
    if (menuWidth === "50%")
    {
        menu.style.width = "50px";
            
        menuButton.style.position = "absolute"; //position: absolute;
        menuButton.style.top = "50%"; //top: 50%;
        menuButton.style.left = "50%"; //left: 50%;
        menuButton.style.right = "auto";
        menuButton.style.transform = "translate(-50%, -50%)"; //transform: translate(-50%, -50%);
        menuButton.style.float = "none";
    }
    else
    {
        menu.style.width = "50%";
            
        menuButton.style.position = "absolute";
        menuButton.style.top = "50%";
        menuButton.style.left = "auto";
        menuButton.style.right = "10px";
        menuButton.style.transform = "translateY(-50%)";
      }
  }
