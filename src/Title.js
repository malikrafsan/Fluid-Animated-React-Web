import Bounce from 'react-reveal/Bounce';

const Title = () => {
  return (
    <div className="title page">
      <Bounce top cascade>
        <div className="title-text-container">
          <h1>Haloo Kak Tito</h1>
          <h2>Adaa surat dari saya buat kakak :D</h2>
          <p className="gift-icon">🎁</p>
          <h2>⬇⬇⬇ Scroll Down ⬇⬇⬇</h2>
        </div>
      </Bounce>
    </div>
  );
}
 
export default Title;