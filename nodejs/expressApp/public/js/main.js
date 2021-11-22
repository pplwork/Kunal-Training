const target = document.querySelector('a.delete')

target.addEventListener('click', async (e) => {
	try {
		const res = await fetch(
			`http://localhost:5000/articles/${target.dataset.id}`,
			{
				method: 'DELETE',
			}
		)
		console.log(123)
		const data = await res.json()
		console.log(456)
		windows.location.href = data.redirect
		console.log(data.redirect)
	} catch (err) {
		console.log('Cannot delete article!')
		console.log(err)
	}
})
