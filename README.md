# User Authentication System

A simple and elegant user login and registration system built with HTML, CSS, and JavaScript.

## Features

- ✅ User Registration with validation
- ✅ User Login with authentication
- ✅ Password confirmation
- ✅ Email validation
- ✅ Secure session management
- ✅ Responsive design
- ✅ Modern UI with animations
- ✅ LocalStorage for data persistence
- ✅ User dashboard after login
- ✅ Logout functionality

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- JavaScript (ES6)
- LocalStorage API

## Project Structure

```
user-authentication-system/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript logic
└── README.md           # Documentation
```

## How to Use

### Local Testing

1. Download all files (index.html, style.css, script.js)
2. Keep all files in the same folder
3. Open `index.html` in any web browser
4. Register a new account
5. Login with your credentials

### Features Overview

#### Registration
- Enter your full name
- Provide a valid email address
- Create a password (minimum 6 characters)
- Confirm your password
- Click "Register"

#### Login
- Enter your registered email
- Enter your password
- Click "Login"

#### Dashboard
- View your profile information
- See account creation date
- Logout option available

## Validation Rules

- **Name**: Required field
- **Email**: Must be a valid email format
- **Password**: Minimum 6 characters
- **Confirm Password**: Must match the password
- **Duplicate Email**: System prevents duplicate registrations

## Data Storage

This application uses browser's LocalStorage to store user data. Data persists even after closing the browser.

**Note**: This is a frontend-only demonstration. For production use, implement a proper backend with encrypted passwords and secure authentication.

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## Security Notes

⚠️ **Important**: This is a demonstration project. For production applications:
- Use a backend server (Node.js, Python, PHP, etc.)
- Implement password hashing (bcrypt, argon2)
- Use HTTPS
- Implement CSRF protection
- Add rate limiting
- Use secure session management
- Validate data on server-side

## Future Enhancements

- Password strength indicator
- Email verification
- Forgot password functionality
- Profile editing
- Password encryption
- Backend integration
- Database storage

## License

MIT License - Feel free to use for educational purposes

## Author

Created for assignment submission

## Support

For issues or questions, please check the code comments or contact the developer.
