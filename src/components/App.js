import React, {Component} from 'react'
import VideoList from './VideoList'
import SearchVideo from './SearchVideo'

export default class App extends Component {
  
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Avgle with React - Redux</h1>
        <SearchVideo/>
        <VideoList/>
      </div>
    )
  }
  
}