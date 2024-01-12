import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./routes/NotFound";
import Movies from "./routes/Movies";
import Tv from "./routes/Tv";

const router = createBrowserRouter([
    {
      path: "",
      errorElement:  <NotFound />, // 에러 주소 페이지
      element: <Outlet />, // 중첩 라우팅
      children: [ // 중첩 라우팅
        {
          path: "/",
          element: <App />
        },
        {
          path: "/movies",
        element: <Movies />
        },
        {
          path: "/tv",
          element: <Tv />
        },
      ]
    }
]);

export default router;