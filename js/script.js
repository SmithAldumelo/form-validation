

     let firstName = document.getElementById("first")
     let lastName = document.getElementById("last")
     let email = document.getElementById("email")
     let phone =  document.getElementById("phone")
     let form = document.getElementById("form")
     let submit = document.getElementById("btn")
     let birthday = document.getElementById("birthday")
     

      form.addEventListener("submit", (e)=>{
    
        checkInputs()
      });

     function checkInputs(){
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let phoneValue =  phone.value;
        let birthdayValue = birthday.value;

        if (firstNameValue === ''){
            alert('firstrname cannot be blank');
        } 
        if (lastNameValue === ''){
            alert('lastname cannot be blank')
        }
        if(emailValue === ''){
            alert('enter a valid email')
        }
        if(phoneValue === ''){
            alert('phone number cannot be empty')
        } 
        
        if (birthdayValue === ''){
            alert('enter your date of birth')
        }

      }

      form.addEventListener("submit",function(){
        alert("Congrat you have registered on our platform")

      })

   
    
    

    