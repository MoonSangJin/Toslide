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
    parent.show_comment_v2(id);
  }

  function delete_msg(id)
  {

     
    //console.log(id);
    //return;
    
    delete_comment_for_message_center_iframe(id);
  }
  function sort_according_sorting_order(data,callback)
  {
    callback(true);
  }
  function insert_comments_into_div(data)
  {

    
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
      var idx = parent.find_comment_idx_using_id(id);
      console.log("to be deleted idx",idx);
      
      if(idx != -1)
      {
         try{
          parent.to_be_deleted_user_id = id;
          parent.to_be_deleted_comment_v2 =idx;
         
          $('#delete_view_modal').modal('show');
          parent.to_be_deleted_row_id = idx;
          var comment= parent.comment_collections[idx].pure_comment_whole;
          document.getElementById("delete_comment_content").innerHTML = comment;
         }
         catch(err)
         {
           console.log(err.message);
         }
        
         
      }
      else
      {
        parent.to_be_deleted_comment_v2 =-1; 
        parent.to_be_deleted_row_id = -1;
      }

      
  }

  function hide_row()
  {
    document.getElementById(tobe_deleted_rowid).style.display='none';
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
function sorting_by_property()
{
  
  parent.comment_collections =JSON.parse(JSON.stringify(parent.comment_collections));
  //console.log(parent.comment_collections);

  if(current_sorting_order =="Time")
    parent.comment_collections.sort(dynamicSort("send_time"));
  else if(current_sorting_order =="ID")
    parent.comment_collections.sort(dynamicSort("myidinfo"));
  else if(current_sorting_order =="Name")
    parent.comment_collections.sort(dynamicSort("mynameinfo"));    
  else if(current_sorting_order =="Keyword")
    parent.comment_collections.sort(dynamicSort("hash"));

  //console.log(parent.comment_collections);
  
  $("#msg_table tr").remove();
  var table = document.getElementById("msg_table");
  for(var i = 0; i< parent.comment_collections.length; i++)
  {
    var cnt =document.getElementById('msg_table').rows.length+1;
    //console.log(parent.comment_collections[i]);
    var new_msg = get_message(parent.comment_collections[i],cnt);
    var row = table.insertRow(0);
    row.id = parent.comment_collections[i].id;
    row.innerHTML =new_msg;
  }
  
  if(parent.current_comment_idx !=-1)
    {
      parent.recalc_current_comment_idx();
    }
  
  parent.recalc_arrows_for_comment();
  
  

  return;
  
  //console.log(parent.comment_collections);
  var clone =JSON.parse(JSON.stringify(parent.comment_collections));
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
  clone =JSON.parse(JSON.stringify(parent.comment_collections));
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
    parent.viewComment_or_photo_v2(true);
  }
  catch(err)
  {

  }
  try{
    parent.control_div("main_div");
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

  var h = whole_height - sorting_div_height -tab_div_height-top_menu_div_height -bottom_div1_height - bottom_div2_height -80;
  console.log("window",window.innerHeight);
  console.log("whole height ",this.innerHeight);
  console.log("calc h",h);
  $('.fixed_size_message_row').css("height" , h+"px");
  
  
}
window.onload = function () {
 
};

function do_actual_deletion()
{
  if(parent.kind_of_app = "toslide_control")
  {
    parent.actual_delete_for_message_center_for_controller();$('#delete_view_modal').modal('hide');hide_row()
  }
  else
  {
    parent.actual_delete_for_message_center();$('#delete_view_modal').modal('hide');hide_row()
  }
  
}