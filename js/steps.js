var currentTab = 0
showTab(currentTab)

function showTab(n) {
	var x = document.getElementsByClassName('tab')
	x[n].style.display = 'flex'

	if (n == x.length - 1) {
		document.getElementById('nextBtn').innerHTML = 'Продолжить'
	} else {
		document.getElementById('nextBtn').innerHTML = 'Продолжить'
	}

	currentTab = currentTab + n
	if (currentTab >= x.length) {
		document.getElementById('regForm').submit()
		return false
	}

	showTab(currentTab)
	fixStepIndicator(n)
}

function fixStepIndicator(n) {
	var i,
		x = document.getElementsByClassName('step')
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(' active', '')
	}
	x[n].className += ' active'
}
