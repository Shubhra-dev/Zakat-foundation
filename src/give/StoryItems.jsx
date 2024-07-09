import StoryCardItem from "./giveZakat/StoryCardItem";
import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../features/post/postSlice";

function StoryItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  const posts = useSelector((state) => state.post.post.blogs);
  return (
    <>
      <EqualHeightFlexContainer addedClass="pb-2 flex-wrap tab:pb-[5%] flex-col tab:flex-row items-center gap-2 tab:gap-6 sm:justify-between">
        {posts &&
          posts.map((post) => (
            <StoryCardItem
              key={post.id}
              img={post.image}
              alt={post.title}
              heading={post.heading}
              id={post.id}
              text={post.quote.substring(0, 200)}
            />
          ))}
      </EqualHeightFlexContainer>
    </>
  );
}

export default StoryItems;
