import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import LazyImage from '../components/lazyimage';
import HeroShaderCanvas from '../components/HeroShaderCanvas';
import ImageComparisonSlider from '../components/ImageComparisonSlider';

const HeroSection = () => (
  <section className={styles.hero}>
    <HeroShaderCanvas className={styles.heroShader} fragmentShaderUrl="/shaders/hero.frag" />
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Marty's Mods Guides</h1>
        <p className={styles.heroSubtitle}>
          Your comprehensive guide to ReShade and shaders.
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
            <span>Get Started</span>
          </a>
          <a href="/shaders/immerse/launchpad" className={styles.secondaryButton}>
            <LazyImage
              src="https://assets.martysmods.com/landingpage/MartysModsLogoSmall.webp"
              alt="Marty's Mods Logo"
              className={styles.buttonLogo}
              width={40}
              height={40}
            />
            <span>Explore Shaders</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const quickLinks = [
  { label: 'Download ReShade', desc: 'Pick the right build and grab it from the source.', href: '/reshade/downloading' },
  { label: 'Install with the Setup Tool', desc: 'The official, step-by-step installer.', href: '/reshade/installing/setuptool' },
  { label: 'The ReShade GUI', desc: 'Every tab and control, explained.', href: '/reshade/gui/home' },
  { label: 'Depth Buffer', desc: 'Configure depth so 3D effects work.', href: '/reshade/depth' },
  { label: 'Load Order', desc: 'Order your shaders for the best result.', href: '/reshade/loadorder' },
  { label: 'Additional Guides', desc: 'API wrappers, file permissions, and more.', href: '/additionalguides/apiwrappers/dxvk' },
];

const HEADERS = 'https://assets.martysmods.com/headers/';
const featuredShaders = [
  { name: 'Launchpad', collection: 'iMMERSE', href: '/shaders/immerse/launchpad', img: HEADERS + 'launchpadheader.webp' },
  { name: 'MXAO', collection: 'iMMERSE', href: '/shaders/immerse/mxao', img: HEADERS + 'mxaoheader.webp' },
  { name: 'RTGI', collection: 'iMMERSE Pro', href: '/shaders/immersepro/rtgidiffuse', img: HEADERS + 'rtgiheader.webp' },
  { name: 'Solaris', collection: 'iMMERSE Pro', href: '/shaders/immersepro/solaris', img: HEADERS + 'solarisheader.webp' },
  { name: 'Convolution Bloom', collection: 'iMMERSE Ultimate', href: '/shaders/immerseultimate/convolutionbloom', img: HEADERS + 'ConvolutionBloomHeader.webp' },
  { name: 'ReLight', collection: 'iMMERSE Ultimate', href: '/shaders/immerseultimate/relight', img: HEADERS + 'ReLightHeader.webp' },
];

const QuickNav = () => (
  <section className={styles.homeSection}>
    <div className={styles.sectionInner}>
      <h2 className={styles.sectionTitle}>Start Here</h2>
      <p className={styles.sectionSubtitle}>
        Everything you need to get ReShade installed, configured, and dialed in.
      </p>
      <div className={styles.linkGrid}>
        {quickLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.linkCard}>
            <span className={styles.linkCardTitle}>{link.label}</span>
            <span className={styles.linkCardDesc}>{link.desc}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const CompareSection = () => (
  <section className={styles.homeSection}>
    <div className={styles.sectionInner}>
      <h2 className={styles.sectionTitle}>See the Difference</h2>
      <p className={styles.sectionSubtitle}>
        Drag the slider to compare a scene before and after ReShade.
      </p>
      <div className={styles.compareWrap}>
        <ImageComparisonSlider
          beforeImage="https://assets.martysmods.com/landingpage/landingPageShaderShowcaseOriginal.webp"
          afterImage="https://assets.martysmods.com/landingpage/landingPageShaderShowcaseReShade.webp"
          beforeLabel="Original"
          afterLabel="ReShade"
        />
      </div>
    </div>
  </section>
);

const ShaderShowcase = () => (
  <section className={styles.homeSection}>
    <div className={styles.sectionInner}>
      <h2 className={styles.sectionTitle}>Our Shaders</h2>
      <p className={styles.sectionSubtitle}>
        High-quality shaders from the iMMERSE and METEOR collections, each documented in full.
      </p>
      <div className={styles.shaderGrid}>
        {featuredShaders.map((shader) => (
          <a key={shader.href} href={shader.href} className={styles.shaderCard}>
            <div className={styles.shaderThumb}>
              <img src={shader.img} alt={shader.name} loading="lazy" />
            </div>
            <div className={styles.shaderMeta}>
              <span className={styles.shaderName}>{shader.name}</span>
              <span className={styles.shaderCollection}>{shader.collection}</span>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.sectionActions}>
        <a href="/shaders/immerse/launchpad" className={styles.featureButton}>Browse all shaders</a>
      </div>
    </div>
  </section>
);

const CommunityBand = () => (
  <section className={styles.homeSection}>
    <div className={styles.sectionInner}>
      <div className={styles.communityCard}>
        <div className={styles.communityMain}>
          <img
            className={styles.communityLogo}
            src="https://assets.martysmods.com/landingpage/MartysModsLogoSmall.webp"
            alt="Marty's Mods"
          />
          <div>
            <h2 className={styles.communityTitle}>Join the community</h2>
            <p className={styles.communityDesc}>
              Get help, talk shop, and stay up to date with the latest shaders.
            </p>
          </div>
        </div>
        <div className={styles.communityActions}>
          <a
            className={styles.communityBtn}
            href="https://discord.gg/wY49KMxjHT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Discord
          </a>
          <a
            className={styles.communityBtn}
            href="https://www.patreon.com/c/mcflypg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support on Patreon
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Your comprehensive guide to ReShade and shaders."
    >
      <HeroSection />
      <main className={styles.homeMain}>
        <QuickNav />
        <ShaderShowcase />
        <CompareSection />
        <CommunityBand />
      </main>
    </Layout>
  );
}
