// ************* String ******************
// in a string it counts yung number of characters
// in array it counts the number of items inside the array 
let sampleString = "Juan Dela Cruz";
let sampleArray = ["Rogie", "Jay", "Bryan"];
let sampleArrayNumbers = [1, 12, 15, 18, 20];

// alert(sampleArray.length);

// toLowerCase turns the string Lowercase
// alert(sampleString.toLowerCase());

// toUpperCase turns the string Capitalized words
// alert(sampleString.toUpperCase());

// .replace helps you replace the selected part of the string
// alert(sampleString.replace('Juan', 'Rogie'));

// extracts a part of your string two parameters (start, end)
// alert(sampleString.slice(0, 6));

// extracts a part of your string flexible from (end, start) or (start, end)
// alert(sampleString.substring(0, 4));

// *********** Array Method **************
// checks if each item in the array satisfies the given condition
// let checkNumbers = (num) => {
//     return num < 21;
// };
// alert(sampleArrayNumbers.every(checkNumbers));

// .fill change the item in the array 
// alert(sampleArray.fill('JEFFREY ', 0, 2));

// Normal Mode - .filter is to filter which under item in the < 15
// let checkNumbers = (num) => {
//     return num < 15;
// };
// alert(sampleArrayNumbers.filter(checkNumbers));

// Complicated Mode - .filter
// alert(sampleArrayNumbers.filter(
//         (num) => {
//             return num < 15;
//         }
//     )
// );

// Normal Mode - .find is to find the first value which item in the < 15
// let checkNumbers = (num) => {
//     return num < 15;
// };
// alert(sampleArrayNumbers.find(checkNumbers));

// Complicated Mode - .find
// alert(sampleArrayNumbers.find(
//         (num) => {
//             return num < 15;
//         }
//     )
// );

// Normal .forEach
let animal =['dog', 'cat', 'dinosaur', 'platypus'];

// let showAnimals = (name, number) => {
//     alert(`${number} ${name}`);
// };
// animal.forEach(showAnimals);

// Complicated .forEach
// animal.forEach(
//     (name, number) => {
//         alert(`${number} ${name}`);
//     }
// );

// .push allows to add item in array
animal.push("Kangaroo");
animal.push("Godzilla");


// .pop allows to remove last item in array
animal.pop();
animal.pop();
// alert(animal);

// variable "todo" assigned items
// let todo = ["Sleep", "Jogging", "Shop", "Eat", "Code", "Magbreak"];

// Transform back to array used getItem if you create a data "see on website for sample"
// let todo = localStorage.getItem("todo").split(","); 

// if the localstorage delete the value in the application localstorage.
let todo = [];

if(localStorage.getItem("todo")){
    todo = localStorage.getItem("todo").split(",");
}

let container = document.querySelector("#todo-list");

const removeItem = (xIndex) => {
    let xValue = xIndex;
    let catcher = [xValue];
    todo.splice(catcher,1);
    localStorage.setItem("todo", todo);
    showList();
}

// todo.forEach(
//     (task) => {
//         container.innerHTML += `<li>${task}</li>`;
//     }
// );

const showList = () => {
    let z = 0;
    let x = 0;
    container.innerHTML = "";
    todo.forEach(
        (task) => {
            container.innerHTML += `<li id="removeBtn${z++}"><i>${task}</i></li><button style = "height:20px; padding: 1px; font-size:10px;"; onclick="removeItem(${x++})">remove</button>`;
        }
    );
};

// Add a value in array
const addTodo = () => {
    let newItem = document.querySelector("#create-todo").value;
    todo.push(newItem);
   

    // alert(todo);

    // option 1 this code add item in array 
    // container.innerHTML += `<li>${newItem}</li>`;

    // option 2 this code add items in array
    // container.innerHTML = "";
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    showList();
    localStorage.setItem("todo", todo);
};
const removeTodo = () => {
    todo.pop();
    // container.innerHTML = "";
    // todo.forEach(
    //     (task) => {
    //         container.innerHTML += `<li>${task}</li>`;
    //     }
    // );
    showList();
    localStorage.setItem("todo", todo);
};



// Add item in localstorage
// localStorage.setItem("Name", "Sample name");

// let data = localStorage.getItem("Name");
// alert(data);


// document.getElementById("search-item").addEventListener("keyup", function(){
//     let item = this.value.toLowerCase();
//     let searchTodo = todo.filter(task => task.toLowerCase().includes(item));

//     if(this.value === ""){
//         showList();
//     }else{
//         if(searchTodo.length === 0){
//             container.innerHTML = "";
//         }else{
//             container.innerHTML = "";
//             searchTodo.forEach(task => {
//                 container.innerHTML += `<li>${task}</li>`;
//             });
//         }
//     }
// });    

const filterSearch = () => {
    container.innerHTML = "";
    const searchString = document.querySelector("#search-item").value;
    const filterSearch = todo.filter(value => {
        return value.includes(searchString);
    });
    if (filterSearch.length > 0){
        for(let index = 0; index < filterSearch.length; index++){
            container.innerHTML += `<li>${filterSearch[index]}</li>`;
        }
    }
    else {
        container.innerHTML = `<h5>Item Not Found</h5>`;
    }
    if(filterSearch.length === todo.length){
        container.innerHTML = `<li>${filterSearch[index]}</li>`;
    }
};

showList();