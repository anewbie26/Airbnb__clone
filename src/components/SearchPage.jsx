import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays ' 26 august to 30 august ' 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancelation Flexibility</Button>
        <Button variant="outlined">Types of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />
       <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFv4cUp_os03tbcPi8kj0IDzMMH0gpasadB_ZF-0rcT35Jc6GySkij4NwbVjKZJ8XD6Ko&usqp=CAU"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.3}
        price="£29 / night"
        total="£102 total"
      />
       <SearchResult
        img="https://furnishrcdn-134f8.kxcdn.com/wp-content/uploads/bedroom4-2.jpg"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.9}
        price="£43 / night"
        total="£190 total"
      />
            <SearchResult
        img="https://media.architecturaldigest.com/photos/5a39377f38bb817b7ffe1dd7/16:9/w_2560%2Cc_limit/airbnb-tips-greenwich-village-apt.jpg"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.20}
        price="£33 / night"
        total="£127 total"
      />
            <SearchResult
        img="https://i.insider.com/58502983dd0895bc548b4b55?width=750&format=jpeg&auto=webp"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.99}
        price="£43 / night"
        total="£217 total"
      />
            <SearchResult
        img="https://skift.com/wp-content/uploads/2018/03/AirbnbPlus_Los_Angeles_5958809_bedroom-1024x683.jpg"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.7}
        price="£44 / night"
        total="£115 total"
      />
            <SearchResult
        img="https://images.squarespace-cdn.com/content/v1/5ad2a77d55b02cfdb5457631/1567005834033-CC2SEG0NDVJ90A2DW4US/081919_Blog_bedroom1.png?format=1000w"
        location="Private room in center of london"
        title="Stay at this spacious Edwarian House"
        description="1 guest ' 1 bedroom - 1 bed - 1.5 shared bathroom - Wifi - Kitchen - Free parking - Washing machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />
    </div>
  );
}

export default SearchPage;
