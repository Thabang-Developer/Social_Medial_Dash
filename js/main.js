let tabLinks = document.querySelectorAll('.tab-links');
let tabContent = document.querySelectorAll('.tab-contents');

let menu = document.querySelector('#menu');
const OpenTab = (tn) => {
    tabLinks.forEach(tb => {
        tb.classList.remove("active-link");
    });
    tabContent.forEach(tc => {
        tc.classList.remove("active-tab");
    });
    event.currentTarget.classList.add("active-link");
    document.getElementById(tn).classList.add("active-tab");
}
const Open = () => {
    menu.style.right = "0";
}
    
const Close = () => {
    menu.style.right = "-200px";
}
    
const Send_Email = (n, m, e) => {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thabangmabena12@gmail.com",
        Password : "E76036768594F0F16FCCA089AFD6218B480E",
        To : "thabangmabena12@gmail.com",
        From : e,
        Subject : "<h1>Portfolio Contact:.</h1>",
        Body : "<h4>Name:</h4> " + n
            + "<br> <h4>Email:</h4> " + e
            + `<br> <h4>Message:</h4> ${m}.<br><br> <h3>Thank you</h3>.`
    })
    .then(
        swal("Success", `Query successfully sent. Thank You ${n}`, "success")
    )
    .catch((e)=> {
        swal("Error", "Something went wrong", "error");
    })
}

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value
    if(name || email || message){
        Send_Email(name, message, email)
        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#message').value = ""
    }
    else{
        swal("Error", "Please fill in all the input fields.", "error")
    }
})
