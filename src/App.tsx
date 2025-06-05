import appLogo from '/logo.svg'

function App() {

    return (
        <>
            <div style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
            }}>
                <div style={{
                    objectFit: "contain",
                    width: "100px",
                    height: "100px",
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                    }} src={appLogo} className="logo" alt="Fitness tracker logo"/>
                </div>


                <h1>Fitness tracker</h1>
            </div>
        </>
    )
}

export default App
