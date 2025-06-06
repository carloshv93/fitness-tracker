import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Dashboard} from "./pages/Dashboard.tsx";
import {History} from "./pages/History.tsx";
import {Layout} from "./components/Layout.tsx";


function App() {

    return (
        <BrowserRouter basename="/fitness-tracker">
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="*" element={<History/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
