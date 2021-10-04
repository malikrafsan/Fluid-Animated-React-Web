import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';
import { useState } from "react"

const Second = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplayClick = () => {
    setDisplay(!display);
  }

  return (
    <div className="card">
      <Roll right>
        <div className="page">
          <div className="second letter-container">
            <div className="text-container">
              <LightSpeed right opposite cascade when={display}>
                <p>Kebetulan banget di Sparta ini diadain program kakak asuh :D Saya ngerasa kak Tito cocok banget buat jadi kakak asuh saya, di mana kak Tito tuh sangat peduli ke orang lain dan pengen banget membantu orang lain, seperti orang orang yang mirip sama kak Tito pas awal masuk jurusan, yang belum tau banyak dan kak Tito pengen ngasih "bimbingan" ke orang-orang tersebut, yang salah satunya seperti saya :" Apalagi kak Tito orangnya humble banget dan mau mendengarkan perspektif orang lain, salah satu hal yang jarang ditemuin sekarang wkwkwk</p>
              </LightSpeed>
            </div>
            <button onClick={handleDisplayClick} className="counter-btn"></button>
          </div>
        </div>
      </Roll>
    </div>
  );
}
 
export default Second;