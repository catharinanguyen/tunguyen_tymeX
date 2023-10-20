import React from "react";
import collectionData from "../public/data.json";
import Card from "./Card";
import SearchTags from "./SearchTags";
import Button from "./Button";

const initialHeroList = 6; // Number of hero to display initially
const incrementInitialHeroList = 4; // Number of hero to add each time the "view more" button is clicked

const CollectionsContent = ({ collection, handleButtonClick }: any) => {
  const [displayHeros, setDisplayHeros] = React.useState(initialHeroList);
  const viewMore = () => {
    setDisplayHeros(displayHeros + incrementInitialHeroList);
  };
  return (
    <div className="md:w-[80%]">
      <SearchTags handleButtonClick={handleButtonClick} />
      <ul className="flex flex-wrap gap-10 items-start justify-start ">
        {collection.slice(0, displayHeros)}
      </ul>
      {displayHeros < collection.length ? (
        <div className="flex items-center justify-center">
          <Button
            title="View more"
            type="button"
            className="common-button text-[16px] py-2 w-[326px] h-[70px]"
            onClick={viewMore}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CollectionsContent;
