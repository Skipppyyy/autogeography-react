import React from 'react'
import Navbar from './components/navbar/Navbar';
import Introduction from './components/introduction/Introduction';
import Religion from './components/religion/Religion';
import Commerce from './components/commerce/Commerce';
import Conflict from './components/conflict/Conflict';
import SoWhat from './components/sowhat/SoWhat';
import Me from './components/misc/Me';
import Bib from './components/misc/Bib';

function App() {
  return (
    <div>
      <Navbar/>
      <Me/>
      <Introduction/>
      <Commerce/>
      <Conflict/>
      <Religion/>
      <SoWhat/>
      <Bib/>
    </div>
    
  );
}

export default App;
