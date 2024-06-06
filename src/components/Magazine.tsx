import { data } from "../utils/data";

const MagazinePage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="page">
            <h1 className="text-4xl font-bold mb-4">{data.mainTitle}</h1>
            <h2 className="text-2xl italic mb-8">{data.mainSubtitle}</h2>
            <img
              src={data.bgImagePath}
              alt="Background Image"
              className="mb-8 rounded-lg shadow-lg"
            />
          </div>
          <div className="page">
            <h2 className="text-3xl font-bold mb-4">{data.introName}</h2>
            <p className="text-lg mb-8">{data.introContent}</p>
          </div>
          <div className="page">
            <h2 className="text-3xl font-bold mb-4">{data.chapterOneName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-lg mb-8">{data.chapterOneContent}</p>
              <img
                src={data.chapterOneImage}
                alt="Server-Side Rendering"
                className="mb-8 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="page">
            <h2 className="text-3xl font-bold mb-4">{data.chapterTwoName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-lg mb-8">{data.chapterTwoContent}</p>
              <img
                src={data.chapterTwoImage}
                alt="Static Site Generation"
                className="mb-8 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="page">
            <h2 className="text-3xl font-bold mb-4">{data.chapterThreeName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-lg mb-8">{data.chapterThreeContent}</p>
              <img
                src={data.chapterThreeImage}
                alt="Incremental Static Regeneration"
                className="mb-8 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="page">
            <h2 className="text-3xl font-bold mb-4">{data.chapterFourName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-lg mb-8">{data.chapterFourContent}</p>
              <img
                src={data.chapterFourImage}
                alt="Client-Side Routing and Navigation"
                className="mb-8 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="page">
            <h2 className="text-3xl font-bold mb-4">{data.conclusionName}</h2>
            <p className="text-lg mb-8">{data.conclusionContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
