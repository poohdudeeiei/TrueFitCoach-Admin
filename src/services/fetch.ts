import { LoginType, RegisterType } from "@/model/auth";
import axios, { AxiosError, isAxiosError } from "axios";
import { baseURL } from "@/config/endpoint/public";

export const axiosPath = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export const postRegister = async (
  path: string,
  data: RegisterType
): Promise<{ status: number; response: any }> => {
  const { first_name, last_name, username, email, password } = data;
  const body = {
    first_name: first_name,
    last_name: last_name,
    username: username,
    email: email,
    password: password,
  };

  try {
    const result = await axiosPath.post(path, body);
    return { status: result.status, response: result.data };
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        response: error.response?.data,
      };
    }
    return { status: 500, response: "Fetch error" };
  }
};

export const postLogin = async (
  path: string,
  data: LoginType
): Promise<{ status: number; response: any }> => {
  const { email, password } = data;
  const body = {
    email: email,
    password: password,
  };

  try {
    const result = await axiosPath.post(path, body);
    return { status: result.status, response: result.data };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: error.response?.status || 500,
        response: error.response?.data || "Failed to fetch",
      };
    }
    return { status: 500, response: "Fetch error" };
  }
};
