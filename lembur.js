function addLembur(nama, tanggal, durasi, keterangan) {
    const tableBody = document.getElementById("lemburTable").querySelector("tbody");
    const rowCount = tableBody.rows.length + 1;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${nama}</td>
        <td>${tanggal}</td>
        <td>${durasi}</td>
        <td>${keterangan}</td>
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

document.getElementById("addLemburBtn").onclick = function () {
    document.getElementById("modal").classList.remove("hidden");
};

document.getElementById("lemburForm").onsubmit = function (event) {
    event.preventDefault(); 

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const durasi = document.getElementById("durasi").value;
    const keterangan = document.getElementById("keterangan").value;

    addLembur(nama, tanggal, durasi, keterangan); 

   
    document.getElementById("lemburForm").reset();
    document.getElementById("modal").classList.add("hidden");
};