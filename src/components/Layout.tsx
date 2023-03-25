import { PropsWithChildren, FC } from "react"
import { Footer, Header } from "./index"

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout