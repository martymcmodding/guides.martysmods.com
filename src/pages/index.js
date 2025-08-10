import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Hero from '../components/Hero';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() 
{
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your extensive guide site for all things ReShade."
    >
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}