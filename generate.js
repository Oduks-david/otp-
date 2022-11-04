function  generateOtp() {
  let otp = "";

  for(let i = 0; i < 6; i++){
    otp += Math.floor(Math.random() * 10);
  }

  return Number(otp);
}

alert("generatorOtp-  " + generateOtp());

let x = document.getElementById("myInput").value

function getText(){
  
  if(x = generateOtp()){
    alert('correct Otp');
  }
  else{
  alert('incorreect');
  }
  
}



