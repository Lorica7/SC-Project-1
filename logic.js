const adder = document.getElementById("adder");
const deleter = document.getElementsByClassName("list-group-item-action");
const card = document.querySelector('.card');
const heading = document.querySelector('h3');

// Delete Individual Items
const onClickDel = (event) => {
    let tar = event.target;
    let parents = tar.parentNode;
    console.log(parents.parentNode);
    parents.parentNode.remove();
}

for (let i = 0; i < deleter.length; i++) {
    deleter[i].addEventListener('click', onClickDel);

}


const onClickAdd = (event) => {

    console.log(event);
    let val = document.getElementById("addNew").value

    if (val.length > 0) {
        let newTask = document.createElement('li');
        let newText = document.createTextNode(val);
        newTask.appendChild(newText);
        newTask.setAttribute('class', 'list-group-item');
        let unList = document.querySelector("ul.list-group");
        unList.appendChild(newTask);

        // Add the anchor tag

        let newA = document.createElement('a');
        newA.setAttribute('class', "list-group-item");
        newA.setAttribute('href', "#");
        newTask.appendChild(newA);

        //  add the  x icon
        let newI = document.createElement('i');
        newI.setAttribute('class', 'bi bi-check2-square');
        newA.appendChild(newI);

        // add Event Listener
        newI.addEventListener('click', onClickDel);

        //Clear Input Field
        document.getElementById("addNew").value = '';
    }
}
adder.addEventListener('click', onClickAdd);



// Clear List Button Functionality
const dButton = document.querySelector("#delButton");

const clearList = () => {
    const coll = document.getElementsByTagName("li");
    do {
        console.log(coll);
        let i = 0;
        coll[i].remove();
        i++;
    }
    while (coll.length > 0);
};

dButton.addEventListener('click', clearList);


//Style

document.querySelector('li:nth-child(odd)').style.background = '#e7dfdd';

function addBackColors() {
    document.body.style.backgroundColor = `rgb(71, 23, 246)`;
}

card.addEventListener('mouseover', addBackColors);


function removeColor() {
    document.body.style.backgroundColor = `rgb(231, 223, 221)`;
}
card.addEventListener('mouseout', removeColor);