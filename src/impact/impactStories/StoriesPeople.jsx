import StoryItem from "./StoryItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../features/post/postSlice";
function StoriesPeople() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  const posts = useSelector((state) => state.post.post.blogs);
  return (
    <div className="text-center py-[4%] bg-primary px-[3%]">
      <h2 className="w-5/6 laptop:w-4/5 m-auto text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        Stories of people who were impacted by your donation
      </h2>
      <p className="w-full px-4 laptop:px-0 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%]">
        Here are a few people who were relieved by the donation of your zakat.
        By your zakat their life has been changed. They are back in their feet,
        has smile on their lips.
      </p>
      <div className="w-11/12 tab:w-4/5 m-auto gap-2 tab:gap-8 flex flex-wrap justify-center items-center">
        {posts &&
          posts.map((post) => (
            <StoryItem
              key={post.id}
              img={post.image}
              title={post.title}
              id={post.id}
            />
          ))}
      </div>
    </div>
  );
}

export default StoriesPeople;
