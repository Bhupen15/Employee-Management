import axios from "axios";

let url = "https://bhs-orcin.vercel.app/api/v1/employee/"

export const addemployee = async (data) => {
    try {
        return await axios.post(`${url}addemployee`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        return err;
    }
}

export const getemployee = async (id) => {
    try {
        return await axios.get(`${url + id}`);
    } catch (error) {
        return error;
    }
}
export const getAllemployee = async (data) => {
    try {
        return await axios.get(`${url}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        return err;
    }
}
export const editemployee =async (data,id) =>{
    try {
        return await axios.post(`${url}editemployee/${id}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        return err;
    }
}