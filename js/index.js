const submenuIcon =
	document.getElementsByClassName('profolio__submenu')[0] || null
const submenu = document.getElementsByClassName('profolio__mobilenavwrapper')[0]
const closesubmenu =
	document.getElementsByClassName('profolio__closesub')[0] || null
const subMenuItems = document.getElementsByClassName('profolio__mobilenav')[0]
if (submenuIcon) {
	submenuIcon.addEventListener('click', () => {
		submenu.style.display = 'block'
		subMenuItems.style.animation = 'fadeInRight 1s  forwards'
	})
}
if (closesubmenu) {
	closesubmenu.addEventListener('click', () => {
		submenu.style.animation = 'fadeOutRight 1s  forwards'
	})
}
ScrollOut({
	targets:
		'.profolio__intro,.profolio__works,.profolio__projects,.profolio__contact'
})
