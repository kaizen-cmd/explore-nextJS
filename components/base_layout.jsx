import { useState } from "react";

var login;
var setLogin;
const BaseLayout = ({ children }) => {
  [login, setLogin] = useState(<></>)
  return (
    <div>
      <div>
        {login}
        {children}
      </div>
    </div>
  );
};

export {setLogin};
export default BaseLayout;
