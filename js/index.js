const submenuIcon =
	document.getElementsByClassName('profolio__submenu')[0] || null
const submenu = document.getElementsByClassName('profolio__mobilenavwrapper')[0]
const closesubmenu =
	document.getElementsByClassName('profolio__closesub')[0] || null

if (submenuIcon) {
	submenuIcon.addEventListener('click', () => {
		submenu.style.display = 'block'
	})
}
if (closesubmenu) {
	closesubmenu.addEventListener('click', () => {
		submenu.style.display = 'none'
	})
}
ScrollOut({
	targets:
		'.profolio__intro,.profolio__works,.profolio__projects,.profolio__contact'
})
