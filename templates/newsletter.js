import footerNew from "./footerNew.js";
import soonEnding from "./soonEnding.js";
import header from "./header.js";

export function newsletter({
  trackingLinks,
  allLinks,
  images,
  links,
  save,
  id,
  text,
  free,
  prices,
  country,
  pricesXLS,
  conditions,
  formatPrices,
}) {
  return `
  ${header[country]("newsletter", id)}
<table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px;background-color: #ffffff;">
    <tr>
        <td align="center">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center"><a
                            href=${allLinks[0]}><img
                                width="100%" src=${allLinks[1]}
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
                            href=${allLinks[2]}><img
                                width="100%" src=${allLinks[3]}
                                style="display: block;"></a></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #ffffff">
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
        <td align="center" style="background-color: #ffffff">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center" class="newsletterContainer"><a
                            href=${allLinks[4]}
                            style="font-family: Open Sans, sans-serif; font-size: 20px; line-height: 1.25; color: #000000; text-decoration: underline;"><span>${
                              text[2]
                            }</span></a></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style="background-color: #ffffff">
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
        <td align="center" style="background-color: #ffffff" class="newsletterIntroProducts">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td class="newsletterFreebieTopLeft" align="center"><a
                            href=${allLinks[5]}><img
                                width="100%" src=${allLinks[6]}
                                style="display: block;"></a>
                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductTitleContainer"><span
                                            class="newsletterProductTitle">${
                                              formatPrices[0].replace('_1', '')
                                            }</span></td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <span class="newsletterProductTitleLowPrice">${free}</span>
                                        <span class="newsletterProductTitleHightPrice">${
                                          formatPrices[1]
                                        }</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    <td class="newsletterFreebieTopRight" align="center">
                        <a href=${allLinks[7]}>
                            <img width="100%" src=${allLinks[8]} style="display: block;">
                        </a>
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductTitleContainer"><span
                                        class="newsletterProductTitle">${
                                            formatPrices[3].replace('_2', '')
                                        }</span></td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <span class="newsletterProductTitleLowPrice">${free}</span>
                                    <span class="newsletterProductTitleHightPrice">${
                                        formatPrices[4]
                                    }</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterFreebieBottomLeft" align="center"><a
                            href=${allLinks[9]}><img
                                width="100%" src=${allLinks[10]}
                                style="display: block;"></a>
                                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                        <tr>
                            <td align="center" class="newsletterProductTitleContainer"><span
                                    class="newsletterProductTitle">${
                                      formatPrices[6].replace('_3', '')
                                    }</span></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span class="newsletterProductTitleLowPrice">${free}</span>
                                <span class="newsletterProductTitleHightPrice">${
                                  formatPrices[7]
                                }</span>
                            </td>
                        </tr>
                    </table>
                                </td>
                    <td class="newsletterFreebieBottomRight" align="center"><a
                            href=${allLinks[11]}><img
                                width="100%" src=${allLinks[12]}
                                style="display: block;"></a>
                                                                    <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                        <tr>
                            <td align="center" class="newsletterProductTitleContainer"><span
                                    class="newsletterProductTitle">${
                                      formatPrices[9].replace('_4', '')
                                    }</span></td>
                        </tr>
                        <tr>
                            <td align="center">
                                <span class="newsletterProductTitleLowPrice">${free}</span>
                                <span class="newsletterProductTitleHightPrice">${
                                  formatPrices[10]
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
        <td align="center" class="newsletterContainer">
            <img width="100%" src=https://beliani.info/newsletter/2022/line.jpg style="display: block;">
        </td>
    </tr>

    <tr>
        <td style="background-color: #ffffff" align="center" class="newsletterContainer">
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
        <td align="center" style="background-color: #ffffff">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center"><a
                                        href=${allLinks[13]}><img
                                            width="100%"
                                            src=${allLinks[14]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #fff9f2">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer" >
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[15]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[16]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[12]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              formatPrices[13]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              formatPrices[14]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[17]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[18]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[15]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[16]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[17]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[19]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[20]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          formatPrices[18]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[19]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[20]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[21]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[22]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[21]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[22]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[23]
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
                                                    href=${allLinks[23]}
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
                                    <img width="100%" src=https://beliani.info/newsletter/2022/230605line1.jpg style="display: block;">
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
                    <td align="center" class="newsletterContainer" style="background-color: #fff9f2">
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
                                        href=${allLinks[24]}><img
                                            width="100%"
                                            src=${allLinks[25]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #f9efee">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center"  class="newsletterProductContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%">
                                                <a href=${allLinks[26]}>
                                                    <img width="100%" src=${
                                                      allLinks[27]
                                                    } style="display: block;">
                                                </a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[24]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              formatPrices[25]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              formatPrices[26]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[28]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[29]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[27]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[28]
                                                        }</span>
                                                        <span class="newsletterProductTitleHightPrice">${
                                                          formatPrices[29]
                                                        }</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[30]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[31]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          formatPrices[30]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[31]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[32]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[32]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[33]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[33]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[34]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[35]
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
                                                    href=${allLinks[34]}
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
                                    <img width="100%" src=https://beliani.info/newsletter/2022/230605line2.jpg style="display: block;">
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
                                        href=${allLinks[35]}><img
                                            width="100%"
                                            src=${allLinks[36]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #fffcfb">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[37]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[38]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[36]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              formatPrices[37]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              formatPrices[38]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[39]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[40]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[39]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[40]
                                                        }</span>
                                                        <span class="newsletterProductTitleHightPrice">${
                                                          formatPrices[41]
                                                        }</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[41]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[42]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          formatPrices[42]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[43]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[44]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[43]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[44]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[45]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[46]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[47]
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
                                                    href=${allLinks[45]}
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
                                    <img width="100%" src=https://beliani.info/newsletter/2022/230605line3.jpg style="display: block;">
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
                    <td align="center" class="newsletterContainer" style="background-color: #fffcfb">
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
                                        href=${allLinks[46]}><img
                                            width="100%"
                                            src=${allLinks[47]}
                                            style="display: block;"></a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color: #ffffff">
                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                            <tr>
                                <td align="center" class="newsletterProductContainer">
                                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[48]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[49]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[48]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left">
                                                            <span class="newsletterProductTitleLowPrice">${
                                                              formatPrices[49]
                                                            }</span>
                                                            <span class="newsletterProductTitleHightPrice">${
                                                              formatPrices[50]
                                                            }</span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[50]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[51]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[51]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[52]
                                                        }</span>
                                                        <span class="newsletterProductTitleHightPrice">${
                                                          formatPrices[53]
                                                        }</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" class="newsletterProductContainerLEFT" width="50%"><a
                                                    href=${
                                                      allLinks[52]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[53]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span class="newsletterProductTitle">${
                                                          formatPrices[54]
                                                        }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[55]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[56]
}</span></td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" class="newsletterProductContainerRIGHT" width="50%"><a
                                                    href=${
                                                      allLinks[54]
                                                    }><img
                                                        width="100%" src=${
                                                          allLinks[55]
                                                        }
                                                        style="display: block;"></a>
                                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                    <tr>
                                                        <td align="left" class="newsletterProductTitleContainer"><span
                                                                class="newsletterProductTitle">${
                                                                  formatPrices[57]
                                                                }</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left"><span class="newsletterProductTitleLowPrice">${
                                                          formatPrices[58]
                                                        }</span><span class="newsletterProductTitleHightPrice">${
formatPrices[59]
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
                                                    href=${allLinks[56]}
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
                  <td align="center" style="background-color: #ffffff" class="newsletterContainer">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="center"><img width="100%" src=${
                                allLinks[57]
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
  link1: allLinks[58],
  banner1: allLinks[59],
  link2: allLinks[60],
  banner2: allLinks[61],
})}
${footerNew[country](conditions, "newsletter", id)}
`;
}
