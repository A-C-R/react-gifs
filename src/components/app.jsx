import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  render() {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "eNAd0O5cusppepvh8a" }
    ];

    return (
      <div>
       <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
         <Gif id="xT9IgDEI1iZyb2wqo8" />
        </div>
       </div>

       <div className="right-scene"></div>
        <GifList gifs={gifs} />

      </div>
    );
  }
}

export default App;
