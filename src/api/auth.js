import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};
const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};
const logout = () => {
  localStorage.removeItem("token");
};

export { login, register, me, getAllUsers, logout };
