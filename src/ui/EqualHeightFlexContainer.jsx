import { useRef, useEffect } from "react";

const EqualHeightFlexContainer = ({ children, addedClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const setEqualHeight = () => {
      if (containerRef.current) {
        const children = containerRef.current.children;
        let maxHeight = 0;

        // Find the maximum height among children
        for (let i = 0; i < children.length; i++) {
          const childHeight = children[i].clientHeight;
          if (childHeight > maxHeight) {
            maxHeight = childHeight;
          }
        }

        // Set the height of all children to the maximum height
        for (let i = 0; i < children.length; i++) {
          children[i].style.height = `${maxHeight}px`;
        }
      }
    };

    // Call setEqualHeight initially and on window resize
    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);
    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, [children.length]);
  return (
    <div className={`flex ${addedClass ? addedClass : ""}`} ref={containerRef}>
      {children}
    </div>
  );
};

export default EqualHeightFlexContainer;
