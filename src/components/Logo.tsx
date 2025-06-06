import appLogo from '/logo.svg'
import {useNavigate} from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate("/")
    }

    return (
        <div
            style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
            }}
            onClick={handleLogoClick}
        >
            <div
                style={{
                    padding: "0.5rem",
                    objectFit: "contain",
                    width: "25px",
                    height: "25px",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    src={appLogo}
                    alt="Fitness tracker logo"/>
            </div>
            <h1
                style={{
                    fontSize: "2rem",
                }}>
                Fitness tracker
            </h1>
        </div>
    )
}
