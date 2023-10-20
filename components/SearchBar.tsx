import CategorySelect from "./CategorySelect";
import { SORT_TAGS } from "@/constants";
import Button from "./Button";

const SearchBar = ({
  handleInputChange,
  inputValue,
  handleSelectChange,
  selectValue,
}: any) => {
  return (
    <div className="md:w-[25%]">
      <input
        className="common-form-input mb-16"
        placeholder="Quick Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <form
        action="/"
        className="w-full flex-wrap md:gap-0 md:flex-col flex sm:justify-between sm:gap-2"
      >
        <CategorySelect
          htmlFor="Tier"
          labelName="Tier"
          id="Tier"
          selectName="Tier"
          options={SORT_TAGS}
          handleChange={handleSelectChange}
          selectValue={selectValue}
        />
        <CategorySelect
          htmlFor="Theme"
          labelName="Theme"
          id="Theme"
          selectName="Theme"
          options={SORT_TAGS}
          handleChange={handleSelectChange}
          selectValue={selectValue}
        />
        <CategorySelect
          htmlFor="Time"
          labelName="Time"
          id="Time"
          selectName="Time"
          options={SORT_TAGS}
          handleChange={handleSelectChange}
          selectValue={selectValue}
        />
        <CategorySelect
          htmlFor="Price"
          labelName="Price"
          id="Price"
          selectName="Price"
          options={SORT_TAGS}
          handleChange={handleSelectChange}
          selectValue={selectValue}
        />
        <Button
          type="submit"
          title="Search"
          className="common-button float-right p-2 w-[168px] h-[44px]"
        />
      </form>
      <button>Reset Filter</button>
    </div>
  );
};

export default SearchBar;
