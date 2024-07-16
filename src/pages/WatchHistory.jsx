import { faTrashCan , faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideosFromhistory } from '../Services/AllApi'
import { deleteVideoWatchHis } from '../Services/AllApi'





function WatchHistory() {

  const [allVideo,setAllVideo]=useState([])

    const videoHistory = async()=>{
      const result = await getVideosFromhistory()
      // console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVideo(result.data)
      }
      console.log(allVideo);
    }

   const handleDeleteVideo = async(id)=>{
    await deleteVideoWatchHis(id)
    videoHistory()
   }

    useEffect(()=>{
      videoHistory()
    },[])
    
   

  return (
<>
<div className="row w-100 my-5">
<div className='d-flex justify-content-between p-md-5'>
    <h5>Watch History</h5>
    <h5><Link style={{textDecoration:'none',color:'white'}} to = {'/home'}><FontAwesomeIcon icon={faHouse} className='me-2 text-warning' /><span className='hide'>Back Home</span></Link></h5>
    </div>
  <div className="col-md-2"></div>
  <div className="col-md-8">
   
    <table className='table mt-5'>
      <thead>
        <tr>
          <th className='bg-light'>Sl.No</th>
          <th className='bg-light'>Caption</th>
          <th className='bg-light'>Url</th>
          <th className='bg-light'>TimeStamp</th>
          <th className='bg-light'>Action</th>
        </tr>
      </thead>
      <tbody>
      {allVideo.map((item,index) => (
                <tr>
                  <td className='text-warning'>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td>
                    <Link to={item?.videoUrl}>{item?.videoUrl}</Link>
                  </td>
                  <td>{item?.timeStamp}</td>
                  <td>
                    <button onClick={()=>handleDeleteVideo(item?.id)} className="btn btn-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))}
      </tbody>
    </table>
  </div>
  <div className="col-md-2"></div>
</div>

</>


)
}

export default WatchHistory