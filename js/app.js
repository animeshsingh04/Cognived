//angular.module("myApp",[]);
function fileReader(){
	debugger;
  			$.get('data.txt',function(txt)
  			{
  				$("#output").text(txt);
  			});
  		}