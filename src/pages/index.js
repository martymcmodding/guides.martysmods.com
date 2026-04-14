import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import LazyImage from '../components/lazyimage';
import HeroShaderCanvas from '../components/HeroShaderCanvas';

const HeroSection = () => (
  <section className={styles.hero}>
    <HeroShaderCanvas className={styles.heroShader} fragmentShaderUrl="/shaders/hero.frag" />
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Marty's Mods Guides
        </h1>
        <p className={styles.heroSubtitle}>
          Everything you need to set up ReShade, install shaders, and get the most out of your visuals.
        </p>
        <div className={styles.heroButtons}>
          <a href="/reshade/downloading" className={styles.primaryButton}>
            <LazyImage 
              src="https://assets.martysmods.com/landingpage/ReShadeColorWheel.svg" 
              alt="ReShade Logo" 
              className={styles.buttonLogo}
              width={40}
              height={40}
            />
            <span>ReShade</span>
          </a>
          <a href="/shaders/immerse/launchpad" className={styles.secondaryButton}>
            <LazyImage 
              src="https://assets.martysmods.com/landingpage/MartysModsLogoSmall.webp" 
              alt="Marty's Mods Logo" 
              className={styles.buttonLogo}
              width={40}
              height={40}
            />
            <span>Our Shaders</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FeatureText = ({ title, description }) => (
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
  </div>
);

const installMethods = [
  {
    name: "ReShade Setup Tool",
    description: "Guided installer that handles everything automatically",
    accent: "#22c55e",
    link: "/reshade/installing/setuptool",
  },
  {
    name: "Manual Installation",
    description: "Place ReShade files yourself for full control over the setup",
    accent: "#0099fa",
    link: "/reshade/installing/reshademanualinstall",
  },
  {
    name: "Shader Installation",
    description: "Manually install shader packs without the Setup Tool",
    accent: "#a855f7",
    link: "/reshade/installing/reshademanualshaderinstall",
  },
  {
    name: "Addon Installation",
    description: "Extend ReShade by installing addons yourself",
    accent: "#f59e0b",
    link: "/reshade/installing/reshademanualaddoninstall",
  },
];

const shaderTiers = [
  {
    name: "iMMERSE",
    description: "A foundational set of high-quality effects, available at no cost",
    accent: "#0099fa",
    link: "/shaders/immerse/launchpad",
  },
  {
    name: "METEOR",
    description: "Physically-based cinematic effects for dramatic in-game visuals",
    accent: "#0099fa",
    link: "/shaders/meteor/chromaticabberation",
  },
  {
    name: "iMMERSE Pro",
    description: "A deeper set of effects for users who want more control over their look",
    accent: "#a855f7",
    link: "/shaders/immersepro/clarity",
  },
  {
    name: "iMMERSE Ultimate",
    description: "The full suite combining iMMERSE Pro with exclusive advanced effects",
    accent: "#f59e0b",
    link: "/shaders/immerseultimate/convolutionbloom",
  },
];

const FeatureVisual = ({ title, visualFirst }) => (
  <div
    className={
      visualFirst
        ? `${styles.featureVisual} ${styles.featureVisualAlignStart}`
        : styles.featureVisual
    }
  >
    {title === "ReShade" ? (
      <div className={styles.reshadeLogoContainer}>
        <img
          src="/img/ReShadeMainLogo.svg"
          alt="ReShade Logo"
          className={styles.reshadeLogo}
        />
      </div>
    ) : title === "Shader Collections" ? (
      <div className={styles.visualPanel}>
        <div className={styles.visualHeader}>
          <span className={styles.visualTitle}>{title}</span>
        </div>
        <div className={styles.tierGrid}>
          {shaderTiers.map((tier) => (
            <a
              key={tier.name}
              href={tier.link}
              className={styles.tierCard}
              style={{ '--tier-accent': tier.accent }}
            >
              <div className={styles.tierCardHeader}>
                <span className={styles.tierName}>{tier.name}</span>
              </div>
              <p className={styles.tierDescription}>{tier.description}</p>
            </a>
          ))}
        </div>
      </div>
    ) : (
      <div className={styles.visualPanel}>
        <div className={styles.visualHeader}>
          <span className={styles.visualTitle}>{title}</span>
        </div>
        <div className={styles.tierGrid}>
          {installMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              className={styles.tierCard}
              style={{ '--tier-accent': method.accent }}
            >
              <div className={styles.tierCardHeader}>
                <span className={styles.tierName}>{method.name}</span>
              </div>
              <p className={styles.tierDescription}>{method.description}</p>
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

const FeatureSection = ({ title, description, visualTitle, visualFirst = false }) => (
  <section className={styles.featureSection}>
    <div className={styles.featureContainer}>
      {visualFirst ? (
        <>
          <FeatureVisual title={visualTitle} visualFirst />
          <FeatureText title={title} description={description} />
        </>
      ) : (
        <>
          <FeatureText title={title} description={description} />
          <FeatureVisual title={visualTitle} />
        </>
      )}
    </div>
  </section>
);

const features = [
  {
    title: "ReShade",
    description: [
      "ReShade hooks into your game's rendering API (DirectX, OpenGL, or Vulkan) and intercepts the final rendered frame before it reaches your monitor. From there, shaders can sample, manipulate, and recompose the image entirely in GPU memory, applying effects like depth of field, color grading, ambient occlusion, and more.",
      "Because it operates after the game has already produced its output, ReShade works without touching any game files and is compatible with virtually any 3D application."
    ],
    visualTitle: "ReShade",
  },
  {
    title: "Installing ReShade",
    description: [
      "Whether you are installing ReShade for the first time or setting it up on a new game, our guides cover every method from start to finish.",
      "From the automated Setup Tool to fully manual installs, shader packs, and addons, each guide walks you through exactly what to do with no guesswork required.",
    ],
    visualTitle: "Installation",
    visualFirst: true,
  },
  {
    title: "Shaders",
    description: [
      "Marty's Mods produces some of the most widely used shader collections in the ReShade ecosystem, ranging from free foundational effects to advanced techniques built for enthusiasts and power users.",
      "Whether you want a subtle visual lift or a complete overhaul of your game's look, there is a collection that fits your needs and budget.",
    ],
    visualTitle: "Shader Collections",
  }
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description="Your extensive guide site for all things ReShade."
    >
      <HeroSection />
      <div className={styles.featureSections}>
        {features.map((feature, index) => (
          <FeatureSection key={index} {...feature} />
        ))}
      </div>
    </Layout>
  );
}