import { auth } from "../firebase-config.js";

// Handle form submission
const signupForm = document.getElementById("sign-up-form");

signupForm.addEventListener('submit', async function(e) {

    e.preventDefault();  // Prevent the page from reloading

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Use Firebase Authentication to create a user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User created:', user);
        
    } catch (error) { // take account for errors
        console.error('Error signing up:', error);
    }
});

