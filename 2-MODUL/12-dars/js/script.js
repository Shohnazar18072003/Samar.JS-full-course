//  Amaliyot, uyga vazifa

//  1 )  numberOfSeries nomli o’zgaruvchi yarating va unga “Nechta serial ko’rdingiz?” degan savolni qo’ying. 

"use strict";

const numberOfSeries = +prompt("Nechta serial ko'rdingiz ?", "");


//  2 ) seriesDB nomli object yasang va unga quydagi xususiyatlarni yozib chiqing:
// - count - bu yerga birinchi savoldagi javob qo’yilish kerak.
// - series- bu yerga bo’sh object yozing.
// - actors - bosh object joylang.
// - genres - bu yerga bo’sh massiv joylang
// - privat - bu yerda boolean ma’lumot turi bo’lishi kerak, boshlang’ich qiymat false bo’lsin.


// const seriesDB = {
//    count : numberOfSeries ,
//    series: {},
//    actors: {},
//    genres: [],
//    private: false,
// };

// console.log(seriesDB);


//   3 ) Foydalanuvchiga ushbu savolni ikki marotaba bering:
// - “Oxirgi ko’rgan serialingiz?”
// - “Nechi baxo berasiz?”
// Ushbu savollardagi javobni o’zgaruvchilarga joylashtirishingiz kerak.
// Javoblarni series objectga quyidagi formatda joylang:
// series: {
// 	“Ahmad ibn Hanbal”: “10”,
// 	“Umar ibn Hattob”: “10”
// }


const seriesDB = {
   count : numberOfSeries ,
   series: {},
   actors: {},
   genres: [],
   private: false,
};

const a = prompt("Oxirgi ko'rgan serialingiz?"), b = prompt("Nechchi baho berasiz?") , c = prompt("Oxirgi ko'rgan serialingiz?"), d = prompt("Nechchi baho berasiz?");


seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);
