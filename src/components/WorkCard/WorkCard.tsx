
import { LuExternalLink } from "react-icons/lu";

interface WorkCardProps {
  img: string;
  alt: string;
  link: string;
  linkText: string;
  title: string;
  company: string;
  duration: string;
}

function WorkCard({ img, title, company, duration, alt, link, linkText }: WorkCardProps) {
  return (
    <div className="w-full h-[307px] bg-base-100 shadow-sm rounded-lg p-6 mb-6 relative cursor-grab">
        <picture className="block w-20 h-20 mb-4 p-2 bg-base-200 rounded-xl">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-contain rounded-lg"
          />
        </picture>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-base font-semibold text-accent mb-1">{company}</p>
        <p className="text-sm text-neutral-content">{duration}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-1 absolute bottom-6">{linkText} <LuExternalLink /></a>
    </div>
  )
}

export default WorkCard;