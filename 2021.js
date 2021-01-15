const toggleBtn = document.getElementById('toggleMessage');

const toggle = () => {
  if ($('.message').css('display') == 'none') {
    $('.message').show();
  } else {
    $('.message').hide();
  }
};
toggleBtn.onclick = toggle;
