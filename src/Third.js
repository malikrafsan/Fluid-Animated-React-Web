import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import { useState } from "react"

const Third = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplayClick = () => {
    setDisplay(!display);
  }

  return (
    <div className="card">
      <Rotate top left cascade>
        <div className="page">
          <div className="second letter-container">
            <div className="text-container">
              <Bounce right opposite cascade when={display}>
                <p>Aku berharapnya aku juga cocok jadi adik asuh kak Tito, di mana kita bisa sharing sharing bareng, seru-seruan bareng, mbahas hal-hal kehidupan juga, yang di forum lebih kenal biar lebih nyaman wkwkwk, atau mungkin project-an bareng kak :D, mungkin kak Tito ngerasa kayak PDKT-nya singkat banget, tapi dari PDKT tersebut saya udaa yakin kalo kak Tito tuh baik banget dan cocok banget jadi kakak asuh saya :D</p>
              </Bounce>
            </div>
            <button onClick={handleDisplayClick} className="counter-btn"></button>
          </div>
        </div>
      </Rotate>
    </div>
  );
}
 
export default Third;