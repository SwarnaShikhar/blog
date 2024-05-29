import { Post } from "@/components/post"
import { Button } from "@/components/ui/button"
import { Work } from "@/components/works"
import Image from "next/image"

const Home = () => {
  return (
    <>
      <div className="md:flex md:flex-row-reverse md:mx-32 md:pt-32">

        <div className="flex justify-center md:w-2/5">
          <Image
            className="w-40 h-auto sm:w-52 md:w-64 lg:w-80"
            src='/face.png'
            alt="dp"
            height={150}
            width={300}
            unoptimized={true}
          />
        </div>

        <div className="mt-10 md:w-3/5">
          <div className="font-extrabold text-4xl text-center mt-3 md:text-left md:text-6xl leading-loose">Hi, I am John,<br />Creative Technologist</div>
          <div className="text-base text-center mt-7 px-2 md:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
          <div className="flex justify-center pt-5 md:justify-start"><Button className="w-52" variant={"batch"}>Download Resume</Button></div>
        </div>
      </div>


      <div className="pt-10 flex justify-center md:justify-between m-2 md:mx-32">
        <div className="text-xl">Resent posts</div>
        <div className="text-[#00A8CC] hidden md:block">View all</div>
      </div>


      <div className="w-full md:flex md:justify-around">
        <Post />
      </div>

      <div className="md:mx-32 pt-4">
        <div className="text-xl ml-6">Featured works</div>
      </div>

      <div className="pt-4">
        <Work />
      </div>
    </>
  )
}

export default Home