document.addEventListener('DOMContentLoaded', function () {
  const checkElements = () => {
    const currentUrl = window.location.href;

    // Show forget password link only at first login page
    if (
      !(
        currentUrl.includes('/authorize') && currentUrl.includes('B2C_1_SIGNIN')
      )
    ) {
      const forgotPasswordElement = document.getElementById('forgotPassword');
      console.log('######', forgotPasswordElement);
      if (forgotPasswordElement) {
        forgotPasswordElement.style.display = 'none';
        return; // Stop polling once the element is found and hidden
      }
    }

    // Show Reset password heading only at reset password flow
    if (
      currentUrl.includes('/authorize') &&
      currentUrl.includes('B2C_1_PASSWORDRESET')
    ) {
      const customHeadingElement = document.getElementById('customHeading');
      console.log('@@@@@@@', customHeadingElement);
      if (customHeadingElement) {
        customHeadingElement.style.display = 'block';
        return; // Stop polling once the element is found and displayed
      }
    }

    // Retry after 500ms if elements are not found
    setTimeout(checkElements, 500);
  };

  checkElements();
});
