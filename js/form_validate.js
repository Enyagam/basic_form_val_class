// function to validate input

function validateData() {
    // get the input values

    let user_name = document.getElementById('user_name').value;
    let phone_number = document.getElementById('phone_number').value;
    let user_email = document.getElementById('user_email').value;


    // perform data validation



    // print out result
    var message = "User name is: " + user_name + " \nPhone number is: " + phone_number + " \nUser email is: " + user_email
    alert(message);
}