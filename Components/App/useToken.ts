import { useState } from "react";

export const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");

    if (tokenString) {
      let token = JSON.parse(tokenString);

      return token?.token;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));

    setToken(userToken.data);
  };

  return {
    setToken: saveToken,
    token,
    getToken: getToken,
  };
};
