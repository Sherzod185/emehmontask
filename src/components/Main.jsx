import React, { useState } from 'react'
import Header from './Header';
import Hero from './Hero';
import Servise from './Servise';
import Mobile from './Mobile';
import Footer from './Footer';
import Reklama from './Reklama';
import rek1 from"../style/reklama1.jpg"
import rek2 from"../style/reklama2.jpg"
import News from './News';
const Main = ({user}) => {
const [state, setState]=useState(null)

   setInterval(()=>{
     const date = new Date().getSeconds();
     if(date%2===0){
    setState(true)
    }else{
    setState(false)
    }
   },3000)
  return (
    <>
      {/* header qismi */}
      <Reklama />
      <header>
        <Header user={user} />
        
      </header>
      {/* Main qismi */}
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <div className='reklamaMain container'><img src={state?rek1:rek2} alt="reklama" /></div>
          <Servise />
        </section>
        <section>
          <News />
        </section>
        <section>
          <Mobile />
        </section>
      </main>
      {/* footer qismi */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main