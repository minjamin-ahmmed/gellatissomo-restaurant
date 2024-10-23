import chefImage from '../../assets/chef-hero.jpg'
const Banner = () => {
    return (
        <div
  className="hero h-[500px] lg:h-auto lg:min-h-screen "
  style={{
    backgroundImage: `url(${chefImage})`,
    borderRadius:"12px",
  }}>
  <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-full lg:w-9/12">
      <h1 className="mb-5 text-3xl  lg:text-5xl text-white font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <div className='flex items-center gap-5 justify-center'>
      <button className="btn bg-[#0BE58A] text-black font-bold rounded-3xl border-none px-5">Explore Now</button>
      <button className="btn bg-transparent text-white font-bold border border-white rounded-3xl px-5">Our Feedback</button>

      </div>
      
    </div>
  </div>
</div>
    );
};

export default Banner;