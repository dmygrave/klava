let textarea = document.querySelector('.display')
let knopki = document.querySelectorAll('.key')
let clear = document.querySelector('.clear')

textarea.textContent = 'Буквы: '


for (let knopka of knopki) {
    knopka.onclick = function () {
        textarea.textContent = textarea.textContent += knopka.textContent
    }
}

clear.onclick = function () {
    textarea.textContent = ''
}

// knopki[0].onclick = function () {
    // textarea.textContent = textarea.textContent + 'й'
// }

// knopki[1].onclick = function () {
    // textarea.textContent = textarea.textContent += 'ц'
// }

// textarea.oninput = function () {
// }

 console.log(knopki)
