import { ReactNode } from "react";

export type Route = {
    path: string;
    component: ReactNode;
    exact?: boolean;
    routes?: Route[];
};