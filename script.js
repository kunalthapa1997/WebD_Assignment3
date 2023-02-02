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
    Advisor:<br /><br />
    Award Details<br />
    Summer 1-2014(TA)<br />
    Budget Number: <br />
    Tuition Number: <br />
    Comments:<br /><br /><br />
    Award Status:<br /><br /><br />
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

        //change row color on click of checkbox
        if(checkBox.checked){
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
                counter--;
                alert("Record Deleted Successfully");
            });

            row.children[8].appendChild(deleteButton);

            //add edit button
            let editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            editButton.addEventListener("click", function() {
                alert("Edit the details");
            });
            row.children[9].appendChild(editButton);

        } else {
            row.style.backgroundColor = "white";
            row.removeChild(row.lastChild);
            row.removeChild(row.lastChild);
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
        event.src = "up.jpeg"
    }
};