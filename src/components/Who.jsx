
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./models/Box";
import cat from "../assets/images/who-cat-purple.png";

const Who = () => {
  return (
    <div id="who" className="w-full h-screen text-white flex flex-col md:flex-row lg:flex-row">
      <div className="hidden md:block md:w-3/5 lg:3/5 lg:mt-20 m-5">
        <Canvas camera={{ fov: 35, position: [5, 3, 5] }}>
          <Box />
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 2, 1]} />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
      <div className="flex flex-col md:w-2/5 lg:w-2/5 justify-center items-center m-10">
        <h1 className="text-5xl md:text-6xl bg-clip-text font-bold tracking-tighter mt-10">
          Thinking outside the box.
        </h1>
        <p className="mt-4">
          As a developer, I bring a unique approach to project design and
          development, seamlessly blending distinct libraries and methodologies
          to create innovative and dynamic solutions.
        </p>
        <img src={cat} className="w-[350px] md:hidden lg:hidden mt-12" />
      </div>
    </div>
  );
};

export default Who;
