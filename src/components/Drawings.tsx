import Card from "../parts/Card";
import drawings from "../data/drawings.json"


const Drawings = () => {
    var pageName = "Drawings";
  
      return (
          <>
            <h1 className="container pt-5">{pageName}</h1>
            <div className="container">
              <div className="row">
              {drawings.map((artwork) => (
                <div key={artwork.key} className="col-lg-4 mb-5">
                  <Card
                    key={artwork.key}
                    path={artwork.path}
                    title={artwork.title}
                    size={artwork.size}
                    imageURL={artwork.imageURL}
                    type="drawings"
                    date={artwork.date}
                  />
                </div>
              ))}
              </div>
              
            </div>
          </>
        );
  }

export default Drawings