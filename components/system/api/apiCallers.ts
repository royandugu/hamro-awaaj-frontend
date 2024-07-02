import { baseUrl } from "../statics/strings"

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
    console.log(fullUrl);
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
    console.log(data);
    console.log(fullUrl);
    try {
        const response=await fetch(fullUrl, requestOptions);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const universalProtectedGet=async (url:string, token:string)=>{
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    const fullUrl=`${baseUrl}/${url}`
    try{
        const response=await fetch(fullUrl,requestOptions);
        const data=await response.json();
        return data;
    }
    catch(err){
        console.log("Error :", err);
    }
}

export const universalDelete=async (url:string, token:string)=>{
    const requestOptions={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    const fullUrl=`${baseUrl}/${url}`
    try{
        const response=await fetch(fullUrl,requestOptions);
        const data=await response.json();
        return data;
    }
    catch(err){
        console.log("Error :", err);
    }
}

//http://localhost:3000