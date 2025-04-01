function regUser() {
    fname = $("#fname").val();
    lname = $("#lname").val();
    dob = $("#dob").val();
    email = $("#email").val();
    pass = $("#password").val();

    if (fname === "" || lname === "" || dob === "" || email === "" || pass === "") {
        alert('All fields required');
    } else {
        $.ajax({
            url: "app/signup.php",
            type: "POST",
            headers: {
                Accept: 'application/json'
            },
            data: {
                fname: fname,
                lname: lname,
                email: email,
                dob: dob,
                pass: pass
            },
            success: function(res) {
                console.log(res);
                if (res.message === "success") {
                    alert('Registration successful');
                    location.replace('dashboard.html');
                } else {
                    alert(res.message);
                }
            },
            error: function(res) {
                console.log(res);
            }
        });
    }
}

function logUser() {
    email = $("#email").val();
    pass = $("#password").val();

    if (email === "" || pass === "") {
        alert('All fields required');
    } else {
        $.ajax({
            url: "app/login.php",
            type: "POST",
            headers: {
                Accept: 'application/json'
            },
            data: {
                email: email,
                pass: pass
            },
            success: function(res) {

            }
        })
    }
}