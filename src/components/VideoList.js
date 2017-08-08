import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getRandomVideo } from '../redux/actions/index'

class VideoList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {video : {loading,data}, onRandomImages} = this.props;
    return (
       <div>
        <button className = "btn" onClick = {onRandomImages} >Get Video List</button>
        <span> Status :</span>
        <span style= {{color :'blue'}}>
          {' '+loading}
        </span>
        <p/>
        <ImageList video = {data}/>
      </div>
    )
  }
}
  function ImageList(props){
    return (
      <div>
       <div className="container">
         <div className="row">
          { props.video.map( (video) => 
            ( 
                <div className="col-md-4" key = {video.vid}>
                  <div className="thumbnail">
                    <img
                      src = {video.preview_url} 
                      alt = {video.keyword}
                      style = {{ height : '200px' }} />
                    <div className="caption">
                      <h4><a href="#">{ video.title.substring(0,10) + '...' }</a></h4>
                      <p>{video.title.substring(0,20)} <br/><a className="btn btn-success" target="_blank" href={video.embedded_url}>watch this movie</a></p>
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
    video:state.video
  }),
  {
    onRandomImages : () => getRandomVideo
  }
)(VideoList)

export default VideoListContainer