let inText = document.getElementsByClassName("textview");
// inText.textview.value

function insert(num){
    let temp = inText.textview.value;
    inText.textview.value = temp + num;
  }
  

function equals(){
    var exp = inText.textview.value; 
    try {
      if(exp)  
    {  
      inText.textview.value = eval(exp);
    }  
    } catch (error) {
      alert("please enter only numbers");
      inText.textview.value = '';
    }   
  }
  
  function clean(){
    inText.textview.value = ""
  }
  function back(){
    let temp = inText.textview.value;
    inText.textview.value = temp.slice(0,temp.length-1);
  }