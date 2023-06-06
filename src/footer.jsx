import React, { useState, useEffect } from 'react';


const Footer = () => {
  const [offset, setOffset] = useState(0);

  function updateOffset() {
    const bottomOffset = Math.max(0, document.documentElement.scrollHeight - window.innerHeight - window.scrollY);
    setOffset(bottomOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
    };
  });

  window.onscroll = function () {
    if (offset < 20) {
      document.getElementById("footer").style.bottom = "0";
    } else {
      document.getElementById("footer").style.bottom = "100px";
    }
  };

  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const handleImpressumToggle = () => {
    setIsImpressumOpen(!isImpressumOpen);
  };

  const handleDisclaimerToggle = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const handlePopupClose = () => {
    setIsImpressumOpen(false);
    setIsDisclaimerOpen(false);
  };

  return (
    <footer id='footer'>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" onClick={handleImpressumToggle}>Impressum</a>
          <a href="#" onClick={handleDisclaimerToggle}>Disclaimer</a>


        </div>
      </div>

      {(isImpressumOpen || isDisclaimerOpen) && (
        <div className="popup-overlay" onClick={handlePopupClose}>
          <div className="popup-content">
            {isImpressumOpen && (
              <div className="popup-section">
                <div className="scrollable-content">
                <h2>Impressum</h2>

                
                  <p>Angaben gemäß § 5 TMG:</p><br/>
                  <p>lfour Agentur</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p><br/>
                  <p>Vertreten durch:</p>
                  <p>Max Mustermann (Geschäftsführer)</p>
                  <p>Kontakt:</p><br/>
                  <p>Telefon: 0123456789</p><br/>
                  <p>E-Mail: team@lfour.de</p>
                  <p>Website:www.lfour.de</p><br/>
                  <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
                  <p>DE123456789</p>

                    
                  
                </div>
              </div>
            )}

            {isDisclaimerOpen && (
              <div className="popup-section">
                <div className="scrollable-content">
                  <h2>Disclaimer</h2>
                  
                    

                    Haftung für Inhalte:<br/><br/>
                    Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.

                    Haftung für Links:<br/><br/>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

                    Urheberrecht:<br/><br/>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

                    Bitte beachten Sie, dass dies lediglich ein allgemeines Beispiel ist und keine rechtliche Beratung darstellt. Es ist wichtig, dass Sie einen Rechtsanwalt konsultieren, um sicherzustellen, dass Ihr Impressum und Ihr Disclaimer den spezifischen rechtlichen Anforderungen Ihres Landes und Ihrer Geschäftstätigkeit entsprechen.
                
                  
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;