import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import SarahImg from "../../../assets/testimonials/sarah.jpeg";
import MichealIMg from "../../../assets/testimonials/micheal-karis.jpeg";
import GraceImg from "../../../assets/testimonials/grace-mwende.jpeg";


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Student",
    content:
      "MUTC transformed my coding skills and helped me land my first internship. The hands-on projects and mentorship are invaluable.",
    avatar: SarahImg,
  },
  {
    id: 2,
    name: "Michael Kariuki",
    role: "Alumni, Software Engineer",
    content:
      "The connections I made at MUTC opened doors to my current career. The club bridges academia and industry perfectly.",
    avatar: MichealIMg,
  },
  {
    id: 3,
    name: "Grace Mwende",
    role: "UI/UX Designer",
    content:
      "As a designer, MUTC gave me technical skills that complemented my creativity. The collaborative environment is amazing.",
    avatar: GraceImg,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">What Our Members Say</h2>
        <p className="section-subtitle">
          Hear from students and alumni about their MUTC experience
        </p>

        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
