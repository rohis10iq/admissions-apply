import eventOne from "../assets/blog1.png";
import eventTwo from "../assets/blog2.png";
import eventThree from "../assets/blog3.png";
import Container from "./Container";
const Events = () => {
  const eventData = [
    {
      image: eventOne,
      description:
        "In March 2023, CISCO BRAINS Institute Peshawar, in collaboration with Admissionsuc, held an event with the Chairman of HEC as the chief guest, along with the CISCO Country Director and the Rector of BRAINS. ",
    },
    {
      image: eventTwo,
      description:
        "In 2018-19, AUSC sent 70 students in the first round and 100 students in the second round on scholarships for MS programs to Sichuan University of Science and Technology in China.",
    },
    {
      image: eventThree,
      description:
        "In May 2024, the Department of Management Sciences at COMSATS University Islamabad, Attock Campus, hosted an event for startups. ",
    },
  ];
  return (
    <section className="">
      <Container>
        <div className="bg-primary px-4 py-3 mt-5 mb-4">
          <h3 className=" text-[48px] text-[#EDEDED] font-bold">
            Easy Steps for Admission
          </h3>
          <div className="text-[24px] font-bold text-[#EDEDED] gap-5 items-center flex flex-col xl:flex-row ">
            <div>1. Choose Course and Institute</div>
            <div>2. Submit Application</div>
            <div className="mr-5">3. After Confirmation Pay Online</div>
            <div className="text-[#00FFB6] text-[32px] font-bold">
              “Apply Now”
            </div>
          </div>
        </div>
        <h3 className="text-[64px] mb-7">
          <span className="font-bold text-[#2EC89C]">Events</span>
          and Open Days
        </h3>
        <div className="flex flex-wrap flex-col lg:flex-row  gap-5 mt-7">
          {eventData.map((item, index) => (
            <div key={`blog-${index}`} className="flex-1 mb-5">
              <img
                src={item.image}
                alt="blog"
                className="w-full object-cover"
              />
              <div className="pt-4">
                <div className="text-[18px] text-black">{item.description}</div>
                <div className="text-[18px] text-[#2EC89C]">Read More &gt;</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;
