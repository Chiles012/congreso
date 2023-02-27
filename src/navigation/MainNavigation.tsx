import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../types";

const MainNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, index) => {
                        return (
                            <Route path={route.path} element={<route.component/>} key={index} />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default MainNavigation;