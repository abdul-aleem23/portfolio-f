import { AiOutlineMinus } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import desktop from "../assets/images/image-desktop-pc.png"

const Home = () => {
  return (
    <div id="home" className="w-auto h-full text-white flex flex-col md:flex-row lg:flex-row justify-center items-center">
      <div className="flex flex-col w-auto md:w-2/5 lg:w-2/5 m-10">
        <div className="text-5xl md:text-5xl bg-clip-text font-bold tracking-tighter">
          <Typewriter
            words={["Design,", "Develop,", "Deliver."]}
            typeSpeed={120}
            deleteSpeed={140}
            cursor
            loop={false}
          />
        </div>
        <div className="flex flex-row items-center my-4">
          <AiOutlineMinus size={30} />
          <p className="text-xl md:text-2xl">Hi! My name is Abdul Aleem</p>
        </div>
        <p>
          a student pursuing full stack development with a passion for crafting
          engaging digital experiences.
        </p>
      </div>

      <div className="flex w-full h-[400px] lg:h-[700px] md:w-3/5 lg:w-3/5 m-5 relative">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#f7cce8"
              attach="material"
              distort={0.5}
              speed={3}
            />
          </Sphere>
        </Canvas>
        <img src={desktop} id="desktop"/>
      </div>
    </div>
  );
};

export default Home;
