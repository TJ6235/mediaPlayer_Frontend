import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { getAllVideoApi, updateCategory } from '../Services/AllApi'


function View({addVideoStat,setDragOut}) {

  const [video,setVideo]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState([])

  const getAllVideo = async()=>{
     const result = await getAllVideoApi()
    setVideo(result.data)
  }
  console.log(video);


const videoDrop = async(e)=>{
  const result = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(result);
const selectedCategory = result.categoryDetails

const newDetails = selectedCategory.allVideos.filter((item)=>item.id!=result.videoID)
console.log(newDetails);

const reqBody = {
  categoryName:selectedCategory.categoryName,
  allVideos:newDetails,
  id:selectedCategory.id
}

const response = await updateCategory(selectedCategory.id,reqBody)
console.log(response);
if(response.status>=200 && response.status<300){
  setDragOut(true)
}
}
  
  useEffect(()=>{
    getAllVideo()
  },[addVideoStat,deleteVideoStatus])

 

  return (
    <>
    <div className="row" droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e)}>
      <h4>All Videos</h4>
      {video?video.map((item)=>
      (<div className="col-md-3 mt-4">
        <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </div>))
      :
      <p className='text-danger fs-5 mt-5'>Nothing To Display</p>
    }
    </div>
    </>
  )
}

export default View