import '../styles/index.css'
import { Handjet } from 'next/font/google'; // Import Handjet
import Link from "next/link";
import Image from 'next/image';

const handjet = Handjet({
  subsets: ['latin'], // Include relevant subsets
  weight: ['400', '600', '700'], // Load specific font weights
});

function Logo() {
  return (
    <>
    <Image
      src="/pepper.png" // path to your image in the public folder
      alt="Logo"
      width={40} // replace with desired width
      height={40} // replace with desired height
    />
      
    </>
  );
}

const Header = () => {
  return (
    <header className="md:top-0 md:bottom-auto xs:top-auto bottom-0">
      <div
        className="items-center px-12 py-4 flex flex-row justify-between w-full"
        style={{
          backdropFilter: 'blur(22px) brightness(0.8)', // Adjust the values as needed
          WebkitBackdropFilter: 'blur(22px) brightness(0.8)',
        }}
      >
        <Link href="/">
          <Logo />
        </Link>
        <Link className="text-xl md:text-3xl" href="/projects?category=Commercial">
          Commercials
        </Link>
        <Link className="text-xl md:text-3xl" href="/projects?category=Post">
          Post production
        </Link>
        <Link className="text-xl md:text-3xl" href="/about">
          About
        </Link>
        <Link className="text-xl md:text-3xl" href="/contacts">
          Contacts
        </Link>
      </div>
    </header>
  );
};



// const Header = () => {
//   return (
//     <header className="md:top-0 md:bottom-auto xs:top-auto bottom-0">

//         <div
//   className="items-center px-12 py-4 flex flex-row justify-between w-full"
//   style={{
//     filter: 'blur(5px) brightness(1.2)', // Adjust the values as needed
//   }}
// >


//       <Link href="/">
//         <Logo />
//       </Link>
//       <Link className="text-xl" href="/projects">
//       Projects
//       </Link>
//       <Link className="text-xl" href="/projects">
//       About
//       </Link>
//       <Link className="text-xl" href="/projects">
//       Contacts
//       </Link>
//       </div>
//     </header>
//   );
// };

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={handjet.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
