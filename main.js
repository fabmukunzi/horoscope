function getHoroscope(){
let btn=document.querySelector("#btn");
var date=document.getElementById("date").value;
var month=document.getElementById("month").value;
       if((month==1&&date>=20)||(month==2&&date<=18)){
     document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS AQUARIUS";
     document.getElementById("sc").style.padding="15px";
    }
       if((month==2&&date>=19)||(month==3&&date<=20)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS PISCES";
       }
       if((month==3&&date>=21)||(month==4&&date<=19)){
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS ARIES";
       }
       if((month==4&&date>=20)||(month==5&&date<=20)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS TAURUS";
       }
       if((month==5&&date>=21)||(month==6&&date<=20)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS GEMINI";
       }
       if((month==6&&date>=21)||(month==7&&date<=22)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS CANCER";
       }
       if((month==7&&date>=23)||(month==8&&date<=22)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS LEO";
       }
       if((month==8&&date>=23)||(month==9&&date<=22)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS VIRGO";
       }
       if((month==9&&date>=23)||(month==10&&date<=22)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS LIBRA";
       }
       if((month==10&&date>=23)||(month==11&&date<=21)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS SCORPIO";
       }
       if((month==11&&date>=22)||(month==12&&date<=21)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS SAGILLARIUS";
       }
       if((month==12&&date>=22)||(month==1&&date<=19)){
        document.getElementById("sc").style.padding="15px";
        document.getElementById("horo").innerHTML="YOUR HOROSCOPE IS CAPRICORN";
       }
}