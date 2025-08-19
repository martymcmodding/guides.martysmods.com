import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '../components/herobanner/hero.js';

export default function Home() 
{
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your extensive guide site for all things ReShade.">
      <Hero/>
    </Layout>
  );
}