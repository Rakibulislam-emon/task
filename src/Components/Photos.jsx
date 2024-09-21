export default function Photos() {
    return (
      <div className="max-w-screen-2xl mx-auto gap-4 grid grid-cols-1 lg:grid-cols-2 gap-x-[600px]">
        <div className="relative h-[600px] w-full lg:w-[calc(100%-460px)]">
          {/* For small screens */}
          <div className="block lg:hidden">
            <div className="border-black border bg-[#5e53de] text-black w-full h-[274px] rounded-3xl mb-4 flex items-center justify-center">
              <p className="text-3xl">photo 1</p>
            </div>
            <div className="border-black border bg-[#a5a4b3] text-black w-full h-[217px] rounded-3xl mb-4 flex items-center justify-center">
              <p className="text-3xl">photo 2</p>
            </div>
            <div className="border-black border bg-[#e45a5b] text-black w-full h-[238px] rounded-3xl flex items-center justify-center">
              <p className="text-3xl">photo 3</p>
            </div>
          </div>
  
          {/* For large screens */}
          <div className="hidden lg:block">
            <div className="border-black border absolute bg-[#5e53de] top-0 left-10 text-black w-[275px] h-[274px] rounded-3xl flex items-center justify-center">
              <p className="text-3xl text-center">photo 1</p>
            </div>
            <div className="border-black border absolute bg-[#a5a4b3] text-black top-20 left-[400px] rounded-3xl w-[208px] h-[217px] flex items-center justify-center">
              <p className="text-3xl text-center">photo 2</p>
            </div>
            <div className="border-black border bg-[#e45a5b] text-black absolute bottom-0 rounded-3xl left-40 w-[228px] h-[238px] flex items-center justify-center">
              <p className="text-3xl text-center">photo 3</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[460px] p-4 z-10 mt-40 w-full h-[345px] text-black lg:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellendus minima? Reprehenderit fugit autem harum temporibus incidunt, iusto eius, nesciunt blanditiis vel quis atque aliquam dolorem. Sint soluta natus, inventore autem deserunt velit iure quis in! Rerum quia tempora expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio incidunt dicta corporis, debitis, laborum fuga mollitia, non cumque quis qui veniam itaque! Corporis obcaecati culpa minus magni libero perspiciatis, cumque molestias ducimus ullam dolores fugiat sit illum aut voluptate provident reiciendis earum expedita nostrum? Iure voluptatibus quo provident necessitatibus?
        </div>
      </div>
    );
  }
  