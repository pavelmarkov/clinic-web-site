import { createContext, useState } from 'react';
const ClickContext = createContext(null); // 0, () => {return 0}
export const ClickProvider = ({ children }) => {
  const [clickAmount, setClickAmount] = useState(0);
  function increment (step) { 
    console.log(step)
    setClickAmount((amount) => amount + step); 
  }
  return (
    <ClickContext.Provider value={[clickAmount, increment]}>
      {children}
    </ClickContext.Provider>
  );
};
export default ClickContext;