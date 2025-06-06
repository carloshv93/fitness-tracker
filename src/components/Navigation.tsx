import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ol style={{
                listStyleType: "none",
                display: "flex",
                gap: "1rem",
                borderLeft: "1px solid var(--tertiary-color)",

            }}>
                <li>
                    <Link to='/'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>

            </ol>
        </nav>
    )
}
