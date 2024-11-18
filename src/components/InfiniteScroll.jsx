import React from "react";

const InfiniteScroll = ({ children }) => {
  const decoratedChildren = React.Children.map(children, (child, index) => (
    <>
      <li className="flex items-center">{child}</li>
      {/* Add ball between items, except for the last item */}
      <div
        className={`w-4 h-4 rounded-full bg-blue-500 mx-4 ${
          index === children.length - 1 ? "hidden" : ""
        }`}
      ></div>
    </>
  ));

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-[110vw] inline-flex flex-nowrap gap-20 overflow-hidden">
        {/* Main scrolling list */}
        <ul className="flex w-1/2 justify-between items-center [&_img]:max-w-none animate-infinite-scroll">
          {decoratedChildren}
        </ul>

        {/* Duplicate list for seamless scrolling */}
        <ul
          className="flex w-1/2 justify-between items-center [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <div className={`w-4 h-4 rounded-full bg-blue-500 mx-4`}></div>
          </li>
          {decoratedChildren}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteScroll;
