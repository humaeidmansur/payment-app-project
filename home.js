


const vallidPin = 1234
const transactionData = []


// function to get input value Number

function getInputValueNumber(id) {

const inputField = document.getElementById(id)
const inputFieldValue = inputField.value
const inputFieldValueNumber = parseInt (inputFieldValue)

return inputFieldValueNumber
}

// function to get input value

function getInputValue(id) {
  const inputValue = document.getElementById(id)
  const inputFieldValue = inputValue.value
  return inputFieldValue 
}

// function to get inner text 

function getInnerText(id) {
  const element = document.getElementById(id)
  const elementValue = element.innerText
  const innerTextValueNumber = parseInt(elementValue)

  return innerTextValueNumber
}

// function to inner set 

function setInnerText(value){
  const availableBalanceElement = document.getElementById("available-balance")
  availableBalanceElement.innerText = value

}

// function to toggle

function toHandleToggle(id){
      
      const forms = document.getElementsByClassName("form")
      for(const form of forms){
      form.style.display ="none"
      }
      document.getElementById(id).style.display = "block"

}

// function form-active-color-btn

function formActiveColor(id){
      
      const forms = document.getElementsByClassName("form_active_color_btn")
      for(const form_active_color_btn of forms){
      form_active_color_btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
      form_active_color_btn.classList.add("border-gray-300")
      }

      document.getElementById(id).classList.remove("border-gray-300")
      document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")

}





// add money feature

document.getElementById("add-money-btn").addEventListener("click", function(e){
  e.preventDefault()
   

  const bank = getInputValue("bank")
  const account = getInputValue("accountNumber")
  const amount = getInputValueNumber("amountNumber")
  const pin = getInputValueNumber("add-pin")

  const availableBalance = getInnerText("available-balance")
 
  


  if(account.length <11){
    alert("invalid account number")
    return;
  }

  if(pin !== vallidPin){
    alert("invalid pin number")
    return;
  }

  const totalAvailable = amount + availableBalance
   setInnerText(totalAvailable) 

   const data =  {
    name : "Add Money",
    date:new Date().toLocaleTimeString()
   }
 
    transactionData.push(data)
   console.log(transactionData)
 
})

// cashout_money_feature

document.getElementById("withdraw").addEventListener("click", function(e){
  e.preventDefault() 

 const amount =  getInputValueNumber("withdrawn amount")
 const availableBalance = getInnerText("available-balance")

  const totalAvailable =  availableBalance - amount 

  setInnerText(totalAvailable) 

  
   const data = {
    name : "Cash Out",
    date:new Date().toLocaleTimeString()
   }
 
    transactionData.push(data)
  console.log(transactionData)
 
})

// <!-- transaction design -->

document.getElementById("transaction-button").addEventListener("click",function(){
// console.log("transactionData")

   const transactionContainer = document.getElementById("transaction-container")

  for(const data of transactionData){

    const div = document.createElement("div") 
    div.innerHTML = `
    
    <div class="bg-white rounded-xl p-3 flex justify-between items-center gap-2 mt-5">

    <div class="flex items-center">

    <div class=" p-3 rounded-full bg-[#f4f5f7]">
                
         <img src="resources/assets/wallet1.png" class="mx-auto" alt="">
            
    </div> 
   
    <div class="ml-2">
        <h1>${data.name}</h1>
        <p>${data.date}</p>
    </div>  
    
            
    </div>  

     <i class="fa-solid fa-ellipsis-vertical"></i>

    </div> 
    
    `;
    transactionContainer.appendChild(div)
  
  }
  

})







// toggling feature

    document.getElementById("add-button").addEventListener("click",function(e){
   
       toHandleToggle("add-money-parrent")
       formActiveColor("add-button")
   
})

    document.getElementById("cashout-button").addEventListener("click",function(e){
    
      toHandleToggle("cashout-parent")
      formActiveColor("cashout-button")

})


    document.getElementById("transfer-button").addEventListener("click",function(e){
    
      toHandleToggle("transfer-money-parent")
      formActiveColor("transfer-button")

})

    document.getElementById("bonus-button").addEventListener("click",function(e){
    
      toHandleToggle("Get_Bonus_Parent")
      formActiveColor("bonus-button")

})

    document.getElementById("pay-button").addEventListener("click",function(e){
    
      toHandleToggle("Pay_Bill_Parent")
      formActiveColor("pay-button")

})

    document.getElementById("transaction-button").addEventListener("click",function(e){
    
      toHandleToggle("Transactions_Parent")
      formActiveColor("transaction-button")

})

document.getElementById("logout").addEventListener("click",function(e){
    e.preventDefault()

     window.location.href= "index.html"


})

 