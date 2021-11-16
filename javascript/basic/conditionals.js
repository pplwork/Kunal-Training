// if..else statements
function remark(grade) {
	if (grade === 'A') {
		console.log('Going for vacation')
	} else if (grade === 'B') {
		console.log('Going for shopping')
	} else if (grade === 'C') {
		console.log('Staying at home watching T.V')
	} else {
		console.log('Reviewing and learning at library')
	}
}

// switch statement
function remarkSwitch(grade) {
	switch (grade) {
		case 'A':
			console.log('Going for vacation')
			break
		case 'B':
			console.log('Going for shopping')
			break
		case 'C':
			console.log('Staying at home watching T.V')
			break
		default:
			console.log('Reviewing and learning at library')
			break
	}
}

remark('B')
remarkSwitch('A')
