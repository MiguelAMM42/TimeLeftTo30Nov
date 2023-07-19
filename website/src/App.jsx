import './App.css';
import { useCountdown } from './hooks/time';
import { React } from 'react';
import { ReactComponent as LocationSVG } from './media/svgs/location.svg';
import ACViseu from './media/images/acviseulgbt.png';

const App = () => {
  // Replace 'exampleDate' with the target date you want to count down to.
  const targetDate = '2023-11-30T00:00:00'; // Format: 'YYYY-MM-DDTHH:mm:ss'
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return (
      <div className="App">
        <img
          src={ACViseu}
          alt="Revolution"
          className="AC-Viseu-Img"
        />
        <div className="App-content">
          <div className="Time-Countdown">
            <h2>30/11 revolution 🐐🙏🐺 in</h2>
            <div className="Time-Finished">
              <p className="Time-Value">The revolution already took place.</p>
              <img
                src="https://media.giphy.com/media/lkVO2a0QHIFzi/giphy.gif"
                alt="Revolution"
                className="Wolf-GIF"
              />
            </div>
            <div className="Location-Info">
              <LocationSVG className="LocationSVG"/>
              <p className="Location">Campus of Gualtar, University of Minho, Braga</p>
            </div>
          </div>
        </div>
      </div>
    );

  } else {
    return (
      <div className="App">
        <div className="App-content">
          <img
            src={ACViseu}
            alt="Revolution"
            className="AC-Viseu-Img"
          />
          <div className="Time-Countdown">
            <h2>30/11 revolution 🐐🙏🐺 in</h2>
            <div className="Time-Info">
              <p className="Time-Value">{days} days</p>
              <p className="Time-Value">{hours} hours</p>
              <p className="Time-Value">{minutes} minutes</p>
              <p className="Time-Value">{seconds} seconds</p>
            </div>
            <div className="Location-Info">
              <LocationSVG className="LocationSVG"/>
              <p className="Location">Campus of Gualtar, University of Minho, Braga</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
