import { FUTOK } from "./adatok.js";

const BEFUTOTT_VERSENYZOK = [];

// 1. feladat
const ELSO_FELADAT = document.querySelector("#feladat_1");
function letrehozTablazat() {
  let txt = "<table>";
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `<tr>
            <td>${FUTOK[index].nev}</td>
            <td>${FUTOK[index].nemzetiseg}</td>
            <td>${FUTOK[index].versenySzam}</td>
            </tr>`;
  }
  txt += "</table>";
  ELSO_FELADAT.innerHTML = txt;
}
letrehozTablazat();

// 2. feladat
const MASODIK_FELADAT = document.querySelector("#feladat_2");
function osszesit() {
  // megkeressük hogy milyen versenyfajták vannak
  const VERSENY_SZAM_FAJTAK = [];
  for (let index = 0; index < FUTOK.length; index++) {
    if (VERSENY_SZAM_FAJTAK.indexOf(FUTOK[index].versenySzam) < 0) {
      VERSENY_SZAM_FAJTAK.push(FUTOK[index].versenySzam);
    }
  }
  // versenyfajta számú elemű tömbbe megszámolom az egyes fajtákat
  //   const OSSZ_VERSENY_SZAM_FAJTAK = new Array(VERSENY_SZAM_FAJTAK.length); // nem működik mert nem szám kezdőérték és nem tud hozzáadni?
  //   const OSSZ_VERSENY_SZAM_FAJTAK = []; // nem működik mert nem szám kezdőérték és nem tud hozzáadni?
  const OSSZ_VERSENY_SZAM_FAJTAK = [0, 0, 0]; // nem jó megoldás mert nem tudhatjuk hogy 3 fajta verseny lesz, de így meg van adva a kezdőérték
  for (let i = 0; i < VERSENY_SZAM_FAJTAK.length; i++) {
    for (let j = 0; j < FUTOK.length; j++) {
      if (VERSENY_SZAM_FAJTAK[i] === FUTOK[j].versenySzam) {
        OSSZ_VERSENY_SZAM_FAJTAK[i] += 1;
      }
    }
  }
  // kiírás
  for (let index = 0; index < OSSZ_VERSENY_SZAM_FAJTAK.length; index++) {
    MASODIK_FELADAT.innerHTML += `<p>${VERSENY_SZAM_FAJTAK[index]}: ${OSSZ_VERSENY_SZAM_FAJTAK[index]} db</p>`;
  }
  console.log(VERSENY_SZAM_FAJTAK, OSSZ_VERSENY_SZAM_FAJTAK);
}
osszesit();

// 3. feladat
const HARMADIK_FELADAT = document.querySelector("#feladat_3");
const BEFUTOTTAK_TR = document.querySelectorAll("#feladat_1 tr");
function befutott() {
  for (let index = 0; index < BEFUTOTTAK_TR.length; index++) {
    BEFUTOTTAK_TR[index].addEventListener("click", function () {
      if (BEFUTOTT_VERSENYZOK.indexOf(FUTOK[index]) < 0) {
        HARMADIK_FELADAT.innerHTML += `<tr>
                    <td>${FUTOK[index].nev}</td>
                    <td>${FUTOK[index].nemzetiseg}</td>
                    <td>${FUTOK[index].versenyIdo}</td>
                    </tr>`;
        BEFUTOTT_VERSENYZOK.push(FUTOK[index]);
        BEFUTOTTAK_TR[index].classList.add("befutott");
      }
    });
  }
}
befutott();
// 4. feladat
const TOROL_GOMB = document.querySelector("button");
function torolEsemeny() {
  TOROL_GOMB.addEventListener("click", function () {
    for (let index = BEFUTOTT_VERSENYZOK.length; index > 0; index--) {
      BEFUTOTT_VERSENYZOK.pop();
    }
    for (let index = 0; index < BEFUTOTTAK_TR.length; index++) {
      BEFUTOTTAK_TR[index].classList.remove("befutott");
    }
    HARMADIK_FELADAT.innerHTML = "";
  });
}
torolEsemeny();
// 5. feladat
function ellenoriz() {
  for (let index = 0; index < BEFUTOTTAK_TR.length; index++) {
    BEFUTOTTAK_TR[index].addEventListener("click", function () {
      if (BEFUTOTT_VERSENYZOK.length === FUTOK.length) {
        alert("VÉGE A VERSENYNEK!");
      }
    });
  }
}
ellenoriz();
