import { LazyExoticComponent, ReactNode } from "react"

type JSXComponent = () => JSX.Element;

type RoutesConfig = {
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    permission?: string,
}

export default RoutesConfig