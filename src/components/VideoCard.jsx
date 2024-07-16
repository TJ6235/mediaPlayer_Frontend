import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../Services/AllApi'
import { addVideoToWhis } from '../Services/AllApi'



function VideoCard({video,setDeleteVideoStatus,isPresent}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true)
    const caption = video?.caption
    const videoUrl = video?.embededLink
    const time = new Date()
    const timeStamp = new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time);
    console.log(timeStamp);
    const reqBody = {
      caption,videoUrl,timeStamp
    }
    const result = await addVideoToWhis(reqBody)
  };

  const handleDelete = async(id)=>{
    const result = await deleteVideoApi(id)
    setDeleteVideoStatus(result.data)
  }

 const videoDrag = (e,video) =>{
  console.log(video);
  e.dataTransfer.setData("videoDetails",JSON.stringify(video))
 }


  return (
    <>
    <Card className='mt-4' style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e, video)}>
      { !isPresent && <Card.Img onClick={handleShow} variant="top" src={video?.imageUrl} height={'300px'} />}
     <Card.Body>
         <div className='d-flex justify-content-between'><Card.Title>{video?.caption}</Card.Title>
       { !isPresent && <Button onClick={()=>handleDelete(video?.id)}  variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button> 
      
       }
         </div>
      </Card.Body>
     </Card>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="720" src={`${video?.embededLink}?autoplay=1`} title="ANIMAL: SATRANGA(Song) Ranbir Kapoor,Rashmika|Sandeep V|Arijit,Shreyas P,Siddharth-Garima |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
</>
  )
}

export default VideoCard

