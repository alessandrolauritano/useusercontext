import { useState } from 'react'
import { Dashboard } from './Dashboard'
import { UserContext } from './context/context';

export interface User {
    isSub: boolean;
    name: string;
}

export default function App (){
  const [ user ] = useState< User >({
    isSub: true,
    name: 'Ale'
  });

  return (
    <>
    <UserContext.Provider value = {user} >
      <Dashboard />
      </UserContext.Provider>

    </>
  )
}
