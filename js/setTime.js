// Get the current date
const currentDate = new Date();

// Format the date as YYYY-MM-DD
const formattedDate = currentDate.toISOString().split('T')[0];

const checkinSelect = document.getElementById('checkin')
const checkoutSelect = document.getElementById('checkout')

// Set the current date as the value for the check-in input element
checkinSelect.value = formattedDate;
checkinSelect.min = formattedDate;

// Calculate the day after the check-in date
const nextDay = new Date(currentDate);
nextDay.setDate(currentDate.getDate() + 1);

// Format the next day's date as YYYY-MM-DD
const nextDayFormatted = nextDay.toISOString().split('T')[0];

// Set the next day's date as the value for the checkout input element
checkoutSelect.value = nextDayFormatted;
checkoutSelect.min = nextDayFormatted;

checkinSelect.addEventListener('change', () => {

    const checkinDate = new Date(checkinSelect.value);
    const nextDay = new Date(checkinDate.getTime() + 24 * 60 * 60 * 1000);
    const nextFormatted = nextDay.toISOString().split('T')[0];
    checkoutSelect.min = nextFormatted;
    
    if (checkinSelect.value >= checkoutSelect.value) {
        checkoutSelect.value = nextFormatted;
    }
})