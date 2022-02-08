import logo from '../public/logo2.png'
import Image from 'next/image'

export default function Intro() {
  return (
    <>
      <div className="border-t-2 border-black mt-2 md:border-t-4"></div>
      <section className="flex-col md:flex-row flex md:justify-between mb-12 md:mb-12">
        <Image
          width={300/2}
          height={169/2}
        src={logo}/>
        {/* <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight"> */}
        {/*   chilly production <small>🌶️</small> */}
        {/* </h1> */}
      </section>
    </>
  );
}
