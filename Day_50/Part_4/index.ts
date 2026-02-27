enum ErrorCodes {
  Redirect = 302,
  NotFound = 404,
  ServerTimeOut,
}
console.log(`${ErrorCodes.NotFound}: ${ErrorCodes[404]}`);
