import { checkName } from "./nameChecker";
import { updateUI } from "./updateUI";

const handleSubmit = (event) => {
    event.preventDefault();

    let url = document.getElementById('name').value;

    if (Client.checkName(url)) {
        fetch('http://localhost:8081/lang', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                updateUI(res);
            })
    } else {
        console.log('Error, invalid URL')
    }
};

export { updateUI }
export { handleSubmit }