// function Title(t1) 
// { this.mytitle = t1;
// }

// Title.prototype.getName = function () 
// { 
// return (this.mytitle);
// }

// var socialMedia = {
//   facebook : 'http://facebook.com',
//   twitter: 'http://twitter.com',
//   flickr: 'http://flickr.com',
//   youtube: 'http://youtube.com'
// };

// var t = new Title("CONNECT WITH ME!");

let counter = 3;
let submitButtonCounter = 0;

document.getElementById("submit-button").style.backgroundColor ="gray";
document.getElementById("submit-button").style.pointerEvents ="none";

// add new students on click of add new button

document.getElementById("addRow-button").addEventListener("click", function() {
    counter++;

    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td><input type="checkbox"/><br /><br /><img src="down.png" width="25px" onclick="expandRowInfo(this);"/></td>
    <td>Student ${counter}</td>
    <td>Teacher ${counter}</td>
	<td>Approved</td>
	<td>Fall</td>
	<td>TA</td>
	<td>23456</td>
	<td>100%</td>
    `;

    document.getElementById("table-rows").appendChild(newRow);

    let expandedRow = document.createElement("tr");
    expandedRow.innerHTML = `
    <td colspan="8">
    Advisor:<br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: <br />
    Tuition Number: <br />
    Comments:<br /><br /><br />
    Award Status:<br /><br /><br />
    </td>
    `;

    document.getElementById("table-rows").appendChild(expandedRow);
    expandedRow.style.display = "none";
    alert("New Record added Successfully");
});

// checkbox click operation

document.getElementById("myTable").addEventListener("click", function(event) {

    let checkBox = event.target;

    if(checkBox.tagName === "INPUT" && checkBox.type === "checkbox") {

        let row = checkBox.parentNode.parentNode;
        let expandedRow = checkBox.parentNode.parentNode.nextElementSibling;

        //change row color on click of checkbox
        if(checkBox.checked){
            submitButtonCounter++;


            document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("columnHide");
            document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("columnHide");
            
            const td1 = document.createElement('td');
            row.appendChild(td1);

            const td2 = document.createElement('td');
            row.appendChild(td2);
            row.style.backgroundColor = "yellow";

            // enable submit button
            document.getElementById("submit-button").style.backgroundColor = "orange";
            document.getElementById("submit-button").style.pointerEvents = "auto";

            //add delete button
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.addEventListener("click", function(){
                row.remove();
                expandedRow.remove();
                counter--;
                submitButtonCounter--;
                if(counter === 0 || submitButtonCounter === 0) {
                    document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
                    document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
                }
                alert("Record of Student Deleted Successfully");
            });

            row.children[8].appendChild(deleteButton);

            //add edit button
            let editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            editButton.addEventListener("click", function() {
                prompt("Edit the details:");
            });
            row.children[9].appendChild(editButton);

        } else {
            submitButtonCounter--;
            row.style.backgroundColor = "white";

            row.removeChild(row.lastChild);
            row.removeChild(row.lastChild);

            if(submitButtonCounter === 0) {

                document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
                document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");

                document.getElementById("submit-button").style.backgroundColor = "gray";
                document.getElementById("submit-button").style.pointerEvents ="none";
            }
        }
    }
});

// expand and collapse feature on click on image

function expandRowInfo(event) {
    console.log(event);
    var row = event.parentNode.parentNode.nextElementSibling;
    if(row.style.display === "table-row") {
        row.style.display = "none";
        event.src = "down.png";
    } else{
        row.style.display = "table-row";
        event.src = "up.jpg"
    }
};