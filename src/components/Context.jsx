import React, { createContext, useEffect, useState} from 'react';

const Context = createContext();

function MonProvider({ children }) {


  const [selectedUserId, setSelectedUserId] = useState(null);
  console.log('selectedUserIdCONTEXT:', selectedUserId)
 useEffect(()=>{
  if(localStorage.getItem('userDefault')){
    setSelectedUserId(localStorage.getItem('userDefault'))
  }
 },[])

  const handleUserSelect = (userId) => {
    console.log('Context', userId)
    setSelectedUserId(userId);
  };

  return (
    <Context.Provider value={{ selectedUserId, handleUserSelect }}>
      {children}
    </Context.Provider>
  );
}

export { Context, MonProvider };
