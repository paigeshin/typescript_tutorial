const num1Element: HTMLInputElement = document.getElementById('num1') as HTMLInputElement;
const num2Element: HTMLInputElement = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button'); // it can be null

//Learning - array
const numResults: Array<number> = [];
const textResults: string[] = [];

//Learning - allow only number & string as parameters, except for boolean value
//Learning - in order to achieve this, you need to use `union`

//Learning - Union Type, number | string
//Learning - any Type, any

type NumOrString = string | number;
type Result = { val: number; timestamp: Date };

interface ResultObj {
	val: Number;
	timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
	//Learning - Type Guard
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else if (typeof num1 === 'string' && typeof num2 === 'string') {
		return num1 + num2;
	} else {
		return +num1 + +num2;
	}
}

//Learning - Using Objects & Array Types
//Learning - define objects as paramters
function printResult(resultObj: ResultObj) {
	console.log(resultObj.val);
}

if (buttonElement) {
	buttonElement.addEventListener('click', () => {
		const num1 = num1Element.value;
		const num2 = num2Element.value;

		const result = add(+num1, +num2);
		numResults.push(result as number);

		const stringResult = add(num1, num2);
		textResults.push(stringResult as string);

		console.log(result);
		console.log(stringResult);
		printResult({ val: result as number, timestamp: new Date() });

		console.log(numResults, textResults);
	});
}

const myPromise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		resolve('It worked!'); //resolve is generic type
	}, 1000);
});

myPromise.then((result) => {
	console.log(result.split('w'));
});
