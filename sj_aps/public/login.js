function ChangeWord(){
    alert("changeword check");
    document.querySelector('.for-delete').innerHTML='삭제되었습니다.';
    document.querySelector('.login-font').innerHTML='로그인 페이지로 가기';
    document.querySelector('.login-button').setAttribute("onclick","javascript: gotoLogin();");
    //delete function 작동후 .login-button의 onclick 속성변경 onclick시 gotoLogin 함수 호출
}

//gotoLogin 함수는 login.html로 redirect 역할
function gotoLogin(){
    location.replace("login.html")
}