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
                <img alt="Nathan Francis" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/79103947_2645076688904747_4208698857770450944_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vMPd9mGR1OUAX-iE8JZ&_nc_ht=scontent-dfw5-1.xx&oh=93aa1364d1ebc0293ba951f51740bd9f&oe=609B7822" />
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