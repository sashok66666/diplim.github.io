import Glide from '@glidejs/glide';
import "../pages/style.css";
import "../images/facebook.svg";
import "../images/github.svg";
import "../images/nothing-found.svg";
import "../images/html.svg";
import "../images/css.svg";
import  "../images/javascript.svg";
import "../images/webpack.svg";
import "../images/image-01.png";
import "../images/image-03.png";
import "../images/image-04.png";


new Glide('.glide',{
    type: 'carousel',
    perView: 3
}).mount()