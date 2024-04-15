import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import LandingPage from "./components/LandingPage";

import { Toaster } from 'sonner'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
      <Toaster
          position="bottom-right"
          expand={false}
          duration={5000}
          closeButton
          richColors
        />
    </div>
  );
}

export default App;
