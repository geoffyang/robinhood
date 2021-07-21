import React from "react";
import { useDispatch } from "react-redux";
import { getAllInWatchList, addNewTicker } from "../store/watchlistStore";
import './WatchlistAddButton.css'

function WatchlistAddButton({ ticker }) {
  const dispatch = useDispatch();

  return (
    <div className="add-ticker-container">
      <button
        className="add-button"
        onClick={async () => {
          await dispatch(addNewTicker(ticker));
          await dispatch(getAllInWatchList());
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
export default WatchlistAddButton;
