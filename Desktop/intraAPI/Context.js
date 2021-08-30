import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [usercred, setUsercred] = useState({});
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          var raw = {
            email: email,
            password: password,
          };

          var requestOptions = {
            method: "POST",
            body: JSON.stringify(raw),
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
          };
          const apiURL =
            "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
          fetch(`${apiURL}/user/login`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log("result ==========================>", result);
              setUsercred(result);
              console.log("usercred ==========================>", usercred);
            })

            .catch((error) => console.log("error", error));
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
