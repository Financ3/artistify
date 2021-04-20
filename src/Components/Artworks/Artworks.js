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
        <div className="artworks-flex-container">
          {this.props.artworksArray.map(singleArtwork => {
            return <SmallArt artwork={singleArtwork} key={singleArtwork.id} isAdmin={false} source="artworks"/>
          })}
        </div>
      </div>
    )
  }
}
  
function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin,
    artworksArray: state.artworksArray
  }
}
  
export default connect(mapStateToProps, {getArtworkData})(Artworks);