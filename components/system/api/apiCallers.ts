import { baseUrl } from "../constants/strings"

export const universalJSONPost = async (data:any,url:string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    const fullUrl=`${baseUrl}/${url}`
    console.log(fullUrl);
    try {
        const response=await fetch(fullUrl, requestOptions);

        console.log(response);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
}

//http://localhost:3000