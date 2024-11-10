import { ReactNode } from "react";
import Navbar from "../components/nav/Navbar";

export default function DashboardLayout (children: ReactNode) {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}