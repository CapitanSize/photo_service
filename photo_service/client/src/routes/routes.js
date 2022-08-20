import {IMG_ROUTE, MAIN_ROUTE} from "./consts";
import MainPage from "../pages/MainPage";
import ImgPage from "../pages/ImgPage";

export const routes = [{
    path: MAIN_ROUTE,
    element: <MainPage/>
},
    {
        path: IMG_ROUTE + '/:id',
        element: <ImgPage/>
    }
]