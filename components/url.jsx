const DEBUG = process.env.DEBUG === "false" ? false : true;

var URL;

!DEBUG ? (URL = process.env.PROD_API) : (URL = process.env.TEST_API);
export default URL;
