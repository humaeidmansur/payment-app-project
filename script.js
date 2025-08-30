// login button functionality


document.getElementById("loginId").addEventListener("click",function(e){
    e.preventDefault()
  
    const mobileNumber = 12345678910
    const pin = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    
    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValuueConverted = parseInt(pinNumberValue)

   if (mobileNumberValueConverted === mobileNumber && 
    pinNumberValuueConverted === pin) {
        window.location.href= "home.html"
    }
   
})

