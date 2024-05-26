document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle login
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle signup
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(user => user.email === email)) {
                alert('Email already registered');
            } else {
                const newUser = { name, email, password };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('loggedInUser', JSON.stringify(newUser));
                window.location.href = 'dashboard.html';
            }
        });
    }

    // Fetch and display data (example for patients)
    const patientList = document.getElementById('patient-list');
    if (patientList) {
        const patients = [
            { name: 'John Doe', diagnosis: 'Type 2 Diabetes' },
            { name: 'Jane Smith', diagnosis: 'Type 1 Diabetes' },
        ];

        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `${patient.name} - ${patient.diagnosis}`;
            patientList.appendChild(li);
        });
    }

    // Similar fetch and display logic for other sections
});
