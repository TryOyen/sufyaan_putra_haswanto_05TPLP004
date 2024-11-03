function addIzin(nama, tanggal, alasan) {
    const tableBody = document.getElementById("izinTable").querySelector("tbody");
    const rowCount = tableBody.rows.length + 1;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${nama}</td>
        <td>${tanggal}</td>
        <td>${alasan}</td>
        <td class="action-icons">
            <i class="fas fa-trash-alt" onclick="deleteRow(this)"></i>
        </td>
    `;

    tableBody.appendChild(newRow);
}

function deleteRow(icon) {
    const row = icon.closest('tr');
    row.parentNode.removeChild(row);
}

document.getElementById("closeModalBtn").onclick = function () {
    document.getElementById("modal").classList.add("hidden");
};

document.getElementById("addIzinBtn").onclick = function () {
    document.getElementById("modal").classList.remove("hidden");
};

document.getElementById("izinForm").onsubmit = function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const alasan = document.getElementById("alasan").value;

    addIzin(nama, tanggal, alasan);

    document.getElementById("izinForm").reset();
    document.getElementById("modal").classList.add("hidden");
};