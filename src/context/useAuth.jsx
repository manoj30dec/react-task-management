
// import { use } from "react"; //This works in React 19
import { useContext } from "react";
import AuthContext from "./auth-context";
const useAuth = () => {
    // const context = useContext(AuthContext);
    const context = useContext(AuthContext); //React 19 way
    if (!context) throw new Error("useAuth must be used inside AuthProivder");
    return context;
}
export default useAuth;