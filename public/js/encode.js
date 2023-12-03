const encodeForm = document.querySelector('#encode-form')
const stringToEncode = document.querySelector('#input-decoded')
const resultDecoded = document.querySelector('#result-encoded')
const validationMessageEncoded = document.querySelector('#validation-message-encode')


encodeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = stringToEncode.value

    if (userInput == '') {
        validationMessageEncoded.textContent = 'Enter String to Encode'
        return
    }

    validationMessageEncoded.textContent = ''

    fetch('/base64/encode/' + userInput).then((response) => {
        response.json().then(data => {
            resultDecoded.value = data.base64encoded
        })
    })
})