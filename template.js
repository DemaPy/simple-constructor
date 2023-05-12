import footerNew from "./templates/footerNew.js";
import soonEnding from "./templates/soonEnding.js";


function newsletter({ link, text, prices, country, countriesAndId, differencePrices }) {
    
    return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px;background-color: #ffffff;">
        <tr>
            <td align="center">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center"><a
                                href=${link[0]}><img
                                    width="100%" src=${link[1]}
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
                                href=${link[2]}><img
                                    width="100%" src=${link[3]}
                                    style="display: block;"></a></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
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
            <td align="center">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center" class="newsletterContainer"><a
                                href=${link[4]}
                                style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span>${
                                    text[2]
                                }</span></a></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
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
            <td align="center" class="newsletterIntroProducts">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center"><a
                                href=${link[5]}><img
                                    width="100%" src=${link[6]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[7]}><img
                                    width="100%" src=${link[8]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[9]}><img
                                    width="100%" src=${link[10]}
                                    style="display: block;"></a></td>
                    </tr>
                    <tr>
                        <td align="center"><a
                                href=${link[11]}><img
                                    width="100%" src=${link[12]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[13]}><img
                                    width="100%" src=${link[14]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[15]}><img
                                    width="100%" src=${link[16]}
                                    style="display: block;"></a></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
                <td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tr>
                            <td align="center"><img width="100%" src=${link[17]}
                                    style="display: block;"></td>
                        </tr>
                    </table>
                </td>
        </tr>
        <tr>
            <td align="center" class="newsletterContainer">
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
            <td align="center" style="background-color: #f9efee">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tr>
                                    <td align="center"><a
                                            href=${link[18]}><img
                                                width="100%"
                                                src=${link[19]}
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
                                                        href=${link[20]}><img
                                                            width="100%" src=${
                                                              link[21]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[0]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">Save up to ${prices[1]}</span>
                                                                <span class="newsletterProductTitleHightPrice">${prices[2]}</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[22]}><img
                                                            width="100%" src=${
                                                              link[23]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[3]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[4]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[5]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[24]}><img
                                                            width="100%" src=${
                                                              link[25]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[6]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[7]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[8]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[26]}><img
                                                            width="100%" src=${
                                                              link[27]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[9]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[10]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[11]
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
                                                        href=${link[28]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[8]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[29]
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
                        <td align="center" class="newsletterContainer" style="background-color: #f9efee">
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
                                            href=${link[30]}><img
                                                width="100%"
                                                src=${link[31]}
                                                style="display: block;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="background-color: #fdf8f8">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[32]}><img
                                                            width="100%" src=${
                                                              link[33]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[12]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">${
                                                                  prices[13]
                                                                }</span>
                                                                <span class="newsletterProductTitleHightPrice">${
                                                                  prices[14]
                                                                }</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[34]}><img
                                                            width="100%" src=${
                                                              link[35]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[15]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[16]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[17]
                                                            }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[36]}><img
                                                            width="100%" src=${
                                                              link[37]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[18]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[19]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[20]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[38]}><img
                                                            width="100%" src=${
                                                              link[39]
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
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterCtaContainer" style="text-align: center;"><a
                                                        href=${link[40]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[10]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[41]
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
                                            href=${link[42]}><img
                                                width="100%"
                                                src=${link[43]}
                                                style="display: block;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="background-color: #f9efee">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[44]}><img
                                                            width="100%" src=${
                                                              link[45]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                        prices[24]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">${
                                                                  prices[25]
                                                                }</span>
                                                                <span class="newsletterProductTitleHightPrice">${
                                                                  prices[26]
                                                                }</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[46]}><img
                                                            width="100%" src=${
                                                              link[47]
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
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[29]
                                                            }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[48]}><img
                                                            width="100%" src=${
                                                              link[49]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[30]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[31]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[32]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[50]}><img
                                                            width="100%" src=${
                                                              link[51]
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
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[35]
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
                                                        href=${link[52]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[12]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[53]
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
                        <td align="center" class="newsletterContainer" style="background-color: #f9efee">
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
                                            href=${link[54]}><img
                                                width="100%"
                                                src=${link[55]}
                                                style="display: block;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[56]}><img
                                                            width="100%" src=${
                                                              link[57]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[36]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">${
                                                                  prices[37]
                                                                }</span>
                                                                <span class="newsletterProductTitleHightPrice">${
                                                                  prices[38]
                                                                }</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[58]}><img
                                                            width="100%" src=${
                                                              link[59]
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
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[41]
                                                            }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[60]}><img
                                                            width="100%" src=${
                                                              link[61]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[42]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[43]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[44]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[62]}><img
                                                            width="100%" src=${
                                                              link[63]
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
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[47]
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
                                                        href=${link[64]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[14]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[65]
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
    </table>
    ${soonEnding[country]({
        banner1: link[67],
        link1: link[66],
        banner2: link[69],
        link2: link[68],
    })}
  ${footerNew[country](text[15], "newsletter", countriesAndId[country])}
`
}

function landing({ link, text, prices, country, code, countriesAndId, differencePrices }) {
    
    return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px;background-color: #ffffff;">
        <tr>
            <td align="center">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center"><a
                                href=${link[0]}><img
                                    width="100%" src=${link[1]}
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
                                href=${link[2]}><img
                                    width="100%" src=${link[3]}
                                    style="display: block;"></a></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
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
            <td align="center">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center" class="newsletterContainer">
                            <span style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000;">${code}</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center">
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
            <td align="center" class="newsletterIntroProducts">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center"><a
                                href=${link[5]}><img
                                    width="100%" src=${link[6]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[7]}><img
                                    width="100%" src=${link[8]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[9]}><img
                                    width="100%" src=${link[10]}
                                    style="display: block;"></a></td>
                    </tr>
                    <tr>
                        <td align="center"><a
                                href=${link[11]}><img
                                    width="100%" src=${link[12]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[13]}><img
                                    width="100%" src=${link[14]}
                                    style="display: block;"></a></td>
                        <td align="center"><a
                                href=${link[15]}><img
                                    width="100%" src=${link[16]}
                                    style="display: block;"></a></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
                <td align="center">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tr>
                            <td align="center"><img width="100%" src=${link[17]}
                                    style="display: block;"></td>
                        </tr>
                    </table>
                </td>
        </tr>
        <tr>
            <td align="center" class="newsletterContainer">
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
            <td align="center" style="background-color: #f9efee">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tr>
                                    <td align="center"><a
                                            href=${link[18]}><img
                                                width="100%"
                                                src=${link[19]}
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
                                                        href=${link[20]}><img
                                                            width="100%" src=${
                                                              link[21]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[0]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[1]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[2]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[22]}><img
                                                            width="100%" src=${
                                                              link[23]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[3]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[4]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[5]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[24]}><img
                                                            width="100%" src=${
                                                              link[25]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[6]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[7]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[8]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[26]}><img
                                                            width="100%" src=${
                                                              link[27]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[9]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[10]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[11]
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
                                                        href=${link[28]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[8]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[29]
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
                        <td align="center" class="newsletterContainer" style="background-color: #f9efee">
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
                                            href=${link[30]}><img
                                                width="100%"
                                                src=${link[31]}
                                                style="display: block;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="background-color: #fdf8f8">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[32]}><img
                                                            width="100%" src=${
                                                              link[33]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[12]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">${
                                                                  prices[13]
                                                                }</span>
                                                                <span class="newsletterProductTitleHightPrice">${
                                                                  prices[14]
                                                                }</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[34]}><img
                                                            width="100%" src=${
                                                              link[35]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[15]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[16]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[17]
                                                            }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[36]}><img
                                                            width="100%" src=${
                                                              link[37]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[18]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[19]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[20]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[38]}><img
                                                            width="100%" src=${
                                                              link[39]
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
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterCtaContainer" style="text-align: center;"><a
                                                        href=${link[40]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[10]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[41]
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
                                            href=${link[42]}><img
                                                width="100%"
                                                src=${link[43]}
                                                style="display: block;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="background-color: #f9efee">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[44]}><img
                                                            width="100%" src=${
                                                              link[45]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                        prices[24]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">${
                                                                  prices[25]
                                                                }</span>
                                                                <span class="newsletterProductTitleHightPrice">${
                                                                  prices[26]
                                                                }</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[46]}><img
                                                            width="100%" src=${
                                                              link[47]
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
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[29]
                                                            }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[48]}><img
                                                            width="100%" src=${
                                                              link[49]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[30]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[31]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[32]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[50]}><img
                                                            width="100%" src=${
                                                              link[51]
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
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[35]
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
                                                        href=${link[52]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[12]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[53]
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
                        <td align="center" class="newsletterContainer" style="background-color: #f9efee">
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
                                            href=${link[54]}><img
                                                width="100%"
                                                src=${link[55]}
                                                style="display: block;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[56]}><img
                                                            width="100%" src=${
                                                              link[57]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span
                                                                    class="newsletterProductTitle">${
                                                                      prices[36]
                                                                    }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left">
                                                                <span class="newsletterProductTitleLowPrice">${
                                                                  prices[37]
                                                                }</span>
                                                                <span class="newsletterProductTitleHightPrice">${
                                                                  prices[38]
                                                                }</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[58]}><img
                                                            width="100%" src=${
                                                              link[59]
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
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              prices[41]
                                                            }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                        href=${link[60]}><img
                                                            width="100%" src=${
                                                              link[61]
                                                            }
                                                            style="display: block;"></a>
                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                        <tr>
                                                            <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                              prices[42]
                                                            }</span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                              prices[43]
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[44]
  }</span></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                        href=${link[62]}><img
                                                            width="100%" src=${
                                                              link[63]
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
                                                            }</span><span class="newsletterProductTitleHightPrice">${
    prices[47]
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
                                                        href=${link[64]}
                                                        style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span
                                                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;">${
                                                              text[14]
                                                            }</span></a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center"><img width="100%" src=${
                                                  link[65]
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
    </table>
    ${soonEnding[country]({
        banner1: link[67],
        link1: link[66],
        banner2: link[69],
        link2: link[68],
    })}
  ${footerNew[country](text[15], "landing", countriesAndId[country])}
`
}

export {
    newsletter,
    landing
}