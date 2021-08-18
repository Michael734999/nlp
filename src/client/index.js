import { handleSubmit } from './js/formHandler'
import { updateUI } from './js/formHandler'
import { checkName } from './js/nameChecker'

import './styles/header.scss'
import './styles/main.scss'

export {
    checkName,
    handleSubmit,
    updateUI
}

// let btn = document.getElementById('submit');
// if (btn) {
//     btn.addEventListener('click', handleSubmit);
// };