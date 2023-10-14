
// ======CREATING FORM WITH VALIDATION USING DOM======= 

// ==========Heading=========
var heading = document.createElement("h1");
var headingcontent = document.createTextNode("Form Practice")
heading.appendChild(headingcontent);




// =========Label=========
var label = document.createElement("label");
var input = document.createTextNode("Name : ");
label.appendChild(input)
// console.log(label);


// =========INPUT=========
var inputfield = document.createElement("input");
inputfield.style.display = "flex"
inputfield.setAttribute("id" , "userinput")
inputfield.setAttribute("type" , "text");
label.appendChild(inputfield);


// =========Father Name========
var label2 = document.createElement("label");
label2.style.display = "flex"
var input2 = document.createTextNode(" Father name : ");
label2.appendChild(input2);
// console.log(label2)

// ======Father name input========
var inputfield2 = document.createElement("input");
inputfield2.setAttribute("id" , "userinput2")
inputfield2.setAttribute("type", "text");


// ======Contact=====
var contact = document.createElement("label");
contact.style.display = "flex";
var text = document.createTextNode("Contact number :");
contact.appendChild(text);

// ====Contact input=====
var inputfield3 = document.createElement("input");
inputfield3.setAttribute("id" ,"userinput3")
inputfield3.setAttribute("type" , "number");



// =======Button========
var button = document.createElement("button");
button.setAttribute("onclick" , "userInputToConsole()");
button.style.display = "flex" 
button.style.marginTop ="10px"
var buttontext = document.createTextNode("Submit");
button.appendChild(buttontext);







var form = document.getElementById("main");

form.appendChild(heading)
form.appendChild(label);
form.appendChild(label2);
form.appendChild(inputfield2)
form.appendChild(contact)
form.appendChild(inputfield3);
form.appendChild(button);


// ========Function to show alert==========
function userInputToConsole()
{
    var userinput  = document.getElementById("userinput");
    var userinput2 = document.getElementById("userinput2");
    var userinput3 = document.getElementById("userinput3");
    
    if(userinput.value === "")
    {
        alert("Please Enter name");
    }
    else if(userinput2.value === "")
    {
        alert("Please Enter Fahter name");
    }
    
    else if(userinput3.value === "")
    {
        alert("Please Enter Contact number");
    }
    else{
        alert("Your Form is Submitted!")
    }
}
