import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TalksCards = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#002347]">
      {/* Image Section with hover effect */}
      <div className="relative group h-52 md:h-72">
        {/* Image */}
        <div
          className="h-full w-full bg-cover bg-center transition-all duration-500 group-hover:brightness-50"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>

        {/* Eye Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 rounded-full border-[#f1f5f3] flex items-center justify-center"
          >
            <EyeIcon className="h-8 w-8 text-[#f1f5f3] hover:text-[#687771]" />
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

export default TalksCards;
