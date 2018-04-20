	function SetCookie(c_name,value,expiredays)
	{
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +escape(value)+";path=/"+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	}
		
	$(document).scroll(function() { 
		if($(window).scrollTop() !== 0) {
			$("#cookieWarning").hide();
		}
		else {
			$("#cookieWarning").show();
		}
	});
	
	$(document).ready (function () 
	{
		if( document.cookie.indexOf("cookiebannerdismissed") ===-1 ){
				$("#cookieWarning").show();
				
				$("#removecookie").click(function () {
					SetCookie('cookiebannerdismissed','kde',365*10);
					$("#cookieWarning").remove();
				});
			} else
			{
				$("#cookieWarning").remove();
			}
			
	});
