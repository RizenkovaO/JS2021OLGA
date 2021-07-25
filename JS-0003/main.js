function onLoad(){
    const nickname = document.getElementById('nickname')
    const password = document.getElementById('password')
    const form = document.getElementById('form') 
    const errorElement = document.getElementById('error')
    
    form.addEventListener('submit', (e) => {
    let messages = []
        if (nickname.value === '' || nickname.value === null ) {
            messages.push('Name is required')
    }
        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
    }
        if (password.value.length <= 6 || password.value.length <= 20) {
            e.preventDefault()
            //messages.push('Password must be longer then 6 characters')
            errorElement.innerHTML="Not a valid password ";
            return false;
       
    }
    // if (password.value.length >= 20) {
    //     e.preventDefault()
    //     messages.push('Password must be less then 20 characters')
    //}
        if(password.value === 'password') {
            e.preventDefault()
            messages.push('Password cannot be password')
        }
    })
}