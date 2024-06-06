const MagazinePage = ({ data }) => {
  return (
    <div className="font-sans bg-gray-100 text-black">
      <div className="container mx-auto p-4 space-y-8">
        {/* Main Title Section */}
        <div
          className="relative col-span-2 text-center page"
          style={{ fontFamily: "dd-medium" }}
        >
          <img
            src={data.bgImagePath}
            alt="Background Image"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50">
            <h1 className="text-4xl font-bold mb-4 text-black">
              {data.mainTitle}
            </h1>
            <h2 className="text-2xl italic mb-8 text-purple-900">
              {data.mainSubtitle}
            </h2>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 page">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">
              {data.introName}
            </h2>
            <p className="text-lg mb-8">{data.introContent}</p>
          </div>
        </div>

        {/* Chapter One Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 page">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-900">
              {data.chapterOneName}
            </h2>
            <p className="text-lg mb-8">{data.chapterOneContent}</p>
          </div>
          <div>
            <img
              src={data.chapterOneImage}
              alt="Server-Side Rendering"
              className="mb-8 shadow-lg"
            />
          </div>
        </div>

        {/* Chapter Two Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 page">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">
              {data.chapterTwoName}
            </h2>
            <p className="text-lg mb-8">{data.chapterTwoContent}</p>
          </div>
          <div>
            <img
              src={data.chapterTwoImage}
              alt="Static Site Generation"
              className="mb-8 shadow-lg"
            />
          </div>
        </div>

        {/* Chapter Three Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 page">
          <div className="md:col-span-1">
            <img
              src={data.chapterThreeImage}
              alt="Incremental Static Regeneration"
              className="mb-8 shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">
              {data.chapterThreeName}
            </h2>
            <p className="text-lg mb-8">{data.chapterThreeContent}</p>
          </div>
        </div>

        {/* Chapter Four Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 page">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-900">
              {data.chapterFourName}
            </h2>
            <p className="text-lg mb-8">{data.chapterFourContent}</p>
          </div>
          <div>
            <img
              src={data.chapterFourImage}
              alt="Client-Side Routing and Navigation"
              className="mb-8 shadow-lg"
            />
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 page">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4 text-purple-900">
              {data.conclusionName}
            </h2>
            <p className="text-lg mb-8">{data.conclusionContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
