/**==============================================================
 * Mailchimp Form Validation Loader
 *===============================================================
 *
 * Dynamically loads Mailchimp's mc-validate.js script on page
 * load, ensuring that form validation is set up for Mailchimp
 * newsletter forms.
 *
 * - Appends external script from Mailchimp CDN
 * - Initializes Mailchimp field names and types
 * - Supports jQuery compatibility with noConflict
 *
 * Keeps global scope clean and ensures proper validation.
 *===============================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  var script = document.createElement("script");
  script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
  script.type = "text/javascript";
  document.body.appendChild(script);

  script.onload = function () {
      (function ($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0] = "EMAIL";
          ftypes[0] = "email";
          fnames[1] = "FNAME";
          ftypes[1] = "text";
          fnames[2] = "LNAME";
          ftypes[2] = "text";
      })(jQuery);

      var $mcj = jQuery.noConflict(true);
  };
});
