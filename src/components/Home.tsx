import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import AppThemeButton from '../AppThemeButton';

const Home = () => {
    const header = '/images/header.jpeg';
    return (
      <>
        <div
          className="banner d-flex justify-content-center align-items-center"
           style={{ backgroundImage: `url(${header})` }}
        >
          <div className="text-center text-white">
            <h1 className="display-4">Welcome to My Virtual Portfolio</h1>
            <p className="lead">
              My name is Reese Brady and this is my website built with React to
              display all my favorite paintings and drawings!
            </p>
          </div>
        </div>
        <div className="container pt-5">
          <AppThemeButton />
          <h1>About me</h1>
          <p>
            I am a software engineer who has a lot of hobbies, with one of the
            more easily displayable ones being art. I started painting in fifth
            grade and taught myself all the basics of realism. In high school, I
            enrolled in a 4-year intensive program that helped shape my skills and
            learn more about art.
          </p>
          <p>Click "paintings" and "drawings" above to see my work! Take time to 
            click the arrows on the sides of each image to see all the different 
            pictures of each artwork. Enjoy!
          </p>
          <p>
            I have sold multiple commissions, mostly drawings. You can find which
            artworks are commissions based on their descriptions on the artwork
            page. Most of these were completed in high school or grade school,
            however I still complete them once in a while now.
          </p>
          <p>
            Every image that I used to create the drawing or painting was either
            taken by me or by the person who commissioned the artwork.
          </p>
        </div>
      </>
    );
  };

export default Home