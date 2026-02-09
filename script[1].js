// Initialize users array from localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Check if user is already logged in
window.onload = function() {
    if (currentUser) {
        showDashboard();
    }
};

// Show Register Form
function showRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

// Show Login Form
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

// Show Dashboard
function showDashboard() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    
    // Display user information
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
    document.getElementById('userCreated').textContent = new Date(currentUser.createdAt).toLocaleDateString();
}

// Handle Registration
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Validation
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters!', 'error');
        return;
    }
    
    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        showMessage('Email already registered! Please login.', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password, // In production, this should be hashed
        createdAt: new Date().toISOString()
    };
    
    // Add to users array
    users.push(newUser);
    
    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    showMessage('Registration successful! Please login.', 'success');
    
    // Clear form
    document.getElementById('registerName').value = '';
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('registerConfirmPassword').value = '';
    
    // Show login form after 1.5 seconds
    setTimeout(() => {
        showLogin();
    }, 1500);
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        showMessage('Login successful! Welcome back.', 'success');
        
        // Clear form
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        
        // Show dashboard after 1 second
        setTimeout(() => {
            showDashboard();
        }, 1000);
    } else {
        showMessage('Invalid email or password!', 'error');
    }
}

// Handle Logout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    showMessage('Logged out successfully!', 'success');
    
    setTimeout(() => {
        showLogin();
    }, 1000);
}

// Show Message
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.className = 'message';
        messageDiv.textContent = '';
    }, 3000);
}

// Demo function to show registered users (for testing)
function showAllUsers() {
    console.log('Registered Users:', users);
}
