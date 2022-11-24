import React from "react";
import image_unsplash from "../images/image_unsplash.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Banglore, India",
      image: image_unsplash,
      price: "1000",
      rating: "4.5",
      location: "Banglore, India",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  return (
    <div
      style={{
        paddingTop: "15px",
        // display: "grid",
        // gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
      }}
    >
      <div className="">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Rentals;
