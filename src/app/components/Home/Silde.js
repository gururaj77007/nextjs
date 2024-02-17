const Slide = ({ image, altText, title, description }) => {
  return (
    <div>
      <img src={image} alt={altText} className="h-64 w-full object-cover" />
      <div className="slide-content text-center px-4 py-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Slide;
