import React from 'react';
import greenBar from './img/square-fill.svg';
import grayBar from './img/square-fill gray.svg';
import Bar from './Bar.css';

class BarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { bars, text } = this.props;

    return (
      <div>
        <div className="offBars" style={Bar}>
          {text}
          :
          <img className="offBar" src={grayBar} alt="" fill="currentColor" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
          <img className="offBar" src={grayBar} alt="" />
        </div>
        <div className="onBars" style={Bar}>
          {text}
          :
          {bars && [...Array(bars)].map((bar, index) => (
            <img className="onBar" src={greenBar} alt="" key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default BarRating;