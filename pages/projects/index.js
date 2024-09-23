import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import VimeoModal from "../../components/VideoModal"; // Import the modal component

// Sample data
const imageData = [
  {
    "id": 1,
    "url": "https://i.vimeocdn.com/video/1562997565-aa98057052d24a3f6291295bd463026e147281a9879f27294a6588bf359fd1a6-d_640x360",
    "title": "Big Bob. Flavors of the World",
    "client": "",
    "director": "",
    "videoId": "778775740",
    "category": "Commercial"
  },
  {
    "id": 2,
    "url": "https://i.vimeocdn.com/video/1263041461-fa58796356a66e578ef270d737ec45fba860d9715351b52e0_640x360",
    "title": "BI group. Live with Happiness",
    "client": "",
    "director": "",
    "videoId": "620732800"
  },
  {
    "id": 3,
    "url": "https://i.vimeocdn.com/video/1563003134-d2b3d8bde74ff538fc5de9b197d852237fddc3ec22e6cbdf191b1e4115f605e9-d_640x360",
    "title": "Halyk Easy",
    "client": "",
    "director": "",
    "videoId": "778781222"
  },
  {
    "id": 4,
    "url": "https://i.vimeocdn.com/video/1488546369-4f2746aa7dd0d5e4d14b5171d496836126e39a388d1be23ec8410503a1935b3c-d_640x360",
    "title": "Zhana Yerke",
    "client": "",
    "director": "",
    "videoId": "739677342"
  },
  {
    "id": 5,
    "url": "https://i.vimeocdn.com/video/1418389351-d4b0ee56ae0a3af884b900b1d1e8e9b631bbc3cf573d39a060eea937be4554af-d_640x360",
    "title": "Aitube. All Our Own",
    "client": "",
    "director": "",
    "videoId": "701969577"
  },
  {
    "id": 6,
    "url": "https://i.vimeocdn.com/video/1263047043-1da80933a16b4d00e4b122fa689984dbf9f5c5c5c126ca13c_640x360",
    "title": "Krugka Svyezhego. Shampoo",
    "client": "",
    "director": "",
    "videoId": "620739427"
  },
  {
    "id": 7,
    "url": "https://i.vimeocdn.com/video/1663350587-62966a6cb7a26342a8c138545a26e9f333250f0a2a86ed09ea43f7b5dad0a368-d_640x360",
    "title": "BigBon WOK",
    "client": "",
    "director": "",
    "videoId": "822461943"
  },
  {
    "id": 8,
    "url": "https://i.vimeocdn.com/video/1663349943-ffa85293015dfea6a2d65c2b690ead6ff42d6047cef2fb84684b5c478542b33f-d_640x360",
    "title": "Big Bon vs Delivery",
    "client": "",
    "director": "",
    "videoId": "822461601"
  },
  {
    "id": 9,
    "url": "https://i.vimeocdn.com/video/1663350807-396ad7bd071c591d427a25c5ca39a85d6976d1354ab1aa209be6eacf40287478-d_640x360",
    "title": "BigBon RAMEN",
    "client": "",
    "director": "",
    "videoId": "822462045"
  },
  {
    "id": 10,
    "url": "https://i.vimeocdn.com/video/1419816498-b276387b6d07dd29db121cbea2d69837f436fd791afa47ce13929e7e22faa9bc-d_640x360",
    "title": "Lactel. Live Yogurt",
    "client": "",
    "director": "",
    "videoId": "702736379"
  },
  {
    "id": 11,
    "url": "https://i.vimeocdn.com/video/1563011030-98b8f2d89a7452358dbd5681d047391c055aaaefbd429905e8224785beac21a8-d_640x360",
    "title": "Lactel. Light Morning",
    "client": "",
    "director": "",
    "videoId": "778784537"
  },
  {
    "id": 12,
    "url": "https://i.vimeocdn.com/video/1419363089-31f1a9a31a7702a11d84f19d348c14e23fe989ab44f89670bad8f2be47e79226-d_640x360",
    "title": "Million from Forte Bank",
    "client": "",
    "director": "",
    "videoId": "702499295"
  },
  {
    "id": 13,
    "url": "https://i.vimeocdn.com/video/1419076493-7b6377290886fe9634922af03ee04de16f953970985eb84212e03bd7fc1e8617-d_640x360",
    "title": "Danone. Perfect Breakfast",
    "client": "",
    "director": "",
    "videoId": "702366047"
  },
  {
    "id": 14,
    "url": "https://i.vimeocdn.com/video/1374490549-677f4c4743c63c8aa0bac0f9115765a1a37997eeb84f1abd9ef38eafa1b0241d-d_640x360",
    "title": "Danone. SugarFree",
    "client": "",
    "director": "",
    "videoId": "678207550"
  },
  {
    "id": 15,
    "url": "https://i.vimeocdn.com/video/1374489012-630d873489efa46eb8429dd5a6d9dd0374bc50b1b0c772c906f173860fb953b4-d_640x360",
    "title": "Kamistad Baby",
    "client": "",
    "director": "",
    "videoId": "678206829"
  },
  {
    "id": 16,
    "url": "https://i.vimeocdn.com/video/1146733646-fe4ce4c0f58cf9a7c2f8dec9e47dbd75075ec356ee74fc03aae69e76dea1d2a3-d_640x360",
    "title": "GLO",
    "client": "",
    "director": "",
    "videoId": "554869460"
  },
  {
    "id": 17,
    "url": "https://i.vimeocdn.com/video/1356445021-a0d38a44e9717219405d0e78c60c340486678126726b6397965479d87df84de5-d_640x360",
    "title": "Prostokvashino. Nauryz 2021",
    "client": "",
    "director": "",
    "videoId": "669630289"
  },
  {
    "id": 18,
    "url": "https://i.vimeocdn.com/video/1146748257-e560e6b870f0b9bc67445611dda78e786a9360a3e3f13bf51f4c7038da332d8a-d_640x360",
    "title": "BI group. Inspire!",
    "client": "",
    "director": "",
    "videoId": "554869552"
  },
  {
    "id": 19,
    "url": "https://i.vimeocdn.com/video/832549190-3e0e2ebafcf43d3534cd0b9cfe031e2c25d343b07ff04a464401ac83c02c1b33-d_640x360",
    "title": "RBK Prisma",
    "client": "",
    "director": "",
    "videoId": "374183957"
  },
  {
    "id": 20,
    "url": "https://i.vimeocdn.com/video/811517331-add104ed2887a483946b7e4684ffde808ec472963a16a062ae460bdc477096a4-d_640x360",
    "title": "Kaspi 3",
    "client": "",
    "director": "",
    "videoId": "358008202"
  },
  {
    "id": 21,
    "url": "https://i.vimeocdn.com/video/832548880-0f6eb1dd96ac520748ae4689672d4cd9147eff2b26db6bd9e7fc0ed1c2e31acb-d_640x360",
    "title": "Pampers TVC with Saltanat",
    "client": "",
    "director": "",
    "videoId": "374183645"
  },
  {
    "id": 22,
    "url": "https://i.vimeocdn.com/video/821537556-a41010e6654d6e9f7316640aadab124ee6c1dd6be837b9de74e1e0da40e82dd8-d_640x360",
    "title": "ForteBank - Credit 2",
    "client": "",
    "director": "",
    "videoId": "365708902"
  },
  {
    "id": 23,
    "url": "https://i.vimeocdn.com/video/821536463-12a84fbf0e2df919dfd1d07b8bcadcfceb0beb3990b2a8f87a3831ad102d1674-d_640x360",
    "title": "Schickard",
    "client": "",
    "director": "",
    "videoId": "365707740"
  },
  {
    "id": 24,
    "url": "https://i.vimeocdn.com/video/821535864-3c0a19b473b6e9890bdf38140d2fcae782dcdb8eac7759d82561d3fdce3731ed-d_640x360",
    "title": "ForteBank - Shaman",
    "client": "",
    "director": "",
    "videoId": "365707597"
  },
  {
    "id": 25,
    "url": "https://i.vimeocdn.com/video/781529560-dbff895bf137e9d593b169171a7ffc9c16ba5566c5db2d2f2896bc42d653679c-d_640x360",
    "title": "Tunetank commercial. Change Reality",
    "client": "",
    "director": "",
    "videoId": "335055882"
  },
  {
    "id": 26,
    "url": "https://i.vimeocdn.com/video/800331372-a5f709114cbb00b1bd2dcee3efa1b16e01613c333ef4627deb23043c3ac35f94-d_640x360",
    "title": "Dermodrin - Itching? Dermodrin Helps!",
    "client": "",
    "director": "",
    "videoId": "349393327"
  },
  {
    "id": 27,
    "url": "https://i.vimeocdn.com/video/800331472-ce1e9e7215ebee079c00668a0d7bd1bbc674938711b0733b08c83a0d0f1a5466-d_640x360",
    "title": "Tsesna - Pilaf",
    "client": "",
    "director": "",
    "videoId": "349393294"
  },
  {
    "id": 28,
    "url": "https://i.vimeocdn.com/video/800330969-0b3e1e6131d53ae1deb867b464762b0a941f98f065741456d4ebfcc044ee79ff-d_640x360",
    "title": "Rakhmet App",
    "client": "",
    "director": "",
    "videoId": "349392956"
  },
  {
    "id": 29,
    "url": "https://i.vimeocdn.com/video/824132441-10ea8728157a2d782eae4e04b86c4ca5205ee3e37bee05f61d63516e18d8e499-d_640x360",
    "title": "Krugka Svyezhego - Pool",
    "client": "",
    "director": "",
    "videoId": "349392887"
  },
  {
    "id": 30,
    "url": "https://i.vimeocdn.com/video/789854499-de36a7b1dd69d1433b04d090c37b6a7229cc75fd7a8a710def2d4a14bb1459b2-d_640x360",
    "title": "Kaspi 2",
    "client": "",
    "director": "",
    "videoId": "341284199"
  },
  {
    "id": 31,
    "url": "https://i.vimeocdn.com/video/789861019-c3b494ca75f473a229f27f64055877ba402fd70eeb31c832de17dea353260a8c-d_640x360",
    "title": "Beeline - Home Internet",
    "client": "",
    "director": "",
    "videoId": "341289501"
  },
  {
    "id": 32,
    "url": "https://i.vimeocdn.com/video/789854906-d892fd5b5368bc1d0f89ee9610972a9be2b7e8e30c43d1d2e9df89a34abb55c7-d_640x360",
    "title": "Chocolife - Heat",
    "client": "",
    "director": "",
    "videoId": "341284476"
  },
  {
    "id": 33,
    "url": "https://i.vimeocdn.com/video/789860398-d645f5cd540f009e3e8fd4e51d85d4708223b73d73bec47293fcdcd551bfe073-d_640x360",
    "title": "M-Lombard _ Altynai _ Queen",
    "client": "",
    "director": "",
    "videoId": "341288934"
  },
  {
    "id": 34,
    "url": "https://i.vimeocdn.com/video/789858163-9cb2140db3bbfe3a926c2d36de23356c35b72d1fb359e7b9fbfa3e177948d74a-d_640x360",
    "title": "Rollton",
    "client": "",
    "director": "",
    "videoId": "341287052"
  },
  {
    "id": 35,
    "url": "https://i.vimeocdn.com/video/789772179-346d777e92690dc6b752d9d110fc737286b0d3687961c20260ce16ddde75f209-d_640x360",
    "title": "Garnier - Fructis",
    "client": "",
    "director": "",
    "videoId": "341220249"
  },
  {
    "id": 36,
    "url": "https://i.vimeocdn.com/video/789771882-3bf0334f19df6930fdc1903b26ea89451b04240877f8940ae355d3de304b0427-d_640x360",
    "title": "ForteBank - Smart Pay",
    "client": "",
    "director": "",
    "videoId": "341220071"
  },
  {
    "id": 37,
    "url": "https://i.vimeocdn.com/video/789771172-44d5e25532a64dd317846e51bc57703b950e13fc8e6b9f1a5ba7871e1389a401-d_640x360",
    "title": "Forte Bank Real Team Almaty",
    "client": "",
    "director": "",
    "videoId": "341219178"
  },
  {
    "id": 38,
    "url": "https://i.vimeocdn.com/video/781530403-81426ec71611dfed2db78e3f37b22bb5d8e8fc56492fc063a64f3a36913f731b-d_640x360",
    "title": "Kaspi",
    "client": "",
    "director": "",
    "videoId": "335056528"
  },
  {
    "id": 39,
    "url": "https://i.vimeocdn.com/video/781530201-c327ff017005f65a6c249963715f9e7aaa99a149aec634c3fff220a258fc6f3a-d_640x360",
    "title": "Dove - 8 March",
    "client": "",
    "director": "",
    "videoId": "335056418"
  },
  {
    "id": 40,
    "url": "https://i.vimeocdn.com/video/781530024-5bf86863c79af6edb60c41b4babbf5e80a02c63728b3397674366ed4b8835c8b-d_640x360",
    "title": "Rakhat. Tastier With Us",
    "client": "",
    "director": "",
    "videoId": "335056277"
  },
  {
    "id": 41,
    "url": "https://i.vimeocdn.com/video/781529958-1083998c977c3f95ab6f69d96288387c9d2b0bc567d4e54cf34f2f5737cd93f1-d_640x360",
    "title": "Another You",
    "client": "",
    "director": "",
    "videoId": "335056193"
  },
  {
    "id": 42,
    "url": "https://i.vimeocdn.com/video/781529316-d5d7228ed7514df8e39fa2bb30308f0d1e86287cce418504016a707214734640-d_640x360",
    "title": "Tunetank commercial. Feel What You See",
    "client": "",
    "director": "",
    "videoId": "335055611"
  },
  {
    "id": 43,
    "url": "https://i.vimeocdn.com/video/1663350257-77cfcdd6900ae32bb8981903a8679202deac51c01cbd9b515dee5d40ca986eed-d_640x360",
    "title": "Ibuprofen. Even Dad Can Do It",
    "client": "",
    "director": "",
    "videoId": "822461846"
  },
  {
    "id": 44,
    "url": "https://i.vimeocdn.com/video/781528425-a2478f909d53f19319c4061f12fe263cd351b236bb6dd75c5f1e6194f6105b7d-d_640x360",
    "title": "Capture School Promo",
    "client": "",
    "director": "",
    "videoId": "335054942"
  },
  {
    "id": 45,
    "url": "https://i.vimeocdn.com/video/798946755-a048019fd11320e1f4993e8bfc05e3da228e51b40f494eda427700f36eebf6c9-d_640x360",
    "title": "Altyn Bomba",
    "client": "",
    "director": "",
    "videoId": "348343200"
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
