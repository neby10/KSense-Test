
function addData(json, userNum) {
    var myUsers = document.getElementById("user" + userNum.toString());
    for (let i = 0; i <= json.length; i++) {
        
        
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerHTML = "Name: " + json[i].userId.toString();
        td2.innerHTML = "Post Id: " + json[i].id.toString();
        td3.innerHTML = "Title: " + json[i].title;
        td4.innerHTML = "Body: " + json[i].body;

        myUsers.appendChild(td1);
        myUsers.appendChild(td2);
        myUsers.appendChild(td3);
        myUsers.appendChild(td4);

    }
}

function removeData(userNum) {
    var myUsers = document.getElementById("user" + userNum.toString());
    myUsers.removeChild();
    // for (let i = 0; i <= json.length; i++) {
        
        
    //     var td1 = document.createElement("td");
    //     var td2 = document.createElement("td");
    //     var td3 = document.createElement("td");
    //     var td4 = document.createElement("td");

    //     td1.innerHTML = "Name: " + json[i].userId.toString();
    //     td2.innerHTML = "Post Id: " + json[i].id.toString();
    //     td3.innerHTML = "Title: " + json[i].title;
    //     td4.innerHTML = "Body: " + json[i].body;

    //     myUsers.appendChild(td1);
    //     myUsers.appendChild(td2);
    //     myUsers.appendChild(td3);
    //     myUsers.appendChild(td4);

    // }
}



// fetch('https://jsonplaceholder.typicode.com/users/1/posts')
// .then((response) => response.json())
// .then((json) => {
//     console.log(json);
//     addData(json, 1);
// })
// .catch((err) => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/users/2/posts')
// .then((response) => response.json())
// .then((json) => {
//     console.log(json);
//     addData(json, 2);
// })
// .catch((err) => console.log(err));

// for (let i = 1; i <= 10; i++) {
//     fetch('https://jsonplaceholder.typicode.com/users/' + i.toString() + '/posts')
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//         addData(json, i);
//     })
//     .catch((err) => console.log(err));
// }

let select = document.getElementById("select");

let submit = document.getElementById("submit-btn");
let clear = document.getElementById("clear-btn");

submit.addEventListener("click", () => {
    console.log(select.value);
    fetch('https://jsonplaceholder.typicode.com/users/' + select.value.toString() + '/posts')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        addData(json, select.value);
    })
    .catch((err) => console.log(err));
});

clear.addEventListener("click", () => {
    removeData(select.value);
});