"use client";

import React, { useState, useEffect } from 'react';
import { fetchContent } from '/contentful.js'; // Import the fetchContent function
import ProjectCards from './ProjectCards';
import ProjectTag from './ProjectTag';

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [projects, setProjects] = useState([]);

  // Fetch data from Contentful on component mount
  useEffect(() => {
    async function getProjects() {
      try {
        const projectsData = await fetchContent('project'); // 'project' is the content type in Contentful
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    getProjects();
  }, []);

  // Handle tag change
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter projects based on the selected tag
  const filteredProjects = projects.filter((project) =>
    project.fields.tags.includes(tag) || tag === "All" // Filter by tags, or show all if 'All' is selected
  );

  return (
    <div className="py-8 mx-auto max-w-7xl px-4">
      <h2 id="projects" className="text-center text-4xl font-bold text-[#002347] mb-8">
        My Projects
      </h2>
      {/* Tags Section */}
      <div className="text-[#002347] flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} tag="Data" isSelected={tag === "Data"} />
        <ProjectTag onClick={handleTagChange} tag="AI/ML" isSelected={tag === "AI/ML"} />
        <ProjectTag onClick={handleTagChange} tag="Cloud" isSelected={tag === "Cloud"} />
        {/* Add more tags if necessary */}
      </div>
      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredProjects.map((project) => (
          <ProjectCards
            key={project.sys.id}
            imgUrl={project.fields.image ? project.fields.image.fields.file.url : '/default-image.jpg'} // Add fallback image
            title={project.fields.title}
            description={project.fields.description}
            gitUrl={project.fields.gitUrl}
            previewUrl={project.fields.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
