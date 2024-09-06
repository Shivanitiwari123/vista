import Link from "next/link";
import React from "react";

const AnnouncementBarV1 = ({ data }) => {
  return (
    <div className="w-full bg-blue-500">
      {data?.show === true && (
        <div className="announcement-bar bg-red-300 p-4 w-full">
          Announcement bar v1
        </div>
      )}
    </div>
  );
};

export default AnnouncementBarV1;
