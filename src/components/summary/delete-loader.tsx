import React from "react";

const DeleteLoader = () => {
  return (
    <div className="w-72  bg-white rounded-l-md shadow shadow-black flex items-center justify-center py-4 gap-4">
      {/* Spinner */}
      <div className="size-4 border-2 border-rose-300 border-t-rose-600 rounded-full animate-spin" />

      {/* Message */}
      <p className="text-sm lg:text-base text-gray-600 font-medium animate-pulse">
        Deleting summary... Please wait.
      </p>
    </div>
  );
};

export default DeleteLoader;
