function openTab(evt, cityName) {
	var i, tabcontent, tablinks

	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}

	tablinks = document.getElementsByClassName('tab__btn')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}

	document.getElementById(cityName).style.display = 'block'
	evt.currentTarget.className += ' active'
}

document.getElementById('defaultOpen').click()

var first = document.getElementById('b1')
var second = document.getElementById('b2')
var third = document.getElementById('b3')

first.onclick = function (evt) {
	evt.preventDefault()
	document.getElementById('b1').classList.toggle('change-color')
	if (this.classList.contains('change-color'))
		second.classList.remove('change-color')
	third.classList.remove('change-color')
}

second.onclick = function (evt) {
	evt.preventDefault()
	document.getElementById('b2').classList.toggle('change-color')
	if (this.classList.contains('change-color'))
		first.classList.remove('change-color')
	third.classList.remove('change-color')
}

third.onclick = function (evt) {
	evt.preventDefault()
	document.getElementById('b3').classList.toggle('change-color')
	if (this.classList.contains('change-color'))
		first.classList.remove('change-color')
	second.classList.remove('change-color')
}

document.querySelectorAll('.range__line').forEach(item => {
	item.addEventListener('mousemove', function () {
		this.closest('.range').querySelector('.range__value').innerHTML =
			this.value + ' человек'
	})
})
