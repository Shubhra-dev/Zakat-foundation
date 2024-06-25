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

    // Create a ResizeObserver to detect changes in the container's size
    const resizeObserver = new ResizeObserver(() => {
      setEqualHeight();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`flex flex-col sm:flex-row ${addedClass}`}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default EqualHeightFlexContainer;
