import { baseUrl } from "../constants/strings"

export const universalJSONPost = async (data:any,url:string, jwt?:string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const fullUrl=`${baseUrl}/${url}`
    try {
        const response=await fetch(fullUrl, requestOptions);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const universalJsonPostNoBody=async (url:string,jwt?:string)=>{
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
    };
    const fullUrl=`${baseUrl}/${url}`
    try {
        const response=await fetch(fullUrl, requestOptions);

        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const universalFilePost=async (url:string,data:any)=>{
    const requestOptions = {
        method: 'POST',
        body: data
    };
    const fullUrl=`${baseUrl}/${url}`
    try {
        const response=await fetch(fullUrl, requestOptions);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

//http://localhost:3000