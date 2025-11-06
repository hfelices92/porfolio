import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProjectDetails from "./components/projects/project-details/ProjectDetails";
import NotFound from "./views/NotFound";
import Space from "./views/Space";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} index />
         <Route path="/projects/:projectId" element={<ProjectDetails />} />
         <Route path="/space" element={<Space />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
