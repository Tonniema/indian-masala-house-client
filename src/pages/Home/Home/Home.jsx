import React from 'react';

const Home = () => {
    return (
        <div>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img src="https://t3.ftcdn.net/jpg/02/47/59/40/240_F_247594016_53pbhkNhJzfWnndxx5V2RTjXEVePCx37.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/02/01/19/37/240_F_201193784_V3IY8P0EajIqGl2R1D9Z4iy7dwFXKrdg.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://t3.ftcdn.net/jpg/01/36/37/56/240_F_136375636_czqrHJVLsyGn5i1JyyF8Klu9M6iKFx8i.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://t4.ftcdn.net/jpg/02/53/03/45/240_F_253034599_I9TTZnUx6YIE8AtTkdAoFlXnNlOKKwMT.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;