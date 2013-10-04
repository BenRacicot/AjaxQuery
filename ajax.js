function searchFunc(){
	var results = document.getElementById('results');
	// var field = document.getElementById("searchquery");
	var sr = document.getElementById("searchquery").value;

		results.innerHTML = ""; // clear results before adding new ones
// test change
	if (sr != ""){ 
		var params = "searchquery="+sr;

		var hr = new XMLHttpRequest();
		hr.onreadystatechange = function() {
			if(hr.readyState == 4 && hr.status == 200) {
				slideUp('anim');
				// var return_data = hr.responseText; 		   // non JSON
				var return_data = JSON.parse(hr.responseText); // Gets JSON [object Object]

				for(var obj in return_data){
					// returns objects to your HTML in common search engine format
					results.innerHTML += "<a href='http://"+return_data[obj].url+"'target=_blank><h3 id='title'>" +return_data[obj].title+ "</h3></a> <p id='url'>" +return_data[obj].url+"</p> <p>" +return_data[obj].descrip+"</p> <hr />";
					// field.placeholder += sr; 
				}
			}
		}
		hr.open("POST", "parser.php", true);
		hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		hr.send(params);
			results.value = "processing...";
	} else { 
		results.innerHTML = ""; // if nothing in input clear results
	}
}