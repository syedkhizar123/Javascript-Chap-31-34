// Question 1
document.write("<h1>Chap 31-34</h1>Question 1<br>")
var crnt_date = new Date()
document.write(crnt_date)



// Question 2
document.write("<br><br>Question 2<br>")
var months = ["January" ,"February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
var crnt_month = new Date().getMonth()
document.write("Current month: "+months[crnt_month])



// Question 3
document.write("<br><br>Question 3<br>")
var days = ["Sun" ,"Mon" , "Tue" , "Wed" , "Thu" , "Fri" ,"Sat"]
var crnt_day = new Date().getDay()
document.write("Today is " + days[crnt_day])



// Question 4
document.write("<br><br>Question 4<br>")
var today = new Date().getDay()
if(today == 0 || today == 6) {
    document.write("Today is Funday")
} else{
    document.write("It's a normal day")
}




// Question 5
document.write("<br><br>Question 5<br>")
var date = new Date().getDate()
if(date < 16){
    document.write("First fifteen days of the month")
} else{
    document.write("Last days of the month")
}





// Question 6
document.write("<br><br>Question 6<br>")
var crnt_dateq6 = new Date()
var ms = new Date().getTime()
var minutes = ms/(1000 * 60)
document.write("Current date: " + crnt_dateq6 + "<br>Ellapsed milliseconds since January 1, 1970: " + ms + "<br>Ellapsed minutes since January 1, 1970: " +Math.round(minutes))




// Question 7
document.write("<br><br>Question 7<br>")
var q7 = new Date().getHours()
if(q7 > 11){
    document.write("It's PM")
} else { 
    document.write("It's AM")
}




// Question 8
document.write("<br><br>Question 8<br>")
var laterdate = "Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)"
document.write("Later Date: " + laterdate)




// Question 9
document.write("<br><br>Question 9<br>")
var q9 = new Date()
var ramadan2015 = "18 June 2015 12:00 AM"
var q92 = new Date(ramadan2015)
var diff = q9 - q92
var noofdays = Math.round(diff/(1000*60*60*24))
document.write(noofdays + " days have passed since 1st Ramadan 2015")




// Question 10
document.write("<br><br>Question 10<br>")
var q2015 = "1 January 2015 12:00 AM"
var q10 = new Date()
var q102 = new Date(q2015)
var q10diff = q10 - q102
var final = Math.round(q10diff/(1000))
document.write("Our reference date " + q10 + "<br>" + final + " seconds have passed since 1st January 2015")





// Question 11
document.write("<br><br>Question 11<br>")
var crnt_dateq11 = new Date()
document.write("Current date: " + crnt_dateq11)
var crnt_hour = new Date().getHours()
crnt_dateq11.setHours(crnt_hour-1)
document.write("<br>One hour ago it was " + crnt_dateq11 )





// Question 12
document.write("<br><br>Question 12<br>")
var crnt_dateq12 = new Date()
document.write("Current date: " + crnt_dateq12 + "<br>")
var crnt_year = new Date().getFullYear()
crnt_dateq12.setFullYear(crnt_year-100)
document.write("100 years back, it was " + crnt_dateq12)




// Question 13
document.write("<br><br>Question 13<br>")
var user_age = prompt("Enter your age")
var user_birth_year = crnt_year - user_age
document.write("Your age is " + user_age + "<br>Your birth year is " + user_birth_year)




// Question 14
document.write("<br><br>Question 14<br>")
var customer_name = "John Elia"
var month = months[crnt_month]
var no_of_units = 370
var charges_per_unit = 16
var net_amount = no_of_units*charges_per_unit
var late_charges = 500
var gross_amount = net_amount + late_charges
document.write("Customer Name: " + customer_name + "<br>Month: " + month + "<br>Number of units: " + no_of_units + "<br>Charges per unit: " + charges_per_unit + "<br><br>Net Amount Payable (within due date): " + net_amount + "<br>Late payment surcharge: " + late_charges + "<br>Gross Amount Payable (after due date): " + gross_amount)



