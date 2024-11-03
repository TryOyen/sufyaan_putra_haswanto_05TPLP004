document.getElementById("addAttendanceBtn").onclick = function () {
    document.getElementById("modal").classList.remove("hidden");
};

document.getElementById("closeModalBtn").onclick = function () {
    document.getElementById("modal").classList.add("hidden");
};

document.getElementById("attendanceForm").onsubmit = function (event) {
    event.preventDefault(); 

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const status = document.getElementById("status").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td></td>
        <td>${nama}</td>
        <td>${tanggal}</td>
        <td>${status}</td>
        <td class="action-icons">
            <i class="fas fa-trash-alt" onclick="deleteRow(this)"></i>
        </td>
    `;

    document.getElementById("attendanceTable").querySelector("tbody").appendChild(newRow);

    document.getElementById("attendanceForm").reset();
    document.getElementById("modal").classList.add("hidden");
};

function deleteRow(icon) {
    const row = icon.closest('tr');
    row.parentNode.removeChild(row);
}