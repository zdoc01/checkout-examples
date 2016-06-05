(function init() {
  var button = document.getElementById('checkout');

  if (typeof PaymentRequest === 'undefined') {
    button.setAttribute('disabled', true);
    alert('Oops, the PaymentRequest API isn\'t supported in this browser.');
    return false;
  }

  var supportedMethods = ['visa', 'https://android.com/pay'],
      details = {
        items: [
          {
            id: 'basket',
            label: 'Sub-total',
            amount: { 'currency': 'USD', 'value' : '55.00' }, // US$55.00
          },
          {
            id: 'tax',
            label: 'Sales Tax',
            amount: { 'currency': 'USD', 'value' : '5.00' }, // US$5.00
          },
          {
            id: 'total',
            label: 'Total Due',
            amount: { 'currency': 'USD', 'value' : '60.00' }, // US$60.00
          }
        ]
      },
      options = {
        requestShipping: false
      };

  button.addEventListener('click', function(e) {
    e.preventDefault();

    var payment = new PaymentRequest(supportedMethods, details, options);
    payment.addEventListener('shippingaddresschange', function(changeEvent) {
      console.log('handling shipping address change...');
    });
    payment.addEventListener('shippingoptionchange', function(changeEvent) {
      console.log('handling shipping option change...');
    });

    // Trigger the browser UI
    payment.show().then(function(response) {
      console.log('handling payment...', response);
      // Process payment response
      // response.methodName contains the selected payment method
      // response.details contains a payment method specific response
       
      // User has accepted the payment request
      // Pass true if payment was successfully processed, false if not
      response.complete(true);
    }).catch(function(err) {
      if (err) {
        console.error('an error occurred...', err);
      }
    });
  });
})();