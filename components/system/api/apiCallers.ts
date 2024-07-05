import { baseUrl } from "../statics/strings"

export const universalJSONPost = async (data:any,url:string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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

export const universalJSONPut = async (data:any,url:string, jwt?:string) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`
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

export const universalJsonPostNoBodyNoJwt=async (url:string)=>{
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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

export const universalFilePost=async (url:string,data:any, token:string)=>{
    const requestOptions = {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${token}`
        },
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

export const universalProtectedGet=async (url:string, token:string)=>{
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    };

    console.log(requestOptions);

    const fullUrl=`${baseUrl}/${url}`
    
    try{
        const response=await fetch(fullUrl, requestOptions);
        const data=await response.json();
        return data;
    }
    catch(err){
        console.log("Error :", err);
    }
}

export const universalGet=async (url:string)=>{
    const fullUrl=`${baseUrl}/${url}`
    try{
        const response=await fetch(fullUrl);
        return response;
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
        },
    };

    const fullUrl=`${baseUrl}/${url}`
    try{
        const response=await fetch(fullUrl,requestOptions);
        return response;
    }
    catch(err){
        console.log("Error :", err);
    }
}

//http://localhost:3000