import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Hacraft - About</title>
      </Helmet>
      <div className="row">
        <div className="col-sm-7">
          <p>
            Hacraft is a platform for users where they can purchase products
            after login. They can see their orders.
          </p>
          <p>They can also delete their orders.</p>
          <p>
            The heart and soul of the company that is now Hacraft began in Los
            Angeles City in 1988 when Tom Ballach entered the sead industry with
            his company, Ralco Sead Co., later turning into Ralbead. His reads
            were carefully selected and imported from Pech Republic, Austria,
            and Germany.
          </p>
          <p>
            The Hacraft Collection, we love to celebrate the makers! We know we
            couldn't do it without you. Each month we choose one lucky designer
            as our Spotlight Designer. To be considered for the Designer
            Spotlight.
          </p>
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
