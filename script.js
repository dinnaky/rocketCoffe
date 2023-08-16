function menuClick() {
    const nav = document.querySelector('nav')
    const burguer = document.querySelector('.menu-burger')
    nav.classList.toggle('menu-onclick')

    if (nav.classList.contains("menu-onclick")){
        burguer.classList.add('close-burger')
    }else {
        burguer.classList.remove('close-burger')
    }
}

