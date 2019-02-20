function getdata(file,callback){
    var xhr=new XMLHttpRequest()
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
    	if(xhr.readyState === 4 && xhr.status=="200"){
             callback(xhr.responseText);
        }    
    };
    xhr.send(null);   
}
getdata("dynamic.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    personalinfo(data.Profile);
    career(data.career);
    education(data.education);
})

// //leftdiv
var left=document.querySelector(".leftdiv")
function personalinfo(pi){

var image=document.createElement("img");
    // image.src="family.png" 
    image.src=pi.img;
    left.appendChild(image);
    var name=document.createElement("h1")
    name.textContent=pi.name;  
    left.appendChild(name)
    var roll=document.createElement("h4")
    roll.textContent=pi.roll;
    left.appendChild(roll)
    var hr=document.createElement(hr)
    left.appendChild(hr)
    var place=document.createElement("p");
    place.textContent=pi.place;
    left.appendChild(place);
    var email=document.createElement("p");
    email.textContent=pi.email;
    left.appendChild(email);
}
// rightdiv
var right=document.querySelector(".rightdiv")
  // careerobjective
  function career(ca){

  	var heading=document.createElement("h1");
        heading.textContent="Career Objective";
        right.appendChild(heading);

    var hr=document.createElement("hr");
        right.appendChild(hr);

    var career=document.createElement("p");
        career.textContent=ca.info;
        right.appendChild(career); 

  }
  // education details
    function education(edu){
    	var heading=document.createElement("h1");
    	    heading.textContent="Education Details";
    	    right.appendChild(heading);
        var hr=document.createElement("hr");
            right.appendChild(hr);
        var table=document.createElement("table");
            table.border="2";
        var tr1="<tr><th>degree</th><th>institution</th><th>per</th><th>year</th></tr>";
        var tr2="";
        for (var i=0;i<edu.length;i++){
             tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].per+"</td><td>"+edu[i].year+"</td></tr>";
        }
         table.innerHTML=tr1+tr2;
         right.appendChild(table);

    }
