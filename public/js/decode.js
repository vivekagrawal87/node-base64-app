const decodeForm = document.querySelector('#decode-form')
const stringToDecode = document.querySelector('#input-encoded')
const resultEncoded = document.querySelector('#result-decoded')
const validationMessageDecoded = document.querySelector('#validation-message-decode')

decodeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const encodedInput = stringToDecode.value

    if (encodedInput == '') {
        validationMessageDecoded.textContent = 'Enter Base64 Encoded String'
        return
    }

    validationMessageDecoded.textContent = ''

    fetch('/base64/decode/' + encodedInput).then(response => {
        response.json().then(data => {
            resultEncoded.value = data.base64decoded
        })
    })
})