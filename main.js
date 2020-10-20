var row1 = [0, 0, 0]
var row2 = [0, 0, 0]
var row3 = [0, 0, 0]

var check = 0;
var flag = 0


function handleClick(btnId)
{   
	var winner = document.getElementById('winner')
	
	if(row1[btnId-1] === 0 || row2[btnId-4] === 0 || row3[btnId-7] === 0)
	{
		check = (check+1)%2;
	}
	
	var button = document.getElementById(btnId)
	if(row1[btnId-1] === 0 || row2[btnId-4] === 0 || row3[btnId-7] === 0)
    {
    	if(check === 0)
    	{
			button.innerText = "O"
			winner.innerHTML = "X's Turn"
    	}
    	else
        {
			button.innerText = "X"
			winner.innerHTML = "O's Turn"
        }
    	
    }
	if(btnId === 1 || btnId === 2 || btnId === 3)
	{
		if(check === 0)
		{
		    row1[btnId-1] = 1
	    }
	    else
	    {
	    	row1[btnId-1] = 2
	    }
	}
	else if(btnId === 4 || btnId === 5 || btnId === 6)
	{
		if(check === 0)
		{
		    row2[btnId-4] = 1
	    }
	    else
	    {
	    	row2[btnId-4] = 2
	    }    
	}
	else
	{
		if(check === 0)
		{
		    row3[btnId-7] = 1
	    }
	    else
	    {
	    	row3[btnId-7] = 2
	    }
	}
	console.log(row1)
	console.log(row2)
	console.log(row3)
console.log("......................")


	
	if(row1[0] === 1 && row1[1] === 1 && row1[2] === 1 || 
		row2[0] === 1 && row2[1] === 1 && row2[2] === 1 || 
		row3[0] === 1 && row3[1] === 1 && row3[2] === 1 || 
		row1[0] === 1 && row2[0] === 1 && row3[0] === 1 || 
		row1[1] === 1 && row2[1] === 1 && row3[1] === 1 || 
		row1[2] === 1 && row2[2] === 1 && row3[2] === 1 ||
		row1[0] === 1 && row2[1] === 1 && row3[2] === 1 ||
		row1[2] === 1 && row2[1] === 1 && row3[0] === 1)
	{   
		if(flag === 0)
		{
		winner.innerHTML = "Winner is player 2";
		}
		
		flag = 1
	}
	else if(row1[0] === 2 && row1[1] === 2 && row1[2] === 2 || 
		row2[0] === 2 && row2[1] === 2 && row2[2] === 2 || 
		row3[0] === 2 && row3[1] === 2 && row3[2] === 2 || 
		row1[0] === 2 && row2[0] === 2 && row3[0] === 2 || 
		row1[1] === 2 && row2[1] === 2 && row3[1] === 2 || 
		row1[2] === 2 && row2[2] === 2 && row3[2] === 2 ||
		row1[0] === 2 && row2[1] === 2 && row3[2] === 2 ||
		row1[2] === 2 && row2[1] === 2 && row3[0] === 2)
	{
		if(flag === 0)
		{
		winner.innerHTML = "Winner is player 1";
        }
        flag = 1
	}
	
}

