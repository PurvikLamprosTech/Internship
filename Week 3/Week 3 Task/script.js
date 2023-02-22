// let arr = [];
function data2() {
  fetch('https://dummyjson.com/users')
    .then((result) => {
      return result.json();
    })
    .then((dataT) => {
      // arr = dataT;
      console.log('data', dataT.users);
      let tableData = "";
      try {
        // arr = arr.users;
        dataT.users.map((values, index) => {
          // console.log(values);
          // console.log(index)
          tableData += `<tr> 
          <td>${values.id}</td>
          <td id="fn[${index}]">${values.firstName}</td>
          <td id="ln[${index}]">${values.lastName}</td>
          <td>${values.email}</td>
          <td>${values.age}</td>
          <td><img src="${values.image}" style="width:50px;height:50px;border-radius:50%" alt=""></td>
          <td>${values.username}$</td>
          <td>${values.password}$</td>
          <td><img src="pen.svg" onClick="onUpdate(this)" style="cursor:pointer;" data-bs-toggle="modal" data-bs-target="#myModal"></img></td>
          <td><img src="trash3.svg" onClick="onDelete(this)" style="cursor:pointer;"></img></td>
          </tr>`;
        });
      } catch (error) {
        console.log('Error:', error);
        console.log('Response:', dataT);
      }
      document.querySelector("#t-body").innerHTML = tableData;
    });

}


function onUpdate(updBtn) {
  let x = document.getElementById("myModal");
  if (x.style.display = "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
  let row = updBtn.parentNode.parentNode;
  let id = row.cells[0].innerHTML;
  let firstname = row.cells[1].innerHTML;
  let lastname = row.cells[2].innerHTML;

  document.getElementById('fname').value = firstname;
  document.getElementById('lname').value = lastname;
  document.getElementById('id').value = id;

  // console.log(row);
  // console.log(id);
  // console.log(firstname)
  // console.log(lastname)


  let sb = document.getElementById("submitBtn");
  sb.onclick = () => {
    const fm = document.getElementById("formData");
    // let uid = fm.elements[0].value;
    // alert(uid)

    let updatedFirstName = document.getElementById('fname').value;
    let updatedLastName = document.getElementById('lname').value;
    console.log(updatedFirstName);


    fetch('https://dummyjson.com/users/'+fm.elements[0].value, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: updatedFirstName,
        lastName: updatedLastName
      })
    })
      .then(res => res.json())
      .then(console.log);



    // console.log(document.getElementById(`fn[${uid}]`));
  }
}
function onDelete(dltBtn) {
  let row = dltBtn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  console.log(row)
}

data2();















//  function fetchData() {
//   try {
//     const response = fetch('https://dummyjson.com/users');
//     const dataT = response.json();

//     console.log('data', dataT.users);

//     let tableData = "";

//     dataT.users.map((values) => {
//       tableData += `<tr>
//         <td>${values.firstName}</td>
//         <td>${values.lastName}</td>
//         <td>${values.email}</td>
//         <td>${values.age}</td>
//         <td><img src="${values.image}" style="width:50px;height:50px;border-radius:50%" alt=""></td>
//         <td>${values.username}$</td>
//         <td>${values.password}$</td>
//         <td><a href=""><img src="pen.svg"> </img></a></td>
//         <td><input type="button" onClick="delete_row(this)">Delete</input></td>
//         </tr>`;
//     });
// // {/* <img id="selectedItemId" src="trash3.svg" onClick="onDelete(this)"></img> */}
//     document.getElementById("t-body").innerHTML = tableData;

//   } catch (error) {
//     console.log('Error:', error);
//   }


//   function delete_row(item){
//       let row = item.parentNode.parentNode;

//       console.log(row);
//      }

//       // document.querySelector("#selectedItemId").addEventListener("click", onDelete = async (item) => {
//       //   console.log(item)
//       //     await fetch(`https://dummyjson.com/users/${item}`, {
//       //       method: "DELETE",
//       //       headers: {'Content-Type': 'application/json; charset=UTF-8' }
//       //     })
//       //     .then((res2) => res2.json())
//       //     .then((data) => console.log(data));

//       //   });
// }

// fetchData();