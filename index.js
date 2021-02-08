// defining all element


let add = document.getElementById('add');

// adding eventListener

add.addEventListener('click',getAndupdate);

// declare function

function getAndupdate(){
    title = document.getElementById('title').value;
    desc = document.getElementById('desc').value;

    if(localStorage.getItem('ItemJson') == null){
        ItemJsonArray = [];
        ItemJsonArray.push([title,desc]);
        localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));
    }else{
        ItemJsonArraystr = localStorage.getItem('ItemJson');
        ItemJsonArray = JSON.parse(ItemJsonArraystr);
        ItemJsonArray.push([title,desc]);
        localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));
    }

    update();

    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
}

function update(){

    title = document.getElementById('title').value;
    desc = document.getElementById('desc').value;

    if(localStorage.getItem('ItemJson') == null){
        ItemJsonArray = [];
        localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));
    }else{
        ItemJsonArraystr = localStorage.getItem('ItemJson');
        ItemJsonArray = JSON.parse(ItemJsonArraystr);
    }

    // populate the table

    tableBody = document.getElementById('tableBody');

    str = '';

    ItemJsonArray.forEach((element,index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });

    tableBody.innerHTML = str;
}

function deleted(itemIndex){
    ItemJsonArraystr = localStorage.getItem('ItemJson');
    ItemJsonArray = JSON.parse(ItemJsonArraystr);

    ItemJsonArray.splice(itemIndex,1);

    localStorage.setItem('ItemJson',JSON.stringify(ItemJsonArray));
    update();
}


// storage clear

function clearList(){
    var flag = confirm("Are you sure ??");

    if(flag == true){
        localStorage.clear();
        update();
    }
}


