<?php
include_once "conn.php";

$nevek = array(
    "Kovács Anna", "Nagy Péter", "Kiss István", "Szabó Mária", "Horváth Gábor", 
    "Tóth Zsuzsanna", "Varga János", "Farkas Katalin", "Papp Ferenc", "Balázs Éva",
    "Kis Virág", "Balogh Attila", "Barta Krisztina", "Fodor Tamás", "Molnár Éva",
    "Pataki Gergő", "Kisfaludy Zsófia", "Huszár László", "Novák Szilvia", "Budai Gábor",
    "László Zsolt", "Katona Eszter", "Barna Ferenc", "Király Júlia", "Kozma Dániel",
    "Kovács Krisztina", "Takács István", "Török Anna", "Fekete Péter", "Lakatos Dóra",
    "Kovács István", "Bakos Adrienn", "Simon Gábor", "Mészáros Zsófia", "Fülöp Balázs",
    "Major Boglárka", "Molnár Béla", "Pap Ágnes", "Balog Gergely", "Bíró Katalin",
    "Németh Attila", "Magyar Anna", "Barta Tamás", "Pintér Dóra", "Budai Ferenc",
    "Mészáros Katalin", "Molnár János", "Bakos Zsófia", "Papp Gábor", "Sipos Eszter",
    "Fekete Krisztián", "Varga Petra", "Tóth Zoltán", "Nagy Zsuzsa", "Kiss Tamás",
    "Takács Katalin", "Balogh Péter", "Sándor Éva", "Kovács László", "Kovács Zsófia",
    "Fehér Márton", "Varga Katalin", "Simon András", "Bakos Márta", "Balogh Zoltán",
    "Molnár Zsuzsanna", "Szabó Gábor", "Kovács Enikő", "Tóth Péter", "Kiss Enikő",
    "Balogh Gábor", "Pap Andrea", "Molnár Norbert", "Nagy Katalin", "Kis Gábor",
    "Fehér Zsuzsa", "Takács Béla", "Szabó Andrea", "Kovács Bence", "Tóth Judit",
    "Kis Márton", "Balogh Zsolt", "Mészáros Eszter", "Kiss Zoltán", "Fekete Zsuzsa",
    "Bakos Gábor", "Nagy Andrea", "Kovács Márta", "Pataki István", "Balogh Kata",
    "Tóth Gergő", "Nagy Judit", "Kiss Péter", "Kovács Éva", "Takács Zsolt"
);
$felhasznalonevek = array(
    "kanna", "pnagy", "kissi", "mszabo", "h.gabor",
    "ztoth", "vjani", "kfarkas", "fpapp", "beva",
    "kvirag", "abalogh", "bkrisztina", "tfodor", "emolnar",
    "gpat", "zkisfaludy", "lhuszar", "snovak", "gbudai",
    "zlaszlo", "keszter", "bferenc", "julia", "dkozma",
    "kkrisztina", "tistvan", "tanna", "pfekete", "dlakatos",
    "kovacs", "bakos", "gsimon", "zmeszaros", "bfulop",
    "bboglarka", "bmolnar", "apap", "bgergely", "kbiro",
    "anemeth", "amagyar", "btamas", "pdora", "bferenc",
    "kmeszaros", "jmolnar", "bzsofia", "gpapp", "eszter",
    "kkrisztian", "pvarga", "ztibor", "zszuzsa", "ktamas",
    "ktakacs", "bpeter", "esandor", "klaszlo", "kzsofia",
    "mfeher", "kvarga", "asimon", "bmarta", "bzoltan",
    "zszuszanna", "gszabo", "keniko", "zpeter", "kieniko",
    "bgabor", "pandrea", "nmolnar", "katalin", "kgabor",
    "zszuzsa", "btakacs", "andrea", "kbence", "jtoth",
    "kmarton", "bzsolt", "emeszaros", "kzoltan", "zszuzsa",
    "bgabor", "nandrea", "kmarta", "pistvan", "bkata",
    "gtoth", "njudit", "kispeter", "keva", "zzsolt"
);

for ($i=0; $i < 100; $i++) {
    $passwd = random_bytes(10);
    $sql = "INSERT INTO `users`(`id`, `username`, `fullname`, `password`, `token`, profileimage) VALUES ('','$felhasznalonevek[$i]','$nevek[$i]','','','');";
    mysqli_query($conn, $sql);
}
?>