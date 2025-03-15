import { useState } from "react";
import NavBar from "../components/NavComps/NavBar";
import { SliderComponent } from "../components/Slider";
import { committeeMembers } from "../TeamMembers";
import Footer from "../components/Footer";

const Teams = () => {
  const [year, setYear] = useState<number>(2025);
  const currentYearData = committeeMembers[year];
  const handleYearChange = (newYear: number) => {
    setYear(newYear);
  };

  return (
    <>
      <NavBar isDark={false} />
      <div className="flex items-center justify-center">
        <p className="text-3xl text-[#FFA700]">Meet our Team</p>
      </div>
      <div className="flex items-center justify-center mt-14">
        <SliderComponent year={year} onYearChange={handleYearChange} />
      </div>
      <div className="font-poppins">
        {/* Executives Section */}
        <div className="flex items-center justify-center mt-10 mb-10">
          <p className="text-3xl text-[#FFA700]">Executives</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
            {currentYearData?.executives.map((exec, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={exec.imageUrl || '/placeholder-image.jpg'}
                  alt={exec.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <p className="font-semibold text-black text-lg">{exec.name}</p>
                <p className="text-gray-600 text-sm">{exec.title}</p>
              </div>
            ))}
          </div>
        </div>
        
          <>
            {/* Media Subcommittee */}
            {currentYearData?.subcommittees?.some(member => member.title.includes("Media")) && (
              <div className="flex items-center justify-center mt-10 mb-10">
                <p className="text-2xl text-[#FFA700]">Media Subcommittee</p>
              </div>
            )}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
                {currentYearData?.subcommittees
                  ?.filter(member => member.title.includes("Media"))
                  .map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <img
                        src={member.imageUrl || '/placeholder-image.jpg'}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <p className="font-semibold text-black text-lg">{member.name}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Events Subcommittee */}
            {currentYearData?.subcommittees?.some(member => member.title.includes("Events")) && (
              <div className="flex items-center justify-center mt-10 mb-10">
                <p className="text-2xl text-[#FFA700]">Events Subcommittee</p>
              </div>
            )}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
                {currentYearData?.subcommittees
                  ?.filter(member => member.title.includes("Events"))
                  .map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <img
                        src={member.imageUrl || '/placeholder-image.jpg'}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <p className="font-semibold text-black text-lg">{member.name}</p>
                    </div>
                  ))}
              </div>
            </div>
            
            {/* Catering Subcommittee */}
            {currentYearData?.subcommittees?.some(member => member.title.includes("Catering")) && (
              <div className="flex items-center justify-center mt-10 mb-10">
                <p className="text-2xl text-[#FFA700]">Catering Subcommittee</p>
              </div>
            )}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
                {currentYearData?.subcommittees
                  ?.filter(member => member.title.includes("Catering"))
                  .map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <img
                        src={member.imageUrl || '/placeholder-image.jpg'}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <p className="font-semibold text-black text-lg">{member.name}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Logistics Subcommittee */}
            {currentYearData?.subcommittees?.some(member => member.title.includes("Logistics")) && (
              <div className="flex items-center justify-center mt-10 mb-10">
                <p className="text-2xl text-[#FFA700]">Logistics Subcommittee</p>
              </div>
            )}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
                {currentYearData?.subcommittees
                  ?.filter(member => member.title.includes("Logistics"))
                  .map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <img
                        src={member.imageUrl || '/placeholder-image.jpg'}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <p className="font-semibold text-black text-lg">{member.name}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* General Subcommittee */}
            {currentYearData?.subcommittees?.some(member => member.title.includes("General")) && (
              <div className="flex items-center justify-center mt-10 mb-10">
                <p className="text-2xl text-[#FFA700]">General Subcommittee</p>
              </div>
            )}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg w-full">
                {currentYearData?.subcommittees
                  ?.filter(member => member.title.includes("General"))
                  .map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <img
                        src={member.imageUrl || '/placeholder-image.jpg'}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <p className="font-semibold text-black text-lg">{member.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          </>

      </div>
      <div className="mt-56">
        <Footer />
      </div>
    </>
  );
};

export default Teams;

