import AdmissionAdd from "../assets/program.png";
import banner from "../assets/Rectangle 6.png";
import BS from "../assets/bs.png";
import MS from "../assets/ms.png";
import CourseCard from "./CourseCard";
import shortCourse from "../assets/short courses.png";
import coachingAcademy from "../assets/coaching academy.png";
import testInterview from "../assets/test&interview.png";
import hostels from "../assets/hostels.png";
import roomssharing from "../assets/roomssharing.png";
import Container from "./Container";

const Courses = () => {
  return (
    <section>
      <div className="relative mt-[-16px]">
        <img src={AdmissionAdd} className="w-full" alt="AdmissionAdd" />
        <h2 className="px-5 ml-5 text-[24px] sm:text-[34px] md:text-[45px] lg:text-[54px] xl:text-[64px]  text-white bottom-[10px] absolute font-bold">
          International Admissions and Visa <br /> Application Support and Guide
        </h2>
      </div>
      <div className="relative">
        <img src={banner} alt="banner" className="absolute top-0 z-0 w-full" />
        <div className="z-10">
          <Container>
            <div className="flex flex-wrap flex-col lg:flex-row mx-auto gap-5 pt-[55px]">
              <CourseCard
                title="BS Programs"
                image={BS}
                desc="Explore BS (4 years), BA (4 years), Associate Degree (2
                    years), Professional Degrees (5 years): MBBS, BDS, DPT, LLB,
                    and more undergraduate programs."
                cardSize="pr-[100%] pb-[62.5%]"
              />
              <CourseCard
                title="MS & PhD Programs"
                image={MS}
                desc="Explore MS, M.Phil, PhD, and PostDoc programs. Find top
                    universities for research and scholarships."
                cardSize="pr-[100%] pb-[62.5%]"
              />
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row mx-auto gap-5 mt-[41px]">
              <CourseCard title="Short Courses" image={shortCourse} />
              <CourseCard title="Coaching Academy" image={coachingAcademy} />
              <CourseCard
                title="Test & Interview Preparation"
                image={testInterview}
              />
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row mx-auto gap-5 mt-[41px]">
              <CourseCard
                title="Hostels"
                image={hostels}
                cardSize="pr-[100%] pb-[62.5%]"
                subtitle="(Find Nearest Hostels)"
              />
              <CourseCard
                title="Room's Sharing"
                image={roomssharing}
                cardSize="pr-[100%] pb-[62.5%]"
                subtitle="(Find your room-mate)"
              />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Courses;
