function navbar(){
    const navbar = document.querySelector(".navbar")
    const checkbox = document.getElementById("menucheck")
    const menu = document.querySelector(".humberger")

    menu.addEventListener("click", () => {
        if (checkbox.chacked){
            navbar.style.left = "-100px"
        }
    })
}

navbar()