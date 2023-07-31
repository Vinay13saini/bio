document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_email.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Email sent successfully!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Failed to send email. Please try again later.');
        }
    };

    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
});
