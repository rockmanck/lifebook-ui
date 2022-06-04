import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Registry from "./routes/Registry";
import BannerImage from "./components/BannerImage";
import TabControl from "./components/TabControl";

function App() {
    return (
        <div className="App">
            <header>
                <BannerImage/>
            </header>
            <TabControl />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/registry" element={<Registry/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
