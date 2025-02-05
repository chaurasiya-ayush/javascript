
let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click",() => {
    if(currmode==="light"){
        currmode ="dark";
        
        document.querySelector("body").style.color ="white";
        document.querySelector("body").style.backgroundColor ="black";
        document.querySelector("body").style.backgroundImage ="url('morning.jpg')";
        document.querySelector("body").style.backgroundSize ="cover";
        document.querySelector("body").style.backgroundRepeat ="no-repeat";
      

        mode.innerText ="Dark mode";

    }
    else{
        currmode ="light";
        
        document.querySelector("body").style.color ="black";
        document.querySelector("body").style.backgroundColor ="white";
        document.querySelector("body").style.backgroundImage ="url('night.avif')";
        document.querySelector("body").style.backgroundSize ="cover";
        document.querySelector("body").style.backgroundRepeat ="no-repeat";
       
        modebtn.innerText ="Light mode";
    }
    console.log(currmode);
}); 
