$( document ).ready(function() {

    Date.prototype.format=function(format) {
        var mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var fullMon=['January','February','March','April','May','June','July','August','September','October','November','December'];
        var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        var fullDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        if (!format) { format="MM/dd/yyyy"; }
        var  regex=new RegExp("DDDD","g");
        format=format.replace(regex, fullDays[this.getDay()]);
        regex=new RegExp("DDD","g");
        format=format.replace(regex, days[this.getDay()]);
        regex=new RegExp("dd","g");
        format=format.replace(regex,this.getDate());
        regex=new RegExp("MMMM","g");
        format=format.replace(regex, fullMon[this.getMonth()]);
        regex=new RegExp("MMM","g");
        format=format.replace(regex, mon[this.getMonth()]);
        regex=new RegExp("MM","g");
        format=format.replace(regex,this.getMonth()+1);
        regex=new RegExp("yyyy","g");
        format=format.replace(regex, this.getFullYear());
        regex=new RegExp("yy","g");
        format=format.replace(regex, this.getFullYear().toString().substr(2,2));
        regex=new RegExp("mm","g");
        format=format.replace(regex, this.getMinutes());
        regex=new RegExp("hh","g");
        format=format.replace(regex, this.getHours());
        regex=new RegExp("ss","g");
        format=format.replace(regex, this.getSeconds());
        regex=new RegExp("ms","g");
        format=format.replace(regex, this.getMilliseconds());
        return format;
    }

    var newD = new Date();
    var wd = newD.getDay();
    var d = newD.format("MMM dd");
    var dofweek;

    for (var k = 0; k < 7; k++){
        dofweek = wd + k;
        $(".currentDate" + dofweek).html((newD.format("MMM")) + " " + (newD.getDate() + k));
    }

    for (var l = 0; l < wd; l++){
        dofweek = -wd + l;
        $(".currentDate" + l).html((newD.format("MMM")) + " " + (newD.getDate() + dofweek));
    }

    var users = [
        { id: 1, img: "style/images/1.jpg", name: "Maya Smith", title: "Manager", skills: ["Bilingual","Planning","Organizing","Coordinating","Directing"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "01/12/1990"},
        { id: 2, img: "style/images/2.jpg", name: "Bob Ferroro", title: "Business Intelligence", skills: ["Assertiveness","Collaboration","Communication","Analytical Ability","Accuracy"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "05/21/1985"},
        { id: 3, img: "style/images/3.jpg", name: "Hannah Wanton", title: "Database Developer", skills: ["Development","Discipline","Empathy","Innovation","Goal-oriented"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "06/30/1986"},
        { id: 4, img: "style/images/4.jpg", name: "Toby Rock", title: "Logistics", skills: ["Genuine","Networking","Patience","Problem Solving","Professional"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "09/02/1993"},
        { id: 5, img: "style/images/5.jpg", name: "Lauren Mines", title: "Web Developer", skills: ["Persuasion","Microsoft Office","Listening","Punctuality","Sales"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "08/05/1989"},
        { id: 6, img: "style/images/6.jpg", name: "Sarah Johnson", title: "Product Designer", skills: ["Tactfulness","Scheduling","Strategic Thinking","Time Management","Teamwork"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "10/11/1978"},
        { id: 7, img: "style/images/7.jpg", name: "Jessica Renee", title: "Retail", skills: ["Writing","Networking","Patience","Interpersonal","Focused"], phone: "123-456-7891", address: "111 somewhere street, California", email: "email@example.com", site: "demosite.com", birthday: "11/23/1995"}
    ];

    var userId;
    var modal = $('.modal');
    var body = $('body');
    var startStrings = [];
    var endStrings = [];
    var currentTimeValue;
    var inBetweenTime;
    var stringTimeValue;

    // $(".checkbox").on("click", function() {
    //     modal[0].style.display = "block";
    //     $("body").toggleClass("dialogIsOpen");
    // });

    $(".close").on("click", function() {
        modal[0].style.display = "none";
        $("body").toggleClass("dialogIsOpen");
    });

    $(".grid-item").on("click", function() {
        userId = $(this).data("id");
        window.location.href = "profile.html?userId=" + userId;
    });

    $("#modal-mobile-submit").on("click", function() {
        event.preventDefault();
        console.log("Submitted Event");
        var ename = $("#ename").val();
        var dstart = $("#dstart").val();
        var tstart = $("#tstart").val();
        var dend = $("#dend").val();
        var tend = $("#tend").val();
        
        var dtstart = (dstart + tstart);
        var dtend = (dend + tend);

        var startStrings = dtstart.match(/[a-zA-Z]+|[0-9]+/g);
        var endStrings = dtend.match(/[a-zA-Z]+|[0-9]+/g)

        var newEndStrings;
        var newStartStrings;

        if (endStrings[1].length === 1 || endStrings[1].length === 2) {
            newEndStrings = endStrings[1] + "00";
        } else {
            newEndStrings = endStrings[1];
        }

        console.log(newEndStrings);

        if (startStrings[1].length === 1 || startStrings[1].length === 2) {
            newStartStrings = startStrings[1] + "00";
        } else {
            newStartStrings = startStrings[1];
        }

        console.log(newStartStrings);

        var e = Math.ceil((Number(newEndStrings) - Number(newStartStrings)) / 60);
        currentTimeValue = Number(startStrings[1]);

        for (var s = 0; s < e; s++) {
            stringTimeValue = currentTimeValue.toString();

            if (stringTimeValue.length === 3 ) {

                currentTimeValue = currentTimeValue + 30;
                stringTimeValue = currentTimeValue.toString();
                stringTimeValue = Number(stringTimeValue.slice(0, 1)) + 1;
                currentTimeValue = Number(stringTimeValue);

            } else if (stringTimeValue.length === 4) {

                currentTimeValue = currentTimeValue + 30;
                stringTimeValue = currentTimeValue.toString();
                stringTimeValue = Number(stringTimeValue.slice(0, 2)) + 1;
                currentTimeValue = Number(stringTimeValue);

            } else if (stringTimeValue.length === 1 || stringTimeValue.length === 2) {

                stringTimeValue = currentTimeValue.toString();
                stringTimeValue = stringTimeValue + 30;
                currentTimeValue = Number(stringTimeValue);
        
            }

            stringTimeValue = stringTimeValue.toString();

            inBetweenTime = startStrings[0] + stringTimeValue;

            console.log(inBetweenTime);

            $("#" + inBetweenTime).prop( "checked", true );
        }

        console.log("Start Time: " + dtstart);
        console.log("End Time: " + dtend);

        $("#" + dtstart).prop( "checked", true );
        $("#" + dtend).prop( "checked", true );
    });
});