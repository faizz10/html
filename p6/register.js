function validateForm() {
    var name = document.myForm.finame.value;
    if (name=="" || name==null) {
        alert("First Name must be filled out");
        var firstNameField = document.getElementById("fname");
        firstNameField.focus();
        return false;
    }
    var name = document.myForm.laname.value;
    if (name=="" || name==null) {
        alert("Last Name must be filled out");
        var firstNameField = document.getElementById("lname");
        firstNameField.focus();
        return false;
    }
    var name = document.myForm.address.value;
    if (name=="" || name==null) {
        alert("Address must be filled out");
        var firstNameField = document.getElementById("addres");
        firstNameField.focus();
        return false;
    }
    var name = document.myForm.dobi.value;
    if (name=="" || name==null) {
        alert("Select Date of Birth");
        var firstNameField = document.getElementById("dob");
        firstNameField.focus();
        return false;
        }
    
    var name = document.myForm.gender.value;
    if (name=="" || name==null) {
        alert("Select Gender");
        var firstNameField = document.getElementById("dobir");
        firstNameField.focus();
        return false;
    }
    var name = document.myForm.mobnu.value;
    var mobileRegex = /^[6-9]\d{9}$/; 
    if (name == "" || name == null) {
        alert("Enter Mobile Number");
        var firstNameField = document.getElementById("mobnu");
        firstNameField.focus();
        return false;
    } else if (!mobileRegex.test(name)) {  
        alert("Enter valid Mobile Number");
        var firstNameField = document.getElementById("mobnu");
        firstNameField.focus();
        return false;
    }
    var email = document.myForm.Email.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email === "" || email === null) {
        alert("Enter Email !!")
        var firstNameField = document.getElementById("email");
        firstNameField.focus();
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Enter Valid Email !!")
        var firstNameField = document.getElementById("email");
        firstNameField.focus();
        return false;
    }
    var name = document.myForm.coname.value;
    if (name=="" || name==null) {
        alert("Enter Previous course Attented");
        var firstNameField = document.getElementById("cname");
        firstNameField.focus();
        return false;
    }
    var selectedOption = document.myForm.course.value;
    if (selectedOption === "none" || selectedOption === "Select an Option") {
        alert("Please select an option");
        var selectField = document.getElementById("li");
        selectField.focus();
        return false;
    } 
    alert("Registration successful!");
    return true;
    
        
    }
    
