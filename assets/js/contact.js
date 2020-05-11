$(document).ready(function(){
            window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event){
                event.preventDefault();
                emailjs.sendForm('contact_service', 'southwicks', '#contact-form')
                .then(function(response) {
                    if (response.status == 200 && response.text == 'OK')
                        alert('Your message has been sent successfully!');
                    else 
                        alert('Sorry there was a problem, please refresh your browser and try again.');
                        document.getElementById('contact-form').reset();
                        window.location.replace("index.html");
                });
            });
        };
});