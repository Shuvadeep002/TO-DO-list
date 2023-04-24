
var add_value = () => {
    const input = document.getElementById('input1');
    // const unorder_list= document.getElementsByClassName('task_list');
    // console.log(unorder_list.length);
    if (input.value == '') {
        window.alert("Enter something");
    }
    else {
        //create individual list
        let list = document.getElementById("task_list");
        let li = document.createElement("li");
        
        //create delete button
        let delete_btn = document.createElement("button");
        delete_btn.innerHTML = "&#x1f5d1"
        delete_btn.classList.add('delete_button');

        //create edit button
        let edit_btn = document.createElement("button");
        edit_btn.innerHTML="Incomplete";
        edit_btn.classList.add('edit_btn');

        li.innerHTML = input.value
        list.appendChild(li);
        li.appendChild(delete_btn);
        li.appendChild(edit_btn);
        // if(li.innerText.length>=10){
        //     li.style.height="80px"
        // }

        //function to checked task
        edit_btn.addEventListener('click', function () {
            if(edit_btn.innerText=="Incomplete"){
                if (confirm("Did you complete the task ?")) {
                    li.style.textDecoration = "line-through";
                    li.style.backgroundColor = "#D21312";
                    edit_btn.innerHTML="Complete";
                    edit_btn.style.backgroundColor="#FFD93D"
                }
            }
            else if(edit_btn.innerText=="Complete"){
                if (confirm("Did you want to change the task's status as incomplete ?")){
                    li.style.textDecoration = "none";
                    li.style.backgroundColor = "#8F43EE";
                    edit_btn.innerHTML="Incomplete";
                    edit_btn.style.backgroundColor="#E8A0BF"
                }
            }

            
            
        });
        // function to delete list
        delete_btn.addEventListener('click', function () {
            if (confirm("Are you sure you want to delete the task ?")) {
                list.removeChild(li);
            }
            else{
                return;
            }
            
        })
    }
    input.value = "";
}

function clear_list() {
    document.getElementById("task_list").innerHTML = "";
}
