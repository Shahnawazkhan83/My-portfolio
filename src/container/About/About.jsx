import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span> a high-quality software can be </span> <br />a key differentiator for a   <span>business in a competitive market.</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description2}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);


// import { images } from '../../constants';

// const abouts = [
//   { title: 'Web Development', description: 'I am a good Web Developer', imgUrl: images.about01},
//   { title: 'Smart Contract Development', description: 'I am a decent Smart Contact Developer', imgUrl: images.about02},
//   { title: 'NFT Marketplace Development', description: 'I am a good web developer', imgUrl: images.about03},
//   { title: 'Web Design', description: 'I am a good Web Designer', imgUrl: images.about04}
// ];