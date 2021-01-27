var change = 0; //0이면 영어 paragraph Kor button, 1이면 한국 paragraph Eng button
var menubar = document.querySelectorAll(".nav-link");
const KoreanMenu = new Array("청중 질의응답","온라인 강의","온라인 시험","사용 사례","연락처");
const EngMenu = new Array("Audience Q&A", "Online Class","Online Test","Use Cases","Contact");


function change_text() {
    if (change == 0) {
        document.querySelector('.translate-img').src="asset/img/eng.png"
        document.querySelector('.lecturer').innerHTML = "강사";
        document.querySelector('.audience').innerHTML = "청중";
        document.querySelector('.lecture-id').innerHTML = "강사아이디 : 강사의 Gmail/@gmail.com 의 앞부분";

        document.querySelector('.OTUG').innerHTML = "온라인 시험 사용법";
        document.querySelector('.AQUG').innerHTML = "청중 질의응답 사용법";
        document.querySelector('.OCUG').innerHTML = "온라인 강의 사용법";

        for(var i=0; i<menubar.length; i++){
            menubar[i].innerHTML = KoreanMenu[i];
        }
        
        change = 1;
    }
    else {
        document.querySelector('.translate-img').src="asset/img/kor.png"
        document.querySelector('.lecturer').innerHTML = "Lecturer";
        document.querySelector('.audience').innerHTML = "Audience";
        document.querySelector('.lecture-id').innerHTML = "Lecturer Id : Google account of the lecturer";

        document.querySelector('.OTUG').innerHTML = "Online Test Tutorial";
        document.querySelector('.AQUG').innerHTML = "Audience Q&A Tutorial";
        document.querySelector('.OCUG').innerHTML = "Online Class Tutorial";
        
        for(var i=0; i<menubar.length; i++){
            menubar[i].innerHTML = EngMenu[i];
        }
        change = 0;
    }

}

$(document).ready(function () {
    var url = $("#Geeks3").attr('src');
    $("#Geeks2").on('hide.bs.modal', function () {
        $("#Geeks3").attr('src', '');
    });
    $("#Geeks2").on('show.bs.modal', function () {
        $("#Geeks3").attr('src', url);
    });
}); 

changesrc1=()=>{
    document.querySelector("#Geeks3").setAttribute("src","https://www.youtube.com/embed/dgCOWqeXYIg");
}
changesrc2=()=>{
    document.querySelector("#Geeks3").setAttribute("src","https://www.youtube.com/embed/1-ZuUMrBpjo");
}