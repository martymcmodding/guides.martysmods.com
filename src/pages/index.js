import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HeroShader from '../components/heroshader';
import LazyImage from '../components/lazyimage';

const HeroSection = () => (
  <section className={styles.hero}>
    <HeroShader />
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Marty's Mods Guides
        </h1>
        <p className={styles.heroSubtitle}>
          Your comprehensive guide to ReShade and shaders.
        </p>
        <div className={styles.heroButtons}>
          <a href="/reshade/downloading" className={styles.primaryButton}>
            <LazyImage 
              src="https://assets.martysmods.com/landingpage/ReShadeLogoSmall.webp" 
              alt="ReShade Logo" 
              className={styles.buttonLogo}
              width={32}
              height={32}
            />
            <span>ReShade</span>
          </a>
          <a href="/shaders/immerse/launchpad" className={styles.secondaryButton}>
            <LazyImage 
              src="https://assets.martysmods.com/landingpage/MartysModsLogoSmall.webp" 
              alt="Marty's Mods Logo" 
              className={styles.buttonLogo}
              width={32}
              height={32}
            />
            <span>Our Shaders</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeatureSection = ({ title, description, buttonLink, buttonText, visualTitle, visualSubtitle, visualItems, visualFirst = false }) => (
  <section className={styles.featureSection}>
    <div className={styles.featureContainer}>
      {visualFirst ? (
        <>
          <FeatureVisual title={visualTitle} subtitle={visualSubtitle} items={visualItems} />
          <FeatureText title={title} description={description} buttonLink={buttonLink} buttonText={buttonText} />
        </>
      ) : (
        <>
          <FeatureText title={title} description={description} buttonLink={buttonLink} buttonText={buttonText} />
          <FeatureVisual title={visualTitle} subtitle={visualSubtitle} items={visualItems} />
        </>
      )}
    </div>
  </section>
);

const FeatureText = ({ title, description, buttonLink, buttonText }) => (
  <div className={styles.featureText}>
    <h2 className={styles.featureTitle}>{title}</h2>
    {Array.isArray(description) ? (
      description.map((desc, index) => (
        <p key={index} className={styles.featureDescription}>
          {desc}
        </p>
      ))
    ) : (
      <p className={styles.featureDescription}>{description}</p>
    )}
    <a href={buttonLink} className={styles.featureButton}>
      {buttonText}
    </a>
  </div>
);

const FeatureVisual = ({ title, subtitle, items }) => (
  <div className={styles.featureVisual}>
    <div className={styles.visualPanel}>
      <div className={styles.visualHeader}>
        <span className={styles.visualTitle}>{title}</span>
        <span className={styles.visualSubtitle}>{subtitle}</span>
      </div>
      <div className={styles.visualContent}>
        {items.map((item, index) => (
          <div key={index} className={styles.visualItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  const features = [
    {
      title: "ReShade",
      description: [
        "A powerful post-processing injector that enhances your games with real-time visual effects. Works seamlessly with DirectX, OpenGL, and Vulkan applications without modifying game files.",
        "Enhance your games with advanced visual effects, improved depth, and customizable post-processing."
      ],
      buttonLink: "/reshade/downloading",
      buttonText: "Learn more",
      visualTitle: "ReShade",
      visualSubtitle: "Post-Processing",
      visualItems: ["Work In Progress", "Work In Progress", "Work In Progress", "Work In Progress"],
      visualFirst: false
    },
    {
      title: "Installing ReShade",
      description: [
        "Get ReShade up and running in minutes with our comprehensive step-by-step installation guides. From the ReShade Setup Tool to manual installation, we cover all methods.",
        "Whether you're a beginner or advanced user, our guides walk you through every step of the installation process with detailed screenshots and troubleshooting tips."
      ],
      buttonLink: "/reshade/installing/reshadesetuptool",
      buttonText: "Learn more",
      visualTitle: "Installation",
      visualSubtitle: "Setup Guide",
      visualItems: ["ReShade Setup Tool", "Manual Installation", "Shader Installation", "Addon Installation"],
      visualFirst: true
    },
    {
      title: "Shaders",
      description: [
        "Explore our collection of high-quality shaders including iMMERSE, iMMERSE Pro, iMMERSE Ultimate, and METEOR. Each shader is crafted for maximum visual impact.",
        "Our shaders offer a range of visual improvements, from simple tweaks to more advanced effects like lighting, depth, and atmosphere."
      ],
      buttonLink: "/shaders/immerse/launchpad",
      buttonText: "Learn more",
      visualTitle: "Shader Collections",
      visualSubtitle: "Premium Quality",
      visualItems: ["iMMERSE", "iMMERSE Pro", "iMMERSE Ultimate", "METEOR"],
      visualFirst: false
    }
  ];
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Your extensive guide site for all things ReShade."
    >
      <HeroSection />
      
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </Layout>
  );
}