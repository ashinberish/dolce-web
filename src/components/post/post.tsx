import {
  CircleChevronLeft,
  CircleChevronRight,
  Dot,
  Star,
  Timer,
} from "lucide-react";
import "./post.scss";
import SampleImage from "@/assets/images/sample-food.webp";
import { useEffect, useState } from "react";

const Post = () => {
  return (
    <div className="post">
      <PostCarousel />
      <div className="post-recipe-desc">
        <div>
          <h4 className="recipe-name inline cursor-pointer hover:underline">
            Lemon Cake
          </h4>
          <div className="flex font-medium items-center">
            <span className="cursor-pointer hover:underline">
              Gorden Ramsey
            </span>
            <Dot size={32} />
            <span>30 mins</span>
            <Timer size={20} style={{ margin: "-2px 5px 0px 5px" }} />
          </div>
        </div>
        <div>
          <div className="ratings cursor-pointer">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
          <div className="rating-count cursor-pointer hover:underline">
            3.9k ratings
          </div>
        </div>
      </div>
    </div>
  );
};

export type PostCarouselProps = {
  images?: Array<string>;
};

const PostCarousel = (props: PostCarouselProps) => {
  //const { images } = props;

  const images = [
    "https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5430755/pexels-photo-5430755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8478182/pexels-photo-8478182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5490922/pexels-photo-5490922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((o) => (o + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((o) => (o - 1 + images.length) % images.length);
  };
  return (
    <>
      <div className="post-image">
        {currentIndex !== 0 && (
          <button className="prev-slide-btn" onClick={prevImage}>
            <CircleChevronLeft size={24} />
          </button>
        )}
        {images.map((image, index) => (
          <div
            className="post-image-wrapper"
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} key={index} />
          </div>
        ))}
        {currentIndex !== images.length - 1 && (
          <button className="next-slide-btn" onClick={nextImage}>
            <CircleChevronRight size={24} />
          </button>
        )}
        <div className="count-dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`${
                currentIndex === index ? "count-dot active" : "count-dot"
              }`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
