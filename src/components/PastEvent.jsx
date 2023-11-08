import React from "react";
import "../styles/PastEvent.css";

export const PastEvent = () => {
  return (
    <>
      <div id="pastevent">
      <header>
        <h1>Past Events</h1>
      </header>

      <div className="event-container">
        <div className="event">
          <h2>Event 1: Entrepreneurship Workshop</h2>
          <p className="event-date">Date: January 15, 2023</p>
          <img
            className="event-image"
            src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"
            alt="Entrepreneurship Workshop"
          />
          <p className="event-description">
            Join us for an exciting workshop on entrepreneurship where you can learn from industry experts.
          </p>
        </div>

        <div className="event">
          <h2>Event 2: Startup Pitch Competition</h2>
          <p className="event-date">Date: February 20, 2023</p>
          <img
            className="event-image"
            src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
            alt="Startup Pitch Competition"
          />
          <p className="event-description">Pitch your startup idea and win amazing prizes in our competition.</p>
        </div>

        <div className="event">
          <h2>Event 1: Entrepreneurship Workshop</h2>
          <p className="event-date">Date: January 15, 2023</p>
          <img
            className="event-image"
            src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU"
            alt="Entrepreneurship Workshop"
          />
          <p className="event-description">
            Join us for an exciting workshop on entrepreneurship where you can learn from industry experts.
          </p>
        </div>

        <div className="event">
          <h2>Event 2: Startup Pitch Competition</h2>
          <p className="event-date">Date: February 20, 2023</p>
          <img
            className="event-image"
            src="https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
            alt="Startup Pitch Competition"
          />
          <p className="event-description">Pitch your startup idea and win amazing prizes in our competition.</p>
        </div>
      </div>
      </div>
    </>
  );
};
export default PastEvent;
