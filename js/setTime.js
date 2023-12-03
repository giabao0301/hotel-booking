// Get the current date
const currentDate = new Date();

// Format the date as YYYY-MM-DD
const formattedDate = currentDate.toISOString().split('T')[0];

// Set the current date as the value for the check-in input element
document.getElementById('checkin').value = formattedDate;

// Calculate the day after the check-in date
const nextDay = new Date(currentDate);
nextDay.setDate(currentDate.getDate() + 1);

// Format the next day's date as YYYY-MM-DD
const nextDayFormatted = nextDay.toISOString().split('T')[0];

// Set the next day's date as the value for the checkout input element
document.getElementById('checkout').value = nextDayFormatted;