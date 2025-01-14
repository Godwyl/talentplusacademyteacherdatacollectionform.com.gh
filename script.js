const scriptURL = 'https://script.google.com/macros/s/AKfycbxODZ5IBpd5SNmBS40IV7og74qmAkhmOz0kDoMdxhoykwW4vLD9ed7QCV825kXrFE_6/exec'; // Replace with your actual script URL
const form = document.getElementById('teacher-form');
const successMessage = document.getElementById('success-message'); // Success message element
const submitButton = document.getElementById('submit'); // Submit button
const loadingIndicator = document.getElementById('loading-indicator'); // Loading indicator

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Show loading indicator and disable the submit button
    submitButton.disabled = true;
    loadingIndicator.style.display = 'inline'; // Display loading indicator

    

    // Send form data via a POST request using fetch
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
    })
    .then((response) => {
        if (response.ok) {
            // Display the success message beside the submit button
            successMessage.style.display = 'inline';
            successMessage.textContent = 'Thank You! Form submitted Successfully.';

            // Reset the form after submission
            form.reset();
            // Hide the success message after 3 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000); // 3 seconds delay
        } else {
            throw new Error('Something went wrong with the submission.');
        }
    })
    .catch((error) => {
        console.error('Error!', error.message);
        alert('There was an error submitting your form. Please try again.');
    })
    .finally(() => {
        // Hide the loading indicator and enable the submit button again
        loadingIndicator.style.display = 'none';
        submitButton.disabled = false;
    });
});