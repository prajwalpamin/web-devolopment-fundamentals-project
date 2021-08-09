$(document).ready(function(){
  //   console.log("script loaded");
    var productsData=$("#products-wrap");
    var d = new Date();
    var strDate = d.getDate()+"-"  + (d.getMonth()+1) + "-" + d.getFullYear() ;
    console.log(strDate)
    var nav=$("#navbar a");
    $(nav).click(function(){
      $(this).addClass("topbar-active");
    })
   
   function renderTableData(data){
    // <tr class="order-row">
    // <td class="order-data">id</td>
    // <td class="order-data">customer</td>
    // <td class="order-data">date</td>
    // <td class="order-data">amount</td>
    // <td class="order-data">status</td>
    // <td class="order-data">status</td>
    // </tr>
    var row=$("<tr>").addClass("order-row ");
    row.append($("<td>").addClass("order-data").html(data.id));
    row.append($("<td>").addClass("order-data").html(data.medicineName));
    row.append($("<td>").addClass("order-data").html(data.medicineBrand));
    row.append($("<td>").addClass("order-data").html(data.expiryDate));
    row.append($("<td>").addClass("order-data").html(data.unitPrice));
    row.append($("<td>").addClass("order-data").html(data.stock));
    return row;
   }
    
    
  

 
$("#expiryDate").click(function(){

    $(".order-data").css("display","none")
    
    let xy=searchData.filter((item) => {
      var dt=new Date(item.expiryDate);
      var str = $.datepicker.formatDate('dd-mm-yy', dt);
      console.log(str)
      date.parse(str) < date.parse(strDate)
    })
    $("#count").html(xy.length);
    for(var i=0;i<xy.length;i++){
      productsData.append(renderTableData(xy[i])) ;
     }

})

$("#stock").click(function(){

    $(".order-data").css("display","none")
    if($("#stock").prop(":checked")){var xy=searchData;$("#count").html(xy.length);}
       else{xy=searchData.filter((item) => item.stock > 100 ); $("#count").html(xy.length);}
     
    for(var i=0;i<xy.length;i++){
      productsData.append(renderTableData(xy[i])) ;
     }

})
    
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",function(data){

         searchData=data
   
        
        for(var i=0;i<searchData.length;i++){
          productsData.append(renderTableData(searchData[i])) ;
         }
    });



})