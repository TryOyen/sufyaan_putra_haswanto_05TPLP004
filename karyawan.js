document.addEventListener("DOMContentLoaded", function () {
    const addKaryawanBtn = document.getElementById("addKaryawanBtn");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const karyawanForm = document.getElementById("karyawanForm");
    const karyawanTableBody = document.getElementById("karyawanTable").getElementsByTagName('tbody')[0];

    let karyawanCount = 0;

    addKaryawanBtn.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
        karyawanForm.reset(); 
    });

    karyawanForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const kode = document.getElementById("kode").value;
        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const alamat = document.getElementById("alamat").value;

        const newRow = karyawanTableBody.insertRow();
        karyawanCount++; 
        newRow.innerHTML = `
            <td>${karyawanCount}</td>
            <td>${kode}</td>
            <td>${nama}</td>
            <td>${email}</td>
            <td>${alamat}</td>
        `;

        modal.classList.add("hidden");
        karyawanForm.reset(); 
    });
});