import { useState } from "react";
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const Last = () => {
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [email, setEmail] = useState('');
  const [kasuh_answer, setKasuhAnswer] = useState('');
  const [message, setMessage] = useState('');
  let initialYes = "Yes 😄";
  let clickedYes = "Yey 😁";
  const [yes, setYes] = useState(initialYes);
  let initialPerhaps = "Maybe 🤔";
  let clickedPerhaps = "Semoga kak 😃";
  const [perhaps, setPerhaps] = useState(initialPerhaps);
  let initialNo = "No 😔";
  let clickedNo = "sosad";
  const [no, setNo] = useState(initialNo);
  const [yesColor, setYesColor] = useState("");
  const [perhapsColor, setPerhapsColor] = useState("");
  const [noColor, setNoColor] = useState("");

  const handleYes = (e) => {
    e.preventDefault();
    setKasuhAnswer("Yes");
    setYesColor("green"); 
    setPerhapsColor(""); 
    setNoColor("");
    console.log(kasuh_answer);
  }
  const handleNo = (e) => {
    e.preventDefault();
    setKasuhAnswer("No");
    setYesColor("");
    setPerhapsColor("");
    setNoColor("red");
    console.log(kasuh_answer);
  }
  const handlePerhaps = (e) => {
    e.preventDefault();
    setKasuhAnswer("Perhaps");
    setYesColor("");
    setPerhapsColor("grey");
    setNoColor("");
    console.log(kasuh_answer);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (email && kasuh_answer && message) {
      emailjs.sendForm('service_jxn66wp', 'template_rk4lidq', e.target, 'user_Nw5CPbFBYSN6I6g3JOAuk')
      .then((result) => {
        alert("Email kakak udaa terkirim, makasih banyak kak udaa mau nyempetin waktu buat njawab pertanyaan saya 😁");
        setEmail("");
        setKasuhAnswer("");
        setMessage("");
        setYesColor("");
        setPerhapsColor("");
        setNoColor("");
      }, (error) => {
        alert("WARNING: Maaf kak, boleh dicoba lagi kak, email-nya gagal terkirim soalnya");
      });
    }
    else {
      alert("Punten kak, belum diisi semua wkwk");
    }
  }

  return (
    <div className="card">
      <Tada>
        <div className="last letter-container">
          <Fade top big cascade>
            <div className="ask-container">
              <h2>Mau ga kak jadi kasuh saya? ^_^</h2>
            </div>
            <div className="answer-container">
              <button onClick={() => setVisibleInfo(!visibleInfo)} className="answer-btn">INFO</button>
              {visibleInfo && 
              <div className="info animate-zoom">
                <p>Jadi ini jawaban dari kakak bakal dikirim ke email saya, untuk jawabannya sendiri, sabi di-klik gitu kak tombolnya, bisa yes, no, sama maybe (semisal kakaknya masih ragu atau belum mau reveal jawabannya), untuk message, terserah kakak mau diisi apa wkwk tapi mungkin saran buat website ini gituu kak</p>
              </div>}
              <form className="fill-answer" onSubmit={sendEmail}>
                <label htmlFor="name" className="hidden">
                  <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue="Kak Tito"
                  />
                </label>
                <label htmlFor="email">
                  <h3>Email</h3>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="kasuh_answer">
                  <h3>Answer</h3>
                  <div className="option-answer">
                    <button 
                    onClick={handleYes} 
                    className={"option-btn btn-yes " + yesColor}
                    onMouseOver={() => setYes(clickedYes)} 
                    onMouseLeave={() => setYes(initialYes)}>
                      {yes}
                    </button>
                    <button 
                    onClick={handlePerhaps} 
                    className={"option-btn btn-perhaps " + perhapsColor}
                    onMouseOver={() => setPerhaps(clickedPerhaps)} 
                    onMouseLeave={() => setPerhaps(initialPerhaps)}>
                      {perhaps}
                    </button>
                    <button 
                    onClick={handleNo} 
                    className={"option-btn btn-no " + noColor}
                    onMouseOver={() => setNo(clickedNo)} 
                    onMouseLeave={() => setNo(initialNo)}>
                      {no}
                    </button>
                    <input
                    type="text"
                    id="kasuh_answer"
                    name="kasuh_answer"
                    value={kasuh_answer}
                    className="hidden"
                    />
                  </div>
                </label>
                <label htmlFor="message">
                  <h3>Messages</h3>
                  <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <input type="submit" className="answer-btn btn-mail all-btn" value="Send Email 📧" />
              </form>
            </div>
          </Fade>
        </div>
      </Tada>
    </div>
  );
}
 
export default Last;