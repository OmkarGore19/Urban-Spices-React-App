import React from "react";

function HeadlineCards() {
  const Cards = [
    {
      title: "Sun's Out, Taco's Out",
      hotelname: "Simply Mexico",
      image:
        "https://images.pexels.com/photos/5029867/pexels-photo-5029867.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Try out some Fresh Pasta form Italy",
      hotelname: "La Albergo",
      image:
        "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Let's have some Desserts",
      hotelname: "Harry's Ice creams",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/mason-jar-ice-cream1-1654195042.jpg",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8 grid md:grid-cols-3 gap-4">
      {Cards.map((card, index) => (
        <div key={index} className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4 md:text-xl">
              {card.title}
            </p>
            <p className="px-2">Through {card.hotelname}</p>
            <button className="border-orange-600  text-white bg-orange-600  hover:scale-105 duration-300 mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={card.image}
            alt={card.title}
          />
        </div>
      ))}
    </div>
  );
}

export default HeadlineCards;
