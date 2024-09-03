export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// return moment().format("LLL")
		// return _.chunk([1,2,3,4,5,67,43],3)
		setInterval(() => {
			showAlert("Hi", "error")
		}, 2500, "Page2")
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		clearInterval("Page2")
	}
}