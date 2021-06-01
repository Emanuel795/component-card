import React from 'react'
import Card from './components/Card'
import './global.css'
import getContentCard from './assets/getContentCard'

export default function App() {
  const data=getContentCard();
  // const card= data[0] 
  return (
    <div className='container-cards'>
      {
        data.map((card)=>{
          return <Card data={card}/>
        })
      }
  </div>
  );
}
