import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ReShade',
    //Svg: require('@site/static/img/reshade_small_icon.svg').default,
    description: (
      <>
        <p>This guide site will be dedicated to the ins and outs of ReShade! Teaching you how to bob and weave through the technicals without all of the hassle.</p>
      </>
    ),
  },
  {
    title: 'Shaders',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        You can learn the various functions of shaders at a ground level and build up your knowledge and enhance the visual fidelity of your game!
      </>
    ),
  },
  {
    title: 'Community',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This guide will be currated and maintained by the ReShade and Marty's Mods community in order to ensure you get the best information possible.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className="featureSvg" />} {/* Ensuring SVG renders correctly */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}