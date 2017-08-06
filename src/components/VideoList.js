
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getRandomImages } from '../redux/actions/index'

class VideoList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {images : {loading,data}, onRandomImages} = this.props;
    return (
       <div>
        <button className = "btn" onClick = {onRandomImages} >Get Video List</button>
        <span> Status :</span> 
        <span style= {{color :'blue'}}>
          {' '+loading}
        </span>
        <p/>
        <ImageList images = {data}/>
      </div>
    )
  }
}
  function ImageList(props){
    return (
      <div>
       <div className="container">
         <div className="row">
          { props.images.map( (images) => 
            ( 
                  <div className="col-md-4" key = {images.vid}>
                    <div className="thumbnail">
                      <img
                        src = {images.preview_url} 
                        alt = {images.keyword}
                        style = {{ height : '200px' }} />
                      <div className="caption">
                        <h4><a href="#">{ images.title.substring(0,10) + '...' }</a></h4>
                        <p>{images.title.substring(0,20)} <br/><a className="btn btn-success" target="_blank" href={images.embedded_url}>watch this movie</a></p>
                      </div>
                    </div>
                  </div>
            ))}
          </div>
        </div>
      </div>
    )
  }


const VideoListContainer = connect(
  (state, ownProps) => ({
    images:state.images
  }),
  {
    onRandomImages : () => getRandomImages
  }
)(VideoList)

export default VideoListContainer