// Must be writen for lowest common denominator browser
// This is not an exhaustive list of used features, but is sufficient to
// identify legacy browsers that do not support the ES6 features we have used.
if (!("fetch" in window) || typeof Object.assign !== "function" ) {
  alert("For security reasons, this application only supports " +
    "modern browsers. Please contact your IT administrator");
}
