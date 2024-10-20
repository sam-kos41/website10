const ImageCarousel = ({ image }) => {
  return (
    <div className="relative">
      {/* Display a static image */}
      <img
        src={image}
        alt="carousel"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};
