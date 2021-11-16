class Person {
	constructor(name, age, salary, sex) {
		this.name = name
		this.age = age
		this.salary = salary
		this.sex = sex
	}
	static sort(arr, field, order) {
		let newArr = [...arr] // making copy of original array
		quickSort(newArr, 0, newArr.length - 1, field)
		if (order === 'desc') {
			newArr.reverse()
		}
		return newArr // final sorted array
	}
}

// quickSort recursive definition
const quickSort = (arr, low, high, field) => {
	if (low < high) {
		let pivot = partition(arr, low, high, field) // return pos of pivot from partition algorithm
		quickSort(arr, low, pivot - 1, field) // calling recursively to sort left-part of array
		quickSort(arr, pivot + 1, high, field) // calling recursively to sort right-part of array
	}
}

// partition algorithm
const partition = (arr, low, high, field) => {
	let pivot = arr[low]
	let i = low + 1
	let j = high

	do {
		while (arr[i][field] <= pivot[field]) {
			i++
		}

		while (arr[j][field] > pivot[field]) {
			j--
		}

		if (i < j) {
			let temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	} while (i < j)

	// swap arr[low] and a[j]
	let temp = arr[low]
	arr[low] = arr[j]
	arr[j] = temp
	return j
}

let Persons = [
	['John', 24, 48000, 'Male'],
	['Mike', 16, 10000, 'Male'],
	['Steve', 44, 88000, 'Female'],
	['Ted', 23, 35000, 'Female'],
	['Ross', 21, 100000, 'Male'],
	['James', 25, 36000, 'Female'],
]
let arr = []
Persons.forEach((person) => {
	arr.push(new Person(...person))
})
const Ans = Person.sort(arr, 'salary', 'asc')
console.log(Ans)
