// var countlist = document.querySelector("#addtasks");
// var tasks = document.querySelector("#todocontainer");
// var input = document.querySelector("#inputfield");

var countlist = document.getElementById('addtask');
var tasks = document.getElementById('todocontainer');
var input = document.getElementById('inputfield');




countlist.addEventListener("click" , ()=>
{
    var paragraph= document.createElement('p');
    paragraph.classList.add('paragraph-styling');   
    paragraph.innerText = inputfield.value; //input value is stored in paragraph
    todocontainer.appendChild(paragraph);

    paragraph.addEventListener("dblclick", ()=>{   // double click event
        todocontainer.removeChild(paragraph);
    })


    paragraph.addEventListener("click", ()=>{
        paragraph.style.textDecoration= 'line-through';
        paragraph.style.color= 'red';

    })

} )
