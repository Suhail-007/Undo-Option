const array = [];
let arrayIndex = array.length - 1;
document.querySelector('#Add').addEventListener('click', () => {
		const inputValue = document.querySelector('input').value;
		const pElem = document.querySelector('p');	
		if (inputValue !== '') {
				array.push(inputValue);
				pElem.textContent = inputValue;				
				arrayIndex++
		}	 else return
console.log('array: ' + array, 'arrayIndex ' + arrayIndex);
});

document.getElementById('undo').addEventListener('click', function() {
		const inputValue = document.querySelector('input').value;
				const pElem = document.querySelector('p');		
				if (arrayIndex !== -1) {	
						arrayIndex--;
						array.pop();
						pElem.textContent = array[arrayIndex];				
				} 
				if (arrayIndex === -1)		{
						pElem.textContent = 'Some text here to undo';
				}
	console.log('array: ' + array, 'arrayIndex ' + arrayIndex)
});
