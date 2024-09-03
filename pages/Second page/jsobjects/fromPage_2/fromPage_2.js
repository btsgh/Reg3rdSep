export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// return moment().format("LLL")
		// return _.chunk([1,2,3,4,5,67,43],3)
		// Basic example using nullish coalescing operator
		const userProvidedValue = "big"; // This could also be undefined
		const defaultValue = "Default Value";

		const finalValue = userProvidedValue ?? defaultValue;

		console.log(finalValue); // Output: "Default Value"

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		clearInterval("Page2")
	}
}