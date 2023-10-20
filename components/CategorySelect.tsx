import React, { EventHandler } from "react";

type OptionProps = {
  key: string;
  label: string;
};

type CategorySelectProps = {
  htmlFor: string;
  labelName: string;
  id: string;
  selectName: string;
  options: OptionProps[];
  selectValue?: string;
  handleChange: any;
};

const CategorySelect = ({
  htmlFor,
  labelName,
  id,
  selectName,
  options,
  handleChange,
  selectValue,
}: CategorySelectProps) => {
  return (
    <div className="mb-6 w-[23%] md:w-full">
      <label
        htmlFor={htmlFor}
        className="w-full block mb-3 uppercase text-[#89888B]"
      >
        {labelName}
      </label>
      <select
        id={id}
        name={selectName}
        className="common-form-input"
        value={selectValue}
        onChange={handleChange}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
