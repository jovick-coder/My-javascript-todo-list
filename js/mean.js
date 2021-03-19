//var userInput  = document.getElementById( "userinput" ).value;
//if( userinput  == "" ){
//alert( "stop oo input something" )
//.setAttribute("disable");
//}
var todoBtn;
var btnId  = [ ];



function ActionAdd() {
//alert("i am javascript");

var userinput  = document.forms["todoForm"]["userInput"].value;

if( userinput  == "" ){
//alert( "stop oo input something" )
}else {

var ListSection  = document.getElementById( "show");

//ListSection.innerHTML = userinput;

var todoDiv = document.createElement("div");
var todoInput = document.createTextNode(userinput);
todoDiv.appendChild(todoInput);
ListSection.appendChild(todoDiv );
todoDiv.setAttribute("class","tododiv");
todoDiv.setAttribute("id","tododiv");


todoBtn = document.createElement("input");
todoBtn.setAttribute("type","button");
todoBtn.setAttribute("class","btn btn-outline-primary js-btn");
todoBtn.setAttribute("value","Complete");
todoDiv.appendChild(todoBtn);
ListSection.appendChild(todoDiv);
//todoBtn.addEventListener("click", complete() );
todoBtn.addEventListener("click", complete);
todoBtn.id = "btn-"+Math.floor(Math.random()*9);

 
btnId.push(todoBtn)
document.getElementById( "count"). innerHTML =  btnId.length;
}

//todoBtn.onclick = complete();
}


var complete  =  function complete(){
//alert( "You have completed this task "  + todoInput );

var parent = document.getElementById("show");
var child = document.getElementById("tododiv");
parent.removeChild(child);


/* do{
document.getElementById( "count"). innerHTML =  btnId.length -1;
}while(btnId.length > 0  );*/
//document.getElementById( "count"). innerHTML =  btnId.length;
 	//todoDiv.remove();
}

// Get the parent to attatch the element into var parent = document.getElementsByTagName("ul")[0]; 
// Create element with random id var element = document.createElement("li"); element.id = "li-"+Math.floor(Math.random()*9999);
 //Add event listener element.addEventListener("click", EVENT_FN); 
 // Add to parent parent.appendChild(element);


/*
function complete(){
	
	//todoDiv.remove();
}
*/
	//.remove()
//document.createElement("p")
//var person = "JavaScript"
/*
//document.getElementById(id).style.property = new style
//document.getElementById("show").innerHTML = person;

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
</script>

*/