"use client";

import React, { useState, useEffect } from 'react';
import { fetchContent } from '/contentful.js'; // Import the fetchContent function
import TalksCards from './TalksCards';
import TalksTag from './TalksTag';

const TalksSection = () => {
  const [tag, setTag] = useState("All");
  const [talks, setTalks] = useState([]);

  // Fetch data from Contentful on component mount
  useEffect(() => {
    async function getTalks() {
      try {
        const talksData = await fetchContent('talks'); // 'talk' is the content type in Contentful
        setTalks(talksData);
      } catch (error) {
        console.error("Error fetching talks:", error);
      }
    }
    getTalks();
  }, []);

  // Handle tag change
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter talks based on the selected tag
  const filteredTalks = talks.filter((talk) =>
    talk.fields.tags.includes(tag) || tag === "All" // Filter by tags, or show all if 'All' is selected
  );

  return (
    <div className="py-8 mx-auto max-w-7xl px-4">
      <h2 id="talks" className="text-center text-4xl font-bold text-[#002347] mb-8">
        My Talks
      </h2>
      {/* Tags Section */}
      <div className="text-[#002347] flex flex-row justify-center items-center gap-4 py-6">
        <TalksTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <TalksTag
          onClick={handleTagChange}
          tag="Data"
          isSelected={tag === "Data"}
        />
        {/* Add more tags as needed */}
      </div>
      {/* Talks Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredTalks.map((talks) => (
          <TalksCards
            key={talks.sys.id}
            imgUrl={talks.fields.image ? talks.fields.image.fields.file.url : '/default-image.jpg'} // Add fallback image
            title={talks.fields.title}
            description={talks.fields.description}
            previewUrl={talks.fields.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TalksSection;
