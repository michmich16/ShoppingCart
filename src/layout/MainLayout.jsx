import { Outlet } from "react-router-dom"
import { Navigation } from "../components/Navigation/Navigation"
import { Cart } from "../components/Cart/Cart"

export const MainLayout = () => {

    return (
        <>
            <Navigation />
            <Cart />
            <Outlet />
        </>
    )
}