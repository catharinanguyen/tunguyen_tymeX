import { SORT_TAGS } from "@/constants";
import React from "react";
import Button from "./Button";

type TagsType = {
  key: string;
  label: string;
};

const SearchTags = ({ handleButtonClick }: any) => {
  return (
    <div className="mb-10">
      <ul className="flex flex-wrap items-center justify-between gap-6">
        {SORT_TAGS.map((item: TagsType) => (
          <li key={item.key}>
            <Button
              type="button"
              title={item.label}
              className="common-button px-4 py-2"
              onClick={handleButtonClick}
              value={item.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTags;
