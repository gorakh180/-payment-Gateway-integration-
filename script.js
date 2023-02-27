const form = document.getElementById('payment-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;
  const amount = document.getElementById('amount').value;

  // Call PayPal API to process payment
  const response = await fetch('/process-payment', {
    method: 'POST',
    body: JSON.stringify({ cardNumber, expiryDate, cvv, amount }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    // Payment successful, redirect to success page
    window.location.href = '/success';
  } else {
    // Payment failed, display error message
    const error = await response.text();
    alert(error);
  }
});
