import React from "react";
// Horizontal scroll items
const items = ["HACKATHON ", "WORKSHOPS ", "INTERNSHIPS", "PROJECTS"];

const InfiniteHorizontalScroll = () => {
  // Repeat items to simulate infinite scrolling
  const repeatedItems = [...Array(10)].flatMap(() => items);

  return (
    <div className="w-full overflow-hidden">
      <div className="animated-scroll">
        {repeatedItems.map((item, index) => (
          <>
            <div
              className={`w-4 h-4 rounded-full bg-blue-500 mx-4 my-auto`}
            ></div>
            <div
              key={`${item}-${index}`}
              className="flex-shrink-0 mx-4 p-4 rounded text-center"
              style={{ minWidth: "200px" }}
            >
              {item}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
