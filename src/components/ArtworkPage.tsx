import { useParams } from "react-router-dom";
import artworks from "../data/artworks.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArtworkPage = () => {
  const { page, id } = useParams();
  const artwork = artworks.find((artwork) => artwork.path === id);

  if (!artwork) {
    return <div>Artwork not found</div>;
  }

  const pictures = artwork.imageCarousel;
  const numPics = artwork.imageCarousel.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const imageClickForward = () => {
    activeIndex !== numPics-1 ? setActiveIndex(activeIndex => activeIndex + 1) : null;
  }
  const imageClickBackward = () => {
    activeIndex !== 0 ? setActiveIndex(activeIndex => activeIndex - 1) : null;
  }

  return (
    <>
      <div className="container pt-5">
        <Link to={`/${page}`} className="card-link">
        <button type="button" className="btn-close" aria-label="Close"></button>
        </Link>
        <h1>{artwork.title}</h1>
        <div className="col-lg-8">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {pictures.map((picture, index) => (
                <div className={"carousel-item " + (index === activeIndex ? " active" : '')}>
                <img src={picture} className="d-block w-100" alt="..." />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            onClick={imageClickBackward}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            onClick={imageClickForward}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        </div>
      </div>
    </>
  );
};

export default ArtworkPage;
