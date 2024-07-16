import { faCloudArrowUp , faFilm} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { allVideoApi } from '../Services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddVideoStst}) {
  const [videoDetails,setVideoDetails]=useState({
    caption:"",
    imageUrl:"",
    embededLink:""
  })
  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async(e)=>{
    e.preventDefault()
    const result = await allVideoApi(videoDetails)
      if(result.status>=200 && result.status<300){
        toast.success('video added successfully')
        handleClose()
        setAddVideoStst(result.data)
      }else{
        toast.error('something Went wrong ')
        console.log(result);
      }
  }

    const getLink=(e)=>{
         const link = e.target.value
         console.log(link);
         if(link.startsWith('https://youtu.be/')){
          setVideoDetails({...videoDetails,embededLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
         }else{
          setVideoDetails({...videoDetails,embededLink:`https://www.youtube.com/embed/${link.slice(-11)}`})
         }
    }

  return (
    <>
    <h4>Upload New Video</h4> <button onClick={handleShow} className='btn'><FontAwesomeIcon className='fa-2x ms-1 text-warning' icon={faCloudArrowUp}/></button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon className='text-warning me-2' icon={faFilm} />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details</p>
          <form action="" className='border shadow p-3 rounded'>
            <div className='mb-2'>
              <input onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} name='caption' type="text" className='form-control' placeholder='Video Caption'/>
            </div>
            <div className='mb-2'>
              <input onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} name='image' type="text" className='form-control' placeholder='Video Image'/>
            </div>
            <div className='mb-2'>
              <input onChange={(e)=>getLink(e)}  name='vidurl' type="text" className='form-control' placeholder='Video Url'/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
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

export default Add