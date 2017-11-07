
function Horoscope() {
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var sign=determineHoroscope(name,month,day);
    console.log(month+day+name);
    document.getElementById("Sign").innerHTML = sign;
}


function determineHoroscope(name,month,day){
    if((month==1 && day>= 19) || (month== 12 && day<=22)){
        return "Dear "+ name + ", you are a Capricorn!";
    }else if((month==1 && day>19) || (month==2 && day<= 18)){
        return "Dear " + name +", you are an Aquarius!";
    }else if((month==2 && day>18) || (month==3 && day<=20)){
        return "Dear " + name + ", you are a Picses!";
    }else if((month==3 && day>20) || (month==4 && day<=19)){
        return "Dear "+name+", you are an Aries!";
    }else if((month==4 && day>19) || (month==5 && day <=20)){
        return "Dear "+name+", you are a Taurus";
    }else if((month==5 && day>20) || (month==6 && day<=20)){
        return "Dear "+name+", you are a Gemini";
    }else if((month==6 && day>20) || (month==7 && day<=22)){
        return "Dear "+name+", you are a Cancer";
    }else if((month==7 && day>22) || (month==8 && day<=22)){
        return "Dear "+name+", you are a Leo";
    }else if((month==8 && day>22) || (month==9 && day<=22)){
        return "Dear "+name+", you are a Virgo";
    }else if((month==9 && day>22) || (month==10 && day<=22)){
        return "Dear "+name+", you are a Libra";
    }else if((month==10 && day>22) || (month==11 && day<=21)){
        return "Dear "+name+", you are a Scorpio";
    }else{
        return "Dear "+name+", you are a Sagittarius";
    }
}

function doDays(month){
    month= parseInt(month);
    var mDays= [0,31,29,31,30,31,30,31,31,30,31,30,31];
    var result= "";
    for (var i=1; i<mDays[month]; i++){
        result += "<option value='"+i+"'>"+i+"</options>"
    }
    document.getElementById("day").innerHTML= result;
}

//function