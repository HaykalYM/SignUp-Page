document.addEventListener("DOMContentLoaded", function(){
   
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmpassword").value;
   
   let error = this.documen.querySelector("#error");

    
   if(password == "" && confirmPassword == ""){
    error.innerHTML = "Passwords do not match";
   } 
   else if(password == confirmPassword){
    error.innerHTML = ""
   }

    console.log("Hi")
})