import React, {useState}from 'react';

import Loading from './components/Loading';

const App = () => {
 const [isLoading,setIsLoading] = useState(true);

 if(isLoading){
  return(
    <main>
      <loading />
    </main>
  );
 }
}

export default App