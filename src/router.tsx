import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./views/NotFound";
import Space from "./views/Space";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} index />
         <Route path="/space" element={<Space />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
