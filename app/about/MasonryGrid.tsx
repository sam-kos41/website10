import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryGrid() {
  // Static array of images
  const images = [
    '/path/to/photo1.jpg',
    '/path/to/photo2.jpg',
    '/path/to/photo3.jpg',
    '/path/to/photo4.jpg',
  ];

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`photo-${index}`} className="image-item" />
        </div>
      ))}
    </Masonry>
  );
}
