import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars.githubusercontent.com/u/97736782?v=4"
        channel="Yusa Ozturk"
        verified
        subs="81 M"
        noOfVideos={92}
        description="You can find anything you need in this channel. Please don't forget to subscribe to catch all the newest tech."
      />
      <hr />
      <VideoRow
        views="1.8 M"
        subs="81 M"
        description="This is the real description!"
        timestamp="55 seconds ago"
        channel="Yusa Ozturk"
        title="This is it! We made it finally!"
        image="https://i.ytimg.com/vi/gY0gda12pXg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHc1_kXqwk7VSxa09hKyIeOGyswQ"
      />
      <VideoRow
        views="1.8 M"
        subs="81 M"
        description="This is the real description!"
        timestamp="55 seconds ago"
        channel="Yusa Ozturk"
        title="This is it! We made it finally!"
        image="https://i.ytimg.com/vi/gY0gda12pXg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHc1_kXqwk7VSxa09hKyIeOGyswQ"
      />
      <VideoRow
        views="1.8 M"
        subs="81 M"
        description="This is the real description!"
        timestamp="55 seconds ago"
        channel="Yusa Ozturk"
        title="This is it! We made it finally!"
        image="https://i.ytimg.com/vi/gY0gda12pXg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHc1_kXqwk7VSxa09hKyIeOGyswQ"
      />
      <VideoRow
        views="1.8 M"
        subs="81 M"
        description="This is the real description!"
        timestamp="55 seconds ago"
        channel="Yusa Ozturk"
        title="This is it! We made it finally!"
        image="https://i.ytimg.com/vi/gY0gda12pXg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHc1_kXqwk7VSxa09hKyIeOGyswQ"
      />
      <VideoRow
        views="1.8 M"
        subs="81 M"
        description="This is the real description!"
        timestamp="55 seconds ago"
        channel="Yusa Ozturk"
        title="This is it! We made it finally!"
        image="https://i.ytimg.com/vi/gY0gda12pXg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHc1_kXqwk7VSxa09hKyIeOGyswQ"
      />
    </div>
  );
}

export default SearchPage;
