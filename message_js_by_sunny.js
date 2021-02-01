var check_iframe_messageCenter_loaded = false;
/* 
  수정할 내용
  document.getElementById('sorting_div');
  document.getElementById('tab_div')
  document.getElementById('top_menu_div')
  $('.bottom_div1').height();
  $('.bottom_div2').height();

  <select class="bootstrap-select sortBox" onchange="change_sorting(this)">
    <option value="Time" selected="selected" >최신 순</option>
    <option value="ID" >ID 순</option>
    <option value="Name" >이름 순</option>
    <option value="Keyword" >키워드 순</option>
  </select>

*/



function get_message(data,cnt)
  {
    
    var msg_cnt =cnt.toString();
    var msg_hash =data.hash;
    var msg_body =data.pure_comment_whole;
    var msg_id =data.myidinfo ;
    var msg_name =data.mynameinfo;
    
    var msg_template =``;

    var hash_remove ="";
    if(msg_hash =="")
    {
      hash_remove = "style='overflow:hidden;visibility:hidden'";

    }
    else
      hash_remove = "style='overflow:hidden;cursor:pointer'";
    
    msg_template = `
            <td class="messageFont">`+msg_cnt+`</td>
            <td width="50%" class="d-flex flex-column">
              <div class="purpleFont mb-1"  onclick="toAps('`+data.id+`')" `+hash_remove+`>`+msg_hash+`</div>
              <div class="question" onclick="toAps('`+data.id+`')" style="overflow:none">`+msg_body+`</div>
            </td>
            <td width="20%" class="messageFont mb-3" onclick="toAps('`+data.id+`')" style="overflow:hidden">`+msg_id +` `+ msg_name+`</td>
            <td>
              <img id="questionDelete" onclick="delete_msg('`+data.id+`')" class="messageClose" src="asset/img-2021/PNG_닫기버튼_진회색.png" />
            </td>
            `;
            
    return msg_template;
    var msg_cnt =cnt.toString();
    var msg_hash =data.hash;
    var msg_body =data.pure_comment_whole;
    var msg_id =data.myidinfo ;
    var msg_name =data.mynameinfo;
    
    var msg_template =``;
    


    if(msg_hash != "")
    {
      msg_template=
      `
      <div class="messageObject d-flex justify-content-around align-items-center p-1" >
        <td width="10%" align="center" valign="top"><div class="messageFont">`+msg_cnt+`</div></td>
        <td width="50%" align="left" valign="top">
          <div class="d-flex flex-column">
            <div class="purpleFont mb-1">`+msg_hash+`</div>
            <div class="question" onclick="toAps('`+data.id+`')">`+msg_body+`.</div>
          </div>
        </td>
        <td width="30%" valign="top">
          <div class="messageFont mb-3">`+msg_id +`  ` + msg_name+`</div>
        </td>
        <td valign="top">
          <img onclick="delete_msg('`+data.id+`')"  class="messageClose" src="asset/img-2021/PNG_닫기버튼_진회색.png"    />
        </td>
      </div>
    `;
    }
    else
    {
      msg_template=
      `
      <div class="messageObject d-flex justify-content-around align-items-center p-1" >
        <td width="10%" align="center" valign="top"><div class="messageFont">`+msg_cnt+`</div></td>
        <td width="50%" align="left" valign="top">
          <div class="d-flex flex-column">
            <div class="question" onclick="toAps('`+data.id+`')">`+msg_body+`.</div>
          </div>
        </td>
        <td width="30%" valign="top">
          <div class="messageFont mb-3">`+msg_id +`  ` + msg_name+`</div>
        </td>
        <td valign="top">
          <img onclick="delete_msg('`+data.id+`')" class="messageClose" src="asset/img-2021/PNG_닫기버튼_진회색.png"    />
        </td>
      </div>
    `;
    }


   return msg_template;
  }
  function toAps(id)
  {
    if(myparent.kind_of_app=="toslide_control")
    {
      myparent.navigate_comment_by_click(id);
    }
    else
    {
      
      myparent.show_comment_v2(id,true);
    }
    
  }

  function delete_msg(id)
  {
   
    delete_comment_for_message_center_iframe(id);
  }
  function sort_according_sorting_order(data,callback)
  {
    callback(true);
  }
  var msg_newly_arrived = [];
  function get_current_msgs_cnt()
  {
  
    return msg_newly_arrived.length;
  } 

  function clear_newly_arrived_msgs()
  {
    msg_newly_arrived = [];
  }
  function insert_comments_into_div(data)
  {

    msg_newly_arrived.push(data.email);   
    //console.log(data);
    sorting_by_property();
    
    return;
    sort_according_sorting_order(data,function(rst){
      var table = document.getElementById("msg_table");
      var cnt =document.getElementById('msg_table').rows.length+1;
      var new_msg = get_message(data,cnt);
      var row = table.insertRow(0);
      row.id = data.id;
      row.innerHTML =new_msg;
    });
   

    
    //element.innerHTML=msg_template;
    //document.getElementById('messages_div').appendChild(element);
    //document.body.appendChild(element);
  }
  var tobe_deleted_rowid = "";
  function delete_comment_for_message_center_iframe(id)
  {

       
      tobe_deleted_rowid = id;
      var idx = myparent.find_comment_idx_using_id(id);
      console.log("to be deleted idx",idx);
      
      if(idx != -1)
      {
         try{
          myparent.to_be_deleted_user_id = id;
          myparent.to_be_deleted_comment_v2 =idx;
         
          //$('#delete_view_modal').modal('show');
          var comment= myparent.comment_collections[idx].pure_comment_whole;
          document.getElementById("delete_a_message_body").innerHTML = comment;
          openDeleteModal();
          myparent.to_be_deleted_row_id = idx;
          
          document.getElementById("delete_comment_content").innerHTML = comment;
         }
         catch(err)
         {
           console.log(err.message);
         }
        
         
      }
      else
      {
        myparent.to_be_deleted_comment_v2 =-1; 
        myparent.to_be_deleted_row_id = -1;
      }

      
  }

  function hide_row()
  {
    sorting_by_property();
    return;
    console.log("tobe_deleted_rowid",tobe_deleted_rowid);
    console.log(document.getElementById(tobe_deleted_rowid));
    document.getElementById(tobe_deleted_rowid).style.visibility='hidden';
  }

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
        * and you may want to customize it to your needs
        */
        var result = result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
       
        return result * sortOrder;
    }
}


var current_clicke_row = null;
function clicked_a_messageObject_from_main(id)
{
  for(var i = 0; i <messageObject.length;i++)
  {
    if(id == messageObject[i].id)
    {
      messageObject[i].classList.add('clicked');
      parent.clicked_messageObject = id;
      current_clicke_row = messageObject[i];
    }
    else
    {
      messageObject[i].classList.remove('clicked');
    }
      
    
  }


  
  try{
    var myElement = document.getElementById(current_clicke_row.id);
    var topPos = myElement.offsetTop;
    //console.log(topPos);
    document.getElementById('messages_div').scrollTop = topPos;
  }
  catch(err)
  {

  }
  

}
function sorting_by_property()
{
  
  
  myparent.comment_collections =JSON.parse(JSON.stringify(myparent.comment_collections));
  //console.log(myparent.comment_collections);

  if(current_sorting_order =="Time")
    myparent.comment_collections.sort(dynamicSort("send_time"));
  else if(current_sorting_order =="ID")
  myparent.comment_collections.sort(dynamicSort("myidinfo"));
  else if(current_sorting_order =="Name")
  myparent.comment_collections.sort(dynamicSort("mynameinfo"));    
  else if(current_sorting_order =="Keyword")
  myparent.comment_collections.sort(dynamicSort("hash"));

  //console.log(myparent.comment_collections);
  
  $("#msg_table tr").remove();
  
  var table = document.getElementById("msg_table");
  table.innerHTML = "";
  
  for(var i = 0; i< myparent.comment_collections.length; i++)
  {
    var cnt =document.getElementById('msg_table').rows.length+1;
    //console.log(myparent.comment_collections[i]);
    var new_msg = get_message(myparent.comment_collections[i],cnt);
    var row = table.insertRow(0);
    //이 클래스들이 바뀔 수 있다
    //"messageObject d-flex justify-content-around align-items-center p-1"
    //"messageObject d-flex justify-content-around align-items-center p-1"      >
    row.classList.add("messageObject");
    row.classList.add("d-flex");
    
    row.classList.add("justify-content-around");
    row.classList.add("align-items-center");
    row.classList.add("p-1");

    row.id = myparent.comment_collections[i].id;
    row.innerHTML =new_msg;

    
    
  }
  
  //console.log(table);
  if(myparent.current_comment_idx !=-1)
  {
    myparent.recalc_current_comment_idx();
  }

  myparent.recalc_arrows_for_comment();
  
  
  messageObject = document.querySelectorAll('.messageObject');
  for (let i = 0; i < messageObject.length; i++) {
      messageObject[i].addEventListener('click', () =>
        {
          myparent.clicked_messageObject  = messageObject[i].id;
          changeMessageObjectBackground(i);
        }
        
      );
  }

  if(myparent.clicked_messageObject != "")
  {
    //alert(myparent.clicked_messageObject);
    clicked_a_messageObject_from_main(myparent.clicked_messageObject);
  }
  //console.log(messageObject[0].id);
  return;
  
  //console.log(myparent.comment_collections);
  var clone =JSON.parse(JSON.stringify(myparent.comment_collections));
  console.log(clone);


  
  
  console.log("original");
  for(var i =0; i <clone.length; i++)
  {
    console.log(clone[i].send_time);   
  }
  console.log("sorting");
  
  clone.sort(dynamicSort("send_time"));

  for(var i =0; i <clone.length; i++)
  {
    console.log(clone[i].send_time,clone[i].pure_comment_whole);   
  }

  

  console.log("reverse");
  clone =JSON.parse(JSON.stringify(myparent.comment_collections));
  clone.sort(dynamicSort("-send_time"));
  

  for(var i =0; i <clone.length; i++)
  {
    console.log(clone[i].send_time,clone[i].pure_comment_whole);   
  }
}

var current_sorting_order = "Time";
//var prev_sorting_order = "Time";
function change_sorting(selectObject) {
  var value = selectObject.value;  
  //console.log(value);
  if(current_sorting_order != value)
  {
    current_sorting_order = value;
    sorting_by_property();
  }

  
}
function close_messagebar()
{
  try{
    myparent.viewComment_or_photo_v2(true);
  }
  catch(err)
  {

  }
  try{
    myparent.control_div("main_div");
  }
  catch(err)
  {

  }
  
}

function calc_height_for_message_bar(iframe_height)
{

  console.log("iframe_height",iframe_height);
  var sorting_div_height = document.getElementById('sorting_div').offsetHeight;
  
  console.log("sorting_div_height offsetHeight",sorting_div_height);
  var tab_div_height = document.getElementById('tab_div').offsetHeight;
  console.log("tab_div offsetHeight",tab_div_height);
  var top_menu_div_height = document.getElementById('top_menu_div').offsetHeight;
  console.log("top_menu_div offsetHeight",top_menu_div_height);

  var bottom_div1_height = $('.bottom_div1').height();
  console.log("bottom_div1 offsetHeight",bottom_div1_height);

  var bottom_div2_height =  $('.bottom_div2').height();
  console.log("bottom_div2 offsetHeight",bottom_div2_height);

  

  var whole_height = this.innerHeight;

  var h = whole_height - sorting_div_height -tab_div_height-top_menu_div_height -bottom_div1_height  -190;
  console.log("window",window.innerHeight);
  console.log("whole height ",this.innerHeight);
  console.log("calc h",h);
  $('.fixed_size_message_row').css("height" , (h)+"px");
  
  
}

function do_actual_deletion_from_remote_command(id)
{
  myparent.to_be_deleted_user_id = id;
  myparent.to_be_deleted_comment_v2 =myparent.find_comment_idx_using_id(id);
  deleteModal.classList.add('hidden');
  myparent.actual_delete_for_message_center();hide_row();
 
}

function do_actual_deletion()
{

  if(myparent.kind_of_app == "toslide_control")
  {
   
    deleteModal.classList.add('hidden');
    myparent.actual_delete_for_message_center_for_controller();hide_row();
  }
  else
  {
    deleteModal.classList.add('hidden');
    myparent.actual_delete_for_message_center();hide_row();
  }
  
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function drag_message_window()
{
  if(parent.kind_of_app =="toslide_control")        
    return;
  setTimeout(close_messagebar,1);
  myparent.open_standalone_message();
         
}
var standalone  = false;
var myparent = null;
window.onload = function () {
  
  var status = getParameterByName("status");
 
  if(status=="standalone")
  {
    myparent = window.opener;
    standalone = true;
    
    var iframe_height =    document.body.offsetHeight;
    calc_height_for_message_bar(iframe_height);

    sorting_by_property();
  }
  else
  {
    myparent = parent;
  }
};