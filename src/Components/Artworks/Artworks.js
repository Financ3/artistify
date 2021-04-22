import './Artworks.css';
import React, {Component} from 'react';
import SmallArt from './SmallArt';
import {connect} from 'react-redux';
import { getArtworkData } from '../../redux/reducers/artworkReducer';

class Artworks extends Component {

  // componentDidMount() {
  //   this.props.getArtworkData();
  // }

  render() {
    return (
      <div className="artworks">
        <h2 className="view-header">Artworks:</h2>
        <div className="gallery-description">
          <h2>In Place:</h2>
          <p>This set of pieces is called <b>In Place</b> and is a series of three works exploring my experiences of growing up gay in Utah, at the
          geographical, social, and cultural epicenter of the LDS faith.<br></br><br></br>
          Coming out as queer after living as a member of the Mormon faith and serving a two-year
          mission for the organization was a wake-up call for myself, my family, and my friends. I began
          my studies in art around the same time that I came out and it has been a premier facet of my
          work over the past few years. My work is concerned with the experience of living in Salt Lake
          City as a gay ex-Mormon. Utah’s desolate geography serves as a metaphor for those
          experiences. The physical emptiness and desolation of the red rock deserts and expansive salt
          flats are symbols of the emotional and mental isolation of queer people in Utah’s cultural
          landscape. Through the use of the camera, my body, the land, and the photo studio, I capture
          the relationship of my identity to my surroundings. I rearrange my world to make sense of it
          and re-capture it again and again, my fragmented figure a constant reminder of difficulty of
          being verbally dissected by the people around me. I carry the weight of otherness along with
          me internally. I feel a physical burden pulling my body down, down, down to dust. I see
          fulfillment in a future outside of Utah and cling to it with every stroke of energy I can muster.
          The camera is my guardian angel and tool for self-creation, carrying me from day to day until I
          find that future.</p>
        </div>
        <div className="artworks-flex-container">
          {this.props.asyncStatus==="pending"?
            <p>Loading...</p>:
            this.props.asyncStatus==="rejected"?
              <p>There was an error retreiving the artists data. Please contact the artist so they can resolve.</p>:
              this.props.asyncStatus==="fulfilled"?
                this.props.artworksArray.map(singleArtwork => {
                  return <SmallArt artwork={singleArtwork} key={singleArtwork.id} isAdmin={false} source="artworks"/>}):
                null}
        </div>
      </div>
    )
  }
}
  
function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin,
    artworksArray: state.artworksArray,
    asyncStatus: state.asyncStatus
  }
}
  
export default connect(mapStateToProps, {getArtworkData})(Artworks);