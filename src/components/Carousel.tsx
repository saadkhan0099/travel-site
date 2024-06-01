
const Carousel = () => {
  const sliderData = [
    {
      url: "https://unsplash.com/photos/tQT5KiZSKpE",
    },
    { url: "https://unsplash.com/photos/3E2zM9IF-bU" },
    { url: "https://unsplash.com/photos/SHqEPeNdOb0" },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      {sliderData.map((item, index) => (
        <div key={index} className="slider-item">
          <img src={item.url} alt={`Slider ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
