"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const FunFactGrids = () => {
  const [counts, setCounts] = useState({
    happyCouples: 0,
    locations: 0,
    weddings: 0,
    decorations: 0,
  });

  useEffect(() => {
    // Simulate fetching data or some async operation
    setCounts({
      happyCouples: 5,
      locations: 150,
      weddings: 300,
      decorations: 500,
    });
  }, []);

  return (
    <div className="wpo-fun-fact-grids clearfix">
      <div className="grid">
        <div className="info">
          <div className="flower">
            <img src="/assets/images/funfact/1.svg" alt="Happy Couples" />
          </div>
          <h3>
            <CountUp end={counts.happyCouples} duration={2} />+
          </h3>
          <p>Years of Experiences</p>
        </div>
      </div>
      <div className="grid">
        <div className="info">
          <div className="flower">
            <img src="/assets/images/funfact/2.svg" alt="Locations" />
          </div>
          <h3>
            <CountUp end={counts.locations} duration={2} />+
          </h3>
          <p>Corporate Events</p>
        </div>
      </div>
      <div className="grid">
        <div className="info">
          <div className="flower">
            <img src="/assets/images/funfact/3.svg" alt="Weddings" />
          </div>
          <h3>
            <CountUp end={counts.weddings} duration={2} />+
          </h3>
          <p>Weddings</p>
        </div>
      </div>
      <div className="grid">
        <div className="info">
          <div className="flower">
            <img src="/assets/images/funfact/4.svg" alt="Decorations" />
          </div>
          <h3>
            <CountUp end={counts.decorations} duration={2} />+
          </h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default FunFactGrids;
