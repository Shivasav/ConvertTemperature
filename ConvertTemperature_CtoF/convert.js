let fahrenheit = prompt("Enter the temperature in Fahrenheit (-100 to 212) or 999 to exit:");

while (fahrenheit != 999) {
  // Check if the input is within the valid range
  if (fahrenheit >= -100 && fahrenheit <= 212) {
    // Convert Fahrenheit to Celsius
    let celsius = ((fahrenheit - 32) * 5) / 9;

    // Display the result after conversion
    alert("The temperature in fahrenheit is: " +fahrenheit + "\n" + "The temperature in Celsius is: " + celsius.toFixed(2));
  } 
  else {
    // Display error message saying invalid input
    alert("Invalid input! Please enter a temperature between -100 and 212.");
  }

  // Get input from user again
  fahrenheit = prompt("Enter the temperature in Fahrenheit (-100 to 212) or 999 to exit:");
}

// Display Thank you message at the end
alert("Thank you for using the temperature converter. Goodbye!");
