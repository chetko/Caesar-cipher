const inputField = document.querySelector('.message.-input');
const outputField = document.querySelector('.message.-output');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let shift = -3;

// Prepare text to encoding:
let prepare = message => message.replace(/[\W\d]/g, '').toLowerCase();

// Restore original formatting:
function originalFormat(original, source) {
    let lowerCase = original.toLowerCase();

    for (let i = 0; i < original.length; i++) {
        if (alphabet.indexOf(lowerCase[i]) !== -1) {
            let newChar = (lowerCase[i] === original[i]) ?
                source[0] :
                source[0].toUpperCase();
            
            original = original.slice(0, i) + newChar + original.slice(i + 1);
            source = source.slice(1);
        }
    }

    return original;
}

function cipher(data) {
    let message = data.message;
    let preparedMessage = prepare(message);

    let shift = data.shift;
    let shiftedAlphabet = 
        alphabet.slice(shift) + alphabet.slice(0, shift);

    let result = '';

    for (let character of preparedMessage) {
        let index = alphabet.indexOf(character);
        result += shiftedAlphabet[index];
    }

    return originalFormat(message, result);
}

inputField.addEventListener('input', function() {
    let text = this.value;

    outputField.textContent = cipher({
        message: text,
        shift: shift
    });
});