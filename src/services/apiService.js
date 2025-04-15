import { delay } from "lodash";
import axios from "../utils/axiosCustomize";
import FormData from "form-data";

const postCreateNewUser = async (data) => {
    const form = new FormData();
    form.append("email", data.Email);
    form.append("password", data.Password);
    form.append("username", data.Username);
    form.append("role", data.Role);
    form.append("userImage", data.Image);
    return await axios.post("/api/v1/participant", form);
};

const getAllUsers = async () => {
    return await axios.get("/api/v1/participant/all");
};
const putUpdateUser = async (data) => {
    const form = new FormData();
    form.append("id", data.Id);
    form.append("username", data.Username);
    form.append("role", data.Role);
    form.append("userImage", data.Image);
    return await axios.put("/api/v1/participant", form);
};

const deleteUser = async (userid) => {
    return await axios.delete("/api/v1/participant", { data: { id: userid } });
};
const getUserWithPaginate = async (page, limit) => {
    return await axios.get(
        `http://localhost:8081/api/v1/participant?page=${page}&limit=${limit}`
    );
};
const postLogin = async (userEmail, userPassword) => {
    return await axios.post("/api/v1/login", {
        email: userEmail,
        password: userPassword,
        delay: 1000,
    });

    // const postLogin = async (userEmail, userPassword) => {
    // return await axios.post("/api/v1/login", { userEmail, userPassword });
    // };
};

const postRegister = async (userEmail, userName, userPassword) => {
    return await axios.post("/api/v1/register", {
        email: userEmail,
        username: userName,
        password: userPassword,
    });
};

export {
    postCreateNewUser,
    getAllUsers,
    putUpdateUser,
    deleteUser,
    getUserWithPaginate,
    postLogin,
    postRegister
};
