import artworks from "../data/artworks.json"
import Card from "../parts/Card";
import { useParams } from "react-router-dom";

const Artwork = () => {
  const { page } = useParams();
  var pageName = "All";
  {page === "drawings" && (pageName = "Drawings")}
  {page === "paintings" && (pageName = "Paintings")}

  if (pageName !== "All") {
    var filteredArtwork = artworks.filter((artwork) => artwork.type === page);
  } else {
    filteredArtwork = artworks;
  }

    return (
        <>
          <h1 className="container pt-5">{pageName}</h1>
          <div className="container">
            <div className="row">
            {filteredArtwork.map((artwork) => (
              <div key={artwork.key} className="col-lg-4 mb-5">
                <Card
                  key={artwork.key}
                  path={artwork.path}
                  title={artwork.title}
                  size={artwork.size}
                  imageURL={artwork.imageURL}
                  type="all"
                  date={artwork.date}
                />
              </div>
            ))}
            </div>
            
          </div>
        </>
      );
}

export default Artwork