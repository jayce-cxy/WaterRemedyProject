$(document).ready(function () {
    $.notify.addStyle('happyblue', {
        html: "<div>\n<span data-notify-text></span>\n</div>",
        classes: {
            base: {
                "white-space": "nowrap",
                "background-color": "#F2DEDE",
                "padding": "8px 15px 8px 20px",
                "font-size": "40px",
                "border-radius": "10px",
                "color": "#B94A48",
                "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)",
                "background-repeat": "no-repeat",
                "background-position": "3px 7px",
                "font-weight": "bold",
                "white-space": "nowrap",
            },
        }
    });
});

var b1 = document.getElementById('menu1');
var b2 = document.getElementById('menu2');
var b3 = document.getElementById('menu3');
var b4 = document.getElementById('menu4');
var b5 = document.getElementById('menu5');

var s1 = document.getElementById('step1');
var s2 = document.getElementById('step2');
var s3 = document.getElementById('step3');
var s4 = document.getElementById('step4');
var s5 = document.getElementById('step5');

var material1 = document.getElementById('defaultInline13');
var material2 = document.getElementById('defaultInline14');

var aud1 = document.getElementById('AUD1');
var aud2 = document.getElementById('AUD2');

var rang1 = document.getElementById('rang1');
var rang2 = document.getElementById('rang2');
var rang3 = document.getElementById('rang3');
var rang4 = document.getElementById('rang4');
var rang5 = document.getElementById('rang5');

var finalPlanPrice = 0;
var finalPlanContent;
var planCode;
var materialPrice = 0;
var finalPrice = 0;
var options = {
    //style: 'happyblue',
    clickToHide: true,
    autoHide: true,
    position: "top",
    autoHideDelay: 7000
}
var options2 = {
    //style: 'happyblue',
    clickToHide: true,
    autoHide: true,
    position: "bottom",
    autoHideDelay: 7000
}


function changeBtnColor(e) {
    var btns = [b1, b2, b3, b4, b5];
    btns.forEach(x => {
        if (x == e) {
            x.classList.remove('btn-menu-unlock');
            x.classList.add('btn-menu-lock');
        }
        else {
            x.classList.remove('btn-menu-lock');
            x.classList.add('btn-menu-unlock');
        }
    });
}
function show1(e) {
    s1.style.display = 'block';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'none';
    changeBtnColor(e);
    $('html, body').animate({
        scrollTop: $(e).offset().top
    }, 500);
}
function show2(e) {
    var num = parseFloat(document.getElementById('lyear').innerHTML);

    //s1.style.display = 'none';
    //s2.style.display = 'block';
    //s3.style.display = 'none';
    //s4.style.display = 'none';
    //s5.style.display = 'none';
    //changeBtnColor(e);
    
    if (num !== 0) {
        s1.style.display = 'none';
        s2.style.display = 'block';
        s3.style.display = 'none';
        s4.style.display = 'none';
        s5.style.display = 'none';
        changeBtnColor(e);
        $('html, body').animate({
            scrollTop: $(e).offset().top
        }, 500);
    } else {
        //$.notify("Please measure your roof then go next.", options);
        $('#menu2').notify("Please measure your roof then go next.", options);
    }
}
function show3(e) {
    var radios = document.getElementsByName('inlineDefaultRadiosExample2');
    var isBlank = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isBlank = true;
        }
    }

    //s1.style.display = 'none';
    //s2.style.display = 'none';
    //s3.style.display = 'block';
    //s4.style.display = 'none';
    //s5.style.display = 'none';
    //changeBtnColor(e);

    if (isBlank) {
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'block';
        s4.style.display = 'none';
        s5.style.display = 'none';
        changeBtnColor(e);
        $('html, body').animate({
            scrollTop: $(e).offset().top
        }, 500);
    } else {
        $('#menu3').notify("Please choose a plan.", options);
    }
}
function show4(e) {
    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'block';
    s5.style.display = 'none';
    $('html, body').animate({
        scrollTop: $(e).offset().top
    }, 500);
}
function show5(e) {
    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'block';
    $('html, body').animate({
        scrollTop: $(e).offset().top
    }, 500);
}

function calNext() {
    var num = parseFloat(document.getElementById('lyear').innerHTML);
    var stepToNext = document.getElementById('step1Next');
    //show2();
    //b1.classList.remove('btn-menu-lock');
    //b1.classList.add('btn-menu-unlock');

    //b2.classList.remove('btn-menu-unlock');
    //b2.classList.add('btn-menu-lock');

    if (num !== 0) {
        var num = parseFloat(document.getElementById('lyear').innerHTML);
        if (num !== 0) {
            s1.style.display = 'none';
            s2.style.display = 'block';
            s3.style.display = 'none';
            s4.style.display = 'none';
            s5.style.display = 'none';
        }

        b1.classList.remove('btn-menu-lock');
        b1.classList.add('btn-menu-unlock');

        b2.classList.remove('btn-menu-unlock');
        b2.classList.add('btn-menu-lock');
        $('html, body').animate({
            scrollTop: $($.attr(stepToNext, 'href')).offset().top
        }, 500);
    } else {
        $('#step1Next').notify("Please measure your roof then go next.", options2);
    }
}
function s2Previous() {

    s1.style.display = 'block';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'none';
    b1.classList.remove('btn-menu-unlock');
    b1.classList.add('btn-menu-lock');

    b2.classList.remove('btn-menu-lock');
    b2.classList.add('btn-menu-unlock');
}

function s2Next() {

    var radios = document.getElementsByName('inlineDefaultRadiosExample2');
    var bt = document.getElementById('n1');
    var isBlank = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isBlank = true;
        }
    }

    //show3();
    //b2.classList.remove('btn-menu-lock');
    //b2.classList.add('btn-menu-unlock');

    //b3.classList.remove('btn-menu-unlock');
    //b3.classList.add('btn-menu-lock');

    if (isBlank) {
        s1.style.display = 'none';
        s2.style.display = 'none';
        s3.style.display = 'block';
        s4.style.display = 'none';
        s5.style.display = 'none';
        b2.classList.remove('btn-menu-lock');
        b2.classList.add('btn-menu-unlock');

        b3.classList.remove('btn-menu-unlock');
        b3.classList.add('btn-menu-lock');
        $('html, body').animate({
            scrollTop: $($.attr(bt, 'href')).offset().top
        }, 500);
    } else {
        //alert('Please choose a plan');
        $('#n1').notify("Please choose a plan.", options2);
    }

}

function s3Previous() {

    s1.style.display = 'none';
    s2.style.display = 'block';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'none';
    b2.classList.remove('btn-menu-unlock');
    b2.classList.add('btn-menu-lock');

    b3.classList.remove('btn-menu-lock');
    b3.classList.add('btn-menu-unlock');
}

function s3Next() {

    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'block';
    s5.style.display = 'none';
    b3.classList.remove('btn-menu-lock');
    b3.classList.add('btn-menu-unlock');

    b4.classList.remove('btn-menu-unlock');
    b4.classList.add('btn-menu-lock');
}

function s4Previous() {

    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'block';
    s4.style.display = 'none';
    s5.style.display = 'none';
    b3.classList.remove('btn-menu-unlock');
    b3.classList.add('btn-menu-lock');

    b4.classList.remove('btn-menu-lock');
    b4.classList.add('btn-menu-unlock');
}

function s4Next() {

    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'none';
    s5.style.display = 'block';
    b4.classList.remove('btn-menu-lock');
    b4.classList.add('btn-menu-unlock');

    b5.classList.remove('btn-menu-unlock');
    b5.classList.add('btn-menu-lock');
}

function s5Previous() {

    s1.style.display = 'none';
    s2.style.display = 'none';
    s3.style.display = 'none';
    s4.style.display = 'block';
    s5.style.display = 'none';
    b4.classList.remove('btn-menu-unlock');
    b4.classList.add('btn-menu-lock');

    b5.classList.remove('btn-menu-lock');
    b5.classList.add('btn-menu-unlock');
}

//AUD rang
function mPolyethylene() {
        aud1.style.display = 'block';
        aud2.style.display = 'none';
        rang1.style.display = 'none';
        rang2.style.display = 'none';
        rang3.style.display = 'none';
        rang4.style.display = 'none';
        rang5.style.display = 'none';
}
function mSteel() {
        aud1.style.display = 'none';
        aud2.style.display = 'block';
        rang1.style.display = 'none';
        rang2.style.display = 'none';
        rang3.style.display = 'none';
        rang4.style.display = 'none';
        rang5.style.display = 'none';
}

//rang
function showRang1() {
    rang1.style.display = 'block';
    rang2.style.display = 'none';
    rang3.style.display = 'none';
    rang4.style.display = 'none';
    rang5.style.display = 'none';
}
function showRang2() {
    rang1.style.display = 'none';
    rang2.style.display = 'block';
    rang3.style.display = 'none';
    rang4.style.display = 'none';
    rang5.style.display = 'none';
}
function showRang3() {
    rang1.style.display = 'none';
    rang2.style.display = 'none';
    rang3.style.display = 'block';
    rang4.style.display = 'none';
    rang5.style.display = 'none';
}
function showRang4() {
    rang1.style.display = 'none';
    rang2.style.display = 'none';
    rang3.style.display = 'none';
    rang4.style.display = 'block';
    rang5.style.display = 'none';
}
function showRang5() {
    rang1.style.display = 'none';
    rang2.style.display = 'none';
    rang3.style.display = 'none';
    rang4.style.display = 'none';
    rang5.style.display = 'block';
}

function getPlanPrice(e) {
    finalPlanPrice = Number(e.value);
    //alert(finalPlanPrice);
}
function getPlanContent(e) {
    finalPlanContent = e.getAttribute("value");
    document.getElementById("choosePlan").innerHTML = finalPlanContent;
    if (e.getAttribute("name") == "A") {
        document.getElementById("pic1").src = "/img/PET-3.JPG";
        document.getElementById("pic2").src = " ";
    } else if (e.getAttribute("name") == "B") {
        document.getElementById("pic1").src = "/img/PET-5.JPG";
        document.getElementById("pic2").src = "/img/PET-1.JPG";
    } else if (e.getAttribute("name") == "C") {
        document.getElementById("pic1").src = "/img/PET-4.JPG";
        document.getElementById("pic2").src = "/img/PET-2.JPG";
    } else if (e.getAttribute("name") == "D") {
        document.getElementById("pic1").src = "/img/PET-2.JPG";
        document.getElementById("pic2").src = " ";
    } else if (e.getAttribute("name") == "E") {
        document.getElementById("pic1").src = "/img/Steel-3.JPG";
        document.getElementById("pic2").src = " ";
    } else if (e.getAttribute("name") == "F") {
        document.getElementById("pic1").src = "/img/Steel-5.JPG";
        document.getElementById("pic2").src = "/img/Steel -1.JPG";
    } else if (e.getAttribute("name") == "G") {
        document.getElementById("pic1").src = "/img/Steel-4.JPG";
        document.getElementById("pic2").src = "/img/Steel-2.JPG";
    } else if (e.getAttribute("name") == "H") {
        document.getElementById("pic1").src = "/img/Steel-2.JPG";
        document.getElementById("pic2").src = " ";
    }
    //alert(e.innerHTML);
}

function sumMaterialsPrice() {
    var radios = document.getElementsByName('category');
    var price = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            price += Number(radios[i].getAttribute('price'));
            //alert(radios[i].getAttribute('price'));
        }
    }
    materialPrice = price;
    //alert(materialPrice);
}

//function fPrice() {
//    finalPrice = finalPlanPrice + materialPrice;
//    //alert(finalPrice);
//}

function addP() {
    finalPrice = finalPlanPrice + materialPrice;
    var radios = document.getElementsByName('category');
    const myNode = document.getElementById("needMaterials");
    var isNeed = false;
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var tag = document.createElement("p");
            var text = document.createTextNode('-- ' + radios[i].value);
            tag.appendChild(text);
            var element = document.getElementById("needMaterials");
            element.appendChild(tag);
            isNeed = true;
        }
    }
    if (isNeed) {
        document.getElementById('accessories').innerHTML = "You need the following accessories:";
        document.getElementById('accessLine').innerHTML = "-------------------------------------------------------------------------------";
    }

    var number = $("#needMaterials").children().length;
    console.log(number);
    if (number == 0) {
        //var tag = document.createElement("p");
        //var text = document.createTextNode('No accessories needs');
        //tag.appendChild(text);
        //var element = document.getElementById("needMaterials");
        //element.appendChild(tag);
        document.getElementById('accessories').innerHTML = "";
        document.getElementById('accessLine').innerHTML = "";
    }
    document.getElementById("Total").innerHTML = finalPrice;
}



