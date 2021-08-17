import { handleSubmit } from './js/formHandler'

import './styles/header.scss'
import './styles/main.scss'

const btn = document.getElementById('submit');
btn.addEventListener('click', () => handleSubmit());

// export {
//     // checkName,
//     handleSubmit,
//     // updateUI
// }