import React, { useState } from 'react'

const Mycomponent = () => {
    const [car,setcar]=useState({year:2024,
                                  maker:"Tata",
                                  model:"Nano"
    })
    function handelyear(event){
      setcar(event.target.value)
    }
    function handelmaker(event){
      setcar({...car,year:event.target.value})
    }
  return (
    <>
    <p>Your favort car ${car.year} ${car.maker} ${car.model}</p>
    <input type="number" value={year} onChange={} />
    </>
  )
}

export default Mycomponent