function navbar(){
    const navbar = document.querySelector(".navbar")
    const checkbox = document.getElementById("menu")
    const menu = document.querySelector(".humberger")

    checkbox.addEventListener("click", () => {
        if (checkbox.checked){
            navbar.style.top = "-310px"
            navbar.style.animation = "slide 2s ease"
        }else{
            navbar.style.top = "55px"
        }
    })
}

navbar()