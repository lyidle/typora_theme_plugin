const content = document.querySelector('body content'),
    div = document.createElement('div'),
    body = document.querySelector('body'),
    sidebar = document.querySelector('#typora-sidebar'),
    div_t = document.createElement('div'),
    wrapper = document.querySelector('#outline-btn-wrapper')
div_t.className = 'direction-button-toggle'
div_t.innerHTML = '<'
div.appendChild(div_t)
div.className = 'direction-button'
content.appendChild(div)
const styleTag = document.createElement("style");
styleTag.innerHTML = `
/* Expand button for directory */
#outline-btn-wrapper{
    width: 30px;
    height: 70px;
    position:fixed;
    top:50%;    
    transform:translateY(-50%);
    opacity: 0;
}
#outline-btn-wrapper i::before{
    display: block;
    width: 30px!important;
    height: 70px!important;
}
.direction-button{
    width: 30px;
    height: 70px;
    background:rgba(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%),
    inset 0 1px 5px rgba(255, 255, 255, 0.612);
    user-select: none;
    cursor: pointer;
    position:fixed;
    top:50%;
    transform:translateY(-50%);
    transition: transform 0.5s;
    pointer-events: none;
}
.direction-button-toggle{
    transition: transform 0.5s;
}
`
document.head.appendChild(styleTag)

wrapper.addEventListener('mouseenter', () => {
    if (body.className.indexOf('pin-outline') != -1) {
        div_t.style.cssText = `transform: rotate(0deg);`
    } else {
        div_t.style.cssText = `transform: rotate(180deg);`
    }
    div.style.cssText = `
        transform:translateY(-60%);
        `
});
wrapper.addEventListener('mouseleave', () => {
    if (body.className.indexOf('pin-outline') != -1) {
        div_t.style.cssText = `transform: rotate(180deg);`
    } else {
        div_t.style.cssText = `transform: rotate(0deg);`
    }
    div.style.cssText = `
    transform:translateY(-50%);
    `
})
window.onload = () => {
    if (body.className.indexOf('pin-outline') != -1) {
        div_t.style.cssText = `transform: rotate(180deg);`
    } else {
        div_t.style.cssText = `transform: rotate(0deg);`
    }
}