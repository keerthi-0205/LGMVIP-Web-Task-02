var add = document.getElementById('add-btn')
var t = document.getElementById('display')

var row = 1
add.onclick = function () {

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const age = document.getElementById('age').value
    const addr = document.getElementById('addr').value
    const img = document.createElement('img')

    if (name != '' && email != '' && age != '' && addr != '') {
        var values = []
        var selected_value = document.querySelectorAll('input[type="checkbox"]:checked')
        Array.from(selected_value).forEach(function (e) {
            values.push(e.value)
        })

        const description = `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Age:</strong> ${age}<br><strong>Address: </strong> ${addr}<br><strong>Gender:</strong> ${document.querySelector('input[type="radio"]:checked').value}
        <br><strong>Skills:</strong> ${values.join(', ')}</p>
        `
        var newRow = t.insertRow(row)

        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)

        if (document.querySelector('input[type="radio"]:checked').value == 'Male') {
            img.setAttribute('src', 'https://cdn1.vectorstock.com/i/1000x1000/53/45/profile-icon-male-emotion-avatar-man-cartoon-vector-15175345.jpg')
            img.setAttribute('alt', 'Male')
        }
        else {
            img.setAttribute('src', 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png')
            img.setAttribute('alt', 'Female')
        }

        cell1.innerHTML = description
        cell2.appendChild(img)

        row++
        document.getElementById('input-form').reset()
        name = email = age = ''
    }
    else {
        alert('Please fill all the fields')
    }
}

document.getElementById('delete-btn').onclick = function () {
    if (row != 1) {
        console.log(row)
        row--
        t.deleteRow(row)
    }
    else
        return
}