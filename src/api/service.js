import axiosSecure from "."

// fetch all services
export const getAllServices =async() =>{
    const {data} = await axiosSecure('/services');
    return data;
}