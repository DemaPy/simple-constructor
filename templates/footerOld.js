export default {
  DE: (text = "Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306ch-de_20.jpg"
                            alt="Tausende weitere M&ouml;bel" style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>

    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.de/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_01.jpg" width="100%" border="0"
                            alt="Alle Sofas" style="display:block" /></a></td>
                <td><a href="https://www.beliani.de/betten/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_02.jpg" width="100%" border="0"
                            alt="Alle Betten" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.de/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_03.jpg" width="100%" border="0"
                            alt="Alle Kaffeetische" style="display:block" /></a></td>
                <td><a href="https://www.beliani.de/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_04.jpg" width="100%" border="0"
                            alt="Alle St&uuml;hle" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.de/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_05.jpg" width="100%" border="0"
                            alt="Alle Sessel" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.de/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_06.jpg" width="100%" border="0"
                            alt="Alle Sideboards" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.de/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_07.jpg" width="100%" border="0"
                            alt="Alle Lampen" style="display:block" /></a></td>
                <td><a href="https://www.beliani.de/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/DE-footerCat_08.jpg" width="100%" border="0"
                            alt="Alle Teppiche" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>

    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_deutschland/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://www.pinterest.de/belianide/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*Bedingungen:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">NEWSLETTER
                            ABBESTELLEN</a></p><br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.de/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-de_08.jpg" width="100%"
                            border="0" alt="Gratis Versand und R&uuml;ckversand" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.de/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-de_09.jpg" width="100%"
                            border="0" alt="365 Tage R&uuml;ckgaberecht" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.de/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-de_10.jpg" width="100%"
                            border="0" alt="Bis zu 70% Rabatt" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.de/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-de_11.jpg" width="100%"
                            border="0" alt="&Uuml;ber 1 Million zufriedene Kunden" style="display:block"></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;"><b>
                            <font style="font-size: 10px;">Impressum</font>
                        </b><br />
                        Beliani GmbH, 6340 Baar, Schweiz<br />
                        Telefonnummer: 0221 677 89927; E-Mail Adresse: mail@beliani.de<br />
                        Handelsregister: Handelsregister des Kantons Zug, CH-170.4.009.724-3<br />
                        USt-IDNr: DE 276156472</p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  CHDE: (text = "Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.") => {

    return `
      <!-- Category Menu -->
      <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
          <tr>
            <td><a href="https://www.beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2018/newsletter-306ch-de_20.jpg" alt="Tausende weitere Möbel"
                  style="display:block" width="100%" border="0" /></a></td>
          </tr>
        </tbody>
      </table>
    
      <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
          <tr>
            <td><a href="https://www.beliani.ch/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_01.jpg" width="100%" border="0" alt="Alle Sofas"
                  style="display:block" /></a></td>
            <td><a href="https://www.beliani.ch/betten/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_02.jpg" width="100%" border="0" alt="Alle Betten"
                  style="display:block" /></a></td>
          </tr>
          <tr>
            <td><a
                href="https://www.beliani.ch/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_03.jpg" width="100%" border="0"
                  alt="Alle Kaffeetische" style="display:block" /></a></td>
            <td><a href="https://www.beliani.ch/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_04.jpg" width="100%" border="0"
                  alt="Alle St&uuml;hle" style="display:block" /></a></td>
          </tr>
          <tr>
            <td><a href="https://www.beliani.ch/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_05.jpg" width="100%" border="0" alt="Alle Sessel"
                  style="display:block" /></a></td>
            <td><a
                href="https://www.beliani.ch/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_06.jpg" width="100%" border="0"
                  alt="Alle Sideboards" style="display:block" /></a></td>
          </tr>
          <tr>
            <td><a href="https://www.beliani.ch/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_07.jpg" width="100%" border="0" alt="Alle Lampen"
                  style="display:block" /></a></td>
            <td><a href="https://www.beliani.ch/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2022/CHDE-footerCat_08.jpg" width="100%" border="0"
                  alt="Alle Teppiche" style="display:block" /></a></td>
          </tr>
        </tbody>
      </table>
    
      <!-- social icons -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
          <tr>
            <td colspan="2" align="center" style="padding-top: 10px;">
              <a href="https://www.facebook.com/beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                  alt="Facebook" /></a>&nbsp;
              <a
                href="https://www.instagram.com/beliani_schweiz/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                  alt="Instagram" /></a>&nbsp;
              <a
                href="https://www.youtube.com/c/BelianiGmbH/featured?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                  alt="Youtube" /></a>&nbsp;
              <a href="https://pinterest.com/belianich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                  src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0" alt="Pinterest" /></a>
            </td>
          </tr>
          <!-- terms -->
          <tr>
            <td colspan="2" width="610"
              style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
              <b style="font-size: 10px!important">*Bedingungen:</b> ${text}
              <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">NEWSLETTER ABBESTELLEN</a></p>
            </td>
          </tr>
          <!-- Advantages -->
          <tr>
            <td>
              <a href="https://www.beliani.ch/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign=">
                <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-de_08.jpg" width="100%" border="0"
                  alt="Gratis Versand und R&uuml;ckversand" style="display:block" />
              </a>
            </td>
            <td>
              <a href="https://www.beliani.ch/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign=">
                <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-de_09.jpg" width="100%" border="0"
                  alt="365 Tage R&uuml;ckgaberecht" style="display:block" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.beliani.ch/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign=">
                <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-de_10.jpg" width="100%" border="0"
                  alt="Bis zu 70% Rabatt" style="display:block" />
              </a>
            </td>
            <td>
              <a href="https://www.beliani.ch/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=">
                <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-de_11.jpg" width="100%" border="0"
                  alt="&Uuml;ber 1 Million zufriedene Kunden" style="display:block" />
              </a>
            </td>
          </tr>
          <!-- impressum -->
          <tr>
            <td colspan="2" width="610"
              style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
              <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                <b>
                  <font style="font-size: 10px;">Impressum</font>
                </b><br />Beliani GmbH, 6340 Baar, Schweiz<br />Telefonnummer: 043 508 22 33; E-Mail-Adresse:
                <a href="mailto:mail@beliani.ch">mail@beliani.ch</a>
                <br />Handelsregister: Handelsregister des Kantons Zug, CH-170.4.008.869-6<br />USt-IDNr: CHE-114.825.869
                MWST
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      `;
  },
  AT: (text = "Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.") => {

    return `
          <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.at/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306at_20.jpg"
                            alt="Tausende weitere Möbel" style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>

    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.at/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_01.jpg" width="100%" border="0"
                            alt="Alle Sofas" style="display:block" /></a></td>
                <td><a href="https://www.beliani.at/betten/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_02.jpg" width="100%" border="0"
                            alt="Alle Betten" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.at/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_03.jpg" width="100%" border="0"
                            alt="Alle Kaffeetische" style="display:block" /></a></td>
                <td><a href="https://www.beliani.at/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_04.jpg" width="100%" border="0"
                            alt="Alle St&uuml;hle" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.at/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_05.jpg" width="100%" border="0"
                            alt="Alle Sessel" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.at/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_06.jpg" width="100%" border="0"
                            alt="Alle Sideboards" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.at/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_07.jpg" width="100%" border="0"
                            alt="Alle Lampen" style="display:block" /></a></td>
                <td><a href="https://www.beliani.at/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/AT-footerCat_08.jpg" width="100%" border="0"
                            alt="Alle Teppiche" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>

    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/beliani.oesterreich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_oesterreich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/belianiat/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*Bedingungen:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">NEWSLETTER
                            ABBESTELLEN</a></p><br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.at/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-at_08.jpg" width="100%"
                            border="0" alt="Kostenloser Versand" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.at/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-at_09.jpg" width="100%"
                            border="0" alt="365 Tage R&uuml;ckgaberecht" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.at/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-at_10.jpg" width="100%"
                            border="0" alt="Bis zu 70% Rabatt" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.at/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-at_11.jpg" width="100%"
                            border="0" alt="&Uuml;ber 1 Million zufriedene Kunden" style="display:block"></a></td>
            </tr>



            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;"><b>
                            <font style="font-size: 10px;">Impressum</font>
                        </b><br />
                        Beliani GmbH, 6340 Baar, Schweiz<br />
                        Telefonnummer: 0720 115451; E-Mail Adresse: mail@beliani.at<br />
                        Handelsregister: Handelsregister des Kantons Zug, CH-170.4.009.724-3<br />
                        USt-IDNr: DE 276156472</p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  FR: (text = "Tous les articles sont soumis à la disponibilité. Tous les prix sont susceptibles d'être modifiés sans notification.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2020/newsletter-340ch-fr_20.jpg"
                            alt="Voir des milliers d'autres" style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a
                        href="https://www.beliani.fr/meubles-de-salon/canapes/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_01.jpg" width="100%" border="0"
                            alt="Tous les canapés" style="display:block" /></a></td>
                <td><a href="https://www.beliani.fr/lits/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_02.jpg" width="100%" border="0"
                            alt="Tous les lits" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fr/tables/tables-basses/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_03.jpg" width="100%" border="0"
                            alt="Tous les tables à café" style="display:block" /></a></td>
                <td><a href="https://www.beliani.fr/chaises/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_04.jpg" width="100%" border="0"
                            alt="Toutes les chaises" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fr/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_05.jpg" width="100%" border="0"
                            alt="Tous les fauteuils" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.fr/meubles-de-salon/rangement/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_06.jpg" width="100%" border="0"
                            alt="Tous les buffets" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.fr/lampes/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_07.jpg" width="100%" border="0"
                            alt="Toutes les lampes" style="display:block" /></a></td>
                <td><a href="https://www.beliani.fr/tapis/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/FR-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>


    <!-- social icons -->

    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_fr/?hl=fr?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://www.pinterest.fr/belianifr/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*CONDITIONS: </b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">DÉSABONNEMENT</a>
                    </p><br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.fr/content/livraison/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_08.jpg" width="100%"
                            border="0" alt="Livraison et retours gratuits" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.fr/content/cgv/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_09.jpg" width="100%"
                            border="0" alt="Retours sous 365 jours" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fr/content/a-propos-de-nous/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_10.jpg" width="100%"
                            border="0" alt="Jusqu'à 70% de réduction" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.fr/content/centre-d-aide/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_11.jpg" width="100%"
                            border="0" alt="1 million de clients satisfaits" style="display:block"></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Coordonnées de la société</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Suisse<br />téléphone: +33 1 87 39 86 15; adresse
                        e-mail :
                        <a href="mailto:mail@beliani.fr">mail@beliani.fr</a>
                        <br />Commercial Register: Commercial Register of the Canton of Zug,
                        CH-170.4.008.869-6<br />USt-IDNr: DE 276156472
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  CHFR: (text = "Tous les articles sont soumis à la disponibilité. Tous les prix sont susceptibles d'être modifiés sans notification.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
      <tr>
        <td><a href="https://www.beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
              src="https://beliani.info/newsletter/2020/newsletter-340ch-fr_20.jpg" alt="Voir des milliers d'autres"
              style="display:block" width="100%" border="0" /></a></td>
      </tr>
    </tbody>
  </table>
  <table cellspacing="0" cellpadding="0" border="0" align="center"
    style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
    <tbody>
      <tr>
        <td>
          <a
            href="https://www.beliani.ch/meubles-de-salon/canapes/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_01.jpg" width="100%" border="0"
              alt="Tous les canapés" style="display:block" />
          </a>
        </td>
        <td>
          <a href="https://www.beliani.ch/lits/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_02.jpg" width="100%" border="0"
              alt="Tous les lits" style="display:block" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a
            href="https://www.beliani.ch/tables/tables-basses/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_03.jpg" width="100%" border="0"
              alt="Tous les tables à café" style="display:block" />
          </a>
        </td>
        <td>
          <a href="https://www.beliani.ch/chaises/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_04.jpg" width="100%" border="0"
              alt="Toutes les chaises" style="display:block" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a href="https://www.beliani.ch/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_05.jpg" width="100%" border="0"
              alt="Tous les fauteuils" style="display:block" />
          </a>
        </td>
        <td>
          <a
            href="https://www.beliani.ch/meubles-de-salon/rangement/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_06.jpg" width="100%" border="0"
              alt="Tous les buffets" style="display:block" />
          </a>
        </td>
      </tr>

      <tr>
        <td>
          <a href="https://www.beliani.ch/lampes/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_07.jpg" width="100%" border="0"
              alt="Toutes les lampes" style="display:block" />
          </a>
        </td>
        <td>
          <a href="https://www.beliani.ch/tapis/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2022/CHFR-footerCat_08.jpg" width="100%" border="0" alt=""
              style="display:block" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>


  <!-- social icons -->
  <table align="center" cellspacing="0" cellpadding="0" border="0"
    style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
    <tbody>
      <tr>
        <td colspan="2" align="center" style="padding-top: 10px;">
          <a href="https://www.facebook.com/beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
              src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
              alt="Facebook" /></a>&nbsp;
          <a
            href="https://www.instagram.com/beliani_schweiz/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
              src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
              alt="Instagram" /></a>&nbsp;
          <a
            href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
              src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
              alt="Youtube" /></a>&nbsp;
          <a href="https://pinterest.com/belianich/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
              src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0" alt="Pinterest" /></a>
        </td>
      </tr>
      <!-- terms -->
      <tr>
        <td colspan="2" width="610"
          style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
          <b style="font-size: 10px!important">*CONDITIONS: </b> ${text}
          <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">DÉSABONNEMENT</a></p>
          <br />
        </td>
      </tr>
      <!-- Advantages -->
      <tr>
        <td>
          <a href="https://www.beliani.ch/content/livraison/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_08.jpg" width="100%" border="0"
              alt="Livraison et retours gratuits" style="display:block">
          </a>
        </td>
        <td>
          <a href="https://www.beliani.ch/content/cgv?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_09.jpg" width="100%" border="0"
              alt="Retours sous 365 jours" style="display:block">
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <a
            href="https://www.beliani.ch/content/a-propos-de-nous/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_10.jpg" width="100%" border="0"
              alt="Jusqu'à 70% de réduction" style="display:block">
          </a>
        </td>
        <td>
          <a
            href="https://www.beliani.ch/content/faq/#7._Kann_ich_die_Garantie_auf_meinen_M_beln_auch_verl_ngern_/?utm_source=newsletter&utm_medium=email&utm_campaign=">
            <img src="https://beliani.info/newsletter/2018/header-and-footer-2018-ch-fr_11.jpg" width="100%" border="0"
              alt="1 million de clients satisfaits" style="display:block">
          </a>
        </td>
      </tr>
      <!-- impressum -->
      <tr>
        <td colspan="2" width="610"
          style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
          <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
            <b>
              <font style="font-size: 10px;">Mentions légales</font>
            </b><br />Beliani GmbH, 6340 Baar, Suisse<br />Téléphone: 043 508 22 33; E-Mail:
            <a href="mailto:mail@beliani.ch">mail@beliani.ch</a>
            <br />CH-170.4.008.869-6<br />USt-IDNr: CHE-114.825.869 MWST
          </p>
        </td>
      </tr>
    </tbody>
  </table>
    `;
  },
  IT: (text = "Tutti gli articoli sono soggetti a disponibilità. Tutti i prezzi sono soggetti a modifiche senza preavviso.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td><a href="https://www.beliani.it/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-306it_20.jpg"
                        alt="Scopri l'intera gamma" style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </tbody>
</table>

<table cellspacing="0" cellpadding="0" border="0" align="center"
    style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
    <tbody>
        <tr>
            <td><a href="https://www.beliani.it/divani/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_01.jpg" width="100%" border="0"
                        alt="divani" style="display:block" /></a></td>
            <td><a href="https://www.beliani.it/letti/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_02.jpg" width="100%" border="0"
                        alt="letti" style="display:block" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.it/tavoli/tavolini/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_03.jpg" width="100%" border="0"
                        alt="tavolini" style="display:block" /></a></td>
            <td><a href="https://www.beliani.it/sedie/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_04.jpg" width="100%" border="0"
                        alt="sedie" style="display:block" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.it/poltrone/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_05.jpg" width="100%" border="0"
                        alt="poltrone" style="display:block" /></a></td>
            <td><a
                    href="https://www.beliani.it/soggiorno/credenze-e-mobili-tv/Tutti%20i%20prodotti/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_06.jpg" width="100%" border="0"
                        alt="credenze" style="display:block" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.it/illuminazione/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_07.jpg" width="100%" border="0"
                        alt="illuminazione" style="display:block" /></a></td>
            <td><a href="https://www.beliani.it/tappeti/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/IT-footerCat_08.jpg" width="100%" border="0"
                        alt="(tappeti) - rugs" style="display:block" /></a></td>
        </tr>
    </tbody>
</table>


<!-- social icons -->
<table align="center" cellspacing="0" cellpadding="0" border="0"
    style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
    <tr>
        <td colspan="2" align="center" style="padding-top: 10px;">
            <a
                href="https://www.facebook.com/belianiitalia/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                    alt="Facebook" /></a>&nbsp;
            <a
                href="https://www.instagram.com/beliani_italia/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                    alt="Instagram" /></a>&nbsp;
            <a
                href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                    alt="Youtube" /></a>&nbsp;
            <a
                href="https://pinterest.com/belianiitalia/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                    alt="Pinterest" /></a>
        </td>
    </tr>
    <!-- terms -->
    <tr>
        <td colspan="2" width="610"
            style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
            <b style="font-size: 10px!important">*Termini e Condizioni: </b> ${text}
            <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">ANNULLA L’ISCRIZIONE</a>
            </p>
        </td>
    </tr>
    <!-- Advantages -->
    <tr>
        <td><a
                href="https://www.beliani.it/content/consegna/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/header-and-footer-2018-it_08.jpg" width="100%"
                    border="0" alt="Consegna &amp; Reso gratuiti" style="display:block" /></a></td>
        <td><a
                href="https://www.beliani.it/content/termini-e-condizioni/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/header-and-footer-2018-it_09.jpg" width="100%"
                    border="0" alt="Resi entro 365 giorni" style="display:block" /></a></td>
    </tr>
    <tr>
        <td><a
                href="https://www.beliani.it/content/chi-siamo/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/header-and-footer-2018-it_10.jpg" width="100%"
                    border="0" alt="Fino al 70% di sconto" style="display:block" /></a></td>
        <td><a
                href="https://www.beliani.it/content/help-center_italian/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/header-and-footer-2018-it_11.jpg" width="100%"
                    border="0" alt="1 milione di clienti soddisfatti nel mondo" style="display:block" /></a></td>
    </tr>
</table>


<table align="center" cellspacing="0" cellpadding="0" border="0"
    style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
    <!-- impressum -->
    <tr>
        <td colspan="2" width="610"
            style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
            <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                <b>
                    <font style="font-size: 10px;">Dettagli societari</font>
                </b><br />Beliani (DE) GmbH CH 6340 Baar Svizzera<br />Numero di telefono: +39 06 56548602;
                Indirizzo e-mail:
                <a href="mailto:mail@beliani.it">mail@beliani.it</a>
                <br />Registro commerciale (USt-IDNr): registro commerciale del Canton ZUG,
                CHE-115.695.894<br />Partita IVA: DE 276156472
            </p>
        </td>
    </tr>
</table>
    `;
  },
  UK: (text = "All items are subject to availability. All prices are subject to change without notification.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td><a href="https://www.beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-306uk_20.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </tbody>
</table>
<table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td><a
                    href="https://www.beliani.co.uk/sofas/All%20products/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_22.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.co.uk/beds/All%20products/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_23.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.co.uk/tables/coffee-tables/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_24.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.co.uk/chairs/All%20products/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_25.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.co.uk/armchairs/All%20products/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_26.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.co.uk/storage/sideboards/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_27.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.co.uk/lighting/All%20products/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_28.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.co.uk/rugs/All%20products/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-275uk_29.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </tbody>
</table>
<!-- social icons -->
<table style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;" cellspacing="0"
    cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td colspan="2" style="padding-top: 10px;" align="center">
                <a
                    href="https://www.facebook.com/beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" alt="Facebook" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://instagram.com/beliani_uk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" alt="Instagram" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" alt="Youtube" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://www.pinterest.co.uk/belianiuk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" alt="Pinterest" width="36"
                        border="0" /></a>
            </td>
        </tr>
        <!-- terms -->
        <tr>
            <td colspan="2"
                style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;"
                width="610">
                <b style="font-size: 10px!important">*CONDITIONS: </b>${text}
                <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">UNSUBSCRIBE</a></p>
            </td>
        </tr>
        <!-- Advantages -->
        <tr>
            <td><a
                    href="https://www.beliani.co.uk/content/delivery/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/header-and-footer-2018_08.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.co.uk/content/terms-and-conditions/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/header-and-footer-2018_09.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.co.uk/content/about-us/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/header-and-footer-2018_10.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.co.uk/content/faq-en/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/header-and-footer-2018_11.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <!-- impressum -->
        <tr>
            <td colspan="2" width="610"
                style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                    <b>
                        <font style="font-size: 10px;">Company Details</font>
                    </b><br />Beliani (UK) GmbH 6340 Baar Switzerland<br />Phone: 020 3318 8222; E-mail address:
                    <a href="mailto:mail@beliani.co.uk">mail@beliani.co.uk</a>
                    <br />Commercial Register: Commercial Register of the Canton of Zug, CH-170.4.008.869-6<br />VAT
                    ID: CHE-114.825.869 VAT
                </p>
            </td>
        </tr>
    </tbody>
</table>
    `;
  },
  ES: (text = "Los artículos están sujetos a disponibilidad. Los precios pueden variar sin notificación previa.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.es/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306es_20.jpg" alt=""
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.es/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_01.jpg" width="100%" border="0"
                            alt="Todos los sofás" style="display:block" /></a></td>
                <td><a href="https://www.beliani.es/camas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_02.jpg" width="100%" border="0"
                            alt="Todas las camas" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.es/mesas/mesas-de-centro/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_03.jpg" width="100%" border="0"
                            alt="Todas las mesas de centro" style="display:block" /></a></td>
                <td><a href="https://www.beliani.es/sillas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_04.jpg" width="100%" border="0"
                            alt="Todas las sillas" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.es/sillones/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_05.jpg" width="100%" border="0"
                            alt="Todos los sillones" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.es/organizacion-y-almacenaje/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_06.jpg" width="100%" border="0"
                            alt="Todos los aparadores" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.es/lamparas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_07.jpg" width="100%" border="0"
                            alt="Todas las lámparas" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.es/alfombras/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/ES-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/beliani.espana/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani.espana/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/belianies/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*CONDICIONES:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">CANCELAR
                            SUSCRIPCIÓN</a></p>
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.es/content/envio/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-es_08.jpg" width="100%"
                            border="0" alt="Entrega gratuita" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.es/content/condiciones-generales/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-es_09.jpg" width="100%"
                            border="0" alt="365 días de derecho a devolución" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.es/content/sobre-nosotros/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-es_10.jpg" width="100%"
                            border="0" alt="Descuentos de hasta el 70%" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.es/content/centro-de-ayuda/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/header-and-footer-2018-es_11.jpg" width="100%"
                            border="0" alt="1 millón de clientes satisfechos" style="display:block" /></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Datos de empresa</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Suiza
                        <br />teléfono: +34 91 198 34 42; dirección e-mail: <a
                            href="mailto:mail@beliani.es">mail@beliani.es</a>
                        <br />Registro comercial: Registro comercial de cantón ZUG, CHE-115.695.894<br />USt-IDNr: DE
                        276156472
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  PT: (text = "Oferta limitada ao stock disponível. Todos os preços podem estar sujeitos a alterações sem aviso prévio.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.pt/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306pt_20.jpg" alt="Veja mais"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.pt/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_01.jpg" width="100%" border="0"
                            alt="Todos os sofás" style="display:block" /></a></td>
                <td><a href="https://www.beliani.pt/camas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_02.jpg" width="100%" border="0"
                            alt="Todas as camas" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pt/mesas/mesas-de-centro/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_03.jpg" width="100%" border="0"
                            alt="Todos as mesas de apoio" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pt/cadeiras/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_04.jpg" width="100%" border="0"
                            alt="Todas as cadeiras" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pt/poltrona/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_05.jpg" width="100%" border="0"
                            alt="Todas as poltronas" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pt/arrumacao/comodas-com-gavetas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_06.jpg" width="100%" border="0"
                            alt="Todos os aparadores" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pt/candeeiros/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_07.jpg" width="100%" border="0"
                            alt="Todos os candeeiros" style="display:block" /></a></td>
                <td><a href="https://www.beliani.pt/tapetes/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/PT-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/belianiportugal/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_portugal/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/belianiportugal/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*Termos e Condições: </b> ${text}
                    <br /><br />
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">CANCELAR A
                            SUBSCRIÇÃO</a></p><br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.pt/content/entrega/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pt_08.jpg" width="100%"
                            border="0" alt="Entregas grátis" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.pt/content/termos-e-condicoes/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pt_09.jpg" width="100%"
                            border="0" alt="365 dias de direito a devolução" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pt/content/sobre-nos/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pt_10.jpg" width="100%"
                            border="0" alt="Descontos até 70%" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.pt/content/faq-pt/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pt_11.jpg" width="100%"
                            border="0" alt="1 milhão de clientes satisfeitos" style="display:block"></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Detalhes da Empresa</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Suíça<br />Telefone: +351 21 145 00 19; E-mail:
                        <a href="mailto:mail@beliani.pt">mail@beliani.pt</a>
                        <br />Registo Comercial: Reg. comercial do cantão ZUG, CHE-115.695.894<br />USt-IDNr: DE
                        276156472
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  PL: (text = "Promocja obowiązuje do wyczerpania zapasów. Zastrzegamy sobie prawo do zmiany cen.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.pl/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306pl_20.jpg"
                            alt="Odkryj tysiące produktów" style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>

    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a
                        href="https://www.beliani.pl/sofy/Wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_22.jpg" width="100%" border="0"
                            alt="Wszystkie sofy" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pl/lozka/Wszystkie%20produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_23.jpg" width="100%" border="0"
                            alt="Wszystkie łóżka" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pl/stoly/stoliki-kawowe/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_24.jpg" width="100%" border="0"
                            alt="Wszystkie stoliki kawowe" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pl/krzesla/Wszystkie%20produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_25.jpg" width="100%" border="0"
                            alt="Wszystkie krzesła" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pl/fotel/Wszystkie%20produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_26.jpg" width="100%" border="0"
                            alt="Wszystkie fotele" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pl/przechowywanie/komody/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_27.jpg" width="100%" border="0"
                            alt="Wszystkie komody" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pl/lampy/Wszystkie%20produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_28.jpg" width="100%" border="0"
                            alt="Wszystkie lampy" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pl/dywany/Wszystkie%20produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-275pl_29.jpg" width="100%" border="0"
                            alt="Wszystkie dywany" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>


    <!-- at work -->
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td style="padding-top: 10px;"><a
                        href="https://www.facebook.com/BelianiAtWork/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/atwork_pl.png" width="100%" border="0" alt=""
                            style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/BelianiPolska/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_polska/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://www.pinterest.com/belianipl/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*WARUNKI:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">WYPISZ SIĘ Z
                            NEWSLETTERA</a></p>
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.pl/content/dostawa/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pl_08.jpg" width="100%"
                            border="0" alt="Darmowa dostawa i zwroty" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pl/content/ogolne-warunki-handlowe/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pl_09.jpg" width="100%"
                            border="0" alt="365 dni prawa do zwrotu" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.pl/content/o-nas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pl_10.jpg" width="100%"
                            border="0" alt="Aż do 70% taniej" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.pl/content/najczesciej-zadawane-pytania/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-pl_11.jpg" width="100%"
                            border="0" alt="Ponad milion zadowolonych klientów" style="display:block" /></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Dane Firmy</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Szwajcaria<br />Telefon: (91) 350 83 60; E-mail:
                        <a href="mailto:mail@beliani.pl">mail@beliani.pl</a>
                        <br />Rejestr handlowy: Rejestr handlowy kantonu Zug, CH-170.4.008.869-6<br />NIP:
                        CHE-114.825.869 VAT
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  HU: (text = "Áraink a készlet erejéig érvényesek. Az árváltoztatás jogát előzetes bejelentés nélkül is fenntartjuk.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.hu/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306hu_20.jpg" alt="És még sok más"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.hu/kanapek/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_01.jpg" width="100%" border="0"
                            alt="Minden kanapé" style="display:block" /></a></td>
                <td><a href="https://www.beliani.hu/agyak/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_02.jpg" width="100%" border="0"
                            alt="Minden ágy" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.hu/asztalok/dohanyzoasztalok/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_03.jpg" width="100%" border="0"
                            alt="Minden dohányzóasztal" style="display:block" /></a></td>
                <td><a href="https://www.beliani.hu/szekek/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_04.jpg" width="100%" border="0"
                            alt="Minden szék" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.hu/fotelek/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_05.jpg" width="100%" border="0"
                            alt="Minden fotel" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.hu/tarolo-szekrenyek/komodok/?sort=-visits/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_06.jpg" width="100%" border="0"
                            alt="Minden szekrény" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.hu/lampak/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_07.jpg" width="100%" border="0"
                            alt="Minden lámpa" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.hu/szonyegek/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/HU-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/Beliani-Magyarorsz%C3%A1g-1564931000428515/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_magyarorszag/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/beliani_magyarorszag/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*Feltételek:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">LEIRATKOZÁS</a></p>
                    <br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.hu/content/szallitas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-hu_08.jpg" width="100%"
                            border="0" alt="Ingyenes szállítás és visszáru" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.hu/content/aszf/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-hu_09.jpg" width="100%"
                            border="0" alt="365 napos visszaküldési jog" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.hu/content/rolunk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-hu_10.jpg" width="100%"
                            border="0" alt="Akár 70% kedvezmény" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.hu/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-hu_11.jpg" width="100%"
                            border="0" alt="1 millió elégedett vásárló" style="display:block"></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Impresszum</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Schweiz<br />Telefonszám: +36 (1) 700 8555; E-mail cím:
                        <a href="mailto:mail@beliani.hu">mail@beliani.hu</a>
                        <br />Cégjegyzékszám: Zug kanton cégbírósága, CHE-115.695.894<br />Közösségi adószám: DE
                        276156472
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  NL: (text = "Alle producten zijn afhankelijk van de voorraad. Alle prijzen kunnen zonder melden worden gewijzigd.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.nl/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2021/newsletter-305nl_27.jpg"
                            alt="Ontdek nog meer producten" style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.nl/banken/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_01.jpg" width="100%" border="0"
                            alt="Alle banken" style="display:block" /></a></td>
                <td><a href="https://www.beliani.nl/bedden/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_02.jpg" width="100%" border="0"
                            alt="Alle bedden" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.nl/tafels/salontafels/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_03.jpg" width="100%" border="0"
                            alt="Alle salontafels" style="display:block" /></a></td>
                <td><a href="https://www.beliani.nl/stoelen/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_04.jpg" width="100%" border="0"
                            alt="Alle stoelen" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.nl/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_05.jpg" width="100%" border="0"
                            alt="Alle fauteuils" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.nl/woonkamer/commodes-en-dressoirs/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_06.jpg" width="100%" border="0"
                            alt="Alle kasten" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.nl/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_07.jpg" width="100%" border="0"
                            alt="Alle lampen" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.nl/tapijten/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/categoriesNL_08.jpg" width="100%" border="0"
                            alt="Alle vloerkleden" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
        <tr>
            <td colspan="2" align="center" style="padding-top: 10px;">
                <a
                    href="https://www.facebook.com/beliani.nederland/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                        alt="Facebook" /></a>&nbsp;
                <a
                    href="https://www.instagram.com/beliani_nl/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                        alt="Instagram" /></a>&nbsp;
                <a
                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                        alt="YouTube" /></a>&nbsp;
                <a
                    href="https://nl.pinterest.com/BelianiNederland/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                        alt="Pinterest" /></a>
            </td>
        </tr>
        <!-- terms -->
        <tr>
            <td colspan="2" width="610"
                style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                <b style="font-size: 10px!important">*Voorwaarden:</b> ${text}
                <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">AFMELDEN</a></p><br />
            </td>
        </tr>
        <!-- Advantages -->
        <tr>
            <td><a
                    href="https://www.beliani.nl/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer2022NL_01.jpg" width="100%" border="0"
                        alt="Gratis verzending &amp; retour (free delivery &amp; returns)" style="display:block"></a>
            </td>
            <td><a
                    href="https://www.beliani.nl/content/algemene-voorwaarden/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer2022NL_02.jpg" width="100%" border="0"
                        alt="Achteraf betalen (pay afterwards)" style="display:block"></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.nl/content/over-ons/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer2022NL_03.jpg" width="100%" border="0"
                        alt="Meer dan 1 miljoen tevreden klanten (over 1 million satisfied customers)"
                        style="display:block"></a></td>
            <td><a href="https://www.beliani.nl/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer2022NL_04.jpg" width="100%" border="0"
                        alt="365 dagen bedenktijd (365 day returns)" style="display:block"></a></td>
        </tr>
    </table>


    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
        <!-- impressum -->
        <tr>
            <td width="610"
                style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                    <b>
                        <font style="font-size: 10px;">Bedrijfsinformatie</font>
                    </b><br />Beliani (DE) GmbH CH 6340 Baar Switzerland<br />Telefoonnummer: 038 744 0103; E-mailadres:
                    <a href="mailto:mail@beliani.nl">mail@beliani.nl</a>
                    <br />Handelsregister: handelsregister van kanton ZUG, CHE-115.695.894<br />USt-IDNr: DE 276156472
                </p>
            </td>
        </tr>
    </table>
    `;
  },
  SE: (text = "Alla varor är beroende av tillgänglighet. Alla priser kan komma att ändras utan förvarning.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.se/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/newsletter-306se_20.jpg" alt="Se hundratals mer"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a
                        href="https://www.beliani.se/soffor/Alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_01.jpg" width="100%" border="0"
                            alt="Alla soffor" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.se/sangar/Alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_02.jpg" width="100%" border="0"
                            alt="Alla sängar" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.se/bord/soffbord/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_03.jpg" width="100%" border="0"
                            alt="Alla soffbord" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.se/stolar/Alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_04.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.se/fatolj/Alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_05.jpg" width="100%" border="0"
                            alt="Alla fåtöljer" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.se/forvaring/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_06.jpg" width="100%" border="0"
                            alt="Alla sidobord" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.se/lampor/Alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_07.jpg" width="100%" border="0"
                            alt="Alla lampor" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.se/mattor/Alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2022/SE-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/Beliani-Sverige-507135726091944/?fref=ts?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_sverige/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/belianisverige/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*VILLKOR: </b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">AVANMÄL DIG</a></p>
                    <br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.se/content/leverans/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-se_08.jpg" width="100%"
                            border="0" alt="Fri frakt &amp; retur" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.se/content/villkor/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-se_09.jpg" width="100%"
                            border="0" alt="365 dagars returrätt" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.se/content/om-oss/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-se_10.jpg" width="100%"
                            border="0" alt="Upp till 70% rabatt" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.se/content/sjalvbetjaning_swedish/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-se_11.jpg" width="100%"
                            border="0" alt="1 miljon kunder" style="display:block"></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Företagsuppgifter</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Schweiz<br />Phone: 08-446 891 58; E-mail address:
                        <a href="mailto:mail@beliani.se">mail@beliani.se</a>
                        <br />Commercial Register: Commercial Register of the Canton of Zug,
                        CHE-115.695.894<br />USt-IDNr: DE 276156472
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  DK: (text = "Tilbud gælder så længe lager haves. Alle priser kan ændres uden varsel.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td><a href="https://www.beliani.dk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/newsletter-306dk_20.jpg" alt="Se mere"
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </tbody>
</table>
<table cellspacing="0" cellpadding="0" border="0" align="center"
    style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
    <tbody>
        <tr>
            <td><a href="https://www.beliani.dk/sofaer/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_01.jpg" width="100%" border="0"
                        alt="Sofaer" style="display:block" /></a></td>
            <td><a href="https://www.beliani.dk/senge/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_02.jpg" width="100%" border="0"
                        alt="Senge" style="display:block" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.dk/borde/sofaborde/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_03.jpg" width="100%" border="0"
                        alt="Sofaborde" style="display:block" /></a></td>
            <td><a
                    href="https://www.beliani.dk/stuemobler/stole/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_04.jpg" width="100%" border="0"
                        alt="Stole" style="display:block" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.dk/lenestole/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_05.jpg" width="100%" border="0"
                        alt="Lænestole" style="display:block" /></a></td>
            <td><a
                    href="https://www.beliani.dk/borde/sideborde/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_06.jpg" width="100%" border="0"
                        alt="Sideborde" style="display:block" /></a></td>
        </tr>
        <tr>
            <td><a href="https://www.beliani.dk/lamper/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_07.jpg" width="100%" border="0"
                        alt="Belysning" style="display:block" /></a></td>
            <td><a
                    href="https://www.beliani.dk/gulvtepper/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/DK-footerCat_08.jpg" width="100%" border="0"
                        alt="" style="display:block" /></a></td>
        </tr>
    </tbody>
</table>
<!-- social icons -->
<table align="center" cellspacing="0" cellpadding="0" border="0"
    style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
    <tr>
        <td colspan="2" align="center" style="padding-top: 10px;">
            <a href="https://www.facebook.com/beliani.dk?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                    alt="Facebook" /></a>&nbsp;
            <a
                href="https://www.instagram.com/beliani.danmark/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                    alt="Instagram" /></a>&nbsp;
            <a
                href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                    alt="Youtube" /></a>&nbsp;
            <a
                href="https://pinterest.com/belianidanmark/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                    alt="Pinterest" /></a>
        </td>
    </tr>
    <!-- terms -->
    <tr>
        <td colspan="2" width="610"
            style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
            <b style="font-size: 10px!important">*VILKÅR OG BETINGELSER:</b> ${text}
            <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">AFMELD NYHEDSBREV</a>
            </p>
        </td>
    </tr>
    <!-- Advantages -->
    <tr>
        <td><a
                href="https://www.beliani.dk/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/blakdk_08.jpg" width="100%" border="0"
                    alt="Gratis levering og returnering" style="display:block" /></a></td>
        <td><a
                href="https://www.beliani.dk/content/vilkar-og-betingelser/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/blakdk_09.jpg" width="100%" border="0"
                    alt="365 dagers retur" style="display:block" /></a></td>
    </tr>
    <tr>
        <td><a
                href="https://www.beliani.dk/content/om-os/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/blakdk_10.jpg" width="100%" border="0"
                    alt="Op til 70% rabat" style="display:block" /></a></td>
        <td><a
                href="https://www.beliani.dk/content/hjaelp/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                    src="https://beliani.info/newsletter/2018/butondk_11.jpg" width="100%" border="0"
                    alt="1 million tilfredse kunder" style="display:block" /></a></td>
    </tr>
    <!-- impressum -->
    <tr>
        <td colspan="2" width="610"
            style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
            <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                <b>
                    <font style="font-size: 10px;">Selskabs informationer</font>
                </b><br />Beliani (DE) GmbH CH 6340 Baar Schweiz<br />Telefonnummer: 0045 89 88 10 86; email
                adresse:
                <a href="mailto:mail@beliani.dk">mail@beliani.dk</a>
                <br />Commercial Register: Commercial Register of the Canton of Zug, CHE-115.695.894<br />USt-IDNr:
                DE 276156472
            </p>
        </td>
    </tr>
</table>
    `;
  },
  CZ: (text = "Všechny položky jsou závislé na dostupnosti. Všechny ceny se mohou bez upozornění změnit.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2018/newsletter-306cz_20.jpg"
                            alt="Zobrazit tisíce dalších" style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.cz/pohovky/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_01.jpg" width="100%" border="0"
                            alt="Všechny pohovky" style="display:block" /></a></td>
                <td><a href="https://www.beliani.cz/postele/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_02.jpg" width="100%" border="0"
                            alt="Všechny postele" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.cz/stoly/konferencni-stolky/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_03.jpg" width="100%" border="0"
                            alt="Všechny konferenční stolky" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.cz/zidle-a-kresla/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_04.jpg" width="100%" border="0"
                            alt="Všechny židle" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a href="https://www.beliani.cz/kresla/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_05.jpg" width="100%" border="0"
                            alt="Všechna křesla" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.cz/ulozny-prostor/regaly-a-komody/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_06.jpg" width="100%" border="0"
                            alt="Všechny komody" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.cz/svitidla/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_07.jpg" width="100%" border="0"
                            alt="Všechny lampy" style="display:block" /></a></td>
                <td><a href="https://www.beliani.cz/koberce/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2022/CZ-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook"></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram"></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="YouTube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/belianicz/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" alt="Pinterest" width="36"
                            border="0" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">*PODMÍNKY:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">ODHLÁSIT SE</a></p>
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.cz/content/dodani/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            style="display: block;" src="https://beliani.info/newsletter/2018/32cz11_28.jpg"
                            alt="Doručení zdarma" width="100%" border="0" /></a></td>
                <td><a
                        href="https://www.beliani.cz/content/vseobecne-podminky/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            style="display: block;" src="https://beliani.info/newsletter/2018/32cz11_29.jpg"
                            alt="365denní pravo na vrácení" width="100%" border="0" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.cz/content/o-nas/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            style="display: block;" src="https://beliani.info/newsletter/2018/32cz11_30.jpg"
                            alt="Sleva až 70%" width="100%" border="0" /></a></td>
                <td><a
                        href="https://www.beliani.cz/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=15179"><img
                            style="display: block;" src="https://beliani.info/newsletter/2018/32cz11_31.jpg"
                            alt="1 milion spokojených zákazníků" width="100%" border="0" /></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Detaily společnosti</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Švýcarsko<br />Telefonní číslo: +420 228881514;
                        E-mailová adresa:
                        <a href="mailto:mail@beliani.cz">mail@beliani.cz</a>
                        <br />Obchodní registr: Obchodní registr Kantónu Zug, CH-170.4.008.869-6<br />USt-IDNr:
                        CHE-114.825.869 MWST; DIČ: DE 276156472
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  FI: (text = "Tuotteet saatavuuden mukaan. Pidätämme oikeudet hinnanmuutoksiin ilman erillistä ilmoitusta.") => {

    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.fi/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/newsletter-306fi_20.jpg" alt="Katso lisää"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center"
        style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.fi/sohvat/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_01.jpg" width="100%" border="0"
                            alt="Sohvat" style="display:block" /></a></td>
                <td><a href="https://www.beliani.fi/sangyt/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_02.jpg" width="100%" border="0"
                            alt="Sängyt" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fi/poydat/sohvapoydat/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_03.jpg" width="100%" border="0"
                            alt="Sohvapöydät" style="display:block" /></a></td>
                <td><a href="https://www.beliani.fi/tuolit/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_04.jpg" width="100%" border="0"
                            alt="Tuolit" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fi/nojatuolit/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_05.jpg" width="100%" border="0"
                            alt="Nojatuolit" style="display:block" /></a></td>
                <td><a
                        href="https://www.beliani.fi/olohuoneen-kalusteet/sailytys/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_06.jpg" width="100%" border="0"
                            alt="Sivupöydät" style="display:block" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fi/valaisimet/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_07.jpg" width="100%" border="0"
                            alt="Valaisimet" style="display:block" /></a></td>
                <td><a href="https://www.beliani.fi/matot/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2022/FI-footerCat_08.jpg" width="100%" border="0"
                            alt="" style="display:block" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;">
        <tbody>
            <tr>
                <td colspan="2" align="center" style="padding-top: 10px;">
                    <a
                        href="https://www.facebook.com/belianisuomi/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" width="36" border="0"
                            alt="Facebook" /></a>&nbsp;
                    <a
                        href="https://www.instagram.com/beliani_suomi/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" width="36" border="0"
                            alt="Instagram" /></a>&nbsp;
                    <a
                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                            alt="Youtube" /></a>&nbsp;
                    <a
                        href="https://pinterest.com/belianisuomi/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                            alt="Pinterest" /></a>
                </td>
            </tr>
            <!-- terms -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;">
                    <b style="font-size: 10px!important">Ehdot:</b> ${text}
                    <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">LOPETA TILAUS</a>
                    </p><br />
                </td>
            </tr>
            <!-- Advantages -->
            <tr>
                <td><a
                        href="https://www.beliani.fi/content/toimitus/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-fi_08.jpg" width="100%"
                            border="0" alt="Ilmainen toimitus ja palautus" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.fi/content/kayttoehdot/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-fi_09.jpg" width="100%"
                            border="0" alt="365 päivän palautusoikeus" style="display:block"></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.fi/content/tietoja-meista/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-fi_10.jpg" width="100%"
                            border="0" alt="Jopa 70% alennusta" style="display:block"></a></td>
                <td><a
                        href="https://www.beliani.fi/content/ohjekeskus/?utm_source=newsletter&utm_medium=email&utm_campaign=15180"><img
                            src="https://beliani.info/newsletter/2018/header-and-footer-2018-fi_11.jpg" width="100%"
                            border="0" alt="Miljoona asiakasta" style="display:block"></a></td>
            </tr>
            <!-- impressum -->
            <tr>
                <td colspan="2" width="610"
                    style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                    <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                        <b>
                            <font style="font-size: 10px;">Yhtiön tiedot</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Sveitsi<br />Puhelinnumero: +358 (0)9 4245 0464;
                        sähköpostiosoite:
                        <a href="mailto:mail@beliani.fi">mail@beliani.fi</a>
                        <br />Rekisteröity: Zugin kantonin kaupparekisteri, CHE-115.695.894<br />USt-IDNr: DE 276156472
                        MWST
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    `;
  },
  NO: (text = "Alle varer er avhengig av tilgjengelighet. Alle priser kan endres uten varsel.") => {
      
    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.no/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_01.jpg" alt="Se mye mer"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
        cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td><a href="https://www.beliani.no/sofaer/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_02.jpg" alt="Alle sofaer"
                            style="display:block" width="100%" border="0" /></a></td>
                <td><a href="https://www.beliani.no/senger/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_03.jpg" alt="Alle senger"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.no/bord/sofabord/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_04.jpg" alt="Alle sofabord"
                            style="display:block" width="100%" border="0" /></a></td>
                <td><a href="https://www.beliani.no/stoler/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_05.jpg" alt="Alle stoler"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.no/lenestoler/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_06.jpg" alt="Alle lenestoler"
                            style="display:block" width="100%" border="0" /></a></td>
                <td><a
                        href="https://www.beliani.no/oppbevaring/kommoder/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_07.jpg" alt="Alle kommoder"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
            <tr>
                <td><a
                        href="https://www.beliani.no/belysning/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_08.jpg" alt="Alle lamper"
                            style="display:block" width="100%" border="0" /></a></td>
                <td><a href="https://www.beliani.no/tepper/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                            src="https://beliani.info/newsletter/2021/newsletter-cat-no_09.jpg" alt="Alle tepper"
                            style="display:block" width="100%" border="0" /></a></td>
            </tr>
        </tbody>
    </table>
    <!-- social icons -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
        <tr>
            <td colspan="2" align="center" style="padding-top: 10px;">
                <a
                    href="https://www.facebook.com/BelianiNorge?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" alt="Facebook" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://www.instagram.com/beliani_norge/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" alt="Instagram" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" width="36" border="0"
                        alt="YouTube" /></a>&nbsp;
                <a
                    href="https://www.pinterest.com/beliani_norge?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" width="36" border="0"
                        alt="Pinterest" /></a>
            </td>
        </tr>
        <!-- terms -->
        <tr>
            <td colspan="2"
                style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;"
                width="610">
                <b style="font-size: 10px!important">*VILKÅR: </b> ${text}
                <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">AVSLUTT ABONNEMENT</a>
                </p>
            </td>
        </tr>
        <!-- Advantages -->
        <tr>
            <td><a
                    href="https://www.beliani.no/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2021/newsletter-adv-no_01.jpg" alt="Gratis levering"
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.no/content/vilkar-og-betingelser/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2021/newsletter-adv-no_02.jpg" alt="365-dagers retur"
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.no/content/om-oss/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2021/newsletter-adv-no_03.jpg" alt="Opptil 70% rabatt"
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.no/content/hjelpesenter_norwegian/?utm_source=newsletter&utm_medium=email&utm_campaign=15181"><img
                        src="https://beliani.info/newsletter/2021/newsletter-adv-no_04.jpg"
                        alt="1 million fornøyde kunder" style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </table>


    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; max-width:650px;">
        <!-- impressum -->
        <tr>
            <td width="610"
                style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                    <b>
                        <font style="font-size: 10px;">Selskapets Detaljer</font>
                    </b><br />Beliani (DE) GmbH CH 6340 Baar Switzerland<br />Telefonnummer: +47 21 56 31 51;
                    E-postadresse:
                    <a href="mailto:mail@beliani.no">mail@beliani.no</a>
                    <br />Commercial register: commercial register of canton ZUG, CHE-115.695.894<br />USt-IDNr: DE
                    276156472
                </p>
            </td>
        </tr>
    </table>
    `;
  },
  SK: (text = "Všetky položky podliehajú dostupnosti. Všetky ceny sa môžu zmeniť bez upozornenia.") => {
    return `
    <table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td><a href="https://www.beliani.sk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_01.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </tbody>
</table>
<table style="margin: 0 auto; max-width:650px; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;"
    cellspacing="0" cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td><a
                    href="https://www.beliani.sk/pohovky/zobraziť+všetky+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_02.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.sk/postele/zobraziť+všetky+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_03.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.sk/stoly/konferencne-stoliky/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_04.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.sk/stolicky-a-kresla/zobraziť+všetky+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_05.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.sk/kresla/zobraziť+všetky+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_06.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.sk/ulozny-priestor/nizke-skrinky/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_07.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.sk/svietidla/zobraziť+všetky+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_08.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.sk/koberce/zobraziť+všetky+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/category-2022-sk_09.jpg" alt=""
                        style="display:block" width="100%" border="0" /></a></td>
        </tr>
    </tbody>
</table>
<!-- social icons -->
<table style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em;" cellspacing="0"
    cellpadding="0" border="0" align="center">
    <tbody>
        <tr>
            <td colspan="2" style="padding-top: 10px;" align="center">
                <a
                    href="https://www.facebook.com/BelianiSlovensko/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-01-2018.jpg" alt="Facebook" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://www.instagram.com/beliani_sk/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-02-2018.jpg" alt="Instagram" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-04-2018.jpg" alt="Youtube" width="36"
                        border="0" /></a>&nbsp;
                <a
                    href="https://pinterest.com/beliani_slovensko/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2018/icon-03-2018.jpg" alt="Pinterest" width="36"
                        border="0" /></a>
            </td>
        </tr>
        <!-- terms -->
        <tr>
            <td colspan="2"
                style="vertical-align: middle; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; text-align: center; font-size: 10px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000;"
                width="610"><b style="font-size: 10px!important">*Podmienky:</b> ${text}
                <p><a href="[[newsunassignurl]]" style="text-decoration: none; color: #000000;">ZRUŠIŤ ODBER</a></p>
            </td>
        </tr>
        <!-- Advantages -->
        <tr>
            <td><a
                    href="https://www.beliani.sk/content/dodanie/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer-2022sk_01.jpg" alt="" style="display:block"
                        width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.sk/content/vseobecne-podmienky/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer-2022sk_02.jpg" alt="" style="display:block"
                        width="100%" border="0" /></a></td>
        </tr>
        <tr>
            <td><a
                    href="https://www.beliani.sk/content/o-nas/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer-2022sk_03.jpg" alt="" style="display:block"
                        width="100%" border="0" /></a></td>
            <td><a
                    href="https://www.beliani.sk/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign="><img
                        src="https://beliani.info/newsletter/2022/footer-2022sk_04.jpg" alt="" style="display:block"
                        width="100%" border="0" /></a></td>
        </tr>
        <!-- impressum -->
        <tr>
            <td colspan="2" width="610"
                style="vertical-align: middle;padding-top: 20px; padding-right: 20px; padding-bottom: 20px; padding-left: 20px; font-size: 12px; font-family: Trebuchet MS,Arial,Verdana,sans-serif; color: #000000; background:#ececec;">
                <p style="color: #4a4a4a;text-align: center; margin: 0; font-size: 9px;">
                    <b>
                        <font style="font-size: 10px;">Detaily spoločnosti</font>
                    </b><br />Beliani (DE) GmbH CH 6340 Baar Švajčiarsko<br />Telefónne číslo: +421 232784612;
                    E-mailová adresa:
                    <a href="mailto:mail@beliani.sk">mail@beliani.sk</a>
                    <br />Obchodný register: Obchodný register kantónu Zug, CH-170.4.008.869-6<br />USt-IDNr:
                    CHE-114.825.869 MWST; DIČ: DE 276156472
                </p>
            </td>
        </tr>
    </tbody>
</table>
    `;
  },
};
