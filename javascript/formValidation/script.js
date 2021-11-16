// email validation using regex
function validEmail(email) {
	const regex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return regex.test(email)
}

// password validation using regex
// password with atleast 6 characters including atleast one, uppercase letter & lowercase letter & a number
function validPassword(password) {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
	return regex.test(password)
}

function showError(text) {
	const errEl = document.createElement('p')
	errEl.textContent = text
	errEl.classList.add('error')
	form.appendChild(errEl)
	setTimeout(() => {
		errEl.style.display = 'none'
	}, 3000)
}
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
	e.preventDefault()
	const email = e.target.elements.email.value
	const password = e.target.elements.password.value
	const gender = e.target.elements.gender.value
	const role = e.target.elements.role.value
	const permissions = document.querySelectorAll(
		"input[type='checkbox']:checked"
	)

	// validation check
	if (email === '' || password === '') {
		showError('Please enter a Email & Password!')
		return
	} else if (!validEmail(email)) {
		showError('Please enter a valid Email address!')
		return
	} else if (!validPassword(password)) {
		showError(
			'Password length should be min six characters with mix of atleast one uppercase, lowercase & digits!'
		)
		return
	} else if (permissions.length < 2) {
		showError('Please check atleast 2 permissions!')
		return
	}

	// after form is validated
	form.style.display = 'none'

	document.querySelector('.result').style.display = 'flex'
	document.querySelector('#Email').innerHTML = `<h3>Email : </h3> ${email}`
	document.querySelector(
		'#Password'
	).innerHTML = `<h3>Password : </h3> ${password}`
	document.querySelector('#Gender').innerHTML = `<h3>Gender : </h3> ${gender}`
	document.querySelector('#Role').innerHTML = `<h3>Role : </h3> ${role}`
	document.querySelector('#Permission').innerHTML = `<h3>Permissions : </h3>`
	permissions.forEach((perm) => {
		document.querySelector('#Permission').innerHTML += `  ${perm.value}`
	})
	document.querySelector('.confirm-btn').style.display = 'inline-block'
})
