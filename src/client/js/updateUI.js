const agreement = document.getElementById('agreement');
const subjectivity = document.getElementById('subjectivity');
const confRank = document.getElementById('confidence');
const irony = document.getElementById('irony');

function updateUI(res) {
    agreement.innerHTML = `Agreement: ${res.agreement}`;
    subjectivity.innerHTML = `Subjectivity: ${res.subjectivity}`;
    confRank.innerHTML = `Confidence Rank: ${res.confidence}%`;
    irony.innerHTML = `Irony: ${res.irony}`;
};

export { updateUI }