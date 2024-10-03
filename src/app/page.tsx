import Image from 'next/image';
import slayy from "../../public/slayy💅🏻.jpg"
export default function Home() {
  return (
    <div> 
    <h1 className="text-center pt-5 text-[24px]">Hi!
    My Name is Amna 🎀 </h1>
    <h2> I am a Web Developer (●'◡'●)
    </h2>

       <Image src={slayy} alt="slayy" className="w-[350px] h-[400px]" />
    </div>
  );
}
    