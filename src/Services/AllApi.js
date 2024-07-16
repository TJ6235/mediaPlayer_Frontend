import { commonApi } from "./CommonApi"
import { ServerUrl } from "./ServerUrl"

 

    // api to add videos
      export const allVideoApi = async(reqBody)=>{
      return await commonApi('POST',`${ServerUrl}/allVideos`,reqBody) 
    }

    // api to get all videos

    export const getAllVideoApi = async()=>{
      return await commonApi('GET',`${ServerUrl}/allVideos`,"")
    }

    // api to delete videos

    export const deleteVideoApi = async(id)=>{
      return await commonApi('DELETE',`${ServerUrl}/allVideos/${id}`,{})
    }

    // api to add video to watch history

    export const addVideoToWhis = async(reqBody)=>{
       return await commonApi('POST',`${ServerUrl}/history`,reqBody)
    }

    // api to get all videos from histroy

    export const getVideosFromhistory = async()=>{
      return await commonApi('GET',`${ServerUrl}/history`)
    }

    // api to delete video from watch history 

    export const deleteVideoWatchHis = async(id)=>{
      return await commonApi('DELETE',`${ServerUrl}/history/${id}`,{})
    }

    // api to add category 

    export const addVideoCategory = async(reqBody)=>{
      return await commonApi('POST',`${ServerUrl}/category`,reqBody)
    }

    export const getCategory = async()=>{
        return await commonApi('GET',`${ServerUrl}/category`,"")
    }

    // api to delete category

    export const deleteCategory = async(id)=>{
      return await commonApi('DELETE',`${ServerUrl}/category/${id}`,{})
    }

    // api to get a single video

    // export const getAsingleViddeo = async()=>{
    //  return await commonApi('GET',`${ServerUrl}/allVideos`,"")
    // }

    // api to update category

    export const updateCategory = async(id,reqBody)=>{
      return await commonApi('PUT',`${ServerUrl}/category/${id}`,reqBody)
    }