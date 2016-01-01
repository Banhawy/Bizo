
document.getElementById('invite-friends').addEventListener('submit', addFriends);

function addFriends(event) {

  event.preventDefault();

  console.log('Function working.')
  //Getting the values from the Email and Amount fields
  var email = document.getElementById('emailinput').value,
      amount = document.getElementById('amountinput').value;

      console.log(email);
      console.log(amount);

      //Adding the Emails and Amounts to the table
      var table = document.getElementById('myTable');

      //Adding a new row
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);

      //Inserting info into row cells
      cell1.innerHTML = email;
      cell2.innerHTML = amount;

      var tableBody = document.getElementById('myTable').getElementsByTagName('td').value;
      console.log(tableBody);
};