import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import Search from "./Search";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
const history = useHistory()
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          variant="outlined "
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          plan a different kind of gateway to uncover the hidden gems near you
        </h5>
        <Button onClick={() => history.push("/search")}>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;