import Zoom from 'react-reveal/Zoom';
import { useState } from "react"

const First = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplayClick = () => {
    setDisplay(!display);
  }

  return (
    <div className="card">
      <Zoom left cascade>
        <div className="page">
          <div className="first letter-container">
            <div className="text-container">
              <Zoom right opposite cascade when={display}>
                <p>Halo kak Tito ^-^/ kenalin lagi aku malik dari IF'20 :D aku yang wawancara kakak tempo hari itu bareng kak Ridho. Pas wawancara tersebut dan pas ngechat kakaknya dari sebelum wawancara, keliatan banget kalo kak Tito tuh kalem banget dan humble banget, apalagi sampe yang minta maaf kalo semisal bakal terlambat wkwkwk, saya ngerasa kak Tito juga orang yang terbuka banget pikirannya dan ga judging ke suatu permasalahan dan berkenan banget buat bertukar pikiran, kayak pas wawancara ^_^</p>
              </Zoom>
            </div>
            <button onClick={handleDisplayClick} className="counter-btn"></button>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
 
export default First;