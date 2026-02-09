import React, { useState } from 'react'

const Mycomponent = () => {
    const [car,setcar]=useState({year:2024,
                                  maker:"Tata",
                                  model:"Nano"
    })
    function handelyear(event){
      setcar(c=>({...c,year:event.target.value}))
    }
    function handelmaker(event){
      setcar(c=>({...c,maker:event.target.value}))
    }
    function handelmodel(event){
      setcar(c=>({...c,model:event.target.value}))
    }
  return (
    <>
    <p>Your favort car {car.year} {car.maker} {car.model}</p>
    <input type="number" value={car.year} onChange={handelyear} />
    <input type="text" value={car.maker} onChange={handelmaker} />
    <input type="text" value={car.model} onChange={handelmodel} />
    </>
  )
}

export default Mycomponent