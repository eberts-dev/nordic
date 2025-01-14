var currentTab = 0 // Current tab is set to be the first tab (0)
showTab(currentTab)

function showTab(n) {
	// This function will display the specified tab of the form ...
	var x = document.getElementsByClassName('tab')
	x[n].style.display = 'flex'
	// ... and fix the Previous/Next buttons:
	if (n == x.length - 1) {
		document.getElementById('nextBtn').innerHTML = 'Продолжить'
	} else {
		document.getElementById('nextBtn').innerHTML = 'Продолжить'
	}

	currentTab = currentTab + n
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {
		//...the form gets submitted:
		document.getElementById('regForm').submit()
		return false
	}
	// Otherwise, display the correct tab:
	showTab(currentTab)

	// ... and run a function that displays the correct step indicator:
	fixStepIndicator(n)
}

function fixStepIndicator(n) {
	// This function removes the "active" class of all steps...
	var i,
		x = document.getElementsByClassName('step')
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(' active', '')
	}
	//... and adds the "active" class to the current step:
	x[n].className += ' active'
}
