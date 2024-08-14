import Card from "../parts/Card";
import paintings from "../data/paintings.json"


const Paintings = () => {
    var pageName = "Paintings";
  
      return (
          <>
            <h1 className="container pt-5">{pageName}</h1>
            <p className="container">Click "View" to see each painting up close and click the arrows on the side of each image to view more!</p>
            <div className="container">
              <div className="row">
              {paintings.map((artwork) => (
                <div key={artwork.key} className="col-lg-4 mb-5">
                  <Card
                    key={artwork.key}
                    path={artwork.path}
                    title={artwork.title}
                    size={artwork.size}
                    imageURL={artwork.imageURL}
                    type="paintings"
                    date={artwork.date}
                  />
                </div>
              ))}
              </div>
              
            </div>
          </>
        );
  }

export default Paintings