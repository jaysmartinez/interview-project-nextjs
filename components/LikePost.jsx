import sleep from "@/lib/sleep";

const LikePost = () => {
  const likePost = async () => {
    // Faking a long API request here
    await sleep(3000);
    console.log('Liked blog post');
  };

  return (
    <button className="bg-slate-700 text-white p-4 rounded-md hover:bg-slate-600"
      onClick={likePost}
    >
      Like this post
    </button>
  )
}

export default LikePost
