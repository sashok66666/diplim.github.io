import Glide from '@glidejs/glide';
const glide = new Glide('.glide',{
  type: 'carousel',
  perView: 3,
  breakpoints: {
      768: {
          perView: 2
      },
      375: {
          perView: 1
      }
  }
  });
  export default glide;