// for loop
// printing elements of array
function forLoop(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(`Element at index ${i} = ${arr[i]}`)
	}
}

// while loop
// calculating sum from 0 -> num
function whileLoop(num) {
	let i = 0
	let sum = 0
	while (i !== num + 1) {
		sum = sum + i
		i++
	}
	return sum
}

// do..while loop
// counting all odd numbers between num1 & num2
function doWhileLoop(num1, num2) {
	if (num1 < num2) {
		let i = num1 + 1
		let count = 0
		do {
			i % 2 !== 0 && count++
			i++
		} while (i !== num2)
		return count
	}
	return 'Num1 should be less than Num2'
}

// for..in loop --> can be used when we need to iterate over a object's properties
function forInLoop(obj) {
	for (let property in obj) {
		console.log(obj[property])
	}
}

// for..of loop --> can be used over any iterable data structure such as array or string
function forOfLoop(str) {
	for (let char of str) {
		console.log(char)
	}
}

forLoop([2, 4, 5, 7])

console.log(whileLoop(8))

console.log(doWhileLoop(4, 14))

forInLoop({
	name: 'John',
	age: 20,
	profession: 'Software Developer',
})

forOfLoop('FullStack Developer')
