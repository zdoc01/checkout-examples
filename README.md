# Checkout Examples
This repository aims to show multiple checkout integration examples available on the web.

## Payment Request
Checkout example using the new [W3C Payment Request API](https://www.w3.org/TR/payment-request/). At time of writing this feature was only available on Android in Dev versions of Chrome (originally tested against version 52.0.2743.25). The Chrome implementation was demoed at Google I/O 2016 as part of the [Bringing seemless checkouts to the mobile web](https://www.youtube.com/watch?v=yelPlCVZLEE&index=19&list=PLNYkxOF6rcIDz1TzmmMRBC-kd8zPRTQIP) talk given by Alex Sieke and Rouslan Solomakhin.

Key things to consider:
* Provides one-touch payment option - no need to fill in forms
* Can easily integrate with third-party payment solutions such as Android Pay
* Only supported in top-level contexts (i.e. not supported in lower level contexts like iframes - See [Issue #2](https://github.com/w3c/browser-payment-api/issues/2))