"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./testimonials.module.css";
import image from "../../assests/image.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    content:
      "Lorem ipsum dolor sit amet consectetur. In vitro cursus odio accumsan, sit leo amet neque mattis. Id tellus ultrices.",
    image: image,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.title}>Testimonials</h2>

      <div className={styles.slider}>
        <div className={styles.testimonial}>
          <Image
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            width={100}
            height={100}
            className={styles.avatar}
          />
          <p className={styles.content}>{testimonials[currentSlide].content}</p>
          <h3 className={styles.name}>{testimonials[currentSlide].name}</h3>
          <p className={styles.role}>{testimonials[currentSlide].role}</p>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${styles.dot} ${
                currentSlide === index ? styles.active : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
