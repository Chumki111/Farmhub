import axiosSecure from "."

// fetch all services
export const getAllServices = async () => {
    const { data } = await axiosSecure('/services');
    return data;
}
// fetch single service
export const getSingleService = async (id) => {
    const { data } = await axiosSecure(`/service/${id}`);
    return data;
}