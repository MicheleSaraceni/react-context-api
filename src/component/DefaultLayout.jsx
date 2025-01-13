import { Outlet } from "react-router-dom";
import HeaderComp from "./HeaderComp";
import FooterComp from "./FooterComp";
import Alert from "./Alert";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <Alert />
            <Outlet />
            <FooterComp />
        </>
    )
}   