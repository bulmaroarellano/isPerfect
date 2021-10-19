 
function isNumberPerfect()
			{
				divResult = document.getElementById("result");
              let number = Number(document.getElementById('number').value);
if(number && number>=1){ 
	                let remainder =0;
                let sum = 0;
                let i;
  				for(i = 0; i < number; i++)
				{
					remainder = number%i;
					remainder==0?sum+=i:sum;
				 
				}
				return sum==number?(divResult.innerHTML = "<div class='alert alert-primary' role='alert'>Yes!! Is a numer perfect!</div>"):(divResult.innerHTML = '<div class="alert alert-warning" role="alert"> Hey! No, is not a perfect number!</div>');
				
			}
		else {return divResult.innerHTML = '<div class="alert alert-warning" role="alert"> Hey! Give me a valid number > 0</div>';}
			}