// Open Registration Popup
function openRegistrationPopup() {
  document.getElementById('registrationPopup').style.display = 'flex';
}

// Close Registration Popup
function closeRegistrationPopup() {
  document.getElementById('registrationPopup').style.display = 'none';
}

// Open Slide Page
function openSlidePage() {
  document.getElementById('slidePage').style.display = 'block';
}

// Close Slide Page
function closeSlidePage() {
  document.getElementById('slidePage').style.display = 'none';
}

// Toggle Text Function
function toggleText(elementId) {
  const element = document.getElementById(elementId);
  const isExpanded = element.classList.contains('visible-text');

  if (isExpanded) {
    element.classList.remove('visible-text');
    element.innerHTML =
      element.dataset.shortText +
      ` <span class="read-more" onclick="toggleText('${elementId}')">Lihat Selengkapnya</span>`;
  } else {
    element.classList.add('visible-text');
    element.innerHTML =
      element.dataset.fullText +
      ` <span class="read-more" onclick="toggleText('${elementId}')">Tutup</span>`;
  }
}

// Assign short and full texts
document.addEventListener('DOMContentLoaded', () => {
  const mlText = document.getElementById('mlText');
  const ffText = document.getElementById('ffText');
  const cpText = document.getElementById('cpText');

  mlText.dataset.shortText = 'KETENTUAN UMUM: Peserta adalah perwakilan siswa/siswi SMP/MTs, SMA/SMK/MA...';
  mlText.dataset.fullText = `<b>KETENTUAN UMUM</b><br>
  <ul>
<li>Peserta adalah perwakilan siswa/siswi SMP/MTs, SMA/SMK/MA Se-Wilayah III Cirebon dan Umum.</li>
<li>Peserta lomba didaftarkan melalui link pendaftaran dari panitia, dan wajib melampirkan foto copy Kartu Identitas Siswa atau Kartu OSIS bagi kategori pelajar.</li>
<li>Peserta beregu dengan jumlah maksimal 5 orang dengan 1 orang cadangan.</li>
<li>Setiap pemain wajib memiliki device berupa Android atau iPhone serta akun Mobile Legend sendiri dan bukan milik orang lain.</li>
<li>Pemain tidak diperbolehkan menggunakan modulator dan emulator.</li>
<li>Pemain Tidak diperbolehkan untuk memiliki lebih dari 1 tim.</li>
<li>Pemain wajib hadir di jadwal tanding yang telah ditentukan (Bila melewati batas tunggu 30 menit, tim akan didiskualifikasi).</li></ul>\n\n <br><b>PERSYARATAN TIM LOMBA</b><br>
<ul>
    <li>Menunjuk 1 orang untuk menjadi kapten tim dan kapten bertanggungjawab untuk melakukan pendaftaran.</li><br>
    <li>Kapten tim wajib memiliki Whatsapp dan panitia akan mengirimkan semua pemberitahuan Kompetisi melalui Grup Whatsapp yang dibuat.</li><br>
    <li>Tim dilarang mengganti pemain yang sudah terdaftar termasuk pemain cadangan selama acara berlangsung.</li><br>
    <li>Tim Diwajibkan membawa perlengkapan lomba sendiri (Stop Contact/Roll Cable, Charger, Kuota Internet dan lain-lain).</li><br>
</ul>

<b>NAMA TIM DAN NAMA PEMAIN</b><br>
<ul>
    <li>Tidak Diperbolehkan menggunakan Nickname dan Nama tim yang mengandung unsur SARA & seksualitas.</li><br>
    <li>Satu tim yang didaftarkan tidak dapat diubah (roaster lock).</li><br>
</ul>

<b>SISTEM TURNAMEN</b><br>
<ul>
    <li>Sistem Pertandingan menggunakan sistem gugur. Hanya sekali pertandingan ketika kualifikasi, ketika memasuki babak semifinal menggunakan format Best Of Three, Ketika memasuki babak Final menggunakan format Best Of Five.</li><br>
    <li>Tim akan diundi secara acak untuk menentukan posisi Bracket dan pertandingan akan berlanjut berdasarkan susunan Bracket.</li><br>
</ul>

<b>SISTEM PERTANDINGAN</b><br>
<ul>
    <li>Setiap Match, admin akan membuat custom room dan mengundang kapten, kapten harus mengundang anggota lainnya untuk masuk kedalam Lobby Custom.</li><br>
    <li>Pemain cadangan tidak diperkenankan untuk memasuki Lobby.</li><br>
    <li>Total waktu game – game berlangsung sampai pemenang bisa diketahui. Pemenang adalah tim yang berhasil menghancurkan Base tim musuh atau jika musuh menyerah.</li><br>
    <li>Memulai pertandingan tepat waktu.</li><br>
    <li>Setiap tim diharapkan sudah masuk Lobby in-game dengan waktu menunggu maksimal adalah 10 Menit.</li><br>
    <li>Apabila ada tim yang belum siap selama waktu yang ditentukan, maka lawannya bisa mendapatkan menang WO.</li><br>
    <li>Game mode yang digunakan di setiap pertandingan adalah custom Lobby draftpick terbaru dengan sistem 3 ban Hero.</li><br>
    <li>Bebas menggunakan skin apapun.</li><br>
</ul>

`;

  ffText.dataset.shortText = '<b>SYARAT PESERTA:</b><br> Peserta adalah perwakilan siswa/siswi SMP/MTs, SMA/SMK/MA...';
  ffText.dataset.fullText = `<b>SYARAT PESERTA</b><br>
<ul>
    <li>Peserta adalah perwakilan siswa/siswi SMP/MTs, SMA/SMK/MA Se-Wilayah III Cirebon dan Umum.</li><br>
    <li>Peserta lomba didaftarkan melalui link pendaftaran dari panitia, dan wajib melampirkan foto copy Kartu Identitas Siswa atau Kartu OSIS bagi kategori pelajar.</li><br>
    <li>Peserta beregu dengan jumlah maksimal 4 orang, 1 untuk cadangan.</li><br>
    <li>Seluruh peserta yang dapat mengikuti turnamen ini hanya yang telah mendaftarkan diri di link yang sudah disediakan oleh panitia.</li><br>\n\n
</ul>

<b>KETENTUAN PESERTA</b><br>
<ul>
    <li>Peserta wajib memiliki dan menggunakan akun ID Free Fire sendiri.</li><br>
    <li>Peserta tidak diizinkan memakai akun orang lain atau dengan kata lain, Joki.</li><br>
    <li>ID Nickname yang terdaftar tidak dapat diwakilkan oleh peserta lain.</li><br>
    <li>Peserta tidak boleh terdaftar di dua tim atau lebih.</li><br>
    <li>Peserta yang dapat bermain pada hari H hanyalah peserta yang telah terdaftar pada registrasi tim.</li><br>
</ul>

<b>PERATURAN UMUM</b><br>
<ul>
    <li>Pemain Tidak Boleh Menggunakan Akun Palsu / Orang Lain.</li><br>
    <li>Pemain Tidak Boleh Melakukan Pelecehan Terhadap Orang Lain.</li><br>
    <li>Pemain Tidak Boleh Mengucapkan Ucapan / Kata Yang Kasar.</li><br>
    <li>Dilarang Menggunakan Cheat Saat Turnamen.</li><br>
    <li>Dilarang Menggunakan Maps Hack.</li><br>
    <li>Dilarang Menggunakan Maps Drone.</li><br>
    <li>Pemain Diwajibkan Bermain Secara Offline Di Tempat Yang Sudah Di Sediakan.</li><br>
    <li>Nama Tim dan In Game Nickname dilarang mengandung unsur SARA dan kasar.</li><br>
    <li>Media komunikasi yang digunakan yakni Whatsapp.</li><br>
    <li>Hanya 1 Orang perwakilan yang diundang ke grup komunikasi Whatsapp.</li><br>
    <li>Seluruh informasi yang diberikan oleh penyelenggara merupakan tanggung jawab masing-masing tim.</li><br>
    <li>Seluruh tim wajib bermain minimal 3 orang, jika dibawah itu maka akan dianggap WO; atau atas persetujuan penyelenggara dengan situasi dan kondisinya.</li><br>
    <li>Semua peserta wajib menjunjung nilai sportif dan gam fairplay.</li><br>
</ul>

<b>SISTEM TURNAMEN</b><br>
<ul>
    <li>Turnamen menggunakan sistem offline dan turnamen normal. Perihal sistem poin akan menggunakan scoring sheet dengan dihitung total poin.</li><br>
</ul>

<b>PENGATURAN MATCH FASE QUALIFIER DAN SEMIFINAL</b><br>
<ul>
    <li>Room akan dibuat oleh penyelenggara menggunakan Garena room.</li><br>
    <li>Item pendukung dalam game seperti Loadout item, Skin Character dan Slot Character Skill, diperbolehkan untuk dipergunakan.</li><br>
    <li>Fitur “Gun Property” Bersifat non-aktif selama pertandingan berlangsung, Yang artinya status gun skin senjata tidak akan berfungsi disepanjang turnamen.</li><br>
    <li>Peserta akan bermain 2 ronde saat qualifier dan 3 ronde saat semifinal.</li><br>
    <li>Map yang akan digunakan : Bermuda, Purgatory dan Kalahari.</li><br>
    <li>Jadwal main dan map akan diinformasikan melalui grup Whatsapp.</li><br>
    <li>Pemenang match ditentukan dari total poin tertinggi. Total poin terdiri dari Placement point dan Point Kill.</li><br>
</ul>

<b>PENGATURAN MATCH FASE GRAND FINAL</b><br>
<ul>
    <li>Room akan dibuat oleh penyelenggara menggunakan Garena room.</li><br>
    <li>Item pendukung dalam game seperti Loadout item, Skin Character dan Slot Character Skill, diperbolehkan untuk dipergunakan.</li><br>
    <li>Fitur “Gun Property” Bersifat non-aktif selama pertandingan berlangsung, Yang artinya status gun skin senjata tidak akan berfungsi disepanjang turnamen.</li><br>
    <li>Peserta akan bermain 5 ronde saat fase Grand Final.</li><br>
    <li>Map yang akan digunakan : Bermuda, Purgatory, Kalahari, Alpine dan Nextera.</li><br>
    <li>Jadwal main dan map akan diinformasikan melalui grup Whatsapp.</li><br>
    <li>Pemenang match ditentukan dari total poin tertinggi. Total poin terdiri dari Placement point dan Point Kill.</li><br>
</ul>

<b>PERATURAN TEKNIS</b><br>
<ul>
    <li>Peserta dilarang menggunakan emulator dan tab, Hanya diizinkan menggunakan SmartPhone.</li><br>
    <li>Peserta dilarang menggunakan akan pendukung, seperti : trigger button, L1-R1 button, dan sebagainya.</li><br>
    <li>Peserta yang menyebarluaskan link Whatsapp tanpa intruksi penyelenggara maka akan didiskualifikasi pada turnamen tersebut.</li><br>
    <li>Penyelenggara tidak menyediakan jaringan internet apapun, Peserta menggunakan jaringan internet masing-masing.</li><br>
    <li>Penyelenggara tidak bertanggung jawab atas seluruh gangguan koneksi internet, crash device, device error, dan sebagainya, yang dialami oleh peserta.</li><br>
</ul>
`;
    cpText.dataset.shortText = '<b>KETENTUAN UMUM: </b><br> Perlombaan ini terbuka untuk eksternal atau....';
    cpText.dataset.fullText = '<b>KETENTUAN UMUM</b><br> <ul> <li>Perlombaan ini terbuka untuk eksternal/Umum.</li><br><li>Peserta lomba didaftarkan melalui link pendaftaran dari panitia, dan wajib mengikuti arahan dari panitia.</li><br> <li>Tema Cosplay ini bertemakan Character Mobile Legend dan Free Fire.</li><br> <li>Tidak diperkenankan mengenakan seragam sekolah dari tingkat maupun institusi pendidikan manapun yang ada di Indonesia (SD, SMP, SMK, dll).</li><br> <li>Kostum tidak diperkenankan mengandung unsur politik serta membawa lembaga tertentu.</li><br> <li>Tidak diperkenankan melakukan adegan yang bersifat pornoaksi, atau adegan berbahaya yang dapat melukai diri sendiri maupun orang lain.</li><br>    <li>Pendaftaran dilakukan secara Online melalui link yang sudah disediakan oleh panitia.</li><br>    <li>Pendaftaran dipungut biaya sebesar Rp. 15.000,- yang dibayarkan secara online (link pendaftaran) atau pada meja registrasi sebelum lomba dimulai.</li><br>    <li>Pendaftaran mulai dibuka pada tanggal 28 November 2024 hingga 10 Desember 2024.</li><br>    <li>Estimasi waktu perform di panggung maksimal 2 Menit/Peserta. Jika lebih dari itu...</li><br></ul>';

});


    

   
    const clickSound = document.getElementById('click-sound');
    const myDivButton = document.getElementById('myDivButton');

    // Tambahkan event listener pada div
    myDivButton.addEventListener('click', () => {
        clickSound.currentTime = 0; // Reset audio ke awal
        clickSound.play(); // Mainkan efek suara
    });

    document.getElementById('click-sound').volume = 0.035; // Volume maksimal
    
    // Menampilkan Popup
function openTwibonze() {
  document.getElementById("twibonzePopup").classList.remove("hidden");
}

// Menutup Popup
function closeTwibonze() {
  document.getElementById("twibonzePopup").classList.add("hidden");
}

// Menutup popup saat klik di luar area konten
document.getElementById("twibonzePopup").addEventListener("click", function (e) {
  if (e.target === this) {
    closeTwibonze();
  }
});

    
  
  
