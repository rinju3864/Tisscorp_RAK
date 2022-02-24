/*function showMessage() {
    alert("Hello friends, this is not message.");
    document.getElementById('mcLbl').innerHTML="hi";
}*/
function showMessage() {
    //alert("Hello friends, this is not message.");
    
    
    var phone = $('#mc-phone').val();
    var phoneno = /^\d{10}$/;
  if((phone.match(phoneno)))
{
    $.ajax({
        url: "save.php",
        type: "POST",
        data: {
            phone: phone,
            
        },
        cache: false,
        success: function(dataResult){
            document.getElementById('mcLbl').innerHTML="Saved";
               alert("Saved..! We will call you..!")
            var dataResult = JSON.parse(dataResult);
            if(dataResult.statusCode==200){
                document.getElementById('mcLbl').innerHTML="success";
            }
            else if(dataResult.statusCode==201){
                
                alert("Error occured !");
                alert("we will not call you");
            }
            
        }
    });
}
else
{
document.getElementById('mcLbl').innerHTML="Try Again";
    alert("Please enter 10 digit Phone Number!");}
    };