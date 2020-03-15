import Glide from '@glidejs/glide';
import "../js/modules/GithubApi";

import render from "../js/components/CommitCardList";
render();
new Glide('.glide',{
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
    }).mount()

    