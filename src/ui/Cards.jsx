import Button from "./Button";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../features/post/postSlice";
function Cards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  const posts = useSelector((state) => state.post.post.blogs);
  return (
    <div className="w-full sm:w-5/6 m-auto px-4 sm:px-0 py-4 sm:py-12 mb-10">
      <h3 className="text-accentCyan text-center sm:text-left text-light sm:text-paragraph tab:text-h4 font-semibold py-2">
        Impact Stories
      </h3>
      <div className="flex flex-col sm:flex-row justify-between items-center pb-4 sm:pb-10">
        <h1 className="text-h3 sm:text-s1 laptop:text-title text-center sm:text-left font-pally font-bold text-secondary">
          How Your Zakat Makes a Difference
        </h1>
        <Button
          bg={"bg-accentRed"}
          onClick={() => window.open(`https://blog.alzakati.com`, "_blank")}
        >
          view all stories
        </Button>
      </div>
      <div className="flex flex-col laptop:flex-row gap-4 laptop:gap-0 justify-between items-center">
        {posts &&
          posts.map((post) => (
            <CardItem
              key={post.id}
              img={post.image}
              title={`Story of ${post.title}`}
              text={post.quote.substring(0, 200)}
            />
          ))}
      </div>
    </div>
  );
}

export default Cards;
