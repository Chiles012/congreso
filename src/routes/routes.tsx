import { Route } from "../common/interfaces/Routes";
import { Home } from "../pages";

const routes: Route[] = [
    {
        path: "/",
        component: <Home/>,
        exact: true,
    }
];

export default routes;