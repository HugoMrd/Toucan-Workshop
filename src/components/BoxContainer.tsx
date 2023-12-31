import React from 'react';
import TextField from "@mui/material/TextField";
import { Card } from "./Card";
import boxes from "../db.json";
import "./css/BoxContainer-style.css";

interface BoxContainerProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function BoxContainer({ search, setSearch}: BoxContainerProps) {
  const filter = boxes.filter(box => box.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <TextField
        label="Search by book title name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="box-container">
        {filter.map((box, index) => (
          <Card key={index} title={box.title} authors={box.authors} rating={box.average_rating} />
        ))}
      </div>
    </>
  );
}

export default BoxContainer;
