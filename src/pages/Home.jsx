import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom';



function Home() {

   const [addVideoStat,setAddVideoStst]=useState([])
   const[dragOut,setDragOut]=useState(false)

  return (

    <>
    <div className="d-flex p-5">
     <Add setAddVideoStst={setAddVideoStst}/>
     <h5 className='ms-auto'><span className='hide'>Watch History</span></h5><Link to={'/watchhistory'} style={{textDecoration:'none',color:'white'}}><FontAwesomeIcon className='fa-2x ms-2 text-warning' icon={faClockRotateLeft} /></Link>
    </div>
    <div className="row w-100 p-4">
      <div className="col-md-10">
        <View addVideoStat={addVideoStat} setDragOut={setDragOut}/>
      </div>
      <div className="col-md-2">
        <Category setDragOut={setDragOut} dragOut={dragOut}/>
      </div>
    </div>
    
    </>
  )
}

export default Home
