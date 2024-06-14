import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import Refer from "./Pages/Refer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import MainPage from "./Pages/MainPage";
import PlayPage from "./Pages/PlayPage";
import Me from "./Pages/Me";
import MyProfile from "./PagesOnDashBoardMe/MyProfile";
import ReferAndEarn from "./PagesOnDashBoardMe/ReferAndEarn";
import MyReward from "./PagesOnDashBoardMe/MyReward";
import MyWallet from "./PagesOnDashBoardMe/MyWallet";
import MyStatistics from "./PagesOnDashBoardMe/MyStatistics";
import Notifications from "./PagesOnDashBoardMe/Notifications";
import ImportantGuides from "./PagesOnDashBoardMe/ImportantGuides";
import AboutUs from "./PagesOnDashBoardMe/AboutUs";
import Legality from "./PagesOnDashBoardMe/Legality";
import CostomerSupport from "./PagesOnDashBoardMe/CostomerSupport";
import SignupLoginPage from "./Pages/SignupLoginPage";

import VideoPage from "./Pages/VideoPage";
import PrivateRoute from "./Components/PrivateRouter";
import { useGlobalContext } from "./context";
import AdminRouter from "./router/AdminRouter";
import AdminDashbordPage from "./Pages/AdminDashbordPage";
import AdminLoginPage from "./Pages/AdminLoginPage";

const App = () => {
  const { userDetail } = useGlobalContext();
  console.log(userDetail.userId);
  const myRouter = createBrowserRouter([
    {
      path: "/",
      Component: MainPage,
      children: [
        { path: "/", Component: HomePage },
        { path: "home", Component: HomePage },
        { path: "refer", Component: Refer },
        { path: "loginSignup", Component: SignupLoginPage },
      ],
    },
    {
      path: "admipanel",
      Component: AdminLoginPage,
    },
    {
      path: "admin",
      Component: AdminRouter,
      children: [{ path: "", Component: AdminDashbordPage }],
    },
    {
      path: "user",
      Component: PrivateRoute,
      children: [
        {
          path: "",
          Component: DashBoard,
          children: [
            { path: "play", Component: PlayPage },
            { path: "", Component: PlayPage },
            { path: "videos", Component: VideoPage },

            // for mobile screen

            { path: "profile", Component: MyProfile },
            { path: "refer&_earn", Component: ReferAndEarn },
            { path: "wallet", Component: MyWallet },
            { path: "statistics", Component: MyStatistics },
            { path: "notification", Component: Notifications },
            { path: "importantGuides", Component: ImportantGuides },
            { path: "aboutus", Component: AboutUs },
            { path: "customerSupport", Component: CostomerSupport },
            { path: "lagality", Component: Legality },
            {
              path: "me",
              Component: Me,
              children: [
                { path: "", Component: MyProfile },
                { path: "profile", Component: MyProfile },
                { path: "refer&earn", Component: ReferAndEarn },
                { path: "reward", Component: MyReward },
                { path: "wallet", Component: MyWallet },
                { path: "statistics", Component: MyStatistics },
                { path: "notification", Component: Notifications },
                { path: "importantGuides", Component: ImportantGuides },
                { path: "aboutus", Component: AboutUs },
                { path: "customerSupport", Component: CostomerSupport },
                { path: "lagality", Component: Legality },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={myRouter}></RouterProvider>
    </ChakraProvider>
  );
};

export default App;
