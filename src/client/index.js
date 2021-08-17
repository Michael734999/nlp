import { checkName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { updateUI } from './js/formHandler'

import './styles/header.scss'
import './styles/main.scss'

const search = document.getElementById('submit');
search.addEventListener('click', () => handleSubmit());

export {
    checkName,
    handleSubmit,
    updateUI
}