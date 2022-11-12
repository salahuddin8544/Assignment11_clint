import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src={person}  alt="" className="max-w-sm rounded-lg shadow-2xl w-3/4 h-full" />
    <imgs src={parts} alt="" className="max-w-sm rounded-lg shadow-2xl w-3/5 mr-5 top-1/2 absolute" />
    </div>
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold"> We are qulifed <br />
      & expericne <br />
      salahuddinds
      </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Info</button>
    </div>
  </div>
</div>
    );
};

export default About;