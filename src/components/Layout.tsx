import {Outlet} from "react-router-dom";

import {Navigation} from "./Navigation.tsx";
import {Logo} from "./Logo.tsx";

export const Layout = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateRows: "auto 1fr auto",
            width: "100dvw",
            minHeight: "100dvh",
        }}>
            <header style={{
                borderBottom: "1px solid #ccc",
                width: "100%",
                alignItems: "center",
                display: "flex",
                gap: "2rem",
            }}>
                <Logo/>
                <Navigation/>
            </header>
            <main style={{
                padding: "1rem",
            }}>
                <Outlet/>
            </main>
            <footer style={{
                textAlign: "center",
                padding: "1rem",
                borderTop: "1px solid #ccc",
            }}>
                Developed by Carlos Herrera
            </footer>
        </div>
    )
}
