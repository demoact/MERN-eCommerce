import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7">
          <p>
            Amazona is a platform for users where they can purchase products
            after login. They can see their orders.
          </p>
          <p>They can also delete their orders.</p>
        </div>
        <div className="col-sm-5">
          <img
            src="../../images/about/author.png"
            alt="Author"
            className="my-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
