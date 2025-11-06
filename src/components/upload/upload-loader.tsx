const UploadLoader = () => {
  return (
    <div className="w-72 bg-white rounded-l-md shadow shadow-black flex  items-center justify-center gap-4 py-2">
      {/* Spinner */}
      <div className="size-4 border-2 border-rose-300 border-t-rose-600 rounded-full animate-spin"></div>

      {/* Message */}
      <p className="text-sm text-gray-600 font-medium">
        Your PDF summary is generating... <br /> Please wait.
      </p>
    </div>
  );
};

export default UploadLoader;
