    
   let globalSubmit = false
    function reset(){
         firstName = document.getElementById('first-name').value =''
         lastName = document.getElementById('last-name').value =''
         email = document.getElementById('email').value =''
         city= document.getElementById('city').value =''
         state= document.getElementById('state').value =''
         zipCode = document.getElementById('zip-code').value =''
         tNC = document.getElementById('t-and-c').checked = false

         document.getElementById('first-name-valid').style.display = 'none'
         document.getElementById('last-name-valid').style.display = 'none'
         document.getElementById('email-valid').style.display = 'none'
         document.getElementById('city-valid').style.display = 'none'
         document.getElementById('zip-valid').style.display = 'none'
         document.getElementById('tnc-valid').style.display = 'none'
         document.getElementById('state-valid').style.display = 'none'   
    }
    function validate(isSubmit){
        if(isSubmit){
            globalSubmit = true
        }
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let city= document.getElementById('city').value
    let state= document.getElementById('state').value
    let zipCode = document.getElementById('zip-code').value
    let tNC = document.getElementById('t-and-c').checked
    let error = false
    if(globalSubmit){

   
    if(firstName.length >= 2) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else{
        error = true
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
    }

    if(lastName.length >=2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else{
        error = true
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }

    if(email.includes('@') &&
       email.includes('.') &&
       email.indexOf('@')> 0 &&
       email.substr(email.lastIndexOf('.') + 1).length >=2) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    } else{
        error = true
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
    }

    if(city.length >=3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    } else{
        error = true
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
    }
     
    let numberZip = parseInt(zipCode)
    if(zipCode.length === 6 && !isNaN(numberZip) && numberZip > 100000 && numberZip <= 999999 ){
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    } else{
        error = true
        document.getElementById('zip-invalid').style.display = 'block'
        document.getElementById('zip-valid').style.display = 'none' 
    }
     if(tNC) {
        document.getElementById('tnc-invalid').style.display = 'none'
     } else{
        error = true
        document.getElementById('tnc-invalid').style.display = 'block'
     }
     
    if(state != 'None') {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    } else{
        error = true
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'

    }
    if(error === false){
        alert('details have been saved successfully!')
        reset()
    }
}   
}

