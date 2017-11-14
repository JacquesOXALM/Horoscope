
function Horoscope() {
    name = document.getElementById("name").value;
    month = document.getElementById("month").value;
    day = document.getElementById("day").value;
    console.log(month + day + name);
    if (name != "") {
        document.getElementById("Sign").innerHTML = determineHoroscope();
        document.getElementById("HoroscopeMeat").innerHTML = theMeatOfTheHoroscope();
        document.getElementById("Image").innerHTML = determineImage();
    }else{
        document.getElementById("HoroscopeMeat").innerHTML = "Please enter your name, you Silly Willy.";
    }
}




function determineImage(){
    if(sign==1){
        return "<img src='img/Aquarius.png' width='400' height='300'/>";
    }else if(sign==2){
        return "<img src='img/Pisces.png' width='400' height='300'/>";
    }else if(sign==3){
        return "<img src='img/Aries.png' width='400' height='300'/>";
    }else if(sign==4){
        return "<img src='img/Taurus.png' width='400' height='300'/>";
    }else if(sign==5){
        return "<img src='img/Gemini.png' width='400' height='300'/>";
    }else if(sign==6){
        return "<img src='img/Cancer.png' width='350' height='350'/>";
    }else if(sign==7){
        return "<img src='img/Leo.png' width='400' height='300'/>";
    }else if(sign==8){
        return "<img src='img/Virgo.png' width='400' height='300'/>";
    }else if(sign==9){
        return "<img src='img/Libra.png' width='400' height=300/>";
    }else if(sign==10){
        return "<img src='img/Scorpio.png' width='400' height='300'/>";
    }else if(sign==11){
        return "<img src='img/Sagittarius.png' width='400' height='300'/>";
    }else{
        return "<img src='img/Capricorn.png' width='400' height='300'/>";
    }
}

var sign= 0;
function determineHoroscope(){
    if((month==12 && day>=22) || (month==1 && day<20)){
        sign=12;
        return "Dear "+ name + ", you are a Capricorn!";
    }else if((month==1 && day>19) || (month==2 && day<= 18)){
        sign=1;
        return "Dear " + name +", you are an Aquarius!";
    }else if((month==2 && day>18) || (month==3 && day<=20)){
        sign=2;
        return "Dear " + name + ", you are a Pisces!";
    }else if((month==3 && day>20) || (month==4 && day<=19)){
        sign=3;
        return "Dear "+name+", you are an Aries!";
    }else if((month==4 && day>19) || (month==5 && day <=20)){
        sign=4;
        return "Dear "+name+", you are a Taurus";
    }else if((month==5 && day>20) || (month==6 && day<=20)){
        sign=5;
        return "Dear "+name+", you are a Gemini";
    }else if((month==6 && day>20) || (month==7 && day<=22)){
        sign=6;
        return "Dear "+name+", you are a Cancer";
    }else if((month==7 && day>22) || (month==8 && day<=22)){
        sign=7;
        return "Dear "+name+", you are a Leo";
    }else if((month==8 && day>22) || (month==9 && day<=22)){
        sign=8;
        return "Dear "+name+", you are a Virgo";
    }else if((month==9 && day>22) || (month==10 && day<=22)){
        sign=9;
        return "Dear "+name+", you are a Libra";
    }else if((month==10 && day>22) || (month==11 && day<=21)){
        sign=10;
        return "Dear "+name+", you are a Scorpio";
    }else{
        sign=11;
        return "Dear "+name+", you are a Sagittarius";
    }

}

function theMeatOfTheHoroscope(){
    if(sign== 1){
        return "As an Aquarius, you are attracted to water. Your mother planet," +
            " Neptune, is in retrograde for the next few months. So now is the time to sell all" +
            " of your earthly belongings and dive into the ocean, to live with your fish brothers.";
    }else if(sign==2){
        return "As a Pisces, you likely identify as a mermaid or merman trapped in a human body. Don't hesitate to spend " +
            "all of your life savings on creating the greatest 'The Little Mermaid' collection known to (mer)man. " +
            "This is the best way to honor your inner mer-person.";
    }else if(sign==3){
        return "As an Aries, you love to butt heads just like the ram you represent. Embrace the spirit of the ram by " +
            "joining your local football team and playing without a helmet. Remember, the more head-on-head contact, the " +
            "better.";
    }else if(sign==4){
        return "As a Taurus, you're pretty much an expert when it comes to BS. You're also probably pretty fed up" +
            " with the failures of Capitalism. You've done the math and realized that the institution of Capitalism is BS. " +
            "Rage against the machine by assembling your proletariat brothers and seizing the factors of production, Comrade.";
    }else if(sign==5){
        return "As all Gemini, you have magic powers of the mind. Hone your skills over the next few months in preparation for" +
            " June 1st, 2024, when you will meet your telekinetic twin. Join forces and stage a hostile take over of the US House" +
            "of Representatives. Exchange the lives of your new hostages for a nice condo in Bora-Bora, retire there. ";
    }else if(sign==6){
        return"As a Cancer, your personality resembles a crab. Hard and gross on the outside, but meaty and tasty on the inside. " +
            "Hide your inner self at all costs. To be friendly is to be weak. Be sure to instigate fights in nightclubs. " +
            "Go to inverse therapy to bury your inner niceness as deep as possible, until you are shell through and through." +
            "When you reach 100% shell, you will be admitted into Nirvana.";
        //"As a Cancer, you like to take over cells and ruin lives. Reform your cancerous ways by killing yourself, " +
        //"effectively curing Cancer."
    }else if(sign==7){
        return "As a Leo, you have a gorgeous mane of hair. Your hair is voluminous and beautiful. Share you gift with the world" +
            " by auditioning to be Pantene's next spokesperson. When, not if, you get the job, work until you have enough political" +
            " sway to request an ambassadorship to Tibet. Once in Tibet continue with your quest to convince all of the Tibetan monks to" +
            " grow their hair out.";
    }else if(sign==8){
        return "As a Virgo, your Zodiac sign looks like the letter 'm'. You've heard of lucky numbers? This is your lucky letter. " +
            "Embrace your letter by becoming a professional Sigmund Freud impersonator, and spend your days musing and saying 'mmm, indeed'. If " +
            "you do this for 45 years, you will win the lottery on your first attempt. If you are wise your first purchase will" +
            " be a massive, diamond-encrusted chain with the letter 'M' as a pendant.";
    }else if(sign==9){
        return "As a Libra, you have a strong sense of justice. When you are wronged, you feel it deeply. Start making lists" +
            " of everyone who as ever wronged you, from the barista who spelled your name wrong to you friend who lost your charger." +
            " Even the scales of justice by assembling all of these people, under the guise of a non-denominational holiday party. " +
            "Once assembled, line them up and make each of them apologize in the form of gifts and money. So basically, mug all of them.";
    }else if(sign==10){
        return "Being a Scorpio, you have often been described as having a 'venomous' personality. People treat you like " +
            "you have a giant stinger protruding from your back, and your just waiting to stab them. Prove them right by living" +
            " out your dream of becoming a Spiderman villain. Steal a robotic scorpion suit from a government facility and wreak havoc on " +
            "New York City.";
    }else if(sign==11){
        return "As a Sagittarius, you're a straight shooter. You tell it like it is. You know what you want and you're not " +
            "afraid to call out anyone getting in your way. It is time to put your blatant honesty to use. Become the coach " +
            "of your neighbor's 8 year-old daughter's soccer team. Do everything you can to make them great. Don't hesitate " +
            "to tell little Sarah that she's playing like garbage and that she's the reason for her parent's divorce. " +
            "Justify your actions by reminding yourself daily that adversity breeds greatness.";
    }else{
        return "As a Capricorn, you're always confused. Even your Zodiac sign is confused, your animal symbol is a Sea-Goat; What even " +
            "is that!? To end your constant confusion you must combine the two parts of your symbol into one. Join the Sea and the Goat." +
            " Adopt a goat from a kindly old shepard in Morocco, and name him Zach. Then, purchase a giant, live Tuna from the fish market in Tokyo. " +
            "Give Zach an Oxygen helmet and throw him and your Tuna, who you should name Michelle, into a giant fish tank. Leave " +
            "them with a year worth of food and a couple Viagra and when you return to the tank in one year you should have " +
            "between 3 and 5 baby Sea-Goats. Take them into your arms and breath in their scent. As the smell hits your Olfactory" +
            " Receptors and is understood by your Brain, you will have a moment of complete clarity. Sniff them 3 times a week for " +
            "three months and you will reach complete enlightenment.";
    }

}

function doDays(month){
    var mDays = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    var result = "";
    for (var i = 1; i <= mDays[month]; i++){
        result += "<option value=" + i + ">" + i + "</option>"
    }
    document.getElementById("day").innerHTML= result;
}

//function