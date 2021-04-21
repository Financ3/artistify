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
          
            <p>This is a bunch of text about how great Nate is and all the stuff that he has accomplished with his Art. Other text and stuff. So much text - its like a full on biography. WOW. SUCH WOW.<br/><br/>This is even more cool text about how awesome Nate is and all the stuff that he has done including some of the reasons why he does it, and how exactly he does it. <br/><br/>This is even more cool text about how awesome Nate is and all the stuff that he has done including some of the reasons why he does it, and how exactly he does it. </p>
            <hr></hr>
      </article>
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