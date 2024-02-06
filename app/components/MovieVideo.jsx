import prisma from "../utils/db"


const getData = async () => {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      releaseDate: true,
      duration: true,
      id: true,
      age: true,      
    }
  });

  return data;
}

const MovieVideo = async () => {

  const data = await getData();  

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-center items-center">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      >
      </video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1>{data?.title}</h1>
      </div>
    </div>
  )
}

export default MovieVideo