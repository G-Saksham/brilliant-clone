import { ReactNode } from "react";
import LandingNavbar from "../components/LandingNavbar";

export default function LandingLayout (children: ReactNode) {
    return (
        <>
            <LandingNavbar/>
            <main>{children}</main>
        </>
    )
}