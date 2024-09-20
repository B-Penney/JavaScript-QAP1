#!/usr/bin/env node

// PASSWORD GENERATOR
// Beth-Ann Penney-Rideout
// September 19, 2024

// Function to generate a random password
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
   

    if(length <= 0){
        return `(password length must be at least 8 characters)`;
    }
    if(allowedChars.length === 0){
        return `(At least 8 characters need to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;


const password = generatePassword(passwordLength, 
                                 includeLowercase, 
                                 includeUppercase, 
                                 includeNumbers, 
                                 

console.log('Generated password: ${password}'));
