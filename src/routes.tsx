import PaginaPadrao from "components/PaginaPadrao";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<div><h1>Hello World!</h1></div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}