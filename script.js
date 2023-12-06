function clicked(){
    let a= document.getElementById('amount');
    let p= document.getElementById('persons');

    const amount= Number(a.value);
    const persons=Number(p.value);


    ans=(amount/persons).toFixed(2);

    let result=document.getElementById('screen');
    if(amount==0 || persons==0){
        result.innerHTML="Give Inputs.";
    }
    else if(amount<0 || persons<0){
        result.innerHTML="Please enter valid Positive values";
    }
    else{
        result.style.fontSize='48px'
        result.innerHTML=(ans +" each");
    }
    // window.setInterval(() => {
    //     window.location.reload();
    //     a.value="";
    //     p.value="";
    // }, 2500);
}