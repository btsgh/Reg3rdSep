export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		// Create a promise that simulates an asynchronous operation
		const myPromise = new Promise((resolve, reject) => {
			const success = false; // You can change this to false to simulate a rejection

			setTimeout(() => {
				if (success) {
					resolve("Operation was successful!"); // Fulfill the promise
				} else {
					reject("Operation failed."); // Reject the promise
				}
			}, 2000); // Simulate a 2-second delay
		});

		// Handle the promise
		myPromise
			.then((message) => {
			console.log(message); // Output: "Operation was successful!" if fulfilled
		})
			.catch((error) => {
			console.log(error); // Output: "Operation failed." if rejected
		});

	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}