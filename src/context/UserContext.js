import axios from "axios";
import { createContext, useState } from "react";

export const userContext = createContext();
export default function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [err, setErr] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  async function logInHandler({ email, password }) {
    const config = {
      method: "POST",
      url: "https://clinic-api.appssquare.com/api/admin/login",
      data: {
        email,
        password,
      },
    };
    await axios
      .request(config)
      .then((res) => {
        setToken(res.data.token);
        setErr(null);
        setUserInfo(res.data.data);
        return Promise.resolve("success");
      })
      .catch((err) => {
        console.log(err);
        setErr(err.response.data.message);
        return Promise.reject("failed");
      });
  }
  const signOut = () => {
    setToken(null);
  };
  const values = { token, logInHandler, signOut, err, userInfo };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
}
