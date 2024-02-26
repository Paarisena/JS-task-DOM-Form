let row = 1
const form = document.querySelector(".form-field");
console.log(form);
form.addEventListener("submit",(e) => {
    e.preventDefault();
let firstname = document.getElementById("first-name").value;
let lastname = document.getElementById("last-name").value;
let address = document.getElementById("address").value
let Pincode = document.getElementById("pincode").value
var gender = document.querySelector(`input[name="gender"]:checked`).value;
let State = document.getElementById("State").value
let Country = document.getElementById("Country").value
let table = document.getElementById("table-class");
let foodlist=[]
let list = document.getElementsByName("flist")
for(let i=0;i<list.length;i++){
    if(list[i].checked){
        foodlist.push(list[i].value)
    }
}
if(foodlist.length<2){
    alert("please select any two items")
    return
}

if(!firstname ||!lastname ||!address ||!Pincode ||!gender ||!foodlist ||!State ||!Country){
    alert("Please enter all required details")
    return
}

let row = table.insertRow();
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2)
let cell4 = row.insertCell(3)
let cell5 = row.insertCell(4)
let cell6 = row.insertCell(5)
let cell7 = row.insertCell(6)
let cell8 = row.insertCell(7)
cell1.innerText = firstname;
cell2.innerText = lastname;
cell3.innerText = address
cell4.innerText = Pincode
cell5.innerText = gender
cell6.innerText = foodlist
cell7.innerText = State
cell8.innerText = Country
row++;

form.reset()
})