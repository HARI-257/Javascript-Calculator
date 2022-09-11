let output = document.getElementById("output");

const display = (num) => {
    output.value=output.value+num;
}

const equals=()=>{
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid");
    }
}

const Clear = ()=>{
    output.value="";
}

const Delete = ()=>{
    output.value=output.value.slice(0,-1);
}