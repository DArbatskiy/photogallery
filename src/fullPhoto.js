let body = document.querySelector('body')
let container = document.getElementsByClassName('container')

grid.addEventListener('click', function (event) {
    let target = event.target
    if (target.tagName != 'IMG') return

    let fullPhoto_container = document.createElement('div')
    fullPhoto_container.setAttribute('id', 'fullPhoto__container')
    grid.append(fullPhoto_container)

    let fullPhoto = document.createElement('img')
    fullPhoto.setAttribute('id', 'fullPhoto')
    fullPhoto.setAttribute('alt', target.alt)
    fullPhoto.setAttribute('src', target.src)
    grid.append(fullPhoto)

    let fullPhoto_closeButton = document.createElement('button')
    fullPhoto_closeButton.setAttribute('id', 'fullPhoto__closeButton')
    fullPhoto_closeButton.innerHTML = 'x'
    grid.append(fullPhoto_closeButton)

    body.style.overflow = 'hidden'
    fullPhoto_container.style.top = `${window.scrollY}px`
    fullPhoto.style.top = `${window.scrollY+window.screen.height*0.5}px`
    fullPhoto_closeButton.style.top = `${window.scrollY+window.screen.height*0.1}px`


    fullPhoto_closeButton.addEventListener('click', function (event) {
        let target = event.target
        if (target.tagName != 'BUTTON') return

        fullPhoto_container .remove()
        fullPhoto.remove()
        fullPhoto_closeButton.remove()

        body.style.overflow = 'visible'
    })
})
