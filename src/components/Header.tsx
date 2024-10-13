import HeaderSearch from "../components/HeaderSearch";
import CourseExploration from "../assets/Course Exploration.png";
import addOne from "../assets/banner1.png";
import addTwo from "../assets/Screenshot_1.png";
import NavigationTile from "../components/NavigationTile";
import Container from "../components/Container";
const Header = () => {
  const tilesData = [
    {
      value: 90,
      title: "Scholarships",
    },
    {
      value: 1099,
      title: "New Admissions",
    },
    {
      value: 209,
      title: "Total Institutions",
    },
    {
      value: 333,
      title: "Hostels",
    },
  ];
  return (
    <header className="bg-header-pattern bg-capture  min-h-screen flex flex-col items-center pt-[130px] bg-no-repeat" style={{backgroundSize:"100%"}}>
      <h1 className="text-white text-[55px] text-center mb-2">
        Connecting People to Education
      </h1>
      <HeaderSearch />
      <h3 className="mt-[27px] text-lg text-[#EDEDED]">
        Apply to Any University, College, School and Hostel
      </h3>
      <div className="w-full mt-[84px] bg-header-banner bg-cover">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <div className="max-w-[600px] w-full mx-3 mb-3">
            <div className=" pr-[100%] pb-[69%] relative">
              <img
                src={CourseExploration}
                className="w-full absolute top-0 left-0 h-full"
                alt="Course Exploration"
              />
              <h3 className="text-[40px] font-bold text-white absolute left-[32px] bottom-0 h-[82px]">
                Course Exploration
              </h3>
            </div>
          </div>
          <div className="max-w-[444px] w-full mb-3">
            <img src={addOne} alt="addOne" />
            <div className="text-white text-xs mt-6">
              Advertisement.<span className="text-[#00FFB6]">Why the ads?</span>
            </div>
          </div>
          <div className="mb-3">
            <img src={addTwo} alt="addTwo" />
            <div className="text-white text-xs mt-6">
              Advertisement.<span className="text-[#00FFB6]">Why the ads?</span>
            </div>
          </div>
        </div>
        <Container>
          <div className="flex mt-[114px] w-full gap-8 mx-auto justify-center lg:justify-between flex-wrap">
            {tilesData.map((tile) => (
              <div key={tile.title} className="max-w-[300px] w-full mb-8">
                <div className="w-0 h-0 p-[50%] relative bg-[#FFFFFF63]">
                  <h3 className="xl:text-[96px] lg:text-[84px] text-[96px] text-white xl:top-[72px] lg:top-[58px] top-[32px] left-0 w-full text-center absolute">
                    {tile.value}
                  </h3>
                  <h5 className="text-white xl:text-[36px] lg:text-[28px] text-[36px] bottom-[29px] left-0 w-full text-center absolute">
                    {tile.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <NavigationTile />
      </div>
    </header>
  );
};

export default Header;
