const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the selected values
  const checkinValue = document.getElementById('checkin').value;
  const checkoutValue = document.getElementById('checkout').value;
  const quantityValue = document.getElementById('quantity').value;
  const guestValue = document.getElementById('guest').value;

  // Redirect to the results page with query parameters
  const url = `room_page.html?checkin=${checkinValue}&checkout=${checkoutValue}&quantity=${quantityValue}&guest=${guestValue}`;
  window.location.href = url;
});
