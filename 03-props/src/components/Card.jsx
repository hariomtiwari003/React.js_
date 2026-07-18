import React from "react";


const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2015/10/buying-a-camera-beginners-8.jpg?fit=1500%2C1000&ssl=1"
        alt="Profile"
      />

      <h1>{props.user}, {props.age}</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <button>View Profile</button>
    </div>
  );
};

export default Card;
