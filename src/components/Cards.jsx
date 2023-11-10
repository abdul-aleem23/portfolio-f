import { CiFolderOn } from "react-icons/ci";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";

const Cards = ({ title, description, language, gitLink, siteLink }) => {
  return (
    <div className="transition-transform transform hover:-translate-y-1">
      <div className="bg-zinc-900 w-[350px] h-[300px] flex flex-col">
        <div className="flex flex-row justify-between items-center m-4">
          <CiFolderOn size={40} className="" color="rgb(240 171 252)" />
          <div className="flex items-center gap-4">
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <AiOutlineGithub
                size={25}
                color="rgb(212 212 216)"
                className="hover:bg-zinc-700 cursor-pointer rounded-lg"
              />
            </a>
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              <RxOpenInNewWindow
                size={20}
                className="hover:bg-zinc-700 cursor-pointer rounded-md"
                color="rgb(212 212 216)"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col m-4">
          <div className="font-bold bg-clip-text h-8">{title}</div>
          <div className="text-[14px] text-zinc-400 mt-2 h-[130px]">
            {description}
          </div>
          <div className="text-[12px] text-zinc-500 h-5 mt-2">{language}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
