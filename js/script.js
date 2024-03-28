function updateProgramOptions() {
    var kelasSelect = document.getElementById("kelas");
    var programSelect = document.getElementById("program");
    var selectedClass = kelasSelect.value;

    // Menyembunyikan semua opsi program studi
    for (var i = 0; i < programSelect.options.length; i++) {
        var optionClass = programSelect.options[i].getAttribute("data-class");
        programSelect.options[i].style.display = (optionClass === selectedClass || optionClass === "Umum") ? "" : "none";
    }

    // Mengatur opsi pertama menjadi terpilih
    programSelect.value = "";
}