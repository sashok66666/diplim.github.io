import newSapi from '../constants/NEW_SAPI';

const value = () => {
    newSapi.value = document.querySelector('.header__input').value;
    return newSapi
}
export default value;



