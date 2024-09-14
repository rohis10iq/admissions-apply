import { Link } from "react-router-dom";
import PartnerBanner from "../assets/Group 31.png";
import institutions from "../assets/institutions.png";
import jobandinternship from "../assets/job and internship.png";
import startupgrants from "../assets/startup and grants.png";
import Container from "./Container";
import CourseCard from "./CourseCard";
const Partners = () => {
  const partnerData = [
    {
      title: "Institutions",
      desc: "( University, Institute, College , School, Academy ) Apply for Partner here",
      image: institutions,
    },
    {
      title: "Jobs and Internships",
      desc: "Be a partner for Jobs and Internships",
      image: jobandinternship,
    },
    {
      title: "Startups & Grants Opportunity",
      image: startupgrants,
    },
  ];
  return (
    <section>
      <Container>
        <div className="flex items-center mr-5 flex-col lg:flex-row">
          <h3 className="text-[64px] ">
            <span className="font-bold text-[#2EC89C] mr-2">Our</span>
            Partners
          </h3>
          <Link to='/partner/new-partnership'>
            <img src={PartnerBanner} alt="PartnerBanner" />
          </Link>
        </div>
        <div className="flex flex-wrap flex-col lg:flex-row mx-auto gap-5 mt-7">
          {partnerData.map((obj) => (
            <CourseCard
              key={obj.title}
              title={obj.title}
              image={obj.image}
              desc={obj.desc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
