var sign = "Leo";
var month = "July";
var birthday = 27;
var luckynum = 16;
var description = "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their king of the jungle status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier."
var believe = true;

var leoRating = 5;
var geminiRating = 4;
var virgoRating = 0;
var averageRate = (leoRating + geminiRating + virgoRating) / 3;

var moodEl = document.getElementById("mood");
moodEl.innerHTML = "Today's mood rating for Leo: " + leoRating + " out of 5. The average mood rating of Leo, Gemini, and Virgo is: " + averageRate.toFixed(1) + ".";


var signEl = document.getElementById("sign");
signEl.innerHTML = sign;

var birthDayEl = document.getElementsByClassName("birthday");
birthDayEl[0].innerHTML = birthDayEl[0].innerHTML + month + " " + birthday + "th";

var num = document.getElementsByClassName("luckyNum");
num[0].innerHTML = num[0].innerHTML + luckynum;

var text = document.getElementsByTagName("p");

text[0].innerHTML = description;

text[1].innerHTML = believe;


var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];


var mySign = signs[7]; 
var partner1 = signs[8]; 
var partner2 = signs[5]; 


var signEl = document.getElementById("signs");
signEl.innerHTML = "My zodiac sign is: " + mySign + ". Emilienne's zodiac sign is: " + partner1 + ". Megan's zodiac sign is: " + partner2 + ".";


var descriptions = [
  "Today is a day for new beginnings.",
  "Your determination will lead to success today.",
  "Communication is key today.",
  "Trust your intuition.",
  "Your creativity shines today.",
  "Pay attention to the details.",
  "Balance is essential.",
  "Embrace transformation.",
  "Adventure awaits.",
  "Hard work leads to success.",
  "Your unique perspective is an asset.",
  "Trust your emotions."
];


var myHoroscope = descriptions[6];    
var partner1Horoscope = descriptions[3]; 
var partner2Horoscope = descriptions[4]; 


var descEl = document.getElementById("descriptions");
descEl.innerHTML = mySign + " Horoscope: " + myHoroscope + " " + partner1 + " Horoscope: " + partner1Horoscope + " " +partner2 + " Horoscope: " + partner2Horoscope;




