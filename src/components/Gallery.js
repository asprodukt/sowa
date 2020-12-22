import React, { Component } from "react";
import Macy from "macy";
import { galleryLoader } from "../scripts/galleryLoader";

import image01 from "../images/Gallery/gallery00001.jpg";
import image02 from "../images/Gallery/gallery00002.jpg";
import image03 from "../images/Gallery/gallery00003.jpg";
import image04 from "../images/Gallery/gallery00004.jpg";
import image05 from "../images/Gallery/gallery00005.jpg";
import image06 from "../images/Gallery/gallery00006.jpg";
import image07 from "../images/Gallery/gallery00007.jpg";
import image08 from "../images/Gallery/gallery00008.jpg";
import image09 from "../images/Gallery/gallery00009.jpg";
import image10 from "../images/Gallery/gallery00010.jpg";
import image11 from "../images/Gallery/gallery00011.jpg";
import image12 from "../images/Gallery/gallery00012.jpg";
import image13 from "../images/Gallery/gallery00013.jpg";
import image14 from "../images/Gallery/gallery00014.jpg";
import image15 from "../images/Gallery/gallery00015.jpg";
import image16 from "../images/Gallery/gallery00016.jpg";
import image17 from "../images/Gallery/gallery00017.jpg";
import image18 from "../images/Gallery/gallery00018.jpg";
import image19 from "../images/Gallery/gallery00019.jpg";
import image20 from "../images/Gallery/gallery00020.jpg";
import image21 from "../images/Gallery/gallery00021.jpg";
import image22 from "../images/Gallery/gallery00022.jpg";
import image23 from "../images/Gallery/gallery00023.jpg";
import image24 from "../images/Gallery/gallery00024.jpg";
import image25 from "../images/Gallery/gallery00025.jpg";
import image26 from "../images/Gallery/gallery00026.jpg";
import image27 from "../images/Gallery/gallery00027.jpg";
import image28 from "../images/Gallery/gallery00028.jpg";
import image29 from "../images/Gallery/gallery00029.jpg";
import image30 from "../images/Gallery/gallery00030.jpg";

export default class Gallery extends Component {
  componentDidMount() {
    new Macy({
      container: ".Gallery",
      mobileFirst: true,
      columns: 1,
      breakAt: {
        400: 2,
        700: 3,
        1100: 4,
      },
      margin: {
        x: 20,
        y: 20,
      },
    });

    galleryLoader();
  }
  render() {
    return (
      <div className="Gallery">
        <img src={image01} alt="System Odzysku Wód Popłucznych" />
        <img src={image02} alt="System Odzysku Wód Popłucznych" />
        <img src={image03} alt="System Odzysku Wód Popłucznych" />
        <img src={image04} alt="System Odzysku Wód Popłucznych" />
        <img src={image05} alt="System Odzysku Wód Popłucznych" />
        <img src={image06} alt="System Odzysku Wód Popłucznych" />
        <img src={image07} alt="System Odzysku Wód Popłucznych" />
        <img src={image08} alt="System Odzysku Wód Popłucznych" />
        <img src={image09} alt="System Odzysku Wód Popłucznych" />
        <img src={image10} alt="System Odzysku Wód Popłucznych" />
        <img src={image11} alt="System Odzysku Wód Popłucznych" />
        <img src={image12} alt="System Odzysku Wód Popłucznych" />
        <img src={image13} alt="System Odzysku Wód Popłucznych" />
        <img src={image14} alt="System Odzysku Wód Popłucznych" />
        <img src={image15} alt="System Odzysku Wód Popłucznych" />
        <img src={image16} alt="System Odzysku Wód Popłucznych" />
        <img src={image17} alt="System Odzysku Wód Popłucznych" />
        <img src={image18} alt="System Odzysku Wód Popłucznych" />
        <img src={image19} alt="System Odzysku Wód Popłucznych" />
        <img src={image20} alt="System Odzysku Wód Popłucznych" />
        <img src={image21} alt="System Odzysku Wód Popłucznych" />
        <img src={image22} alt="System Odzysku Wód Popłucznych" />
        <img src={image23} alt="System Odzysku Wód Popłucznych" />
        <img src={image24} alt="System Odzysku Wód Popłucznych" />
        <img src={image25} alt="System Odzysku Wód Popłucznych" />
        <img src={image26} alt="System Odzysku Wód Popłucznych" />
        <img src={image27} alt="System Odzysku Wód Popłucznych" />
        <img src={image28} alt="System Odzysku Wód Popłucznych" />
        <img src={image29} alt="System Odzysku Wód Popłucznych" />
        <img src={image30} alt="System Odzysku Wód Popłucznych" />
      </div>
    );
  }
}
