const btnEl = document.createElement('button')
btnEl.textContent = 'submit'
body.appendChild('btnEl')
btnEl.addEventListener('click', async (e) => {
	const res = await fetch('http://localhost:5000/cats', {
		method: POST,
		body: JSON.stringify({ name: 'cat_four', age: '1', breed: 'persian' }),
		headers: { 'Content-Type': 'application/json' },
	})
	const data = await res.json()
	console.log(data)
})
