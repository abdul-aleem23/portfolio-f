import Cards from "./Cards";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full text-white flex flex-col justify-evenly"
    >
      <p className="text-4xl md:text-4xl lg:text-4xl my-16 mx-5 bg-clip-text font-bold">
        &#60;Projects &#47;&#62;
      </p>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8 ">
          <Cards
            gitLink="https://github.com/abdul-aleem23/todoapp_frontend"
            siteLink="https://todoapp-frontend-mu.vercel.app/"
            title="Full Stack To Do WebApp"
            description="Developed a MERN-stack to-do web application with user authentication using JWTs. Enable users to log in, sign up, add, and delete tasks. Real-time task updates and synchronization."
            language="React Node.js MongoDB Sass"
          />

          <Cards
            gitLink="https://github.com/abdul-aleem23/"
            title="Landing page for a client"
            description="Built responsive landing page for Dubai marketing agency with React & Tailwind CSS. Employed libraries, like email.js, react-hot-toast, also gained business and client interaction skills."
            language="React Tailwind"
          />

          <Cards
            gitLink="https://github.com/abdul-aleem23/reconnect"
            siteLink="https://reconnect-fam.netlify.app/"
            title="Reconnect. (Chat-app)"
            description="Developed a chat application, Implemented user authentication with Google sign-in, displays chat messages, user names, and chatroom names  for effective
            communication."
            language="React Tailwind Firebase"
          />

          <Cards
            gitLink="https://github.com/abdul-aleem23/weatherApp"
            title="Weather WebApp"
            description="allows users to search for the current weather of a specific city, using OpenWeather Api."
            language="Vanilla JavaScript CSS"
          />
          <Cards
            gitLink="https://github.com/abdul-aleem23/youtubeClone"
            title="YouTube (Clone)"
            description="Developed a responsive YouTube clone using HTML and CSS exclusively. Gained insights into complex CSS principles and techniques."
            language="HTML CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
