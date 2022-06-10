function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function password(){
      let x=document.getElementById("pass").value;
      let y=document.getElementById("repass").value;
      let text= ' ';
      if (x!=y){
          text="Passwords do not match";
        }else { 
            text="Passwords match";
        }document.getElementById('demo').innerHTML=text
      
  }