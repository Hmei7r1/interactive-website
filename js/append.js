function RenderNavbar(){

    const RenderNavbar = document.querySelector(".headerNavbar");

    fetch("../../component/navbar/navbar.html")
    .then(response => response.text())
    .then(navbar => {
        RenderNavbar.innerHTML = navbar;
    })

    const script = document.createElement("script");

    script.src = "/js/navbar.js"

    document.body.appendChild(script)

}

RenderNavbar()