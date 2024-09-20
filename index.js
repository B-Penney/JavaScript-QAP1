#!/usr/bin/env node

// PASSWORD GENERATOR
// Beth-Ann Penney-Rideout
// September 19, 2024

// Import dependencies
const { program } = require('commander');

// Function generates a random password based on the following criteria:
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be at least 8 characters)`;
    }

    if (allowedChars.length === 0) {
        return `(At least one character type must be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Set up command-line options using Commander
program
  .option('--length <number>', 'length of the password', parseInt) 
  .option('--lowercase', 'include lowercase letters', true) 
  .option('--uppercase', 'include uppercase letters', true) 
  .option('--numbers', 'include numbers', true) 
  .option('--symbols', 'include symbols', true) 
  .parse(process.argv); 

// Get the options provided from the command-line arguments
const options = program.opts();

const passwordLength = options.length || 8; // Default length is 8 if not provided
const includeLowercase = options.lowercase;
const includeUppercase = options.uppercase;
const includeNumbers = options.numbers;
const includeSymbols = options.symbols;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);

// Display help at the end
program.on('--help', () => {
  console.log('');
  console.log('Example:');
  console.log('  $ node index.js --length 12 --numbers --uppercase --symbols');
});

program.parse(process.argv); // Ensure arguments are parsed
