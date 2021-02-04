import { createContext, useState } from 'react';
const UserContext = createContext(null); // 0, () => {return 0}
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  function setUser (userDt) { 
    console.log(userDt)
    setUserData((dt) => userDt); 
  }
  return (
    <UserContext.Provider value={[userData, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;