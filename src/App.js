import { Fragment } from 'react';
import Header from './Components/LayOut/Header';
import Meals from './Components/Meals/Meals';


function App() {
  return (
<Fragment>
 <Header />
 <main>
   <Meals/>
 </main>
</Fragment>
   
  );
}

export default App;
