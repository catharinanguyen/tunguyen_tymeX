"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CollectionsContent from "./CollectionsContent";
import collectionDatas from "../public/data.json";
import Card from "./Card";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //------input Filter-----
  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const filteredItems = collectionDatas.filter(
    (items) => items.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------Select Filter-----
  const handleSelectChange = (e: any) => {
    setSelectedCategory(e.target.value);
  };

  //------Button Filter-----
  const handleButtonClick = (e: any) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(items: any, selected: any, query: any) {
    let filteredCollections = items;

    //Filtering Input Items
    if (query) {
      filteredCollections = filteredItems;
    }

    //Select Filter
    if (selected) {
      filteredCollections = filteredCollections.filter(
        ({ type, price }: any) => type === selected || price === selected
      );
    }

    return filteredCollections.map(
      ({ id, img, name, price, type, artist }: any) => (
        <li
          key={id}
          className="2xl:w-[22%] xl:w-[30%] lg:w-[47%] md:w-[45%] sm:w-[100%]"
        >
          <Card
            key={id}
            rank={type}
            name={name}
            image={img}
            price={price}
            artistImage="/artist-image.svg"
            artistName="Ghozali_Ghozalu"
          />
        </li>
      )
    );
  }

  const result = filteredData(collectionDatas, selectedCategory, query);

  return (
    <section className="flex flex-col items-center py-[120px]">
      <div className="max-w-[1680px] md:flex items-start justify-center gap-10 px-10 xl:px-5">
        <SearchBar
          handleInputChange={handleInputChange}
          inputValue={query}
          handleSelectChange={handleSelectChange}
          selectValue={selectedCategory}
        />
        <CollectionsContent
          collection={result}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </section>
  );
};

export default Collections;
