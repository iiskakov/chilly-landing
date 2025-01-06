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
  ,
  {
    "id": 38,
    "url": "https://i.vimeocdn.com/video/1967677326-bac372f6b77f8784c52359847cf6e7f86f202c404cf14a0a81ddc609ee3fde98-d_640x360?r=pad",
    "title": "Kaspi shop Osen x IK 3",
    "client": "",
    "director": "",
    "videoId": "1044303154",
    "category": "Post"
  },
  {
    "id": 39,
    "url": "https://i.vimeocdn.com/video/1967673712-57b0f1cf54c33955a29c1cf0bc2fb41078559b8c011bdc1bbbde38abf1e09a84-d_640x360?r=pad",
    "title": "Kaspi shop Leto x IK 3",
    "client": "",
    "director": "",
    "videoId": "1044299806",
    "category": "Post"
  },
  {
    "id": 40,
    "url": "https://i.vimeocdn.com/video/1967670478-526a8e90316a25ed353128f0ef267daedb67147873b4dc37ea017dcddcd84c13-d_640x360?r=pad",
    "title": "Kaspi Zhuma x IK 4",
    "client": "",
    "director": "",
    "videoId": "1044272895",
    "category": "Post"
  }
];



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
  const { category } = router.query;
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Wait for router to be ready
    if (!router.isReady) return;

    if (category) {
      const filtered = imageData.filter((item) => item.category === category);
      setFilteredData(filtered);
      
      // Debug log (you can remove this later)
      console.log(`Filtered ${filtered.length} items for category: ${category}`);
    } else {
      setFilteredData(imageData);
    }
  }, [category, router.isReady]); // Add router.isReady to dependencies

  // Show loading state while router isn't ready
  if (!router.isReady) return <div>Loading...</div>;

  return (
    <div className="grid-container md:px-12 md:pt-[200px]">
      {filteredData.map((image, index) => (
        <GridItem key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}
