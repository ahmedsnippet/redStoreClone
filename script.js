let sidebar = document.querySelector('.sidebar');
let menuicon = document.querySelector('.menu-icon')
menuicon.addEventListener('click', () => {
    sidebar.style.display = "block"
    console.log('click');
})