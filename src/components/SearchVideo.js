import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchVideo } from '../redux/actions/index'

class SearchVideo extends Component {
    constructor(props){
        super(props);
        this.state = {txt:''}
        this.searchText = this.searchText.bind(this);
    }
    searchText(){
        this.props.onSearchVideo(this.state.txt)
    }
    render() {
        const {search : {text},onSearchVideo} = this.props;
        const {state :{txt}} = this;
        return (
            <div>
                <h2>Search video</h2>
                <div className="btn-toolbar form-inline" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="input-group">
                    <input value = {txt} onChange = {(e) => this.setState({txt : e.target.value})} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" onClick={this.searchText}>Go!</button>
                    </span>
                    </div>
                </div><br/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
  search:state.search
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSearchVideo: (text) => {
    dispatch({type:'SEARCH_VIDEO', text : text});
    dispatch(getSearchVideo);
  }
})

const SearchVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideo)


export default SearchVideoContainer;