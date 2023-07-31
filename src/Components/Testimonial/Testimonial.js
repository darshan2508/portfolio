import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const data = [
    {
      name: "Shradha",
      position: "CEO",
      des:
        "Ut nisi autem est saepe quae aut placeat culpa et impedit voluptas id natus illum! Ea unde debitis At cupiditate voluptas ",
      img:
        "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {
      name: "Varsha",
      position: "Product Manager",
      des:
        "He was good at his work, he has worked on many complex projects very efficiently",
      img:
        "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {
      name: "Mrugal",
      position: "back End Developer",
      des:
        "He was good at his work, he has worked on many complex projects very efficiently",
      img:
        "https://images.pexels.com/photos/5439427/pexels-photo-5439427.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      name: "Steffy",
      position: "HR Manager",
      des:
        "Ut nisi autem est saepe quae aut placeat culpa et impedit voluptas id natus illum! Ea unde debitis At cupiditate voluptas ",
      img:
        "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {
      name: "Sopan",
      position: "Django Developer",
      des:
        "He was good at his work, he has worked on many complex projects very efficiently",
      img:
        "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {
      name: "Utkarsh",
      position: "Full Stack Developer",
      des:
        "He was good at his work, he has worked on many complex projects very efficiently",
      img:
        "https://images.pexels.com/photos/5439427/pexels-photo-5439427.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    // slidesToScroll: 3,
    initialSlide: 0,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="content-slider-main">
                <div className="content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="testimonial image"
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.des}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
