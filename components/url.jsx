const DEBUG = process.env.DEBUG === "false" ? false : true;

var URL;

!DEBUG ? (URL = "https://api.codestrike.in") : (URL = "http://localhost:8000");
export default URL;
