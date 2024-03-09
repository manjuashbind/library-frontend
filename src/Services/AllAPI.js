import { commonAPI } from "./CommonApi";
import { baseURL } from "./BaseUrl";

export const addbookapi=async(book)=>{
    return await commonAPI("post",`${baseURL}/addbook`,book,"")
}
export const viewbookapi=async()=>{
    return await commonAPI("get",`${baseURL}/viewbooks`,"","")
}