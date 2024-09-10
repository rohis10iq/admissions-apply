import Admission from "../assets/WhatsApp Image 2024-06-03 at 6.31.png";
import findCity from "../assets/WhatsApp Image 2024-06-03 at 7.06.png";
import scholarships from "../assets/WhatsApp Image 2024-06-06 at 8.53.png";
import Container from "./Container";
import CourseCard from "./CourseCard";
const NavigationTile = () => {
  const tileData = [
    {
      title: "Admission Application",
      img: Admission,
      description:
        "Apply to any course and institution—university, college, or school. Find admission dates, schedules, fees, and more",
    },
    {
      title: "Find Your City",
      img: findCity,
      description:
        "Choose your city for admission to the best universities, colleges, schools, and hostels.",
    },
    {
      title: "Scholarships",
      img: scholarships,
      description:
        "Discover scholarships: merit-based, need-based, discounts, and loan assistance.",
    },
  ];
  return (
    <Container>
      <div className="flex mt-[120px] w-full gap-8 mx-auto justify-center flex-wrap mb-[80px] flex-col lg:flex-row">
        {tileData.map((obj) => (
          <CourseCard
            key={obj.title}
            image={obj.img}
            title={obj.title}
            desc={obj.description}
            //   cardSize="pr-[100%] pb-[62.5%]"
          />
        ))}
      </div>
    </Container>
  );
};

export default NavigationTile;
