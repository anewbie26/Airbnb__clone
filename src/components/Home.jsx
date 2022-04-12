import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://i.pinimg.com/originals/a6/07/11/a60711e546e5ca4d034e1e29648df6d3.jpg"
          title="Entire homes"
          description="Comfortable private places with room for friends or family"
        />
        <Card
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg"
          title="Unique stays"
          description="Live your life uniquely with us the Airbnb company"
        />
        <Card
          src="https://www.eventmarketer.com/wp-content/uploads/2020/04/airbnb_experiences_sheep-2020.jpeg"
          title="Online experience"
          description= "Have an great online experience with worlds largest hotel chain"
        />
      </div>
      <div className="home__section">
      <Card
          src="https://www.eventmarketer.com/wp-content/uploads/2020/04/airbnb_experiences_sheep-2020.jpeg"
          title="Online experience"
          description= "Have an great online experience with worlds largest hotel chain"
          price="£300/night"
        />
      <Card
          src="https://i.pinimg.com/originals/a6/07/11/a60711e546e5ca4d034e1e29648df6d3.jpg"
          title="Entire homes"
          description="Comfortable private places with room for friends or family"
          price="£250/night"
        />
        <Card
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/6c9a9a99-9c38-417e-a7f5-a45ede9b3407-1532627926.jpg"
          title="Unique stays"
          description="Live your life uniquely with us the Airbnb company"
          price="£130/night"
        />

      </div>
    </div>
  );
}
export default Home;
