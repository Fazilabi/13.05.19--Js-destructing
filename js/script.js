// let person ={
//     name:"Fazil",
//     surname: "Qurbanov",
//     birthday: 1989,
//     city: "Nakhchivan",
//     showInfos: ()=>console.log("Show all details...")
// }

// let {name:ad, surname:soyad, birthday:dogum_tarixi, city:sheher, showInfos:melumatlari_goster}=person;

// console.log(ad,soyad, dogum_tarixi, sheher);
// melumatlari_goster();


let langs=["python","C#", "Ruby", "Javascript"];
console.log(...langs);


let langs2=["C++", "C", "Kotlin", "Java", ...langs];
console.log(langs2);