
function signUPform() {
	var username = document.getElementById('name').value;
	var firstPass = document.getElementById('password').value;
	var confirmPassw = document.getElementById('confirmPassw').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('ph_no').value;
	var ph = phone.search("[789][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]");
	var eml = email.search("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$");
	if(document.getElementById('name').value != "" || document.getElementById('ph_no').value != "" || document.getElementById('email').value != "" || document.getElementById('password').value != "" || document.getElementById('confirmPassw').value != "")
	{
		 if((confirmPassw.length > 8) && (firstPass.length > 8))
		 {
			if((confirmPassw == firstPass ))
			{
				if (username.length!=0 )
				{
					if(email.length==0 && eml==-1)
					{
						document.getElementById('email-error').style.fontsize= "25px";
						document.getElementById('email').style.border = "2px solid #FE5756";
						document.getElementById('email-error').innerHTML="email should be in propetr format";
						document.getElementById('email-error').style.color=" #FE5756";

					}
					else
					{
						if(ph==-1 && phone.length==10)
						{
							document.getElementById('ph_no-error').style.fontsize= "25px";
							document.getElementById('ph_no').style.border = "2px solid #FE5756";
							document.getElementById('ph_no-error').innerHTML="enter in proper format";
							document.getElementById('ph_no-error').style.color=" #FE5756";
						}
						else
						{
							alert("Sign Up Succesfully");
							window.location = "success.html";
						}
					}
			    } 
				else
				{	
					document.getElementById('name').style.border = "2px solid #822A33";
					document.getElementById('name-error').innerHTML="Username Cannot Be Empty";
					document.getElementById('name-error').style.color= "#FE5756";
					document.getElementById('name-error').style.fontsize= "25px";
				}
			} 
			else
			{		document.getElementById('password').style.border = "2px solid #FE5756";
					document.getElementById('passw-error').innerHTML="rewrite password not matching";
					document.getElementById('passw-error').style.color= "#FE5756";
					document.getElementById('passw-error').style.fontsize= "25px";
					
			}
		}
		 else 
		 {
		 	document.getElementById('passw-error').innerHTML="password length must be more than 8";
		 	document.getElementById('passw-error').style.color= "#FE5756";
		 	document.getElementById('passw-error').style.fontsize= "25px";
		 }
	}
	else
	{
		document.getElementById('field-error').innerHTML="fields cannot be empty,please fill all fields";
		document.getElementById('field-error').style.color= "#FE5756";
	}
}
    //pop-up form styling//
$(document).ready(function(){
	$('#signup').click(function(){
		$('#sign_up').fadeIn();
		$('body').css('overflow','hidden');
	});

	$('#close').click(function(){
		$('#sign_up').hide();
		$('body').css('overflow','');
	});
});
// sign up end
 

 //login starts
function loginvalid() 
	{
	var username = document.forms["myform"]["username"].value;
	var pwd = document.forms["myform"]["pwd"].value;
		if(username=="" && (pwd=="" || pwd==null))
		{
			alert("both field canot be empty");
		}
		else
		{
			if (username=="animesh") 
			{
				if (pwd=="animesh04") 
				{
					alert("login succesfully");
					window.location="success.html";
				}
				else
				{
					alert("password do not match");
				}
			}
			else
			{
				alert("user does not exist");
			}
		}
	}


$(document).ready(function(){
	$('#login').click(function(){
		$('#log').fadeIn();
		$('body').css('overflow','hidden');
	});

	$('#close1').click(function(){
		$('#log').hide();
		$('body').css('overflow','');
	});
});


//  Function To Display Popup
//  function div_show() {
//  document.getElementById('abc').style.display = "block";
//  }
// Function to Hide Popup
//  function div_hide(){
//  document.getElementById('abc').style.display = "none";
//  }


