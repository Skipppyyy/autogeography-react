import React from 'react'
import Navbar from './components/navbar/Navbar';
import Introduction from './components/introduction/Introduction';
import Religion from './components/religion/Religion';
import Commerce from './components/commerce/Commerce';
import Conflict from './components/conflict/Conflict';
import SoWhat from './components/sowhat/SoWhat';

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Commerce/>
      <Conflict/>
      <Religion/>
      <SoWhat/>
    </div>
    
  );
}

export default App;
