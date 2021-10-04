import Slide from 'react-reveal/Slide';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const handleReload = () => {
    window.location.reload();
  }


  return (
    <Slide top>
      <div className="navbar" id="navbar">
        <a onClick={scrollToTop} className="btn navbar-btn" href="#">Scroll to Top</a>
        <a onClick={handleReload} className="btn navbar-btn" href="#">Refresh</a>
      </div>
    </Slide>
  );
}
 
export default Navbar;