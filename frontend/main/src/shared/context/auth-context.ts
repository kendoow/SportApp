// import React, { createContext, useState, useEffect, Provider } from "react";
//
// interface AuthState {
//   token: string;
// }
//
// interface AuthContextType {
//   authState: AuthState;
//   setUserAuthInfo: (userAuthInfo: { data: string }) => void;
//   isUserAuthenticated: () => boolean;
//   logout: () => void;
// }
//
// const AuthContext = createContext<AuthContextType | undefined>(undefined);
// const { Provider } = AuthContext;
//
// const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState<AuthState>(() => {
//     const token = localStorage.getItem("token");
//     return { token: token || "" };
//   });
//
//   const setUserAuthInfo = ({ data }: { data: string }) => {
//     localStorage.setItem("token", data);
//     setAuthState({ token: data });
//   };
//
//   const isUserAuthenticated = () => {
//     return !!authState.token;
//   };
//
//   const logout = () => {
//     localStorage.removeItem("token");
//     setAuthState({ token: "" });
//   };
//
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token !== authState.token) {
//       setAuthState({ token: token || "" });
//     }
//   }, [authState.token]);
//
//   return (
//     <Provider
//       value= {{
//     authState,
//       setUserAuthInfo,
//       isUserAuthenticated,
//       logout,
//       }
// }
//     >
//   { children }
//   < /Provider>
//   );
// };
//
// export { AuthContext, AuthProvider };
