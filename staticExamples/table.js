document.addEventListener("DOMContentLoaded", function() {
    setupForm();
});

function setupForm() {
    const form = document.querySelector('form');
    form.onsubmit = function(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const val = e.target.val.value;
        puhRow({ name, val });
    }
}

function puhRow({ name, val }) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = name;
    td2.textContent = val;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
}