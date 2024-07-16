import React, { useEffect } from 'react'
import VideoCard from '../components/VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoCategory, deleteCategory, updateCategory } from '../Services/AllApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { getCategory } from '../Services/AllApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Category({dragOut,setDragOut}) {

  const [show, setShow] = useState(false);
  const [showCategory,setCategory]=useState("")
  const [category,setAllCategory]=useState([])
  const [addStatus,setAddStatus] = useState(false)
  const [updateStatus,setUpdateStatus]=useState(false)


  const handleClose = () => {setShow(false)
    setCategory("")
  };
  const handleShow = () => setShow(true);

  console.log(showCategory);

const handleCategory = async()=>{
  
  const reqBody = {
    showCategory,
    allVideos:[]
  }

  const result = await addVideoCategory(reqBody)
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('Category Added Successfully')
      setAddStatus(true)
      handleClose()
      setCategory('')
      hndleCategory()
    }else{
      toast.error('category name is empty , please Add One')
    }
}

const handleDelete = async(id)=>{
  await deleteCategory(id)
  setAddStatus(true)
}

const hndleCategory = async()=>{
 const result = await getCategory()
 setAllCategory(result.data)

}

console.log(category);

const dragOver = (e)=>{
e.preventDefault()
}

const videoDrop = async(e, selectedCategory)=>{
  console.log(`category id is :`,selectedCategory);
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);
  
  if(selectedCategory.allVideos?.find(item=>item.id == videoDetails.id)){
    toast.info('video already exist in category')
  }else{
    selectedCategory.allVideos?.push(videoDetails)
    const result = await updateCategory(selectedCategory.id,selectedCategory)
    toast.success('video added successfully')
    setUpdateStatus(true)
  }

   

}

const ondrag = (e,videoID,categoryDetails)=>{
console.log(videoID,categoryDetails);
 const datashare = {videoID,categoryDetails}
e.dataTransfer.setData("dataShare",JSON.stringify(datashare))
}




useEffect(()=>{
  setAddStatus(false)
  hndleCategory()
  setUpdateStatus(false)
  setDragOut(false)
},[addStatus,updateStatus,dragOut])


  return (
    <>
    <h5 className='mt-md-0-5'>Category</h5>
    <button onClick={handleShow} className='btn btn-warning w-100 mt-5'>Add Category</button>
    {category?.length>0?
    category.map((item)=>(
      <div className='p-4 rounded border mt-4' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
      <div className='d-flex justify-content-between'>
        <p className='mb-4'>{item.showCategory}</p>
        <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
      </div>
        { item?.allVideos?.length>0? 
        item.allVideos?.map((video)=>(
          <div draggable onDragStart={(e)=>ondrag(e,video.id,item)}>
        <VideoCard video={video} isPresent={true}/>
        </div>
      )) 
        : null}
    </div>
    ))
   :
   <p className='text-danger'>*No Category Added Yet</p>
    } 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='p-3 border rounded'  action="">
            <input onChange={(e)=>setCategory(e.target.value)} className='form-control' type="text" placeholder='Category Name' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  )
}

export default Category