import MainLayout from "@/layouts/MainLayout";
import { Navigate, useParams } from "react-router-dom";
import ProjectNavBar from "./ProjectNavBar";
import { projects } from "@/data/projects";

export default function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((p) => p.id === projectId);

  if (!project) return <Navigate to="/404" replace />;
  
  return (
    <MainLayout>
      <ProjectNavBar />
      <div className="text-6xl text-white">{projectId}</div>
    </MainLayout>
  );
}
