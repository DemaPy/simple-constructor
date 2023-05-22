import footerNew from "./footerNew.js";
import soonEnding from "./soonEnding.js";
import header from "./header.js";


export function landing({
    trackingLinks,
    id,
    code,
    text,
    free,
    links,
    prices,
    country,
    conditions,
    differencePrices,
  }) {
      
    return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px;background-color: #ffffff;">
    <tr>
        <td align="center">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center"><a
                            href=${links[0]}><img
                                width="100%" src=${links[1]}
                                style="display: block;"></a></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center"><a
                            href=${links[2]}><img
                                width="100%" src=${links[3]}
                                style="display: block;"></a></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #ffdeb3">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer"><span class="newsletterParagraph">${
                      text[0]
                    }</span></td>
                </tr>
                <tr>
                    <td align="center" class="newsletterContainer"><span class="newsletterParagraph">${
                      text[1]
                    }</span></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #ffdeb3">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer">
                        <span style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000;" >${code}</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #ffdeb3">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer"><span class="newsletterParagraph">${
                      text[3]
                    }</span></td>
                </tr>
                <tr>
                    <td align="center" class="newsletterContainer"><span class="newsletterParagraph">${
                      text[4]
                    }</span></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #ffdeb3" class="newsletterIntroProducts">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td class="newsletterFreebieTop" align="center">
                          <a href=${links[5]}>
                              <img width="100%" src=${
                              links[6]
                              } style="display: block;">
                          </a>
                          <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                              <tr>
                                  <td align="center" class="newsletterProductTitleContainer"><span
                                          class="newsletterProductTitle">${
                                              prices[0].replace("_1", "")
                                          }</span></td>
                              </tr>
                              <tr>
                                  <td align="center">
                                      <span class="newsletterProductTitleLowPrice">${free}</span>
                                      <span class="newsletterProductTitleHightPrice">${
                                          prices[1]
                                      }</span>
                                  </td>
                              </tr>
                          </table>
                    </td>
                    <td class="newsletterFreebieTop" align="center"><a
                            href=${links[7]}><img
                                width="100%" src=${links[8]}
                                style="display: block;"></a>
                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductTitleContainer"><span
                                            class="newsletterProductTitle">${
                                              prices[3].replace("_2", "")
                                            }</span></td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <span class="newsletterProductTitleLowPrice">${free}</span>
                                        <span class="newsletterProductTitleHightPrice">${
                                          prices[4]
                                        }</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    <td class="newsletterFreebieTop" align="center"><a
                            href=${links[9]}><img
                                width="100%" src=${links[10]}
                                style="display: block;"></a>
                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductTitleContainer"><span
                                            class="newsletterProductTitle">${
                                              prices[6].replace("_3", "")
                                            }</span></td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <span class="newsletterProductTitleLowPrice">${free}</span>
                                        <span class="newsletterProductTitleHightPrice">${
                                          prices[7]
                                        }</span>
                                    </td>
                                </tr>
                            </table>
                            </td>
                </tr>
                <tr>
                    <td class="newsletterFreebieBottom" align="center"><a
                            href=${links[11]}><img
                                width="100%" src=${links[12]}
                                style="display: block;"></a>
                                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                        <tr>
                            <td align="center" class="newsletterProductTitleContainer"><span
                                    class="newsletterProductTitle">${
                                      prices[9].replace("_4", "")
                                    }</span></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span class="newsletterProductTitleLowPrice">${free}</span>
                                <span class="newsletterProductTitleHightPrice">${
                                  prices[10]
                                }</span>
                            </td>
                        </tr>
                    </table>
                                </td>
                    <td class="newsletterFreebieBottom" align="center"><a
                            href=${links[13]}><img
                                width="100%" src=${links[14]}
                                style="display: block;"></a>
                                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                        <tr>
                            <td align="center" class="newsletterProductTitleContainer"><span
                                    class="newsletterProductTitle">${
                                      prices[12].replace("_5", "")
                                    }</span></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span class="newsletterProductTitleLowPrice">${free}</span>
                                <span class="newsletterProductTitleHightPrice">${
                                  prices[13]
                                }</span>
                            </td>
                        </tr>
                    </table>
                                </td>
                    <td class="newsletterFreebieBottom" align="center"><a
                            href=${links[15]}><img
                                width="100%" src=${links[16]}
                                style="display: block;"></a>
                                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                        <tr>
                            <td align="center" class="newsletterProductTitleContainer"><span
                                    class="newsletterProductTitle">${
                                      prices[15].replace("_6", "")
                                    }</span></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span class="newsletterProductTitleLowPrice">${free}</span>
                                <span class="newsletterProductTitleHightPrice">${
                                  prices[16]
                                }</span>
                            </td>
                        </tr>
                    </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
            <td align="center" style="background-color: #fff9f3">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td class="newsletterContainer" align="center"><img width="100%" src=${links[17]}
                                style="display: block;"></td>
                    </tr>
                </table>
            </td>
    </tr>
    <tr>
        <td style="background-color: #fff9f3" align="center" class="newsletterContainer">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="left" class="newsletterBottom35px" ><span class="newsletterTitle">${
                          text[5]
                        }</span></td>
                    </tr>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="left" class="newsletterBottom35px" ><span class="newsletterParagraph">${
                          text[6]
                        }</span></td>
                    </tr>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="left" class="newsletterBottom35px" ><span class="newsletterTitle">${
                          text[7]
                        }</span></td>
                    </tr>
                </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #fff9f3">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center"><a
                                        href=${links[18]}><img
                                            width="100%"
                                            src=${links[19]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer" >
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[20]}><img
                                                        width="100%" src=${
                                                          links[21]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[18]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              prices[19]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[20]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[22]}><img
                                                        width="100%" src=${
                                                          links[23]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[21]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[22]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[23]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[24]}><img
                                                        width="100%" src=${
                                                          links[25]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          prices[24]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[25]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[26]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[26]}><img
                                                        width="100%" src=${
                                                          links[27]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[27]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[28]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[29]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" >
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterCtaContainer" style="text-align: center;"><a
                                                    href=${links[28]}
                                                    style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                          text[8]
                                                        }</span></a></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="newsletterContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center"><img width="100%" src=${
                                              links[29]
                                            }
                                                    style="display: block;"></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer" style="background-color: #fff9f3">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="left" class="newsletterBottom35px" ><span class="newsletterTitle">${
                                  text[9]
                                }</span></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center"><a
                                        href=${links[30]}><img
                                            width="100%"
                                            src=${links[31]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #fff9f3">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%">
                                                <a href=${links[32]}>
                                                    <img width="100%" src=${
                                                      links[33]
                                                    } style="display: block;">
                                                </a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[30]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              prices[31]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[32]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[34]}><img
                                                        width="100%" src=${
                                                          links[35]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[33]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[34]
                                                        }</span>
                                                        <span class="newsletterProductTitleHightPrice">${
                                                          prices[35]
                                                        }</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[36]}><img
                                                        width="100%" src=${
                                                          links[37]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          prices[36]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[37]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[38]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[38]}><img
                                                        width="100%" src=${
                                                          links[39]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[39]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[40]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[41]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterCtaContainer" style="text-align: center;"><a
                                                    href=${links[40]}
                                                    style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                          text[10]
                                                        }</span></a></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="newsletterContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center"><img width="100%" src=${
                                              links[41]
                                            }
                                                    style="display: block;"></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer" style="background-color: #fdf8f8">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="left" class="newsletterBottom35px" ><span class="newsletterTitle">${
                                  text[11]
                                }</span></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center"><a
                                        href=${links[42]}><img
                                            width="100%"
                                            src=${links[43]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #fff9f3">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[44]}><img
                                                        width="100%" src=${
                                                          links[45]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[42]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              prices[43]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[44]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[46]}><img
                                                        width="100%" src=${
                                                          links[47]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[45]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[46]
                                                        }</span>
                                                        <span class="newsletterProductTitleHightPrice">${
                                                          prices[47]
                                                        }</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[48]}><img
                                                        width="100%" src=${
                                                          links[49]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          prices[48]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[49]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[50]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[50]}><img
                                                        width="100%" src=${
                                                          links[51]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[51]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[52]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[53]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterCtaContainer" style="text-align: center;"><a
                                                    href=${links[52]}
                                                    style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                          text[12]
                                                        }</span></a></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="newsletterContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center"><img width="100%" src=${
                                              links[53]
                                            }
                                                    style="display: block;"></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <tr>
        <td align="center">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer" style="background-color: #fff9f3">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="left" class="newsletterBottom35px" ><span class="newsletterTitle">${
                                  text[13]
                                }</span></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center"><a
                                        href=${links[54]}><img
                                            width="100%"
                                            src=${links[55]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #fff9f3">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[56]}><img
                                                        width="100%" src=${
                                                          links[57]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[54]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              prices[55]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[56]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[58]}><img
                                                        width="100%" src=${
                                                          links[59]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[57]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[58]
                                                        }</span>
                                                        <span class="newsletterProductTitleHightPrice">${
                                                          prices[59]
                                                        }</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${links[60]}><img
                                                        width="100%" src=${
                                                          links[61]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          prices[60]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[61]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[62]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${links[62]}><img
                                                        width="100%" src=${
                                                          links[63]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  prices[63]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          prices[64]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
prices[65]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterCtaContainer" style="text-align: center;"><a
                                                    href=${links[64]}
                                                    style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                          text[14]
                                                        }</span></a></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
                <tr>
                  <td align="center" class="newsletterContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="center"><img width="100%" src=${
                                  links[65]
                              }
                                      style="display: block;"></td>
                          </tr>
                      </table>
                  </td>
              </tr>
            </table>
        </td>
    </tr>
</table>
      ${soonEnding[country]({
        banner1: links[67],
        link1: links[66],
        banner2: links[69],
        link2: links[68],
      })}
    ${footerNew[country](conditions, "landing", id)}
  `;
  }