import React from 'react';
import {NavBar} from './components/Navbar/navbar'
import {CentralImage} from './components/Content/content'
import{Footer} from './components/Footer/footer'

class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
        <CentralImage />
        <Footer />
      </div>
    )
    
  }
}

export default App;
