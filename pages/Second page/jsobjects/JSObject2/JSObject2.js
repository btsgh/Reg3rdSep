export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// Example of typecasting a string to a number
		const stringNumber = "42";
		const actualNumber = Number(stringNumber); // Typecasting string to number

		console.log(typeof stringNumber); // Output: "string"
		console.log(typeof actualNumber);  // Output: "number"
		console.log(actualNumber);         // Output: 42

		// Example of typecasting a number to a string
		const numberValue = 100;
		const stringValue = String(numberValue); // Typecasting number to string

		console.log(typeof numberValue);  // Output: "number"
		console.log(typeof stringValue);  // Output: "string"
		console.log(stringValue);         // Output: "100"

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}