const body = document.querySelector('body')

const menu = document.querySelector('.menu')

const currentWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

function showSidebar() {
  body.classList.add('show-sidebar')
  body.classList.remove('hide-sidebar')
}

menu.addEventListener('click', () => {
  if (body.className === 'hide-sidebar') {
    showSidebar()
  } else if (body.className.length === 0 && currentWidth < 768) {
    showSidebar()
  } else {
    body.classList.remove('show-sidebar')
    body.classList.add('hide-sidebar')
  }
})
