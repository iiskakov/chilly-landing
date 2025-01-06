import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import VimeoModal from "../../components/VideoModal"; // Import the modal component

const imageData = 
[
  {
    "id": 1,
    "url": "https://i.vimeocdn.com/video/1934543280-7a74a0efdc87c9a1f2fea4f65660e5439df98a128c2615ea8827672687bc8f91-d_640x360?r=pad",
    "title": "Honor X9b commercial",
    "client": "",
    "director": "",
    "videoId": "900596487",
    "category": "Commercial"
  },
  {
    "id": 2,
    "url": "https://i.vimeocdn.com/video/1694306813-e3c02ef34088a45eba7f3ac1812c78480b08970c6175fcf23db3d23fca467f07-d_640x360?r=pad",
    "title": "BI Group-Живите счастьем!",
    "client": "",
    "director": "",
    "videoId": "842955078",
    "category": "Commercial"
  },
  {
    "id": 3,
    "url": "https://i.vimeocdn.com/video/1949034327-5a8ec3ba58cec67740546b27cc389e7a7f359deecf0e7b79c70cc00d3faf7133-d_640x360?r=pad",
    "title": "Halyk Travel commercial",
    "client": "",
    "director": "",
    "videoId": "1028819098",
    "category": "Commercial"
  },
  {
    "id": 4,
    "url": "https://i.vimeocdn.com/video/1949033461-22352eea052691bd740e83fcdbf8d10d324561fc48d9ac91fc6de942afb2b1e2-d_640x360?r=pad",
    "title": "Yandex Eda // Galery of tastes presentation",
    "client": "",
    "director": "",
    "videoId": "1028817451",
    "category": "Commercial"
  },
  {
    "id": 5,
    "url": "https://i.vimeocdn.com/video/1932321909-905ba5d4a3b54000f9116cd9b6877a6cb83bcf8e75878630ffe91624eab8b4d3-d_640x360?r=pad",
    "title": "Lay's (Belarus) Духмяныя дранiкi commercial",
    "client": "",
    "director": "",
    "videoId": "1014246317",
    "category": "Commercial"
  },
  {
    "id": 6,
    "url": "https://i.vimeocdn.com/video/1932346424-46c413c112e23e13b9f19f02b810a5dca9383db30924a9009f53900f221da6cc-d_640x360?r=pad",
    "title": "Samsung Наурыз commercial",
    "client": "",
    "director": "",
    "videoId": "1014271377",
    "category": "Commercial"
  },
  {
    "id": 7,
    "url": "https://i.vimeocdn.com/video/1932343971-fccdbafb7494e47c0e91b18a343496a1f753c473ce66e6432f1165e8121e1271-d_640x360?r=pad",
    "title": "Old Spice - Гель для душа Commercial",
    "client": "",
    "director": "",
    "videoId": "1014269574",
    "category": "Commercial"
  },
  {
    "id": 8,
    "url": "https://i.vimeocdn.com/video/1694294279-9e27661a4035c2f3e52fd7c99d6cf8b8abe173b494cd60aa90012dde09f4857e-d_640x360?r=pad",
    "title": "Big Bon - Mr. How To Cook (Ramen)",
    "client": "",
    "director": "",
    "videoId": "842946019",
    "category": "Commercial"
  },
  {
    "id": 9,
    "url": "https://i.vimeocdn.com/video/1932354716-b0f635739d311891af2f41a6d827d80d556325c86ab3bf82504698dc036e8d3b-d_640x360?r=pad",
    "title": "Nutella B-ready Armenia",
    "client": "",
    "director": "",
    "videoId": "1012358297",
    "category": "Commercial"
  },
  {
    "id": 10,
    "url": "https://i.vimeocdn.com/video/1694279389-4c46bbbcb28b2bedf5447f1c3447fd7aed27f404498c08c6c22dcbd4494152c1-d_640x360?r=pad",
    "title": "Цесна - Выпечка с начинкой",
    "client": "",
    "director": "",
    "videoId": "842933983",
    "category": "Commercial"
  },
  {
    "id": 11,
    "url": "https://i.vimeocdn.com/video/1934543455-6ab27e4f188e28040e4c38205733cbb32825f35dd47f42a0236a8bfc4363835a-d_640x360?r=pad",
    "title": "Aviata Commercial",
    "client": "",
    "director": "",
    "videoId": "850143754",
    "category": "Commercial"
  },
  {
    "id": 12,
    "url": "https://i.vimeocdn.com/video/1779022199-bdb144438df5b1afa36e16f366f46ddcfe2a5ddf091ec2960cf5aeb90e46ac34-d_640x360?r=pad",
    "title": "Honor X7b commercial",
    "client": "",
    "director": "",
    "videoId": "900598411",
    "category": "Commercial"
  },
  {
    "id": 13,
    "url": "https://i.vimeocdn.com/video/1779027025-9399b23a11ff99747861318b17fc862ed789beac69226cc80c026cb3d48432a0-d_640x360?r=pad",
    "title": "Magnum Clix commercial",
    "client": "",
    "director": "",
    "videoId": "900600730",
    "category": "Commercial"
  },
  {
    "id": 14,
    "url": "https://i.vimeocdn.com/video/1930660545-e7e9f4fb69c2ea2349ef7754d2dd393c5bd1e4c2e1b594c95016ab2097a5237d-d_640x360?r=pad",
    "title": "NBRK NEW TENGE",
    "client": "",
    "director": "",
    "videoId": "1012783916",
    "category": "Commercial"
  },
  {
    "id": 15,
    "url": "https://i.vimeocdn.com/video/1932345988-7f77fb29467610171f01ae5301c25aa57f88ca120f4f0e19be673fa99a0586e4-d_640x360?r=pad",
    "title": "Old Spice - Айдахар клип",
    "client": "",
    "director": "",
    "videoId": "1014269628",
    "category": "Commercial"
  },
  {
    "id": 16,
    "url": "https://i.vimeocdn.com/video/1932323343-b47c365dd39a6afd611e2eb94121d3c96e3d50176a53b00f1c662b56248e7bf4-d_640x360?r=pad",
    "title": "Olimpbet Evro 2024 commercial",
    "client": "",
    "director": "",
    "videoId": "1014248718",
    "category": "Commercial"
  },
  {
    "id": 17,
    "url": "https://i.vimeocdn.com/video/1694297891-4df09be048d7a4625f129e11b95bfc1fb1f2be9a91abc4f3a8fa013751a38141-d_640x360?r=pad",
    "title": "Big Bon - Mr. How To Cook (Wok)",
    "client": "",
    "director": "",
    "videoId": "842948638",
    "category": "Commercial"
  },
  {
    "id": 18,
    "url": "https://i.vimeocdn.com/video/1932353126-c6214ec1cd2f4d6ec36fd84a3991115107d1835ef584cc0852375fb9757f554d-d_640x360?r=pad",
    "title": "Kotex Гордись быть собой Social ad",
    "client": "",
    "director": "",
    "videoId": "1014277101",
    "category": "Commercial"
  },
  {
    "id": 19,
    "url": "https://i.vimeocdn.com/video/1932334507-c60df5da63ae9c348a57519ec469f8d9e5993fe25706351f09bd7d61a0cc197e-d_640x360?r=pad",
    "title": "Honor Magic V2 Space commercial",
    "client": "",
    "director": "",
    "videoId": "1014257918",
    "category": "Commercial"
  },
  {
    "id": 20,
    "url": "https://i.vimeocdn.com/video/1930619934-7bd228f8d3d10374e5c1ac8b22d07bf66751d95403ca44664f5dd83a0d4ab6d1-d_640x360?r=pad",
    "title": "Bereke Bank Bussines commercial",
    "client": "",
    "director": "",
    "videoId": "1012771865",
    "category": "Commercial"
  },
  {
    "id": 21,
    "url": "https://i.vimeocdn.com/video/1932343670-ba69697526010bce01dc666668ce3d95def09900739d07539f6e588e8d931283-d_640x360?r=pad",
    "title": "ИК - 30 не аут клип",
    "client": "",
    "director": "",
    "videoId": "1014260805",
    "category": "Commercial"
  },
  {
    "id": 22,
    "url": "https://i.vimeocdn.com/video/1949038896-2af0b6c8f39141c0a3288b5c96e2630db4ca1e8074f25b8db00bc95fc86495dd-d_640x360?r=pad",
    "title": "Lactel Живой йогурт commercial",
    "client": "",
    "director": "",
    "videoId": "1028822751",
    "category": "Commercial"
  },
  {
    "id": 23,
    "url": "https://i.vimeocdn.com/video/1694288724-171cfa614a1e5bcd0529363a48911750817b9ecc9e55216c736b49add09aa9bd-d_640x360?r=pad",
    "title": "Big Bon - Вкуснее, чем ждать доставку!",
    "client": "",
    "director": "",
    "videoId": "842941345",
    "category": "Commercial"
  },
  {
    "id": 24,
    "url": "https://i.vimeocdn.com/video/1932334508-fa1bb7b10132ad2e08e8d66ed4370a00ecf623dc291eb2fb08280069fc844574-d_640x360?r=pad",
    "title": "ИК - Пацан клип",
    "client": "",
    "director": "",
    "videoId": "1014259035",
    "category": "Commercial"
  },
  {
    "id": 25,
    "url": "https://i.vimeocdn.com/video/1694281992-02c2d199b538cb55e8add22d48f7ad0781f18072ae28b26c4445df048593631a-d_640x360?r=pad",
    "title": "Цесна - Сладкая выпечка",
    "client": "",
    "director": "",
    "videoId": "842935181",
    "category": "Commercial"
  },
  {
    "id": 26,
    "url": "https://i.vimeocdn.com/video/1932046944-535dd6bfb2945e5b72b1d48f2fc0404da312301d359ba4d7a1a4cac59107493d-d_640x360?r=pad",
    "title": "Alex Saryagash. Настоящий с дельфином Commercial",
    "client": "",
    "director": "",
    "videoId": "1013974572",
    "category": "Commercial"
  },
  {
    "id": 27,
    "url": "https://i.vimeocdn.com/video/1932046027-28204507fa48c075c9e8f6a225c4bdce8ae39dd50018630e74ea35b58437fe04-d_640x360?r=pad",
    "title": "Big Bob (Ukraine) commercial",
    "client": "",
    "director": "",
    "videoId": "1013973578",
    "category": "Commercial"
  },
  {
    "id": 28,
    "url": "https://i.vimeocdn.com/video/1662523130-b00ac9582ea2acaae316f4f6020b275406bae7c6cd1e373a58168bfdc0bb1777-d_640x360?r=pad",
    "title": "Aitube - Смотри, снимай",
    "client": "",
    "director": "",
    "videoId": "821991004",
    "category": "Commercial"
  },
  {
    "id": 29,
    "url": "https://i.vimeocdn.com/video/1930119631-258016ca1c58eb680d6ccbac17cc65d8edb1cb3e3a0ec35b2c35b1afcf7ccb44-d_640x360?r=pad",
    "title": "ForteBank Oi Boi Kid commercial",
    "client": "",
    "director": "",
    "videoId": "1012364559",
    "category": "Commercial"
  },
  {
    "id": 30,
    "url": "https://i.vimeocdn.com/video/1932354369-3496354cbb34978c3a197312244ae033ff24ad997cb36bc4f57b31c5057c8acf-d_640x360?r=pad",
    "title": "Nutella b-ready commercial KZ",
    "client": "",
    "director": "",
    "videoId": "1012356973",
    "category": "Commercial"
  },
  {
    "id": 31,
    "url": "https://i.vimeocdn.com/video/1930113061-1a69b588940a74cf613e8ffd3090c55ceb92125f62f952b518145232472efdc7-d_640x360?r=pad",
    "title": "NISEGEL commercial",
    "client": "",
    "director": "",
    "videoId": "1012360296",
    "category": "Commercial"
  },
  {
    "id": 32,
    "url": "https://i.vimeocdn.com/video/1949037070-4484a3739ce5c5fc87970d29a1839799c7aac6cdccf713415e6e0dc0a2967b5f-d_640x360?r=pad",
    "title": "Normobakt commercial",
    "client": "",
    "director": "",
    "videoId": "1028821155",
    "category": "Commercial"
  },
  {
    "id": 33,
    "url": "https://i.vimeocdn.com/video/811517331-add104ed2887a483946b7e4684ffde808ec472963a16a062ae460bdc477096a4-d_640x360?r=pad",
    "title": "Каспи имиджевый ролик 3",
    "client": "",
    "director": "",
    "videoId": "358008202",
    "category": "Commercial"
  },
  {
    "id": 34,
    "url": "https://i.vimeocdn.com/video/781529560-dbff895bf137e9d593b169171a7ffc9c16ba5566c5db2d2f2896bc42d653679c-d_640x360?r=pad",
    "title": "Tunetank commercial. Change reality",
    "client": "",
    "director": "",
    "videoId": "335055882",
    "category": "Post"
  },
  {
    "id": 35,
    "url": "https://i.vimeocdn.com/video/789861019-c3b494ca75f473a229f27f64055877ba402fd70eeb31c832de17dea353260a8c-d_640x360?r=pad",
    "title": "Beeline - Home Internet",
    "client": "",
    "director": "",
    "videoId": "341289501",
    "category": "Post"
  },
  {
    "id": 36,
    "url": "https://i.vimeocdn.com/video/789854906-d892fd5b5368bc1d0f89ee9610972a9be2b7e8e30c43d1d2e9df89a34abb55c7-d_640x360?r=pad",
    "title": "Chocolife - Жара",
    "client": "",
    "director": "",
    "videoId": "341284476",
    "category": "Post"
  },
  {
    "id": 37,
    "url": "https://i.vimeocdn.com/video/781529958-1083998c977c3f95ab6f69d96288387c9d2b0bc567d4e54cf34f2f5737cd93f1-d_640x360?r=pad",
    "title": "Другой ты",
    "client": "",
    "director": "",
    "videoId": "335056193",
    "category": "Post"
  }
];

// // Sample data
// const imageData = 
// [
//   {
//     "id": 1,
//     "url": "https://i.vimeocdn.com/video/1562997565-aa98057052d24a3f6291295bd463026e147281a9879f27294a6588bf359fd1a6-d_640x360",
//     "title": "Big Bob. Flavors of the World",
//     "client": "",
//     "director": "",
//     "videoId": "778775740"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 2,
//     "url": "https://i.vimeocdn.com/video/1263041461-fa58796356a66e578ef270d737ec45fba860d9715351b52e0_640x360",
//     "title": "BI group. Live with Happiness",
//     "client": "",
//     "director": "",
//     "videoId": "620732800",
//     "category": "Commercial"
//   },
//   {
//     "id": 3,
//     "url": "https://i.vimeocdn.com/video/1563003134-d2b3d8bde74ff538fc5de9b197d852237fddc3ec22e6cbdf191b1e4115f605e9-d_640x360",
//     "title": "Halyk Easy",
//     "client": "",
//     "director": "",
//     "videoId": "778781222",
//     "category": "Commercial"
//   },
//   {
//     "id": 4,
//     "url": "https://i.vimeocdn.com/video/1488546369-4f2746aa7dd0d5e4d14b5171d496836126e39a388d1be23ec8410503a1935b3c-d_640x360",
//     "title": "Zhana Yerke",
//     "client": "",
//     "director": "",
//     "videoId": "739677342",
//     "category": "Commercial"
//   },
//   {
//     "id": 5,
//     "url": "https://i.vimeocdn.com/video/1418389351-d4b0ee56ae0a3af884b900b1d1e8e9b631bbc3cf573d39a060eea937be4554af-d_640x360",
//     "title": "Aitube. All Our Own",
//     "client": "",
//     "director": "",
//     "videoId": "701969577"
//   },
//   {
//     "id": 6,
//     "url": "https://i.vimeocdn.com/video/1263047043-1da80933a16b4d00e4b122fa689984dbf9f5c5c5c126ca13c_640x360",
//     "title": "Krugka Svyezhego. Shampoo",
//     "client": "",
//     "director": "",
//     "videoId": "620739427",
//     "category": "Commercial"
//   },
//   {
//     "id": 7,
//     "url": "https://i.vimeocdn.com/video/1663350587-62966a6cb7a26342a8c138545a26e9f333250f0a2a86ed09ea43f7b5dad0a368-d_640x360",
//     "title": "BigBon WOK",
//     "client": "",
//     "director": "",
//     "videoId": "822461943",
//     "category": "Post"
//   },
//   {
//     "id": 8,
//     "url": "https://i.vimeocdn.com/video/1663349943-ffa85293015dfea6a2d65c2b690ead6ff42d6047cef2fb84684b5c478542b33f-d_640x360",
//     "title": "Big Bon vs Delivery",
//     "client": "",
//     "director": "",
//     "videoId": "822461601"
//   },
//   {
//     "id": 9,
//     "url": "https://i.vimeocdn.com/video/1663350807-396ad7bd071c591d427a25c5ca39a85d6976d1354ab1aa209be6eacf40287478-d_640x360",
//     "title": "BigBon RAMEN",
//     "client": "",
//     "director": "",
//     "videoId": "822462045"
//     ,"category": "Post"
//   },
//   {
//     "id": 10,
//     "url": "https://i.vimeocdn.com/video/1419816498-b276387b6d07dd29db121cbea2d69837f436fd791afa47ce13929e7e22faa9bc-d_640x360",
//     "title": "Lactel. Live Yogurt",
//     "client": "",
//     "director": "",
//     "videoId": "702736379",
//     "category": "Post"
//   },
//   {
//     "id": 11,
//     "url": "https://i.vimeocdn.com/video/1563011030-98b8f2d89a7452358dbd5681d047391c055aaaefbd429905e8224785beac21a8-d_640x360",
//     "title": "Lactel. Light Morning",
//     "client": "",
//     "director": "",
//     "videoId": "778784537"
//   },
//   {
//     "id": 12,
//     "url": "https://i.vimeocdn.com/video/1419363089-31f1a9a31a7702a11d84f19d348c14e23fe989ab44f89670bad8f2be47e79226-d_640x360",
//     "title": "Million from Forte Bank",
//     "client": "",
//     "director": "",
//     "videoId": "702499295"
//   },
//   {
//     "id": 13,
//     "url": "https://i.vimeocdn.com/video/1419076493-7b6377290886fe9634922af03ee04de16f953970985eb84212e03bd7fc1e8617-d_640x360",
//     "title": "Danone. Perfect Breakfast",
//     "client": "",
//     "director": "",
//     "videoId": "702366047"
//   },
//   {
//     "id": 14,
//     "url": "https://i.vimeocdn.com/video/1374490549-677f4c4743c63c8aa0bac0f9115765a1a37997eeb84f1abd9ef38eafa1b0241d-d_640x360",
//     "title": "Danone. SugarFree",
//     "client": "",
//     "director": "",
//     "videoId": "678207550"
//     ,"category": "Post"
//   },
//   {
//     "id": 15,
//     "url": "https://i.vimeocdn.com/video/1374489012-630d873489efa46eb8429dd5a6d9dd0374bc50b1b0c772c906f173860fb953b4-d_640x360",
//     "title": "Kamistad Baby",
//     "client": "",
//     "director": "",
//     "videoId": "678206829"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 16,
//     "url": "https://i.vimeocdn.com/video/1146733646-fe4ce4c0f58cf9a7c2f8dec9e47dbd75075ec356ee74fc03aae69e76dea1d2a3-d_640x360",
//     "title": "GLO",
//     "client": "",
//     "director": "",
//     "videoId": "554869460"
//   },
//   {
//     "id": 17,
//     "url": "https://i.vimeocdn.com/video/1356445021-a0d38a44e9717219405d0e78c60c340486678126726b6397965479d87df84de5-d_640x360",
//     "title": "Prostokvashino. Nauryz 2021",
//     "client": "",
//     "director": "",
//     "videoId": "669630289"
//     ,"category": "Post"
//   },
//   {
//     "id": 18,
//     "url": "https://i.vimeocdn.com/video/1146748257-e560e6b870f0b9bc67445611dda78e786a9360a3e3f13bf51f4c7038da332d8a-d_640x360",
//     "title": "BI group. Inspire!",
//     "client": "",
//     "director": "",
//     "videoId": "554869552"
//   },
//   {
//     "id": 19,
//     "url": "https://i.vimeocdn.com/video/832549190-3e0e2ebafcf43d3534cd0b9cfe031e2c25d343b07ff04a464401ac83c02c1b33-d_640x360",
//     "title": "RBK Prisma",
//     "client": "",
//     "director": "",
//     "videoId": "374183957"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 20,
//     "url": "https://i.vimeocdn.com/video/811517331-add104ed2887a483946b7e4684ffde808ec472963a16a062ae460bdc477096a4-d_640x360",
//     "title": "Kaspi 3",
//     "client": "",
//     "director": "",
//     "videoId": "358008202"
//   },
//   {
//     "id": 21,
//     "url": "https://i.vimeocdn.com/video/832548880-0f6eb1dd96ac520748ae4689672d4cd9147eff2b26db6bd9e7fc0ed1c2e31acb-d_640x360",
//     "title": "Pampers TVC with Saltanat",
//     "client": "",
//     "director": "",
//     "videoId": "374183645"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 22,
//     "url": "https://i.vimeocdn.com/video/821537556-a41010e6654d6e9f7316640aadab124ee6c1dd6be837b9de74e1e0da40e82dd8-d_640x360",
//     "title": "ForteBank - Credit 2",
//     "client": "",
//     "director": "",
//     "videoId": "365708902"
//     ,"category": "Post"
//   },
//   {
//     "id": 23,
//     "url": "https://i.vimeocdn.com/video/821536463-12a84fbf0e2df919dfd1d07b8bcadcfceb0beb3990b2a8f87a3831ad102d1674-d_640x360",
//     "title": "Schickard",
//     "client": "",
//     "director": "",
//     "videoId": "365707740"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 24,
//     "url": "https://i.vimeocdn.com/video/821535864-3c0a19b473b6e9890bdf38140d2fcae782dcdb8eac7759d82561d3fdce3731ed-d_640x360",
//     "title": "ForteBank - Shaman",
//     "client": "",
//     "director": "",
//     "videoId": "365707597"
//   },
//   {
//     "id": 25,
//     "url": "https://i.vimeocdn.com/video/781529560-dbff895bf137e9d593b169171a7ffc9c16ba5566c5db2d2f2896bc42d653679c-d_640x360",
//     "title": "Tunetank commercial. Change Reality",
//     "client": "",
//     "director": "",
//     "videoId": "335055882"
//     ,"category": "Post"
//   },
//   {
//     "id": 26,
//     "url": "https://i.vimeocdn.com/video/800331372-a5f709114cbb00b1bd2dcee3efa1b16e01613c333ef4627deb23043c3ac35f94-d_640x360",
//     "title": "Dermodrin - Itching? Dermodrin Helps!",
//     "client": "",
//     "director": "",
//     "videoId": "349393327"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 27,
//     "url": "https://i.vimeocdn.com/video/800331472-ce1e9e7215ebee079c00668a0d7bd1bbc674938711b0733b08c83a0d0f1a5466-d_640x360",
//     "title": "Tsesna - Pilaf",
//     "client": "",
//     "director": "",
//     "videoId": "349393294"
//   },
//   {
//     "id": 28,
//     "url": "https://i.vimeocdn.com/video/800330969-0b3e1e6131d53ae1deb867b464762b0a941f98f065741456d4ebfcc044ee79ff-d_640x360",
//     "title": "Rakhmet App",
//     "client": "",
//     "director": "",
//     "videoId": "349392956"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 29,
//     "url": "https://i.vimeocdn.com/video/824132441-10ea8728157a2d782eae4e04b86c4ca5205ee3e37bee05f61d63516e18d8e499-d_640x360",
//     "title": "Krugka Svyezhego - Pool",
//     "client": "",
//     "director": "",
//     "videoId": "349392887"
//   },
//   {
//     "id": 30,
//     "url": "https://i.vimeocdn.com/video/789854499-de36a7b1dd69d1433b04d090c37b6a7229cc75fd7a8a710def2d4a14bb1459b2-d_640x360",
//     "title": "Kaspi 2",
//     "client": "",
//     "director": "",
//     "videoId": "341284199"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 31,
//     "url": "https://i.vimeocdn.com/video/789861019-c3b494ca75f473a229f27f64055877ba402fd70eeb31c832de17dea353260a8c-d_640x360",
//     "title": "Beeline - Home Internet",
//     "client": "",
//     "director": "",
//     "videoId": "341289501"
//   },
//   {
//     "id": 32,
//     "url": "https://i.vimeocdn.com/video/789854906-d892fd5b5368bc1d0f89ee9610972a9be2b7e8e30c43d1d2e9df89a34abb55c7-d_640x360",
//     "title": "Chocolife - Heat",
//     "client": "",
//     "director": "",
//     "videoId": "341284476"
//   },
//   {
//     "id": 33,
//     "url": "https://i.vimeocdn.com/video/789860398-d645f5cd540f009e3e8fd4e51d85d4708223b73d73bec47293fcdcd551bfe073-d_640x360",
//     "title": "M-Lombard _ Altynai _ Queen",
//     "client": "",
//     "director": "",
//     "videoId": "341288934"
//   },
//   {
//     "id": 34,
//     "url": "https://i.vimeocdn.com/video/789858163-9cb2140db3bbfe3a926c2d36de23356c35b72d1fb359e7b9fbfa3e177948d74a-d_640x360",
//     "title": "Rollton",
//     "client": "",
//     "director": "",
//     "videoId": "341287052"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 35,
//     "url": "https://i.vimeocdn.com/video/789772179-346d777e92690dc6b752d9d110fc737286b0d3687961c20260ce16ddde75f209-d_640x360",
//     "title": "Garnier - Fructis",
//     "client": "",
//     "director": "",
//     "videoId": "341220249"
//   },
//   {
//     "id": 36,
//     "url": "https://i.vimeocdn.com/video/789771882-3bf0334f19df6930fdc1903b26ea89451b04240877f8940ae355d3de304b0427-d_640x360",
//     "title": "ForteBank - Smart Pay",
//     "client": "",
//     "director": "",
//     "videoId": "341220071"
//   },
//   {
//     "id": 37,
//     "url": "https://i.vimeocdn.com/video/789771172-44d5e25532a64dd317846e51bc57703b950e13fc8e6b9f1a5ba7871e1389a401-d_640x360",
//     "title": "Forte Bank Real Team Almaty",
//     "client": "",
//     "director": "",
//     "videoId": "341219178"
//   },
//   {
//     "id": 38,
//     "url": "https://i.vimeocdn.com/video/781530403-81426ec71611dfed2db78e3f37b22bb5d8e8fc56492fc063a64f3a36913f731b-d_640x360",
//     "title": "Kaspi",
//     "client": "",
//     "director": "",
//     "videoId": "335056528"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 39,
//     "url": "https://i.vimeocdn.com/video/781530201-c327ff017005f65a6c249963715f9e7aaa99a149aec634c3fff220a258fc6f3a-d_640x360",
//     "title": "Dove - 8 March",
//     "client": "",
//     "director": "",
//     "videoId": "335056418"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 40,
//     "url": "https://i.vimeocdn.com/video/781530024-5bf86863c79af6edb60c41b4babbf5e80a02c63728b3397674366ed4b8835c8b-d_640x360",
//     "title": "Rakhat. Tastier With Us",
//     "client": "",
//     "director": "",
//     "videoId": "335056277"
//   },
//   {
//     "id": 41,
//     "url": "https://i.vimeocdn.com/video/781529958-1083998c977c3f95ab6f69d96288387c9d2b0bc567d4e54cf34f2f5737cd93f1-d_640x360",
//     "title": "Another You",
//     "client": "",
//     "director": "",
//     "videoId": "335056193"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 42,
//     "url": "https://i.vimeocdn.com/video/781529316-d5d7228ed7514df8e39fa2bb30308f0d1e86287cce418504016a707214734640-d_640x360",
//     "title": "Tunetank commercial. Feel What You See",
//     "client": "",
//     "director": "",
//     "videoId": "335055611"
//   },
//   {
//     "id": 43,
//     "url": "https://i.vimeocdn.com/video/1663350257-77cfcdd6900ae32bb8981903a8679202deac51c01cbd9b515dee5d40ca986eed-d_640x360",
//     "title": "Ibuprofen. Even Dad Can Do It",
//     "client": "",
//     "director": "",
//     "videoId": "822461846"
//     ,"category": "Commercial"
//   },
//   {
//     "id": 44,
//     "url": "https://i.vimeocdn.com/video/781528425-a2478f909d53f19319c4061f12fe263cd351b236bb6dd75c5f1e6194f6105b7d-d_640x360",
//     "title": "Capture School Promo",
//     "client": "",
//     "director": "",
//     "videoId": "335054942"
//   },
//   {
//     "id": 45,
//     "url": "https://i.vimeocdn.com/video/798946755-a048019fd11320e1f4993e8bfc05e3da228e51b40f494eda427700f36eebf6c9-d_640x360",
//     "title": "Altyn Bomba",
//     "client": "",
//     "director": "",
//     "videoId": "348343200"
//   }
// ];


function GridItem({ image, index }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (rowIndex) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: rowIndex * 0.3,
      },
    }),
  };

  // Calculate the row index for staggered animation
  const rowIndex = Math.floor(index / 2);

  return (
    <>
      <motion.div
        className="grid-item"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={rowIndex}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        <img src={image.url}  />
        {isHovered && (
          <div className="overlay">
            <div className="play-button">
              {/* Play Button SVG */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </div>
          </div>
        )}
        <div className="info">
          <h3>{image.title}</h3>
          {/* <p>Client: {image.client}</p> */}
          {/* <p>Director: {image.director}</p> */}
        </div>
      </motion.div>

      {/* Vimeo Modal */}
      {isModalOpen && (
        <VimeoModal
          videoId={image.videoId}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default function App() {
  const router = useRouter();
  const { category } = router.query; // Get the 'category' query parameter from the URL
  const [filteredData, setFilteredData] = useState(imageData);

  // Filter projects when the category query changes
  useEffect(() => {
    if (category) {
      setFilteredData(imageData.filter((item) => item.category === category));
    } else {
      setFilteredData(imageData); // Show all if no category is selected
    }
  }, [category]);

  return (
    <div className="grid-container md:px-12 md:pt-[200px]">
      {filteredData.map((image, index) => (
        <GridItem key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}
