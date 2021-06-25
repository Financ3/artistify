import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {addPiece} from '../../redux/reducers/artworkReducer';
import {useState} from 'react';

function NewPiece(props) {
    const [titleInput, setTitleInput] = useState(null);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState(null);
    const [smallPrice, setSmallPrice] = useState(null);
    const [medPrice, setMedPrice] = useState(null);
    const [largePrice, setLargePrice] = useState(null);
    const [featured, setFeatured] = useState(false);

    function submitPiece() {
        //first check that all fields have been given values
        if  (!titleInput || !file || !description || !smallPrice || !medPrice || !largePrice) {
            alert("Please fill out all form fields for your new piece.")
        } else {
            const newPiece = {
                title: titleInput, 
                description, 
                media: file, 
                smallPrice, 
                medPrice, 
                largePrice, 
                featured
            };
            console.log(newPiece.media);
        }
    }

    return (
    <div className="single-art">
      <h2 className="view-header"><Link to="/artworks">&#12296;Back to Artworks:</Link></h2>
      
      <h2>Title:<input onChange={ev => setTitleInput(ev.target.value)}></input></h2>
      <div className="single-art-img-container">
          <p>Media:<input type="file" onChange={ev => setFile(ev.target.value)}></input></p>
      </div>
      <p>Description:<input onChange={ev => setDescription(ev.target.value)}></input></p>
      <p>Price for small print: <input onChange={ev=>setSmallPrice(ev.target.value)}></input></p>
      <p>Price for medium print: <input onChange={ev=>setMedPrice(ev.target.value)}></input></p>
      <p>Price for large print: <input onChange={ev=>setLargePrice(ev.target.value)}></input></p>
      <p>Feature piece: <input type="checkbox" onChange={() => setFeatured(!featured)}></input></p>
      <div className="submit-new-piece" onClick={submitPiece}>Save Piece</div>
    </div>
    )
}

export default connect(null,{addPiece})(NewPiece);