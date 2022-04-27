import RoundedBoxWithTitle from "../Contact/components/RoundBox"

const AboutPage = () => {
  return (
    <>
    <div className="minHeight">
      <RoundedBoxWithTitle
        title="About Studenthub"
        text="StudentHub is a mandatory group project in the course '02363 - Front End Web Technology' 
        (spring 2022), at the Technical University of Denmark (DTU). The project is created by 5 DTU students 
        based in Copenhagen (Denmark), who's studying IT and Economics and Software Technology, respectively."
      />
    </div>
    </>
  )
};

export default AboutPage;