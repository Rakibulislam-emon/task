export default function Boxes() {
    return (
      <div className="lg:mb-80 bg-white">
        <div
          className="bg-[#363636]  lg:h-80 relative"
          style={{
            borderRadius: '50% 50% 50% 50% / 0% 0% 100% 100%',
            border: '120px solid transparent', // You can set a color for the border here
          }}
        >
          {/* Add your content here */}
       <div className="lg:block hidden bg-white">
              <div className="flex  gap-x-10 lg:flex-wrap   justify-center items-center absolute top-0 left-0 right-0 bottom-0 mx-auto ">
                <div className="bg-[#c02424]  w-[300px] h-[300px] border-[120px] border-transparent transition-transform duration-300 hover:scale-125">
                  {/* First Box */}
                </div>
      
                <div className="bg-[#156fe8] w-[260px] h-[260px] border-[120px] border-transparent transition-transform duration-300 hover:scale-125">
                  {/* Second Box */}
                </div>
      
                <div className="bg-[#e76666] w-[300px] h-[300px] border-[120px] border-transparent transition-transform duration-300 hover:scale-125">
                  {/* Third Box */}
                </div>
      
                <div className="bg-[#a0fcd9] w-[260px] h-[260px] border-[120px] border-transparent transition-transform duration-300 hover:scale-125">
                  {/* Fourth Box */}
                </div>
              </div>
       </div>
        </div>
      </div>
    );
  }
  