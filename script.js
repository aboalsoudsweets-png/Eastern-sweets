// ========== DATA ==========
const defaultDrinks = [
{
id: "4",
nameAr: " كنافة نابلسية",
nameEn: "",
price: 500,
category: "konafa",
image: "1.png",
desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
ingredients: []
},
{
id: "5",
nameAr: " كنافة عربية",
nameEn: "",
price: 500 ,
category: "konafa",
image: "2.png",
desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
ingredients: []
},
{ id: "9000",
nameAr: " كنافة اسطنبولية",
nameEn: "",
price: 580 ,
category: "konafa",
image: "2000.jpg",
desc: "نوع كنـافة خشنة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
ingredients: []
},
{
id: "40055",
nameAr: "  اسطنبولية و عربية مشكل",
nameEn: "",
price: 540,
category: "konafa",
image: "3.png",
desc: "",
ingredients: []
},
{
id: "400",
nameAr: "   اسطنبولية و نابلسية مشكل",
nameEn: "",
price: 540,
category: "konafa",
image: "503.JPG",
desc: "",
ingredients: []
},
{
id: "504",
nameAr: "نابلسية و عربية مشكل ",
nameEn: "",
price: 500,
category: "konafa",
image: "504.JPG",
desc: "",
ingredients: []
},
{
id: "1",
nameAr: "صحن نابلسية",
nameEn: "",
price: 90,
category: "konafa",
image: "1.png",
desc: "نوع كنـافة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية.",
ingredients: []
},
{
id: "2",
nameAr: "صحن اسطنبولية",
nameEn: " نوع خشنة ناعمة بتتعمل بالسمنة البلدي محشية جبنة عكاوي ونابلسية",
price: 100 ,
category: "konafa",
image: "2000.jpg",
desc: "",
ingredients: []
},
{
id: "2852",
nameAr: "صحن عربية",
nameEn: "",
price: 90 ,
category: "konafa",
image: "2.png",
desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة بالجوز",
ingredients: []
},
{
id: "3",
nameAr: "صحن اسطنبولية و عربية",
nameEn: "",
price: 135,
category: "konafa",
image: "3.png",
desc: "",
ingredients: []
},
{
id: "503",
nameAr: "صحن اسطنبولية و نابلسية",
nameEn: "",
price: 135,
category: "konafa",
image: "503.JPG",
desc: "",
ingredients: []
},
{
id: "50465",
nameAr: "صحن نابلسية و عربية",
nameEn: "",
price: 125,
category: "konafa",
image: "504.JPG",
desc: "",
ingredients: []
},
{
id: "1000000",
nameAr: " بورمة قشطة ",
nameEn: "",
price: 500 ,
category: "konafa",
image: "1000000.png",
desc: "معمول من شعيرات الكنافة، بتتلف على شكل أصابع ومحشية قشطة",
ingredients: []
},
{
id: "500",
nameAr: " كلاچ ",
nameEn: "",
price: 400 ,
category: "konafa",
image: "500.JPG",
desc: "رقائق الجلاش محشوة بالقشطة مع اللبن والزبدة",
ingredients: []
},

// ✅ مشكل فستق حلبي
{
id: "mishkal-fustuk",
nameAr: "مشكل حلبي",
nameEn: "",
price: 1750,
category: "mshak",
image: "halaby.png",
images: [
"7.png"
],
desc: "مزيج فاخر من أفضل أنواع البقلاوة بالفستق الحلبي الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

{
id: "mishkal-fustuk-mix",
nameAr: " مشكل حلبي مع لوز ",
nameEn: "",
price: 1250,
category: "mshak",
image: "lozhalaby.png",
images: [
"30.png"
],
desc: "مزيج فاخر من أفضل أنواع البقلاوة بالفستق الحلبي الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

{
id: "6",
nameAr: "بورما فستق حلبي",
nameEn: "",
price: 1800,
category: "baqlawa",
image: "6.png",
desc: "حلوى عربية مصنوعة من عجينة الكــنافة و محشوة بالفستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "7",
nameAr: "عش البلبل فستق حلبي",
nameEn: "",
price: 1650,
category: "baqlawa",
image: "7.png",
desc: "حلوى من الكــنافة على شكل عش دائري محشوة فستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "8",
nameAr: "بلوريا حمراء",
nameEn: "",
price: 1800,
category: "baqlawa",
image: "8.png",
desc: "حلوي شامية من خيوط الكنافة محشوة فستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "9",
nameAr: "بلوريا بيضاء",
nameEn: "",
price: 1800,
category: "baqlawa",
image: "9.png",
desc: "حلوي شامية من خيوط الكنافة محشوة فستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "10",
nameAr: "صره فستق حلبي",
nameEn: "",
price: 1950,
category: "baqlawa",
image: "10.png",
desc: "رقائق الجلاش محشوة بين الرقائق بالفستق نخب أول,ومحشوة بعدها بالفستق الصحيح أيضاً",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "11",
nameAr: "اسيا فستق حلبي",
nameEn: "",
price: 1950,
category: "baqlawa",
image: "11.png",
desc: "حلوى شرقية مصنوعة من طبقات الجلاش، تُحشى بالفستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "12",
nameAr: "كل واشكر فستق حلبي",
nameEn: "",
price: 1550,
category: "baqlawa",
image: "12.png",
desc: "حلوي عربية فاخرة تصنع من عجينة الجلاش المحشوة فستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "13",
nameAr: "دولمة فستق حلبي",
nameEn: "",
price: 1850,
category: "baqlawa",
image: "13.png",
desc: "حلوي ناعمة من رقائق الجلاش محشية علي طولها بالفستق نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

{
id: "15",
nameAr: "اساور الست فستق حلبي",
nameEn: "",
price: 750,
category: "baqlawa",
image: "15.png",
desc: "حلوى من عجينة الجلاش ملفوفة بشكل دائري وعليها رشة الفستق",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "16",
nameAr: "سنيورة فستق حلبي",
nameEn: "",
price: 1500,
category: "baqlawa",
image: "16.png",
desc: "حلوى من عجينة الجلاش ملفوفة وداخلها فستق",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "900",
nameAr: "لوكم فستق حلبي",
nameEn: "",
price: 1950,
category: "baqlawa",
image: "505.JPG",
desc: "لوكم طري محشو بكثافة بقطع الفسدق المحمص",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "17",
nameAr: "بستاشيو ابو السعود",
nameEn: "",
price: 2200,
category: "baqlawa",
image: "17.png",
desc: "مزيج من الشيكولاتة البلجيكية وعجينة الكنافة محشوة بالفستق البستاشيو نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "18",
nameAr: "بقلاوة فستق",
nameEn: "",
price: 1250,
category: "baqlawa",
image: "18.png",
desc: "حلوي شرقية عبارة عن طبقات الجلاش محشوة بالفستق الحلو نخب أول",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

// ✅ مشكل لوز
{
id: "mishkal-loz",
nameAr: "مشكل لوز",
nameEn: "",
price: 750,
category: "mshak",
image: "loz.png",
images: [
"20.png",
],
desc: "مزيج فاخر من أفضل أنواع البقلاوة باللوز الممتاز( قابل لتعديل الاصناف علي حسب زوقك)",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

{
id: "10000",
nameAr: "كنافة لوز",
nameEn: "",
price: 950 ,
category: "baqlawa",
image: "10000.png",
desc: "حلوى شرقية من خيوط الكنافة المحمّصة ومحشية لوز ",
ingredients: []
},

{
id: "20",
nameAr: "بورما لوز",
nameEn: "",
price: 900,
category: "baqlawa",
image: "20.png",
desc: "حلوى عربية مصنوعة من عجينة الكــنافة و محشوة باللوز الحلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "21",
nameAr: "عش البلبل لوز",
nameEn: "",
price: 680,
category: "baqlawa",
image: "21.png",
desc: "حلوى من الكنافة على   كل دائري محشوة باللوز الحلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "23",
nameAr: "بقلاوة اسطنبولي لوز",
nameEn: "",
price: 750,
category: "baqlawa",
image: "23.png",
desc: "حلوى تركية عبارة عن طبقات جلاش محشية لوز الحلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "24",
nameAr: "بقلاوة لوز",
nameEn: "",
price: 600,
category: "baqlawa",
image: "24.png",
desc: "حلوي شرقية عبارة عن طبقات من الجلاش محشوة باللوز الحلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "25",
nameAr: "صرة لوز",
nameEn: "",
price: 600,
category: "baqlawa",
image: "25.png",
desc: "رقائق الجلاش محشوة بين الرقائق باللوز الحلو، محشوة بعدها باللوز المبشور أيضاً",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "26",
nameAr: "كل واشكر لوز",
nameEn: "",
price: 700,
category: "baqlawa",
image: "26.png",
desc: "حلوي عربية فاخرة تصنع من عجينة الجلاش المحشوة لوز حلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "27",
nameAr: "اصابع لوز",
nameEn: "",
price: 750,
category: "baqlawa",
image: "27.png",
desc: "حلوى من رقائق الجلاش محشية باللوز الحلو، ملفوفة على شكل أصابع ومحمّرة",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

{
id: "29",
nameAr: "بقلاوة اسطنبولي جوز",
nameEn: "",
price: 850,
category: "baqlawa",
image: "29.png",
desc: "حلوى تركية عبارة  عن طبقات جلاش رفيعة ومحشية بالجوز الحلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "30",
nameAr: "عش البلبل كاجو",
nameEn: "",
price: 800,
category: "baqlawa",
image: "30.png",
desc: "تصنع من شعر الكنافة على شكل عش دائري محشوة بحبات الكاجو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "31",
nameAr: "اصابع كاجو",
nameEn: "",
price: 800,
category: "baqlawa",
image: "31.png",
desc: "حلوى من رقائق الجلاش ملفوفة على شكل أصابع ومحشية بالكاجو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "32",
nameAr: "وربات لوز",
nameEn: "",
price: 600,
category: "baqlawa",
image: "32.png",
desc: "رقائق الجلاش المحشية بعجينة اللوز الحلو",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "501",
nameAr: "وربات قشطة" ,
nameEn: "",
price: 500,
category: "konafa",
image: "501.JPG",
desc: "رقائق جلاش محشية قشطة",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "28",
nameAr: "معمول عجوة",
nameEn: "",
price: 700,
category: "baqlawa",
image: "28.png",
desc: "حلوى تقليدية معمول من عجينة السميد ومحشو بمعجون التمر العجوة، يُشكّل بالقوالب",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "280",
nameAr: "معمول جوز",
nameEn: "",
price: 900,
category: "baqlawa",
image: "280.png",
desc: "حلوى تقليدية معمول من عجينة السميد ومحشو باللوز، يُشكّل بالقوالب",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "505",
nameAr: "لوكم فسدق حلبي",
nameEn: "",
price: 1950,
category: "baqlawa",
image: "506.JPG",
desc: "لوكم طري محشو بكثافة بقطع الفسدق المحمص و الكريمة ",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},
{
id: "505b",
nameAr: "لوكم بندق ",
nameEn: "",
price: 950,
category: "baqlawa",
image: "506.JPG",
desc: " لوكم طري محشو بكثافة بقطع البندق المحمص",
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]
},

{  
id: "3000",  
nameAr: "غريبة",  
nameEn: "",  
price: 400,  
category: "baqlawa",  
image: "IMG_1.JPG",  
desc: " حلوى تقليدية مصنوعة من الدقيق والسمن والسكر، تُشكّل على هيئة كرات وتُزيّن بالفستق ",  
ingredients: ["حبوب قهوة عربية", "ماء", "رغوة حليب"]

},
{
id: "33",
nameAr: "نمورة بالزبد البلدي",
nameEn: "",
price: 360,
category: "namora",
image: "33.png",
desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي",
ingredients: ["إسبريسو", "حليب", "رغوة حليب", "قرفة"]
},
{
id: "34",
nameAr: "نمورة محشية لوز",
nameEn: "",
price: 420,
category: "namora",
image: "IMG_2.JPG",
desc: "حلوى عربية مصنوعة من السمن والسكر والزبدة الفلاحي ومحشوة باللوز الحلو",
ingredients: ["إسبريسو", "حليب", "رغوة حليب", "قرفة"]
}
];



// ========== WESTERN (غربي) — يتباع بالقطعة ==========
const westernDrinks = [
  {
    id: "w1",
    nameAr: "تورتة كاراميل",
    nameEn: "Caramel Cake",
    price: 950,
    category: "cakes",
    unit: "piece",
    image: "IMG_8981.JPG",
    desc: "كيك إسفنج أبيض - كريمة نوتيلا - كرست كريب - شري مستورد - كريمة لباني - جليز شوكولاتة",
    ingredients: []
  },
  {
    id: "w2",
    nameAr: "تورتة مانجا لارج",
    nameEn: "Large Mango Cake",
    price: 800,
    category: "cakes",
    unit: "piece",
    image: "IMG_8980.JPG",
    desc: "كيك إسفنج أبيض - كريمة لباني - فراولة مستوردة - فاكهة استوائية - شري مستورد - جليز فراولة",
    ingredients: []
  },
  {
    id: "w3",
    nameAr: "تورتة مانجا وسط",
    nameEn: "Medium Mango Cake",
    price: 800,
    category: "cakes",
    unit: "piece",
    image: "IMG_8980.JPG",
    desc: "كيك إسفنج أبيض - كريمة لباني - فراولة مستوردة - فاكهة استوائية - شري مستورد - جليز فراولة",
    ingredients: []
  },
  {
    id: "w4",
    nameAr: "تورتة أمريكان لوتس",
    nameEn: "American Lotus Cake",
    price: 900,
    category: "cakes",
    unit: "piece",
    image: "IMG_8979.JPG",
    desc: "كيك إسفنج أبيض - كريمة لباني - حشوة توت مشكل - زبدة كاكاو - جليز شوكولاتة - فاكهة استوائية",
    ingredients: []
  },
  {
    id: "w5",
    nameAr: "تورتة بيستاشيو",
    nameEn: "Pistachio Cake",
    price: 600,
    category: "cakes",
    unit: "piece",
    image: "IMG_8978.JPG",
    desc: "موس ماجيك - موس درك - موس وايت - كرست كريب - زبدة كاكاو - جليز شوكولاتة",
    ingredients: []
  },
  {
    id: "w6",
    nameAr: "تورتة بلاك فوريست ميني",
    nameEn: "Black Forest Cake Mini",
    price: 450,
    category: "cakes",
    unit: "piece",
    image: "IMG_8976.JPG",
    desc: "كيك شوكليت - موس كراميل - توفي كراميل - عين جمل - زبدة كاكاو - جليز كراميل",
    ingredients: []
  },
  {
    id: "w7",
    nameAr: "تورتة وايت فوريست ميني",
    nameEn: "White Forest Cake Mini",
    price: 450,
    category: "cakes",
    unit: "piece",
    image: "IMG_8977.JPG",
    desc: "كيك وايت - موس كراميل - توفي كراميل - عين جمل - زبدة كاكاو - جليز كراميل",
    ingredients: []
  },
  {
    id: "w8",
    nameAr: "تورتة بلاك فوريست لارج",
    nameEn: "Black Forest Cake Large",
    price: 600,
    category: "cakes",
    unit: "piece",
    image: "IMG_8976.JPG",
    desc: "كيك شوكليت - موس كراميل - توفي كراميل - عين جمل - زبدة كاكاو - جليز كراميل",
    ingredients: []
  },
  {
    id: "w9",
    nameAr: "تورتة وايت فوريست لارج",
    nameEn: "White Forest Cake Large",
    price: 600,
    category: "cakes",
    unit: "piece",
    image: "IMG_8977.JPG",
    desc: "كيك وايت - موس كراميل - توفي كراميل - عين جمل - زبدة كاكاو - جليز كراميل",
    ingredients: []
  },
  {
    id: "w10",
    nameAr: "إكلير اللوتس",
    nameEn: "Lotus Éclair",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "IMG_8822.JPG (1).jpeg",
    desc: "اكلير - كريمة باستري - زبدة لوتس - بسكويت لوتس مستورد",
    ingredients: []
  },
  {
    id: "w11",
    nameAr: "جبنة اللوتس",
    nameEn: "Cheese Lotus",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "15.JPG",
    desc: "بسكويت لوتس - زبدة مستوردة - كريمة تشيز - لوتس مستورد",
    ingredients: []
  },
  {
    id: "w12",
    nameAr: "جبنة نوتيلا",
    nameEn: "Cheese Nutella",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "16.JPG",
    desc: "بسكويت لوتس - زبدة مستوردة - كريمة تشيز - نوتيلا",
    ingredients: []
  },
  {
    id: "w13",
    nameAr: "جاتو السيجار",
    nameEn: "Cigar Gateau",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "17.JPG",
    desc: "فادج شوكليت - موس درك - توفي كراميل - جناش قهوة - زبدة الكاكاو",
    ingredients: []
  },
  {
    id: "w14",
    nameAr: "ميلفيه كلاسيك",
    nameEn: "Classic Mille-feuille",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "18.JPG",
    desc: "ميلفيه - كريمة باستري - سكر ناعم",
    ingredients: []
  },
  {
    id: "w15",
    nameAr: "جبنة شيري",
    nameEn: "Cheese Cherry",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "19.JPG",
    desc: "بسكويت لوتس - زبدة مستوردة - كريمة تشيز - شري مستورد",
    ingredients: []
  },
  {
    id: "w16",
    nameAr: "ميلفيه اللوتس",
    nameEn: "Lotus Mille-feuille",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "20.JPG",
    desc: "ميلفيه - كريمة باستري - زبدة لوتس - بسكويت لوتس",
    ingredients: []
  },
  {
    id: "w17",
    nameAr: "جاتو روشيه",
    nameEn: "Rocher Gateau",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "21.JPG",
    desc: "موس ماجيك - فادج كيك - نوتيلا - كرست كريب",
    ingredients: []
  },
  {
    id: "w18",
    nameAr: "أفريكانو",
    nameEn: "Africano",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "23.JPG",
    desc: "فادج كيك - موس درك - موس وايت - كرست كريب - زبدة كاكاو - جليز شوكليت",
    ingredients: []
  },
  {
    id: "w19",
    nameAr: "جاتو جوز الهند",
    nameEn: "Coconut Gateau",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "25.JPG",
    desc: "اسبونج وايت - حشو باونتي - باشون فروت - موس جوز هند - مانجو نعناع - شوكليت حليب سويسري",
    ingredients: []
  },
  {
    id: "w20",
    nameAr: "إكلير الفستق",
    nameEn: "Pistachio Éclair",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "14.3.JPG",
    desc: "كيك فستق - موس فستق - كرنش فستق - جليز فستق",
    ingredients: []
  },
  {
    id: "w21",
    nameAr: "تاكو الشوكولاتة",
    nameEn: "Chocolate Taco",
    price: 85,
    category: "gato",
    unit: "piece",
    image: "14.4.JPG",
    desc: "بسكويت سابليه - كريمة باستري - شوكليت - كرست كريب",
    ingredients: []
  },
  {
    id: "w22",
    nameAr: "جاتوه فستق",
    nameEn: "Pistachio Gateau",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "IMG_8975.JPG",
    desc: "كيك فستق - موس فستق - كرنش فستق - جليز فستق",
    ingredients: []
  },
  {
    id: "w23",
    nameAr: "حبة مانجا",
    nameEn: "Mango Bean",
    price: 60,
    category: "gato",
    unit: "piece",
    image: "IMG_8974.JPG",
    desc: "موس وايت - حشو مانجو طبيعي - زبدة الكاكاو - بكتين",
    ingredients: []
  },
  {
    id: "w24",
    nameAr: "حبة قهوة",
    nameEn: "Coffee Bean",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "IMG_8973.JPG",
    desc: "موس ماجيك - جناش قهوة - فادج كيك - كوفي",
    ingredients: []
  },
  {
    id: "w25",
    nameAr: "جاتوه لوتس",
    nameEn: "Lotus Gateau",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "IMG_8972.JPG",
    desc: "كيك لوتس - كريمة تشيز - زبدة لوتس - بسكويت لوتس مستورد",
    ingredients: []
  },
  {
    id: "w26",
    nameAr: "جاتوه فاكهة",
    nameEn: "Fruit Gateau",
    price: 60,
    category: "gato",
    unit: "piece",
    image: "IMG_8971.JPG",
    desc: "بسكويت سابليه - كريمة باستري - مانجو فرش",
    ingredients: []
  },
  {
    id: "w27",
    nameAr: "تاكو مانجا",
    nameEn: "Mango Taco",
    price: 70,
    category: "gato",
    unit: "piece",
    image: "IMG_8970.JPG",
    desc: "بسكويت سابليه - كريمة باستري - مانجو فرش",
    ingredients: []
  },
  {
    id: "w28",
    nameAr: "هاني كيك",
    nameEn: "Honey Cake",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "IMG_8969.JPG",
    desc: "كيك هاني - كريمة تشيز - عسل نحل",
    ingredients: []
  },
  {
    id: "w29",
    nameAr: "تارت مانجا",
    nameEn: "Mango Tart",
    price: 100,
    category: "gato",
    unit: "piece",
    image: "IMG_8968.JPG",
    desc: "موس وايت - حشو مانجو طبيعي - زبدة الكاكاو - بكتين",
    ingredients: []
  },
  {
    id: "w30",
    nameAr: "تاكو فانيليا",
    nameEn: "Vanilla Taco",
    price: 85,
    category: "gato",
    unit: "piece",
    image: "IMG_8967.JPG",
    desc: "بسكويت سابليه - كريمة باستري - نوتيلا - كرست كريب",
    ingredients: []
  },
  {
    id: "w31",
    nameAr: "جاتوه ماجيك",
    nameEn: "Magic Gateau",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "IMG_8966.JPG",
    desc: "موس جندوجيا - فادج كيك - كرست كريب - نوتيلا",
    ingredients: []
  },
  {
    id: "w32",
    nameAr: "ميلفيه نوتيلا",
    nameEn: "Nutella Mille-feuille",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "IMG_8965.JPG",
    desc: "ميلفيه - كريمة باستري - نوتيلا - كرست كريب",
    ingredients: []
  },
  {
    id: "w33",
    nameAr: "جاتوه ريد فيلفت",
    nameEn: "Red Velvet Gateau",
    price: 90,
    category: "gato",
    unit: "piece",
    image: "IMG_8964.JPG",
    desc: "كيك ريد فيلفت - كريمة تشيز - حشو شري مستورد - فاكهة استوائية",
    ingredients: []
  },
  {
    id: "w34",
    nameAr: "فيستيفال",
    nameEn: "Festival",
    price: 80,
    category: "gato",
    unit: "piece",
    image: "IMG_8913.JPG",
    desc: "بسكويت سابليه - كريمة باستري - شوكليت - كرست كريب",
    ingredients: []
  },
  {
    id: "w35",
    nameAr: "آيس كريم الفانيليا",
    nameEn: "Vanilla",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-1.jpg",
    desc: "سعادة الفانيليا النقية في كل ملعقة",
    ingredients: []
  },
  {
    id: "w36",
    nameAr: "آيس كريم الشوكولاتة",
    nameEn: "Chocolate",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-2.jpg",
    desc: "نكهة شوكولاتة داكنة غنية",
    ingredients: []
  },
  {
    id: "w37",
    nameAr: "آيس كريم الفراولة",
    nameEn: "Strawberry",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-3.jpg",
    desc: "متعة الفراولة الطازجة",
    ingredients: []
  },
  {
    id: "w38",
    nameAr: "آيس كريم الفستق",
    nameEn: "Pistachio",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-4.jpg",
    desc: "مزيج فستق كريمي فاخر",
    ingredients: []
  },
  {
    id: "w39",
    nameAr: "آيس كريم كيندر",
    nameEn: "Kinder",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-7.jpg",
    desc: "مزيج كيندر شوكولاتة كريمي",
    ingredients: []
  },
  {
    id: "w40",
    nameAr: "آيس كريم الليمون",
    nameEn: "Lemon",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-8.jpg",
    desc: "نكهة ليمون منعشة",
    ingredients: []
  },
  {
    id: "w41",
    nameAr: "آيس كريم الكوكيز",
    nameEn: "Cookies",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-9.jpg",
    desc: "كوكيز قرمشي مع كريم",
    ingredients: []
  },
  {
    id: "w42",
    nameAr: "آيس كريم نوتيلا",
    nameEn: "Nutella",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-10.jpg",
    desc: "نكهة نوتيلا اللذيذة",
    ingredients: []
  },
  {
    id: "w43",
    nameAr: "آيس كريم الشوكولاتة الداكنة",
    nameEn: "Dark Chocolate",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-11.jpg",
    desc: "متعة الشوكولاتة الداكنة الفاخرة",
    ingredients: []
  },
  {
    id: "w44",
    nameAr: "آيس كريم روشيه",
    nameEn: "Rocher",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-12.jpg",
    desc: "ويفر قرمشي مع مركز البندق",
    ingredients: []
  },
  {
    id: "w45",
    nameAr: "آيس كريم حلاوة روح",
    nameEn: "Halawa Ruh",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-13.jpg",
    desc: "حلاوة تقليدية مع الفستق والكنافة",
    ingredients: []
  },
  {
    id: "w46",
    nameAr: "آيس كريم البلح بالجوز",
    nameEn: "Date Walnut",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-15.jpg",
    desc: "بلح حلو مع جوز قرمشي",
    ingredients: []
  },
  {
    id: "w47",
    nameAr: "آيس كريم تشيز كيك",
    nameEn: "Cheesecake",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-16.jpg",
    desc: "نكهة تشيز كيك كريمية",
    ingredients: []
  },
  {
    id: "w48",
    nameAr: "آيس كريم زبادي توت",
    nameEn: "Yogurt Berry",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-17.jpg",
    desc: "زبادي مع توت مشكل",
    ingredients: []
  },
  {
    id: "w49",
    nameAr: "آيس كريم اللوتس",
    nameEn: "Lotus",
    price: 70,
    category: "icecream",
    unit: "piece",
    image: "icecream-18.jpg",
    desc: "كريم بسكويت اللوتس الناعم",
    ingredients: []
  }
];
defaultDrinks.push(...westernDrinks);

const firebaseConfig = {
  apiKey: "AIzaSyBFBnaSspqZZ32YPQOlVFxLC23Ik5LalEM",
  authDomain: "abo-alsoude.firebaseapp.com",
  projectId: "abo-alsoude",
  storageBucket: "abo-alsoude.firebasestorage.app",
  messagingSenderId: "207897769616",
  appId: "1:207897769616:web:28a481314624f92ea50a15",
  measurementId: "G-C39993QJZF"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();




let drinks = [];
//=============clicl============
let isAdmin = false;




 // ========== STATE MANAGEMENT ==========
const state = {
cart: JSON.parse(localStorage.getItem("cart")) || [],
currentFilter: "all",
selectedDrink: null,
selectedWeight: 1 // Default weight
};

// ========== DOM ELEMENTS ==========
const DOM = {
loadingScreen: document.getElementById("loading-screen"),
navbar: document.getElementById("navbar"),
drinksGrid: document.getElementById("drinks-grid"),
filterBtns: document.querySelectorAll(".filter-btn:not(.section-btn)"),
modalOverlay: document.getElementById("modal-overlay"),
cartModalOverlay: document.getElementById("cart-modal-overlay"),
cartIconWrap: document.getElementById("cart-icon-wrap"),
cartCount: document.getElementById("cart-count"),
toast: document.getElementById("toast"),
modalClose: document.getElementById("modal-close"),
cartModalClose: document.getElementById("cart-modal-close"),
orderBtn: document.getElementById("order-btn"),
cartItemsList: document.getElementById("cart-items-list"),
cartTotalPrice: document.getElementById("cart-total-price"),
checkoutWhatsapp: document.getElementById("checkout-whatsapp"),
weightModalOverlay: document.getElementById("weight-modal-overlay"),
weightModalClose: document.getElementById("weight-modal-close")
};

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", async () => {
DOM.drinksGrid.style.display = "none";
  // ✅ كود الأدمن (لوحده فوق)
  let clickCount = 0;
  let clickTimer = null;

  const adminTrigger = document.getElementById("admin-trigger");

  if (adminTrigger) {
   adminTrigger.addEventListener("click", () => {
  clickCount++;

  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 1500);

  if (clickCount === 3) {
    clickCount = 0;

    const code = prompt("ادخل كود الادمن");

    if (code === "8800") {
  isAdmin = true;
  showToast("تم تفعيل الأدمن ✓");
  openAdminPanel();
} else {
  showToast("كود غلط ❌");
}
      }
    });
  }

  // ✅ نعرض الموقع فورًا بالبيانات اللي في الكود (من غير ما نستنى Firebase)
  drinks = defaultDrinks;
  setupEventListeners();
  updateCartUI();

  // ✅ شاشة الترحيب تفضل ظاهرة 3 ثواني
  setTimeout(() => {
    const loading = document.getElementById("loading-screen");
    if (loading) loading.style.display = "none";
  }, 3000);

  // ✅ Firebase في الخلفية: بيحدّث التوفر ويرفع المنتجات الجديدة مرة واحدة
  syncWithFirebase();
});

async function syncWithFirebase() {
  try {
    const snapshot = await db.collection("products").get();
    const byId = new Map(snapshot.docs.map(doc => [doc.data().id, { firebaseId: doc.id, ...doc.data() }]));

    const missing = [];
    drinks.forEach(item => {
      const fb = byId.get(item.id);
      if (fb) {
        item.firebaseId = fb.firebaseId;
        item.available = fb.available ?? true;   // السعر يفضل من الكود
      } else {
        missing.push(item);
      }
    });

    // المنتجات اللي مش في Firebase تترفع دفعة واحدة (batch) بدل واحد واحد
    if (missing.length) {
      const batch = db.batch();
      missing.forEach(item => {
        const ref = db.collection("products").doc();
        batch.set(ref, { ...item, available: true });
        item.firebaseId = ref.id;
        item.available = true;
      });
      await batch.commit();
    }

    // نحدّث العرض لو المستخدم فاتح قسم دلوقتي
    if (!["all", "baqlawa"].includes(state.currentFilter)) renderDrinks();
  } catch (error) {
    console.error("🔥 Firebase مش شغال:", error);
  }
}
// 👇 كود الأدمن
// 👇 كود الأدمن
// 👇 كود الأدمن هنا


// ========== LOADING SCREEN ==========
function hideLoadingScreen() {
setTimeout(() => {
DOM.loadingScreen.classList.add("fade-out");
setTimeout(() => {
DOM.loadingScreen.style.display = "none";
}, 800);
}, 2000);
}

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
DOM.navbar.classList.add("scrolled");
} else {
DOM.navbar.classList.remove("scrolled");
}
});

// ========== CHECK IF ITEM IS PLATE ==========
// ========== تصغير الصور تلقائيًا (من غير ما تلمس الملفات) ==========
// على الموقع الحقيقي الصورة بتعدي على خدمة wsrv.nl اللي بتصغّرها وتحوّلها WebP قبل ما توصل.
// على الجهاز المحلي أو لو الخدمة وقفت، بترجع للصورة الأصلية.
function imgUrl(path, width = 600) {
  if (!path) return "logo.png";
  const isLocal = location.protocol === "file:" || ["localhost", "127.0.0.1", ""].includes(location.hostname);
  if (isLocal) return path;
  const abs = new URL(path, location.href).href;
  return `https://wsrv.nl/?url=${encodeURIComponent(abs)}&w=${width}&q=70&output=webp`;
}

function isPlateItem(drink) {
return drink.unit === "piece" || drink.nameAr.includes("صحن");
}

// ========== FILTER FUNCTIONALITY ==========



const baqlawaTypes = [
  { 
    id: 'fustuk', 
    name: 'بقلاوة فستق', 
    keys: ['فسدق', 'بستاشيو', 'بلوريا', 'صره', 'اسيا', 'كل واشكر فستق', 'دولمة', 'اساور', 'سنيورة', 'مشكل حلبي'] 
  },

  { 
    id: 'loz', 
    name: 'بقلاوة لوز', 
    keys: [
      'مشكل لوز',
      'لوكم بندق',
      'اصابع كاجو',
      'بقلاوة اسطنبولي جوز',
      'كنافة لوز',
      'بورمة لوز',
      'عش البلبل لوز',
      'بقلاوة اسطنبولي لوز',
      'بقلاوة لوز',
      'صرة لوز',
      'كل وشكر لوز',
      'اصابع لوز',
      'عش البلبل كاجو',
      'وربات لوز',
      'لوكم بندق',
      'مشكل لوز',
      'مشكل حلبي مع لوز'
    ] 
  },

  { 
    id: 'mix', 
    name: 'أصناف متنوعة', 
    keys: ['عجوة', 'معمول جوز', 'غريبة'] 
  }
];

// ========== MAIN SECTIONS (شرقي / غربي) ==========
function showSection(section) {
  document.querySelectorAll(".section-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.section === section));

  document.getElementById("east-filters").style.display = section === "east" ? "flex" : "none";
  document.getElementById("west-filters").style.display = section === "west" ? "flex" : "none";

  // نرجّع الصفحة لحالة "اختر قسم"
  state.currentFilter = "all";
  document.querySelectorAll(".filter-btn:not(.section-btn)").forEach(b => b.classList.remove("active"));
  document.getElementById("sub-filters-container").style.display = "none";
  DOM.drinksGrid.style.display = "none";
  DOM.drinksGrid.innerHTML = "";
}

function filterDrinks(category) {
  state.currentFilter = category;
  const subContainer = document.getElementById("sub-filters-container");

  // 👇 نظهر الكروت أول ما المستخدم يضغط
  DOM.drinksGrid.style.display = "grid";

  DOM.filterBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });

  if (category === "baqlawa") {
    subContainer.style.display = "flex";
    subContainer.innerHTML = baqlawaTypes.map(type => `
      <button class="filter-btn sub-btn" onclick="filterSubCategory('${type.id}')"
        style="background: #1a1a1a; border: 1px solid #d4af37; font-size: 0.9rem; padding: 5px 15px;">
        ${type.name}
      </button>
    `).join("");

    DOM.drinksGrid.innerHTML = `
      <p style="color:#aaa; width:100%; text-align:center;">
        اختر نوع البقلاوة المفضل لديك
      </p>
    `;

  } else {
    subContainer.style.display = "none";
    renderDrinks();
  }
}

function filterSubCategory(subId) {
  const typeData = baqlawaTypes.find(t => t.id === subId);

  const filtered = drinks.filter(d =>
    d.category === "baqlawa" &&
    typeData.keys.some(key => d.nameAr.includes(key))
  );

  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.style.background = (btn.innerText === typeData.name) ? "#d4af37" : "#1a1a1a";
    btn.style.color = (btn.innerText === typeData.name) ? "#000" : "#fff";
  });

  displayFilteredDrinks(filtered);
}

function displayFilteredDrinks(data) {
  DOM.drinksGrid.innerHTML = "";

  if (data.length === 0) {
    DOM.drinksGrid.innerHTML = `
      <p style="color:#aaa; width:100%; text-align:center;">قريباً...</p>
    `;
    return;
  }

  data.forEach((drink, index) => {
    const card = createDrinkCard(drink);
    DOM.drinksGrid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), index * 50);
  });
}

// ========== RENDER DRINKS ==========
// دالة لعرض المنتجات من Firebase
function renderDrinks() {
  const filtered = state.currentFilter === "all"
    ? drinks
    : drinks.filter(d => d.category === state.currentFilter);

  DOM.drinksGrid.innerHTML = "";

  filtered.forEach((drink, index) => {
    const card = createDrinkCard(drink);
    DOM.drinksGrid.appendChild(card);

    setTimeout(() => {
      card.classList.add("visible");
    }, index * 50);
  });
}

 

async function uploadDefaultProducts() {
  const snapshot = await db.collection("products").get();

  if (!snapshot.empty) return; // لو فيه بيانات بلاش

  for (let drink of defaultDrinks) {
    await db.collection("products").add({
      ...drink,
      available: true // تأكد من إضافة هذا المفتاح لكل منتج
    });
  }

  console.log("تم رفع المنتجات لأول مرة ✅");
}

// ========== CREATE CARD ==========
function createDrinkCard(drink) {
  const card = document.createElement("div");
 if (drink.available === false && !isAdmin) {
  card.style.opacity = "0.5";
}
  card.className = "drink-card";

  const qty = state.cart
    .filter(item => item.id === drink.id)
    .reduce((sum, item) => sum + item.quantity, 0);

  const hasMultipleImages = drink.images && drink.images.length > 1;

  card.innerHTML = `
  <div class="card-img-wrap">

    ${hasMultipleImages ? `
      <div class="card-img-scroll">
        ${drink.images.map(img => `
          <img src="${imgUrl(img)}" data-orig="${img}" onerror="this.onerror=null;this.src=this.dataset.orig" class="card-img-slide" loading="lazy" decoding="async" />
        `).join('')}
      </div>

      <div class="card-dots">
        ${drink.images.map((_, i) => `
          <span class="dot ${i === 0 ? 'active' : ''}"></span>
        `).join('')}
      </div>
    ` : `
      <img src="${imgUrl(drink.image)}" data-orig="${drink.image || 'logo.png'}" onerror="this.onerror=null;this.src=this.dataset.orig" class="card-img-slide" loading="lazy" decoding="async" />
    `}

    <div class="card-overlay"></div>

    ${qty > 0 ? `<div class="card-qty-badge">${qty}</div>` : ''}

  </div>

  <div class="card-body" style="padding: 12px;">

    <div style="text-align: right;">
      <div style="font-weight: bold; color: #fff; font-size: 1.1rem;">
        ${drink.nameAr}
      </div>

      <div style="color: #aaa; font-size: 0.85rem; margin-top: 5px;">
        ${drink.desc || ''}
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
      
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:5px;">
  
  <div style="color: #d4af37;">
    <strong>${drink.price}</strong> ج.م
  </div>

  ${isAdmin ? `
    <button onclick="toggleAvailability('${drink.id}')"
    style="
      background: #444;
      color: white;
      border: none;
      padding: 4px 10px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 12px;
    ">
      ${drink.available === false ? 'اظهار' : 'اخفاء'}
    </button>
  ` : ''}

</div>

     
<button
  ${drink.available === false ? 'disabled' : ''}
  onclick="handleQuickAdd(event, '${drink.id}')"
  style="
    background: ${drink.available === false ? '#555' : '#d4af37'};
    color: ${drink.available === false ? '#aaa' : '#000'};
    border: none;
    padding: 6px 15px;
    border-radius: 6px;
    cursor: ${drink.available === false ? 'not-allowed' : 'pointer'};
  "
>
  ${drink.available === false ? '❌ غير متوفر' : (qty > 0 ? '➕ المزيد' : '🛍 اضف للسلة')}
</button>


    </div>

  </div>
  `;

  return card;
}

// ========== WEIGHT MODAL ==========
function openWeightModal(drink) {
state.selectedDrink = drink;
state.selectedWeight = 1; // Reset to default

const weightModalOverlay = document.getElementById("weight-modal-overlay");
const weightButtons = document.querySelectorAll(".weight-btn");

// إخفاء خيار "كيلو وربع" لأي صنف من أصناف الكنافة
const kiloRobaBtn = document.querySelector('.weight-btn[data-multiplier="1.25"]');
if (kiloRobaBtn) {
kiloRobaBtn.style.display = (drink.category === "konafa") ? "none" : "block";
}

// Reset button styles
weightButtons.forEach(btn => {
btn.style.background = "#444";
btn.style.color = "white";
});

// Set first button as selected
weightButtons.forEach(btn => {
  if (parseFloat(btn.dataset.multiplier) === 1) {
    btn.style.background = "#d4af37";
    btn.style.color = "#000";
  }
});
weightButtons[0].style.color = "#000";

weightModalOverlay.classList.remove("hidden");
weightModalOverlay.classList.add("open");

// Update price display
updateWeightPrice(drink, 1);
}

function closeWeightModal() {
const weightModalOverlay = document.getElementById("weight-modal-overlay");
weightModalOverlay.classList.remove("open");
weightModalOverlay.classList.add("closing");

setTimeout(() => {
weightModalOverlay.classList.add("hidden");
weightModalOverlay.classList.remove("closing");
}, 300);
}

function updateWeightPrice(drink, multiplier) {
const priceDisplay = document.getElementById("weight-price");
const newPrice = Math.round(drink.price * multiplier);
priceDisplay.textContent = newPrice;

// Update button styles
const weightButtons = document.querySelectorAll(".weight-btn");
weightButtons.forEach(btn => {
if (parseFloat(btn.dataset.multiplier) === multiplier) {
btn.style.background = "#d4af37";
btn.style.color = "#000";
} else {
btn.style.background = "#444";
btn.style.color = "white";
}
});
}

function selectWeight(multiplier) {
state.selectedWeight = multiplier;
if (state.selectedDrink) {
updateWeightPrice(state.selectedDrink, multiplier);
}
}

// ========== HANDLE QUICK ADD ==========
function handleQuickAdd(event, drinkId) {
event.stopPropagation();
const drink = drinks.find(d => d.id === drinkId);

if (drink) {
if (isPlateItem(drink)) {
// Plates: Add directly without weight selection
addToCartSimple(drink);
} else {
// Non-plates: Show weight selection
openWeightModal(drink);
}
}
}

function addToCartWithWeight() {
if (!state.selectedDrink) return;

const drink = state.selectedDrink;
const weight = state.selectedWeight;
const finalPrice = Math.round(drink.price * weight);

const uniqueId = drink.id + "_" + weight;

const existingItem = state.cart.find(item => item.uniqueId === uniqueId);

if (existingItem) {
existingItem.quantity += 1;
} else {
state.cart.push({
uniqueId: uniqueId,
id: drink.id,
nameAr: drink.nameAr,
price: finalPrice,
quantity: 1,
image: drink.image,
weight: weight,
originalPrice: drink.price
});
}

saveCart();
updateCartUI();

const weightLabel = getWeightLabel(weight);
showToast(`تم إضافة ${drink.nameAr} (${weightLabel}) ✓`);

closeWeightModal();

}

// ========== MODAL MANAGEMENT ==========
function openModal(drink) {
state.selectedDrink = drink;

const modalImg = document.getElementById("modal-img");
modalImg.onerror = () => { modalImg.onerror = null; modalImg.src = drink.image; };
modalImg.src = imgUrl(drink.image, 900);
document.getElementById("modal-name-ar").textContent = drink.nameAr;
document.getElementById("modal-name-en").textContent = drink.nameEn;
document.getElementById("modal-price").textContent = drink.price;
document.getElementById("modal-desc").textContent = drink.desc;

const ingList = document.getElementById("modal-ing-list");
ingList.innerHTML = drink.ingredients.map(ing => `<li>${ing}</li>`).join("");

DOM.modalOverlay.classList.remove("hidden");
DOM.modalOverlay.classList.add("open");
}

function closeModal() {
DOM.modalOverlay.classList.remove("open");
DOM.modalOverlay.classList.add("closing");

setTimeout(() => {
DOM.modalOverlay.classList.add("hidden");
DOM.modalOverlay.classList.remove("closing");
}, 300);
}

// ========== CART MANAGEMENT ==========
function addToCartSimple(drink) {
const uniqueId = drink.id + "_plate";

const existingItem = state.cart.find(item => item.uniqueId === uniqueId);

if (existingItem) {
existingItem.quantity += 1;
} else {
state.cart.push({
uniqueId: uniqueId,
id: drink.id,
nameAr: drink.nameAr,
price: drink.price,
quantity: 1,
image: drink.image,
weight: 1
});
}

saveCart();
updateCartUI();
showToast(`تم إضافة ${drink.nameAr} ✓`);

}

function removeFromCart(uniqueId) {
state.cart = state.cart.filter(item => item.uniqueId !== uniqueId);
saveCart();
updateCartUI();
renderCartItems();
}

function updateCartQuantity(uniqueId, quantity) {
const item = state.cart.find(item => item.uniqueId === uniqueId);

if (item) {
if (quantity <= 0) {
removeFromCart(uniqueId);
} else {
item.quantity = quantity;
saveCart();
updateCartUI();
renderCartItems();
}
}
}

function saveCart() {
localStorage.setItem("cart", JSON.stringify(state.cart));
}

function updateCartUI() {
const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
DOM.cartCount.textContent = totalItems;

const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
DOM.cartTotalPrice.textContent = totalPrice;
}

function openCartModal() {
if (state.cart.length === 0) {
showToast("السلة فارغة");
return;
}

renderCartItems();
DOM.cartModalOverlay.classList.remove("hidden");
DOM.cartModalOverlay.classList.add("open");
}

function closeCartModal() {
DOM.cartModalOverlay.classList.remove("open");
DOM.cartModalOverlay.classList.add("closing");

setTimeout(() => {
DOM.cartModalOverlay.classList.add("hidden");
DOM.cartModalOverlay.classList.remove("closing");
}, 300);
}

function getWeightLabel(weight) {
if (!weight) return ""; // 🔥 الحل هنا

switch(weight) {
case 1: return "كيلو";
case 0.5: return "نصف كيلو";
case 0.25: return "ربع كيلو";
case 1.25: return "كيلو وربع";
case 1.5: return "كيلو ونص";
default: return weight + " كيلو";
}
}

function renderCartItems() {
if (state.cart.length === 0) {
DOM.cartItemsList.innerHTML = "<p style='text-align:center; color: #aaa; padding: 2rem;'>لا توجد عناصر في السلة</p>";
return;
}

let itemsHtml = state.cart.map(item => {

const drinkData = drinks.find(d => d.id === item.id);

const isPlate = drinkData ? isPlateItem(drinkData) : false;
const weightLabel = getWeightLabel(item.weight);
return `

  <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center;">  <div class="cart-item-info" style="flex: 1; text-align: right;">  
    
  <div class="cart-item-name" style="font-weight: bold; color: white;">  
    ${item.nameAr}  
  </div>  

  ${!isPlate ? `  
    <div style="color: #aaa; font-size: 0.85rem;">  
      ${weightLabel}  
    </div>  
  ` : ''}  

  <div style="color: #d4af37; font-size: 0.9rem;">  
    ${item.price * item.quantity} ج.م  
  </div>  

</div>  
  <div class="cart-qty-control" style="display: flex; align-items: center; gap: 10px; margin: 0 15px;">  
    <button class="qty-btn" onclick="updateCartQuantity('${item.uniqueId}', ${item.quantity - 1})" style="background:#444; border:none; color:white; width:25px; height:25px; border-radius:4px; cursor:pointer;">−</button>  
    <div class="qty-display" style="color: white;">${item.quantity}</div>  
    <button class="qty-btn" onclick="updateCartQuantity('${item.uniqueId}', ${item.quantity + 1})" style="background:#444; border:none; color:white; width:25px; height:25px; border-radius:4px; cursor:pointer;">+</button>  
  </div>  
  <button class="cart-item-remove" onclick="removeFromCart('${item.uniqueId}')" style="background:transparent; border:none; color:#ff4444; cursor:pointer; font-size: 1.2rem;">✕</button>  
</div>

`;
}).join("");

const formHtml = `
<div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px; direction: rtl; text-align: right;" id="customer-form">

  <input 
    id="cust-name" 
    type="text" 
    placeholder="الاسم"
    style="padding:10px; border-radius:6px; border:none; background:#222; color:#fff;"
  />

  <input 
    id="cust-phone" 
    type="tel" 
    placeholder="رقم الهاتف"
    style="padding:10px; border-radius:6px; border:none; background:#222; color:#fff;"
  />

  <input 
    id="cust-address" 
    type="text" 
    placeholder=" العنوان ( مدينة نصر و مصر الجديدة فقط)"
    style="padding:10px; border-radius:6px; border:none; background:#222; color:#fff;"
  />

  <textarea 
    id="cust-notes" 
    placeholder="ملاحظات (اختياري)"
    style="padding:10px; border-radius:6px; border:none; background:#222; color:#fff;"
  ></textarea>

</div>
`;

DOM.cartItemsList.innerHTML = itemsHtml + formHtml;
}

// ========== WHATSAPP CHECKOUT ==========
function sendToWhatsapp() {
if (state.cart.length === 0) {
showToast("السلة فارغة");
return;
}

const name = document.getElementById('cust-name').value.trim();
const phone = document.getElementById('cust-phone').value.trim();
const address = document.getElementById('cust-address').value.trim();
const notes = document.getElementById('cust-notes').value.trim();

if (!name || !phone || !address) {
showToast("⚠️ يرجى إكمال بيانات التوصيل");
document.getElementById('customer-form').scrollIntoView({ behavior: 'smooth' });
return;
}

const cartSummary = state.cart.map(item => {
const drinkData = drinks.find(d => d.id === item.id);
const isPlate = drinkData ? isPlateItem(drinkData) : false;

const weightLabel = getWeightLabel(item.weight);

const weight = (!isPlate && weightLabel) ? `(${weightLabel})` : "";

return `• ${item.nameAr}${weight} [الكمية: ${item.quantity}]`;
}).join('\n');

const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

const message = `
طلب جديد من حلويات أبو السعود 🍰

البيانات الشخصية:
👤 الاسم: ${name}
📞 الهاتف: ${phone}
📍 العنوان: ${address}
${notes ? `📝 ملاحظات: ${notes}` : ''}

الطلبات:
${cartSummary}

ــــــــــــــــــــــــــــــــــــــــــــــــــ
💰 الإجمالي: ${totalPrice} ج.م
ــــــــــــــــــــــــــــــــــــــــــــــــــ
`.trim();

const whatsappURL = `https://wa.me/201070100122?text=${encodeURIComponent(message)}`;
window.open(whatsappURL, "_blank");

state.cart = [];
saveCart();
updateCartUI();
closeCartModal();
showToast("تم إرسال الطلب بنجاح ✓");
}

// ========== TOAST NOTIFICATIONS ==========













  

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
document.querySelectorAll(".section-btn").forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.section));
});
DOM.filterBtns.forEach(btn => {
btn.addEventListener("click", () => filterDrinks(btn.dataset.filter));
});

DOM.modalClose.addEventListener("click", closeModal);
DOM.modalOverlay.addEventListener("click", (e) => {
if (e.target === DOM.modalOverlay) closeModal();
});

DOM.orderBtn.addEventListener("click", () => {
if (state.selectedDrink) {
if (isPlateItem(state.selectedDrink)) {
addToCartSimple(state.selectedDrink);
} else {
closeModal();
openWeightModal(state.selectedDrink);
}
}
});

// Weight modal close buttons
const weightModalClose = document.getElementById("weight-modal-close");
if (weightModalClose) {
weightModalClose.addEventListener("click", closeWeightModal);
}

const weightModalOverlay = document.getElementById("weight-modal-overlay");
if (weightModalOverlay) {
weightModalOverlay.addEventListener("click", (e) => {
if (e.target === weightModalOverlay) closeWeightModal();
});
}

// Weight selection buttons
const weightBtns = document.querySelectorAll(".weight-btn");
weightBtns.forEach(btn => {
btn.addEventListener("click", () => {
const multiplier = parseFloat(btn.dataset.multiplier);
selectWeight(multiplier);
});
});

DOM.cartModalClose.addEventListener("click", closeCartModal);
DOM.cartModalOverlay.addEventListener("click", (e) => {
if (e.target === DOM.cartModalOverlay) closeCartModal();
});

DOM.checkoutWhatsapp.addEventListener("click", sendToWhatsapp);
DOM.cartIconWrap.addEventListener("click", openCartModal);

document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
closeModal();
closeCartModal();
closeWeightModal();
}
});
}

// Add function to confirm weight selection
function confirmWeightSelection() {
addToCartWithWeight();
}




// دالة لتغيير التوفر (إخفاء أو إظهار)
function toggleAvailability(id) {
  const product = drinks.find(d => d.id === id);

  if (!product || !product.firebaseId) {
    showToast("خطأ في المنتج ❌");
    return;
  }

  product.available = !product.available;

  db.collection("products").doc(product.firebaseId).update({
    available: product.available
  })
  .then(() => {
    showToast("تم التحديث ✅");
    
    renderAdminPanel();
  })
  .catch((error) => {
    console.error(error);
    showToast("حصل خطأ ❌");
  });
}





function renderAdminPanel() {
  const container = document.getElementById("admin-products");

  container.innerHTML = drinks.map(drink => `
    <div style="border-bottom:1px solid #444; padding:10px 0; text-align:right;">
      
      <div>${drink.nameAr}</div>

      <button onclick="toggleAvailability('${drink.id}')"
      style="margin-top:5px; padding:5px 10px; cursor:pointer;">
        ${drink.available === false ? '❌ غير متوفر' : '✅ متوفر'}
      </button>

    </div>
  `).join("");
}


function openAdminPanel() {
  document.getElementById("admin-panel").style.right = "0";
  renderAdminPanel();
}

function closeAdminPanel() {
  document.getElementById("admin-panel").style.right = "-100%";
}





function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#d4af37";
    toast.style.color = "#000";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "10px";
    toast.style.fontSize = "14px";
    toast.style.zIndex = "99999";
    toast.style.opacity = "0";
    toast.style.transition = "0.3s";

    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}
