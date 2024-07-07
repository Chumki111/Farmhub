import axiosSecure from ".";

// fetch all products
export const getAllProducts = async (category, color, unit, sort) => {
    const { data } = await axiosSecure(`/allProducts?category=${category}&color=${color}&unit=${unit}&sort=${sort}`);
    return data;
};

// fetch single product
export const getSingleProduct = async(id) =>{
    const {data} = await axiosSecure(`/product/${id}`)
    return data;
}