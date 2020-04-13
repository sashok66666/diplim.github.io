import newSapi from '../constants/NEW_SAPI';

function value() {
    newSapi.value = document.querySelector('.header__input').value;
    return newSapi
}

export default value;



