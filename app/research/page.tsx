// Declare ImageCarousel above
const ImageCarousel = ({ image }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="carousel"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

const ResearchPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Sticky Navigation with Name and Links */}
      <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50 text-center">
        <div className="container mx-auto">
          {/* Name Section */}
          <h1 className="text-3xl font-bold">Samuel N. Koscelny</h1>

          {/* Navigation Links */}
          <div className="mt-4 space-x-8 font-sans text-lg flex justify-center">
            <a href="/" className="hover:text-[#2541B2] hover:underline">Home</a>
            <a href="/research" className="hover:text-[#2541B2] hover:underline underline">Research</a>
            <a href="/publications" className="hover:text-[#2541B2] hover:underline">Publications</a>
            <a href="/about" className="hover:text-[#2541B2] hover:underline">About</a>
            <a href="/cv" className="hover:text-[#2541B2] hover:underline">CV</a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="pt-32 py-16 px-4 lg:px-24 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-left">Research Projects</h1>

          {/* EASt Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">Ergonomics and Applied Statistics (EASt) Lab: Recent Projects - 
            <a href="https://cecas.clemson.edu/east/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 with Static Image */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ImageCarousel image="https://placehold.co/300x200?text=Chatbot+1" />
                <h3 className="text-xl font-bold mb-2">Bayesian Chatbot Models</h3>
                <p className="text-base">
                  Evaluated healthcare chatbot information presentation styles through Bayesian hierarchical regression. 
                </p>
              </div>

              {/* Project 2 with Static Image */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ImageCarousel image="https://placehold.co/300x200?text=Thematic+1" />
                <h3 className="text-xl font-bold mb-2">Thematic Analysis in Human-AI Interaction</h3>
                <p className="text-base">
                  Explored user experience and perceptions through thematic analysis of chatbot interactions. 
                </p>
              </div>

              {/* Project 3 with Static Image */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <ImageCarousel image="https://placehold.co/300x200?text=BigData+1" />
                <h3 className="text-xl font-bold mb-2">Big Data Healthcare Analytics</h3>
                <p className="text-base">
                  Investigated pediatric patient characteristics and outcomes using big data analytics.
                </p>
              </div>
            </div>
          </div>

          {/* HSEAS Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">Human-Systems Engineering and Applied Statistics (HSEAS) Lab: Past Project -     
            <a href="https://sites.google.com/view/hseas-lab/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a></h2>

            {/* Single Project with Static Image */}
            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
              <ImageCarousel image="https://placehold.co/300x200?text=Gesture+1" />
              <h3 className="text-xl font-bold mb-2">Gesture Study Research</h3>
              <p className="text-base">
                Natural gesture elicitation across different linguistic and cultural groups was explored, focusing on intuitive gestures in 3D systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default ResearchPage;
