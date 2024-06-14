import { useGlobalContext } from "../context";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRouter = () => {
  const { isLogin } = useGlobalContext();
  return isLogin ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRouter;
