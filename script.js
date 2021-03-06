let users = [
    {
        "name": "John",
        "job_title": "Software Engineer @ Microsoft",
        "product_endorsement": "I am glad I found ExpertCoder just in time for my coding interviews! This resource allowed me to grow confident in my coding skills and land some great offers."
    },
    {
        "name": "Adam",
        "job_title": "Web Developer @ Facebook",
        "product_endorsement": "ExpertCoder made it easy for me to understand hard algorithms. This was mainly due to the detailed solution videos it provides!"
    },
    {
        "name": "Nisha",
        "job_title": "Software Engineer @ Google",
        "product_endorsement": "This product pays for itself! Very efficient way to study the material required to do well on interviews."
    },
    {
        "name": "Eric",
        "job_title": "Software Architect @ Amazon",
        "product_endorsement": "ExpertCoder was a great way for me to brush up on my coding skills. This is an amazing product for higher level engineers that don't code as much on their jobs."
    },
    {
        "name": "Allie",
        "job_title": "Software Engineer @ Apple",
        "product_endorsement": "Thanks to ExpertCoder I have offers from many top tech companies! Practicing for coding interviews through well planned courses gave me confidence when interviewing."
    }
]
let idx = 0

function get_next_user(){
    document.getElementById("success-story-container").style.opacity = 0;

    setTimeout(function(){
        idx = idx + 1;
        if(idx > 4){
            idx = 1;
        }
        let new_user_title = users[idx].name + " - " + users[idx].job_title;
        document.getElementById("success_story_user_title").innerHTML = new_user_title;
        document.getElementById("user_story_user_endorsement").innerHTML = users[idx].product_endorsement;

        document.getElementById("success-story-container").style.opacity = 1;
    }, 500);
}

function get_previous_user(){
    document.getElementById("success-story-container").style.opacity = 0;

    setTimeout(function(){
        idx = idx - 1;
        if(idx < 0){
            idx = 4;
        }
        let new_user_title = users[idx].name + " - " + users[idx].job_title;
        document.getElementById("success_story_user_title").innerHTML = new_user_title;
        document.getElementById("user_story_user_endorsement").innerHTML = users[idx].product_endorsement;

        document.getElementById("success-story-container").style.opacity = 1;
    }, 500)
}


/*var form = document.getElementById("registrationForm");
form.addEventListener('submit', handleForm);
function handleForm(event) {
    event.preventDefault();
} */
document.getElementById("registrationForm").addEventListener('submit', function(event){event.preventDefault();});

function validateRegistrationForm() {
    let validationOutputString = "";

    let fname = document.forms["registrationForm"]["fname"].value;
    let lname = document.forms["registrationForm"]["lname"].value;
    let email = document.forms["registrationForm"]["email"].value;
    let password = document.forms["registrationForm"]["password"].value;
    let repassword = document.forms["registrationForm"]["repassword"].value;

    if(fname == ""){
        validationOutputString += "First Name cannot be empty. "
    }
    if(lname == ""){
        validationOutputString += "Last Name cannot be empty. "
    }
    if(password != repassword){
        validationOutputString += "Passwords don't match. "
    }
    if(!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        validationOutputString += "Enter a valid email. "
    }

    document.getElementById("registrationValidationOutput").innerHTML = validationOutputString;
}