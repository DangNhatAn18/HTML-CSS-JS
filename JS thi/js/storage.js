function submitData() {
    var nameTag = document.getElementById("fullname")
    localStorage.setItem("fullname", nameTag.value)

    var passTag = document.getElementById("password")
    localStorage.setItem("password", passTag.value)

    var emailTag = document.getElementById("Email")
    localStorage.setItem("Email", emailTag.value)

    var phoneTag = document.getElementById("phone")
    localStorage.setItem("phone", phoneTag.value)

    var addTag = document.getElementById("address")
    localStorage.setItem("address", addTag.value)
}
function showData(){
    fname = localStorage.getItem("fullname")
    p1 = localStorage.getItem("password")
    email = localStorage.getItem("Email")
    mobile = localStorage.getItem("phone")
    address = localStorage.getItem("address")
    document.getElementById("data").innerHTML +=
    `
        <tr>
            <td>${fname}</td>
            <td>${p1}</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${address}</td>
        </tr>
    `
}