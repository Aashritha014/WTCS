function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let checkin = new Date(document.getElementById("checkin").value);
  let checkout = new Date(document.getElementById("checkout").value);
  let guests = document.getElementById("guests").value.trim();
  let room = document.getElementById("room").value.trim();

  // Basic field check
  if (name === "" || email === "" || phone === "" || !checkin || !checkout || room === "") {
    alert("Please fill all fields!");
    return false;
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return false;
  }

  // Phone validation
  if (phone.length != 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits!");
    return false;
  }

  // Date validation
  if (checkin >= checkout) {
    alert("Check-out date must be after check-in date!");
    return false;
  }

  // Guest validation
  if (guests <= 0) {
    alert("Number of guests must be at least 1!");
    return false;
  }

  alert("✅ Booking Successful! Thank you for choosing our hotel.");
  return true;
}