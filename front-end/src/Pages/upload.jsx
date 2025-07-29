import React from "react";

const upload = () => {
  return (
    <div>
      <form action="/upload" method="post" encType="multipart/form-data">
        <label for="file">choose a file:</label>
        <input type="file" name="upload" multiple />
        <button className="bg-pink-500 text-white p-2 rounded-md">
          upload image
        </button>
      </form>
    </div>
  );
};

export default upload;
