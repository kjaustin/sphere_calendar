$( document ).ready(function() {

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
        console.log("Submitted Event");
        var ename = $("#ename").val();
        var dstart = $("#dstart").val();
        var tstart = $("#tstart").val();
        var dend = $("#dend").val();
        var tend = $("#tend").val();
        console.log(ename + "," + dstart + "," + tstart + "," + dend + "," + tend);
    });
});