function buttonCalculate(){
    let height = document.getElementById("input-height").value;
    let weight = document.getElementById("input-weight").value;
    let resultNumber= document.getElementById("resultNumber").innerHTML=(parseFloat(weight)/ (parseFloat(height)* parseFloat(height))).toFixed(1);
    let radioButton = document.querySelector('input[name="gender"]:checked');
    let selectedValue= radioButton.value 
    if(resultNumber<19.1 && selectedValue==='female'){
        document.getElementById("resultText").innerHTML= "Gầy"
    }if(resultNumber>=19.1 && resultNumber<=25.8 && selectedValue==='female'){
        document.getElementById("resultText").innerHTML= "Bình thường"
    }if(resultNumber>25.8 && resultNumber<=27.3 && selectedValue==='female'){
        document.getElementById("resultText").innerHTML= "Thừa cân nhẹ"
    }if(resultNumber>27.3 && resultNumber<=32.3 && selectedValue==='female'){
        document.getElementById("resultText").innerHTML= "Trên lý tưởng"
    }if(resultNumber>32.3 && selectedValue==='female'){
        document.getElementById("resultText").innerHTML= "Béo phì"
    }
    if(resultNumber<20.7 && selectedValue==='male'){
        document.getElementById("resultText").innerHTML= "Gầy"
    }if(resultNumber>=20.7 && resultNumber<=26.4 && selectedValue==='male'){
        document.getElementById("resultText").innerHTML= "Bình thường"
    }if(resultNumber>26.4 && resultNumber<=27.8 && selectedValue==='male'){
        document.getElementById("resultText").innerHTML= "Thừa cân nhẹ"
    }if(resultNumber>27.8 && resultNumber<=31.1 && selectedValue==='male'){
        document.getElementById("resultText").innerHTML= "Trên lý tưởng"
    }else if(resultNumber>31.1 && selectedValue==='male'){
        document.getElementById("resultText").innerHTML= "Béo phì"
    }
    document.getElementById("input-height").value=""
    document.getElementById("input-weight").value=""

}