
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

      //Looping over the rows to sum up the value of contributions
      var count = 0;
      var cells = document.querySelectorAll("td + td");
      for (var i = 0; i < cells.length; i++) {
        count += parseFloat(cells[i].firstChild.data);
        };

      console.log(count);

      //Updating the 'Amount Requested' field
      document.getElementById('amountRequested').value = count;
};