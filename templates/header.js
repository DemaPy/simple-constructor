export default {
    DE: (
      type,
      id
    ) => {
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Gratis Versand &
          Rückversand ✔️ Die größte Auswahl ✔️ Bis zu 70% Rabatt</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Der
      Newsletter wird nicht richtig angezeigt? <a style="color: #000; border: 0;" href="[[newsshowurl]]">Sieh</a> dir
      die Online-Version an. Füge Beliani zu deiner <a style="color: #000; border: 0;" href="https://www.beliani.de/content/whitelist-emails-de/">Weißliste</a> hinzu</p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.de/wohnzimmer-moebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="M&ouml;bel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/wohnzubehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/gartenmoebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Gratis Versand &
          Rückversand ✔️ Die größte Auswahl ✔️ Bis zu 70% Rabatt</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Der
      Newsletter wird nicht richtig angezeigt? <a style="color: #000; border: 0;" href="[[newsshowurl]]">Sieh</a> dir
      die Online-Version an. Füge Beliani zu deiner <a style="color: #000; border: 0;" href="https://www.beliani.de/content/whitelist-emails-de/">Weißliste</a> hinzu</p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.de/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.de/wohnzimmer-moebel/"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="M&ouml;bel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/wohnzubehor/"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/gartenmoebel/"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    CHDE: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br />
<span>✔️ Gratis Versand & Rückversand ✔️ Die grösste Auswahl ✔️ Bis zu 70% Rabatt</span></p>

<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />
Der Newsletter wird nicht richtig angezeigt? <a href="[[newsshowurl]]" style="color: #000; border: 0;">Sieh</a> dir die Online-Version an. Füge Beliani zu deiner <a href="https://www.beliani.ch/content/whitelist-emails-de/" style="color: #000; border: 0;">Weissliste</a> hinzu</p>
<!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.ch/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.ch/wohnzimmer-moebel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Möbel" border="0" src="https://beliani.info/newsletter/2022/header_dach_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/wohnzubehor/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Accessoires" border="0" src="https://beliani.info/newsletter/2022/header_dach_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/gartenmoebel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Garten" border="0" src="https://beliani.info/newsletter/2022/header_dach_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing =`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br />
<span>✔️ Gratis Versand & Rückversand ✔️ Die grösste Auswahl ✔️ Bis zu 70% Rabatt</span></p>

<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />
Der Newsletter wird nicht richtig angezeigt? <a href="[[newsshowurl]]" style="color: #000; border: 0;">Sieh</a> dir die Online-Version an. Füge Beliani zu deiner <a href="https://www.beliani.ch/content/whitelist-emails-de/" style="color: #000; border: 0;">Weissliste</a> hinzu</p>
<!-- top -->


    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.ch/"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.ch/wohnzimmer-moebel/"><img
                            alt="Möbel" border="0" src="https://beliani.info/newsletter/2022/header_dach_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/wohnzubehor/"><img
                            alt="Accessoires" border="0" src="https://beliani.info/newsletter/2022/header_dach_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/gartenmoebel/"><img
                            alt="Garten" border="0" src="https://beliani.info/newsletter/2022/header_dach_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    AT: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Gratis Versand & Rückversand ✔️ Die größte Auswahl ✔️ Bis zu 70% Rabatt</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Der
      Newsletter wird nicht richtig angezeigt? <a style="color: #000; border: 0;" href="[[newsshowurl]]">Sieh</a> dir
      die Online-Version an. Füge Beliani zu deiner <a style="color: #000; border: 0;" href="https://www.beliani.at/content/whitelist-emails-de/">Weißliste</a> hinzu</p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.at/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.at/wohnzimmer-moebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="Möbel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/wohnzubehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/gartenmoebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    `

      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Gratis Versand & Rückversand ✔️ Die größte Auswahl ✔️ Bis zu 70% Rabatt</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Der
      Newsletter wird nicht richtig angezeigt? <a style="color: #000; border: 0;" href="[[newsshowurl]]">Sieh</a> dir
      die Online-Version an. Füge Beliani zu deiner <a style="color: #000; border: 0;" href="https://www.beliani.at/content/whitelist-emails-de/">Weißliste</a> hinzu</p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.at/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.at/wohnzimmer-moebel/"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="Möbel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/wohnzubehor/"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/gartenmoebel/"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    FR: (
      type,
      id
    ) => { 
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Livraison et retours gratuits ✔️ Large sélection de produits ✔️
      Jusqu'à 70% de réduction</span
    >
  </p>
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Ce message n’apparaît pas, consultez la
    <a style="color: #000; border: 0;" href="[[newsshowurl]]">version en ligne.</a> Ajoutez Beliani <a style="color: #000; border: 0;" href="https://www.beliani.fr/content/whitelist-emails-fr/">à votre liste</a> d'emails.
  </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/accessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Livraison et retours gratuits ✔️ Large sélection de produits ✔️
      Jusqu'à 70% de réduction</span
    >
  </p>
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Ce message n’apparaît pas, consultez la
    <a style="color: #000; border: 0;" href="[[newsshowurl]]">version en ligne.</a> Ajoutez Beliani <a style="color: #000; border: 0;" href="https://www.beliani.fr/content/whitelist-emails-fr/">à votre liste</a> d'emails.
  </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.fr/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-salon/"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/accessoires/"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-jardin/"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    CHFR: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Livraison et retours gratuits ✔️ Large sélection de produits ✔️
      Jusqu'à 70% de réduction</span
    >
  </p>
  <p style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Ce message n’apparaît pas, consultez la
    <a style="color: #000; border: 0" href="[[newsshowurl]]"
      >version en ligne.</a> Ajoutez Beliani <a style="color: #000; border: 0" href="https://www.beliani.ch/content/whitelist-emails-fr/">à votre liste</a> d'emails
  </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/accessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Livraison et retours gratuits ✔️ Large sélection de produits ✔️
      Jusqu'à 70% de réduction</span
    >
  </p>
  <p style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Ce message n’apparaît pas, consultez la
    <a style="color: #000; border: 0" href="[[newsshowurl]]"
      >version en ligne.</a> Ajoutez Beliani <a style="color: #000; border: 0" href="https://www.beliani.ch/content/whitelist-emails-fr/">à votre liste</a> d'emails
  </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.ch/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-salon/"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/accessoires/"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-jardin/"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    IT: (
      type,
      id
    ) => {
      
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Spedizioni e Resi Gratis ✔️ Vasta Selezione di Arredi ✔️ Sconti fino al 70%<br></span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br>Non riesci a visualizzare la newsletter? Prova <a style="color: #000;" href="[[newsshowurl]]">la versione online.</a> Aggiungi Beliani alla <a style="color: #000;" href="https://www.beliani.it/content/whitelist-emails-it/">tua lista di e-mail</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.it/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.it/soggiorno/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_it_02.jpg" width="100%" border="0"
                            alt="Arredi" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/accessori-casa/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_it_03.jpg" width="100%" border="0"
                            alt="Accessori" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/giardino/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_it_04.jpg" width="100%" border="0"
                            alt="Giardino" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Spedizioni e Resi Gratis ✔️ Vasta Selezione di Arredi ✔️ Sconti fino al 70%<br></span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br>Non riesci a visualizzare la newsletter? Prova <a style="color: #000;" href="[[newsshowurl]]">la versione online.</a> Aggiungi Beliani alla <a style="color: #000;" href="https://www.beliani.it/content/whitelist-emails-it/">tua lista di e-mail</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.it/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.it/soggiorno/"><img
                            src="https://beliani.info/newsletter/2022/header_it_02.jpg" width="100%" border="0"
                            alt="Arredi" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/accessori-casa/"><img
                            src="https://beliani.info/newsletter/2022/header_it_03.jpg" width="100%" border="0"
                            alt="Accessori" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/giardino/"><img
                            src="https://beliani.info/newsletter/2022/header_it_04.jpg" width="100%" border="0"
                            alt="Giardino" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    UK: (
      type,
      id
    ) => {
      
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Free Delivery and Returns ✔️ The Greatest Selection ✔️ Up to 70%
      Off</span
    >
  </p>
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Having trouble viewing Newsletter? View the
    <a style="color: #000; border: 0;" href="[[newsshowurl]]">online version.</a> Add Beliani to your <a style="color: #000; border: 0;" href="https://www.beliani.co.uk/content/whitelist-emails/">whitelist</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.co.uk/living-room-furniture/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_02.jpg" width="100%" border="0"
                            alt="Furniture" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/home-accessories/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_03.jpg" width="100%" border="0"
                            alt="Accessories" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/garden-furniture/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_04.jpg" width="100%" border="0"
                            alt="Garden" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Free Delivery and Returns ✔️ The Greatest Selection ✔️ Up to 70%
      Off</span
    >
  </p>
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Having trouble viewing Newsletter? View the
    <a style="color: #000; border: 0;" href="[[newsshowurl]]">online version.</a> Add Beliani to your <a style="color: #000; border: 0;" href="https://www.beliani.co.uk/content/whitelist-emails/">whitelist</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.co.uk/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.co.uk/living-room-furniture/"><img
                            src="https://beliani.info/newsletter/2022/header_uk_02.jpg" width="100%" border="0"
                            alt="Furniture" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/home-accessories/"><img
                            src="https://beliani.info/newsletter/2022/header_uk_03.jpg" width="100%" border="0"
                            alt="Accessories" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/garden-furniture/"><img
                            src="https://beliani.info/newsletter/2022/header_uk_04.jpg" width="100%" border="0"
                            alt="Garden" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    ES: (
      type,
      id
    ) => {
      
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Envío y devolución gratis ✔️ Amplia selección de productos ✔️ Hasta un 70% de descuento</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />¿No puedes ver la Newsletter? Consulta la versión <a style="color: #000; border: 0;" href="[[newsshowurl]]">en línea.</a> Añade Beliani a tu <a style="color: #000; border: 0;" href="https://www.beliani.es/content/whitelist-emails-es/">lista blanca</a> de emails</p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_es_02.jpg" width="100%" border="0"
                            alt="Muebles" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.es/accesorios-del-hogar/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_es_03.jpg" width="100%" border="0"
                            alt="Accesorios" style="display:block" /></a></th>
                <th><a href="https://www.beliani.es/jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_es_04.jpg" width="100%" border="0"
                            alt="Jardín" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Envío y devolución gratis ✔️ Amplia selección de productos ✔️ Hasta un 70% de descuento</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />¿No puedes ver la Newsletter? Consulta la versión <a style="color: #000; border: 0;" href="[[newsshowurl]]">en línea.</a> Añade Beliani a tu <a style="color: #000; border: 0;" href="https://www.beliani.es/content/whitelist-emails-es/">lista blanca</a> de emails</p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/salon/"><img
                            src="https://beliani.info/newsletter/2022/header_es_02.jpg" width="100%" border="0"
                            alt="Muebles" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.es/accesorios-del-hogar/"><img
                            src="https://beliani.info/newsletter/2022/header_es_03.jpg" width="100%" border="0"
                            alt="Accesorios" style="display:block" /></a></th>
                <th><a href="https://www.beliani.es/jardin/"><img
                            src="https://beliani.info/newsletter/2022/header_es_04.jpg" width="100%" border="0"
                            alt="Jardín" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    PT: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br />
<span>✔️ Entregas e devoluções gratuitas ✔️Vasta escolha de artigos✔️ Até 70% de desconto</span></p>

<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />
Está com problemas para visualizar a Newsletter? Veja a versão <a href="[[newsshowurl]]" style="color: #000; border: 0;">online.</a> Adicione Beliani à sua <a href="https://www.beliani.pt/content/whitelist-emails-pt/" style="color: #000; border: 0;">lista branca</a> de emails</p>
<!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.pt/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.pt/sala/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Mobiliário" border="0" src="https://beliani.info/newsletter/2022/header_pt_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/acessorios/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Acessórios" border="0" src="https://beliani.info/newsletter/2022/header_pt_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/exterior/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Jardim" border="0" src="https://beliani.info/newsletter/2022/header_pt_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br />
<span>✔️ Entregas e devoluções gratuitas ✔️Vasta escolha de artigos✔️ Até 70% de desconto</span></p>

<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />
Está com problemas para visualizar a Newsletter? Veja a versão <a href="[[newsshowurl]]" style="color: #000; border: 0;">online.</a> Adicione Beliani à sua <a href="https://www.beliani.pt/content/whitelist-emails-pt/" style="color: #000; border: 0;">lista branca</a> de emails</p>
<!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.pt/"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.pt/sala/"><img
                            alt="Mobiliário" border="0" src="https://beliani.info/newsletter/2022/header_pt_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/acessorios/"><img
                            alt="Acessórios" border="0" src="https://beliani.info/newsletter/2022/header_pt_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/exterior/"><img
                            alt="Jardim" border="0" src="https://beliani.info/newsletter/2022/header_pt_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    PL: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Darmowa dostawa i zwroty ✔️ Największy wybór ✔️ Zniżki do 70%</span
    >
  </p>
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Przejdź do naszej
    <a style="color: #000; border: 0;" href="[[newsshowurl]]">wersji online.</a> Dodaj Beliani do <a style="color: #000; border: 0;" href="https://www.beliani.pl/content/whitelist-emails-pl/">zaufanych maili</a>
  </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.pl/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.pl/meble-do-salonu/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_02.jpg" width="100%" border="0"
                            alt="Meble" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/dodatki/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_03.jpg" width="100%" border="0"
                            alt="Akcesoria" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/ogrod/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_04.jpg" width="100%" border="0"
                            alt="Ogród" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
    "
  >
    <br /><span
      >✔️ Darmowa dostawa i zwroty ✔️ Największy wybór ✔️ Zniżki do 70%</span
    >
  </p>
  <p
    style="
      text-align: center;
      font-size: 11px;
      color: #8c8278;
      margin-bottom: 10px;
      margin-top: 10px;
    "
  >
    <br />Przejdź do naszej
    <a style="color: #000; border: 0;" href="[[newsshowurl]]">wersji online.</a> Dodaj Beliani do <a style="color: #000; border: 0;" href="https://www.beliani.pl/content/whitelist-emails-pl/">zaufanych maili</a>
  </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.pl/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.pl/meble-do-salonu/"><img
                            src="https://beliani.info/newsletter/2022/header_pl_02.jpg" width="100%" border="0"
                            alt="Meble" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/dodatki/"><img
                            src="https://beliani.info/newsletter/2022/header_pl_03.jpg" width="100%" border="0"
                            alt="Akcesoria" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/ogrod/"><img
                            src="https://beliani.info/newsletter/2022/header_pl_04.jpg" width="100%" border="0"
                            alt="Ogród" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    HU: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Ingyenes szállítás & visszaküldés ✔️ Termékek széles választéka ✔️ Akár 70% kedvezmény</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Hírlevelünk nem jelenik meg tökéletesen? Nézze meg az <a style="color: #000;" href="[[newsshowurl]]">online verziót.</a> Add hozzá a Belianit <a style="color: #000;" href="https://www.beliani.hu/content/whitelist-emails-hu/">fehérlistádhoz</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.hu/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.hu/nappali-butorok/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_02.jpg" width="100%" border="0"
                            alt="Bútorok" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/otthoni-kiegeszitok/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_03.jpg" width="100%" border="0"
                            alt="Kiegészítők" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/kerti-garniturak/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_04.jpg" width="100%" border="0"
                            alt="Kültér" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Ingyenes szállítás & visszaküldés ✔️ Termékek széles választéka ✔️ Akár 70% kedvezmény</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Hírlevelünk nem jelenik meg tökéletesen? Nézze meg az <a style="color: #000;" href="[[newsshowurl]]">online verziót.</a> Add hozzá a Belianit <a style="color: #000;" href="https://www.beliani.hu/content/whitelist-emails-hu/">fehérlistádhoz</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.hu/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.hu/nappali-butorok/"><img
                            src="https://beliani.info/newsletter/2022/header_hu_02.jpg" width="100%" border="0"
                            alt="Bútorok" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/otthoni-kiegeszitok/"><img
                            src="https://beliani.info/newsletter/2022/header_hu_03.jpg" width="100%" border="0"
                            alt="Kiegészítők" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/kerti-garniturak/"><img
                            src="https://beliani.info/newsletter/2022/header_hu_04.jpg" width="100%" border="0"
                            alt="Kültér" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    NL: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️Gratis verzending
          & retourneren ✔️ De grootste selectie ✔️ Tot 70% korting</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Wordt
      deze nieuwsbrief niet correct weergegeven? Naar de <a style="color: #000; border: 0;"
          href="[[newsshowurl]]">online versie.</a> Voeg Beliani toe aan je <a style="color: #000; border: 0;"
          href="https://www.beliani.nl/content/whitelist-emails-nl/">whitelist</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.nl/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.nl/woonkamer/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_02.jpg" width="100%" border="0"
                            alt="Meubels" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/woonaccessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/tuinmeubelen/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_04.jpg" width="100%" border="0"
                            alt="Tuin" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️Gratis verzending
          & retourneren ✔️ De grootste selectie ✔️ Tot 70% korting</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Wordt
      deze nieuwsbrief niet correct weergegeven? Naar de <a style="color: #000; border: 0;"
          href="[[newsshowurl]]">online versie.</a> Voeg Beliani toe aan je <a style="color: #000; border: 0;"
          href="https://www.beliani.nl/content/whitelist-emails-nl/">whitelist</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.nl/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.nl/woonkamer/"><img
                            src="https://beliani.info/newsletter/2022/header_nl_02.jpg" width="100%" border="0"
                            alt="Meubels" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/woonaccessoires/"><img
                            src="https://beliani.info/newsletter/2022/header_nl_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/tuinmeubelen/"><img
                            src="https://beliani.info/newsletter/2022/header_nl_04.jpg" width="100%" border="0"
                            alt="Tuin" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    SE: (
      type,
      id
    ) => {
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Fri frakt och retur ✔️ Det största utbudet ✔️ Upp till 70% rabatt </span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Ser du inte bilderna? Gå till vår <a href="[[newsshowurl]]" style="color: #000;">onlineversion.</a> Lägg till Beliani i din <a href="https://www.beliani.se/content/whitelist-emails-se/" style="color: #000;">vitlista</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.se/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.se/vardagsrumsmobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_se_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/hemtillbehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_se_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/tradgardsmobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_se_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Fri frakt och retur ✔️ Det största utbudet ✔️ Upp till 70% rabatt </span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Ser du inte bilderna? Gå till vår <a href="[[newsshowurl]]" style="color: #000;">onlineversion.</a> Lägg till Beliani i din <a href="https://www.beliani.se/content/whitelist-emails-se/" style="color: #000;">vitlista</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.se/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.se/vardagsrumsmobler/"><img
                            src="https://beliani.info/newsletter/2022/header_se_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/hemtillbehor/"><img
                            src="https://beliani.info/newsletter/2022/header_se_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/tradgardsmobler/"><img
                            src="https://beliani.info/newsletter/2022/header_se_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
  
      const templates = {
        newsletter,
        landing,
      };
  
      return templates[type];
    },
    DK: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Fri fragt ✔️ Det største udvalg ✔️ Op til 70% rabat</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Kan du ikke se billeder? Tjek online version <a style="color: #000;" href="[[newsshowurl]]">af vores webshop.</a> Tilføj Beliani til din <a style="color: #000;" href="https://www.beliani.dk/content/whitelist-emails-dk/">whitelist</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.dk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.dk/stuemobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/boligtilbehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/havemobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Fri fragt ✔️ Det største udvalg ✔️ Op til 70% rabat</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />Kan du ikke se billeder? Tjek online version <a style="color: #000;" href="[[newsshowurl]]">af vores webshop.</a> Tilføj Beliani til din <a style="color: #000;" href="https://www.beliani.dk/content/whitelist-emails-dk/">whitelist</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.dk/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.dk/stuemobler/"><img
                            src="https://beliani.info/newsletter/2022/header_dk_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/boligtilbehor/"><img
                            src="https://beliani.info/newsletter/2022/header_dk_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/havemobler/"><img
                            src="https://beliani.info/newsletter/2022/header_dk_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    CZ: (
      type,
      id
    ) => {
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Doručení a vrácení zdarma ✔️ Nejširší sortiment ✔️ Až 70% slevy</span></p>
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Máte problémy se zobrazením newsletteru? Tady zobrazíte <a style="color: #000; border: 0;" href="[[newsshowurl]]">online verzi.</a> Přidejte Beliani mezi <a style="color: #000; border: 0;" href="https://www.beliani.cz/content/whitelist-emails-cz/">povolené e-mailové adresy</a></p>
<!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.cz/nabytek-do-obyvaku/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_02.jpg" width="100%" border="0"
                            alt="Nábytek" style="display:block" /></a></th>
                <th><a href="https://www.beliani.cz/doplnky/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_03.jpg" width="100%" border="0"
                            alt="Doplnky" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.cz/zahradni-nabytek/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_04.jpg" width="100%" border="0"
                            alt="Zahrada" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Doručení a vrácení zdarma ✔️ Nejširší sortiment ✔️ Až 70% slevy</span></p>
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Máte problémy se zobrazením newsletteru? Tady zobrazíte <a style="color: #000; border: 0;" href="[[newsshowurl]]">online verzi.</a> Přidejte Beliani mezi <a style="color: #000; border: 0;" href="https://www.beliani.cz/content/whitelist-emails-cz/">povolené e-mailové adresy</a></p>
<!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.cz/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.cz/nabytek-do-obyvaku/"><img
                            src="https://beliani.info/newsletter/2022/header_cz_02.jpg" width="100%" border="0"
                            alt="Nábytek" style="display:block" /></a></th>
                <th><a href="https://www.beliani.cz/doplnky/"><img
                            src="https://beliani.info/newsletter/2022/header_cz_03.jpg" width="100%" border="0"
                            alt="Doplnky" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.cz/zahradni-nabytek/"><img
                            src="https://beliani.info/newsletter/2022/header_cz_04.jpg" width="100%" border="0"
                            alt="Zahrada" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    FI: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br />
<span>✔️ Ilmainen toimitus ja palautus ✔️ Suurin tuotevalikoima ✔️ Jopa 70% alennuksia</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />
Eikö uutiskirje näy kunnolla? Avaa <a href="[[newsshowurl]]" style="color: #000; border: 0;">uutiskirje selaimessa.</a> Lisää Beliani sähköpostisi <a href="https://www.beliani.fi/content/whitelist-emails-fi/" style="color: #000; border: 0;">valkolistalle</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.fi/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.fi/olohuoneen-kalusteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/sisustustuotteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/puutarhakalusteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br />
<span>✔️ Ilmainen toimitus ja palautus ✔️ Suurin tuotevalikoima ✔️ Jopa 70% alennuksia</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br />
Eikö uutiskirje näy kunnolla? Avaa <a href="[[newsshowurl]]" style="color: #000; border: 0;">uutiskirje selaimessa.</a> Lisää Beliani sähköpostisi <a href="https://www.beliani.fi/content/whitelist-emails-fi/" style="color: #000; border: 0;">valkolistalle</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.fi/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.fi/olohuoneen-kalusteet/"><img
                            src="https://beliani.info/newsletter/2022/header_fi_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/sisustustuotteet/"><img
                            src="https://beliani.info/newsletter/2022/header_fi_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/puutarhakalusteet/"><img
                            src="https://beliani.info/newsletter/2022/header_fi_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    NO: (
      type,
      id
    ) => {
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Fri frakt ✔️ Størst utvalg ✔️ Opptil 70% rabatt</span></p>
<p style="text-align: center; font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Har du problemer med å se nyhetsbrevet? Se <a style="color: #000;" href="[[newsshowurl]]">online versjonen.</a> Legg til Beliani i din <a style="color: #000;" href="https://www.beliani.no/content/whitelist-emails-no/">hviteliste</a></p>
<!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.no/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.no/stuemoebler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_no_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/tilbehoer/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_no_03.jpg" width="100%" border="0"
                            alt="Tilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/hagemoebler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_no_04.jpg" width="100%" border="0"
                            alt="Hage" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
<p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Fri frakt ✔️ Størst utvalg ✔️ Opptil 70% rabatt</span></p>
<p style="text-align: center; font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Har du problemer med å se nyhetsbrevet? Se <a style="color: #000;" href="[[newsshowurl]]">online versjonen.</a> Legg til Beliani i din <a style="color: #000;" href="https://www.beliani.no/content/whitelist-emails-no/">hviteliste</a></p>
<!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.no/"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.no/stuemoebler/"><img
                            src="https://beliani.info/newsletter/2022/header_no_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/tilbehoer/"><img
                            src="https://beliani.info/newsletter/2022/header_no_03.jpg" width="100%" border="0"
                            alt="Tilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/hagemoebler/"><img
                            src="https://beliani.info/newsletter/2022/header_no_04.jpg" width="100%" border="0"
                            alt="Hage" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
    SK: (
      type,
      id
    ) => {
  
      const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Bezplatné doručenie a vrátenie tovaru ✔️ Najväčší výber ✔️ Zľava až 70 %</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Máte problémy s čítaním e-mailu? Pozrite si <a style="color: #000;" href="[[newsshowurl]]">online verziu.</a> Pridajte Beliani medzi <a style="color: #000;" href="https://www.beliani.sk/content/whitelist-emails-sk/">povolené e-mailové adresy</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.sk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            alt="Beliani" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
    <table style="margin: 0 auto; background-color: #ffffff; padding-top: 0em; padding-bottom: 0em;" border="0"
        cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.sk/nabytok-do-obyvacky/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_02.jpg"
                            alt="Nábytok" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/doplnky/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_03.jpg"
                            alt="Doplnky" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/zahrada/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_04.jpg"
                            alt="Záhrada" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
      `
      const landing =`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px;"><br /><span>✔️ Bezplatné doručenie a vrátenie tovaru ✔️ Najväčší výber ✔️ Zľava až 70 %</span></p>
  <p style="text-align: center;  font-size:11px; color: #8c8278; margin-bottom: 10px; margin-top: 10px;"><br/>Máte problémy s čítaním e-mailu? Pozrite si <a style="color: #000;" href="[[newsshowurl]]">online verziu.</a> Pridajte Beliani medzi <a style="color: #000;" href="https://www.beliani.sk/content/whitelist-emails-sk/">povolené e-mailové adresy</a></p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.sk/"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            alt="Beliani" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
    <table style="margin: 0 auto; background-color: #ffffff; padding-top: 0em; padding-bottom: 0em;" border="0"
        cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.sk/nabytok-do-obyvacky/"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_02.jpg"
                            alt="Nábytok" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/doplnky/"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_03.jpg"
                            alt="Doplnky" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/zahrada/"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_04.jpg"
                            alt="Záhrada" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
      `
  
      const templates = {
          newsletter,
          landing
      }
  
      return templates[type]
    },
};
  