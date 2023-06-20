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
          <a href="#" onClick={handleDisclaimerToggle}>Disclaimer </a>
          
          
      

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
                  <p>Caspar Baron</p>
                  <p>Koppenstrasse 20</p>
                  <p>10243 Berlin</p><br/>
                 
                  
                  <p>Kontakt:</p>
                  
                  <a id='orange' href='mailto:team@lfour.de'>team@lfour.de</a><br/>
                  
                
                  
                </div>
              </div>
            )}

            {isDisclaimerOpen && (
              <div className="popup-section">
                <div className="scrollable-content">
                  <h2>Datenschutzerklärung</h2>
                    <h3>1. Datenschutz auf einen Blick</h3>
                      <h4>Allgemeine Hinweise</h4>
                        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, 
                          was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                      <h4>Datenerfassung auf dieser Website</h4>
                      <h5>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h5>
                        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                          Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ 
                          in dieser Datenschutzerklärung entnehmen.</p>
                      <h5>Wie erfassen wir Ihre Daten?</h5>
                        <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                          Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                        <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. 
                          Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                          Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                      <h5>Wofür nutzen wir Ihre Daten?</h5>
                        <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                          Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                      <h5>Welche Rechte haben Sie bezüglich Ihrer Daten?</h5>
                        <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                          Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                          Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
                          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. 
                          Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                        <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor 
                          allem mit sogenannten Analyseprogrammen.
                          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgendenDatenschutzerklärung.</p>
                    <h3>2. Hosting</h3>
                      <h4> Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</h4>
                        <h5>IONOS</h5>
                          <p>Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). 
                            Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. 
                            Details entnehmen Sie der Datenschutzerklärung von IONOS: </p>
                          <p>https://www.ionos.de/terms-gtc/terms-privacy.</p>
                          <p>Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
                            Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. 
                            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf 
                            Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung 
                            von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. 
                            Die Einwilligung ist jederzeit widerrufbar.</p>
                    <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
                      <h4>Datenschutz</h4>
                        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                          personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                          dieser Datenschutzerklärung.</p>
                        <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                          und zu welchem Zweck das geschieht.</p>
                        <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                          möglich.</p>
                      <h4>Hinweis zur verantwortlichen Stelle</h4>
                        <h5>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</h5>
                          <p>
                          lfour<br/>
                          Caspar Baron<br/>
                          Koppenstraße 20<br/>
                          10243 Berlin<br/><br/>
                          Telefon: +49 (0) 16639295876<br/>
                          E-Mail: team@lfour.de<br/></p>
                          <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                            die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                      <h4>Speicherdauer</h4>
                        <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                          Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                          werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                          letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.<p/>
                      <h4>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
                        <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
                          Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                          nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                          49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                          Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                          auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                          Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.</p>
                          Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                          DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                          Absätzen dieser Datenschutzerklärung informiert.</p>
                      <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                        <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                          bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                          Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                          <h5>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h5>
                            <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                              ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                              SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                              WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                              ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                              WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
                              SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                              VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                              RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                            <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
                              SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                              BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                              EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
                              VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                              NACH ART. 21 ABS. 2 DSGVO).</p>
                          <h5>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h5>
                            <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                          <h5>Recht auf Datenübertragbarkeit</h5>
                            <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                              automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                              aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                              verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                          <h5>Auskunft, Berichtigung und Löschung</h5>
                            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                              Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                              Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                              zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden. </p>
                          <h5>Recht auf Einschränkung der Verarbeitung</h5>
                            <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                              folgenden Fällen:</p>
                            <p>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                              in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                              statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</p>
                            <p>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                              Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                              Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                              Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                              überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                              zu verlangen.</p>
                            <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                              juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                              eines Mitgliedstaats verarbeitet werden.</p>
                          <h5>SSL- bzw. TLS-Verschlüsselung</h5>
                            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                              Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
                              Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                              „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
                              von Dritten mitgelesen werden.
                          <h5>Widerspruch gegen Werbe-E-Mails</h5>
                        <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
                        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
                        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
                        Werbeinformationen, etwa durch Spam-E-Mails, vor.<br/>
                        Quelle: https://www.datenschutzerklaerung.de</p>
                  </p>
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
