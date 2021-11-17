class Person {
	constructor(name, age, salary, gender) {
		this.name = name
		this.age = age
		this.salary = salary
		this.gender = gender
	}
	static sort(arr, field, order) {
		let newArr = [...arr] // making copy of origial array
		quickSort(newArr, 0, newArr.length - 1, field)
		if (order !== 'asc') {
			newArr.reverse()
		}
		return newArr
	}
}

// partion algorithm
const partition = (arr, low, high, field) => {
	let pivot = arr[high]
	let i = low - 1
	for (j = low; j <= high - 1; j++) {
		if (arr[j][field] < pivot[field]) {
			i++
			let temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	}
	i++
	let temp = arr[high]
	arr[high] = arr[i]
	arr[i] = temp
	return i // position of pivot in sorted array
}

// quickSort recursively calling
const quickSort = (arr, low, high, field) => {
	if (low < high) {
		let pivot = partition(arr, low, high, field)
		quickSort(arr, low, pivot - 1, field) // recusively calling to sort left subarray
		quickSort(arr, pivot + 1, high, field) // recursively calling to sort right subarray
	}
}

let Persons = [
	['John', 24, 48000, 'Male'],
	['Mike', 16, 10000, 'Male'],
	['Steve', 44, 88000, 'Female'],
	['Ted', 23, 35000, 'Female'],
	['Ross', 21, 100000, 'Male'],
	['James', 25, 36000, 'Female'],
]

// arr is array of Person objects
let arr = []
Persons.forEach((person) => {
	arr.push(new Person(...person))
})
const sortedArray = Person.sort(arr, 'age', 'asc')
console.log(sortedArray)
