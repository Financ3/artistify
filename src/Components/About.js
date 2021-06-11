import './About.css';
import SmallArt from './Artworks/SmallArt'; 
import { connect } from 'react-redux';

function About(props) {

  let featuredDisplay = null;

  if (props.asyncStatus==="pending") {
    featuredDisplay = "Loading";
  } 

  else if (props.asyncStatus==="rejected") {
    featuredDisplay = <p>There was an error retreiving the artists data. Please contact the artist so they can resolve.</p>
  } 

  else if (props.asyncStatus==="fulfilled") {
    featuredDisplay = props.artworksArray
      .filter(singleArtwork => singleArtwork.featured)
      .map(singleArtwork => {
        return (
          <SmallArt key={singleArtwork.id} artwork={singleArtwork} isCart={false} source="about"/>
        )
      });
  } 

  return (
    <div className="about">
      <h2 className="view-header">About Nate:</h2>
      <article className="about-nate-bio">
            <div className="about-bio-image">
                <img alt="Nathan Francis" src="https://artistcontent.s3.us-east-2.amazonaws.com/nateprofile.jpg" />
            </div>
          
            <p>Nate Francis is a photographic and sculptural artist who works with issues of identity and
              isolation. He often appears in his own work by documenting his body or performing for the
              camera. Nate grew up in Provo, Utah in an LDS family of nine children. His work explores the
              consequences of his upbringing in the Church of Jesus Christ of Latter-Day Saints as a gay youth,
              the challenge of creating a home after coming out, as well as the hope of finding a new and
              more suitable environment in the future.</p>
            <hr></hr>
      </article>
      <h2>Featured Pieces:</h2>
      <div className="featured-display-flex-container">
        {featuredDisplay}
      </div>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    isAdmin: reduxState.isAdmin,
    artworksArray: reduxState.artworksArray,
    asyncStatus: reduxState.asyncStatus
  }
}


export default connect(mapStateToProps)(About);