$(document).ready(function(){

function sendMail(contactForm) {
    emailjs.send("gmail", "southwicks", {
        "from_firstname": contactForm.firstName.value,
        "from_secondname": contactForm.secondName.value,
        "from_email": contactForm.email.value,
        "from_telephone": contactForm.telephone.value,
        "from_address": contactForm.address.value,
        "from_postcode": contactForm.postCode.value,
        "message": contactForm.message.value
    })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }

        );
    return false;
}

});
