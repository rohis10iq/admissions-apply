import { FC } from "react";

const CourseCard: FC<{
  image: string;
  title: string;
  desc?: string;
  subtitle?: string;
  cardSize?: string;
}> = ({ image, title, desc, subtitle, cardSize = "p-[50%]" }) => {
  return (
    <div className="flex-1 w-full mb-5">
      <div className={`${cardSize}  relative rounded-[50px]`}>
        <img
          src={image}
          className="w-full absolute left-0 top-0 object-cover"
          alt={title}
        />
        <div className="bottom-0 left-0 w-full absolute p-5 min-h-[136px]">
          <h3 className="text-[32px] text-white font-bold">{title}</h3>
          {desc && <p className="text-base text-white">{desc}</p>}
          {subtitle && <h4 className="text-[32px] text-white mt-[-10px]">{subtitle}</h4>}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
