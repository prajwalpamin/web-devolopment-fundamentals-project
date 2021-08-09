$(document).ready(function(){
    console.log("script loaded");
    var usersData=$("#user-data");
    var input=$("#inp-search")
    var url="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";
    var nav=$("#navbar a");
    $(nav).click(function(){
      $(this).addClass("topbar-active");
    })
      
    //code try ends
   
   function renderTableData(data){
    // <tr class="order-row">
    //     <td class="order-data">id</td>
    //     <td class="order-data">customer</td>
    //     <td class="order-data">date</td>
    //     <td class="order-data">amount</td>
    //     <td class="order-data">status</td>
    //     <td class="order-data">status</td>
    // </tr>

    var row=$("<tr>").addClass("order-row");
    
    row.append($("<td>").addClass("order-data").html(data.id));
    var img=$("<img>").attr("src",data.profilePic);
    row.append($("<td>").addClass("order-data").append(img));
    row.append($("<td>").addClass("order-data").html(data.fullName));
    row.append($("<td>").addClass("order-data").html(data.dob));
    row.append($("<td>").addClass("order-data").html(data.gender));
    row.append($("<td>").addClass("order-data").html(data.currentCity+","+data.currentCountry));
    return row;
   }
    
    
    
    $.get(url,function(data){
         for(var i=0;i<data.length;i++){
            usersData.append(renderTableData(data[i])) ;
         }

      
    });
    // api call ends here

  
   
    $(input).keypress((e) => {
        if (e.which === 13) {
            e.preventDefault();
            url="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";
            if(input.val().length>=2){
                $(input).submit();
                console.log(input.val().length)
                // alert('Form submitted successfully.')
                // var filter=input.val().toUpperCase();
                 url="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName="+input.val();
                 console.log(url)
                 $.get(url,function(data){
                     usersData.empty();
                    for(var i=0;i<data.length;i++){
                       usersData.append(renderTableData(data[i])) ;
                    }                 
               });
                
            }
            else{
                $.get(url,function(data){
                    usersData.empty();
                    for(var i=0;i<data.length;i++){
                       usersData.append(renderTableData(data[i])) ;
                    }
           
                 
               });
                alert("Please enter at least 2 characters")
            }
            
        }
    })

    // search function ends here
    
})