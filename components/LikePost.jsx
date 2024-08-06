import React, { useState } from 'react';
import sleep from "/lib/sleep";

const LikePost = () => {
  const [isLoading, setIsLoading] = useState(false);  // State to track loading
  const [liked, setLiked] = useState(false);

  const likePost = async () => {
    setIsLoading(true);  // Start loading
    await sleep(3000);   // Simulating network request
    console.log('Liked blog post');
    setIsLoading(false); // End loading
    setLiked(true);  // Set liked to true
  };

  return (
    <div>
      <button
        className={`bg-slate-700 text-white p-4 rounded-md mt-6 mb-4 hover:bg-slate-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={likePost}
        disabled={isLoading}  // Disable button while loading
      >
        {isLoading ? 'Loading...' : 'Like this post'}
      </button>
      {liked && <p className="text-green-500 mt-4">Post has been liked</p>}
    </div>
  );
}

export default LikePost;