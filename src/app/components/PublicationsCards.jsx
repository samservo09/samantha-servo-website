import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PublicationsCards = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      {/* Image Section with hover effect */}
      <div className="relative group h-52 md:h-72">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[#002347] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center space-x-4">
          {/* GitHub Link */}
          <Link
            href={gitUrl || "/"}
            className="h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#f1f5f3] hover:text-[#687771] cursor-pointer" />
            </Link>
          {/* Preview Link */}
          <Link
            href={previewUrl || "/"}
            className="h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <EyeIcon className="h-10 w-10 text-[#f1f5f3] hover:text-[#687771] cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-[#002347] rounded-b-xl bg-[#687771] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#f1f5f3]">{description}</p>
      </div>
    </div>
  );
};

export default PublicationsCards;
