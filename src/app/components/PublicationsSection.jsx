"use client";

import React, { useState, useEffect } from 'react';
import { fetchContent } from '/contentful.js'; // Import the fetchContent function
import PublicationsCards from './PublicationsCards';
import PublicationsTag from './PublicationsTag';

const PublicationsSection = () => {
  const [tag, setTag] = useState("All");
  const [publications, setPublications] = useState([]);

  // Fetch data from Contentful on component mount
  useEffect(() => {
    async function getPublications() {
      try {
        const publicationsData = await fetchContent('publications');
        setPublications(publicationsData);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    }
    getPublications();
  }, []);

  // Handle tag change
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter publications based on the selected tag
  const filteredPublications = publications.filter((publications) =>
    publications.fields.tags.includes(tag) || tag === "All" // Filter by tags, or show all if 'All' is selected
  );

  return (
    <div className="py-8 mx-auto max-w-7xl px-4">
      <h2 id="publications" className="text-center text-4xl font-bold text-[#002347] mb-8">
        My Publications
      </h2>
      {/* Tags Section */}
      <div className="text-[#002347] flex flex-row justify-center items-center gap-4 py-6">
        <PublicationsTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <PublicationsTag
          onClick={handleTagChange}
          tag="Undergrad"
          isSelected={tag === "Undergrad"}
        />
        {/* Add more tags as needed */}
      </div>
      {/* Publications Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredPublications.map((publications) => (
          <PublicationsCards
            key={publications.sys.id}
            imgUrl={publications.fields.image.fields.file.url} // Image URL from Contentful
            title={publications.fields.title}
            description={publications.fields.description}
            gitUrl={publications.fields.gitUrl}
            previewUrl={publications.fields.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;
