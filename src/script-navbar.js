import React from "react";
import './styles.css'

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

function Scriptnavbar() {
    return (
      <span id="navbar" style={{
        position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '120px' }}>
       <a style={{ position: 'absolute', top: 50, left: 90, fontSize: '13px' }}>
         <b>lfour</b>
         <br />
         Berliner Kreativagentur
       </a>
       {/* <span style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>get in contact</span> */}
     </span>
  

    );
}
export default Scriptnavbar;