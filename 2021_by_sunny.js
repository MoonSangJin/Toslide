/*

<div id="togglePhoto" class="square">
  <img class="menuImage" src="./revised_sj_v2/asset\img-2021\PNG_사진.png" />
  <div class="menuText">사진</div>
</div>
<div class="square " id="toggleGather_div">
  <img   id="toggleGather"  class="menuImage" src="./revised_sj_v2/asset/img-2021/PNG_수합중지.png"/>
  <div id="toggleGatherText" class="menuText">수합중지</div>
  
</div>
<div id="toggleMessage" class="square includer">
  <img class="menuImage" src="./revised_sj_v2/asset\img-2021\PNG_메시지.png" />
  <div class="menuText">메시지</div>
  <span id="cmt_cnt" class="badge badge-success"></span>
</div>
*/
const messageToggleBtn = document.getElementById('toggleMessage');
const photoToggleBtn = document.getElementById('togglePhoto');
const gatherToggleBtn = document.getElementById('toggleGather');
const toggleGather_div = document.getElementById('toggleGather_div');

const gatherToggleText = document.getElementById('toggleGatherText');
//const closeButton = document.getElementById('closeButton');
var gathering = false;
const toggle = () => {

  console.log("photo block",parent.document.getElementById('iframe_messageCenter').style.display);
  if(parent.document.getElementById('split_toslide_right').style.display=="block" && parent.document.getElementById('iframe_photoCenter').style.display=="block" )
  {
    console.log("zap in toggle photo");

    parent.document.getElementById('split_toslide_right').style.display ="none";
    parent.zap_right_div();
    
  }
  parent.document.getElementById('iframe_messageCenter').style.display = "block";
  parent.document.getElementById('iframe_photoCenter').style.display = "none";
  
  parent.viewComment_or_photo_v2(true);
 
};
const toggle_photo = () => {

  
  console.log("message block",parent.document.getElementById('iframe_messageCenter').style.display);
  if(parent.document.getElementById('split_toslide_right').style.display=="block" && parent.document.getElementById('iframe_messageCenter').style.display=="block" )
  {
    parent.document.getElementById('split_toslide_right').style.display ="none";
    console.log("zap in toggle message");
    parent.zap_right_div();
    
  }

  parent.document.getElementById('iframe_messageCenter').style.display = "none";
  parent.document.getElementById('iframe_photoCenter').style.display = "block";
  parent.viewComment_or_photo_v2(false);
 
};


function toggleGather (){
  if (gathering) {
    gatherToggleBtn.src = './asset/img-2021/gathering_stop.png';
    gatherToggleText.innerHTML = '수합중지';
    gathering = false;

    parent.let_audience_allow_input_for_menu_only();
    return;
  } else {
   
    gatherToggleBtn.src = './asset/img-2021/gathering_start.png';
    console.log(gatherToggleBtn.src);
    gatherToggleText.innerHTML = '수합중';
    gathering = true;
    parent.let_audience_allow_input_for_menu_only();
    return;
  }
};
messageToggleBtn.onclick = toggle;

photoToggleBtn.onclick = toggle_photo;


//closeButton.onclick = toggle;
//gatherToggleBtn.onclick = toggleGather;
toggleGather_div.onclick = toggleGather;
