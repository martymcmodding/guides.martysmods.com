import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './hero.module.css';

export default function Hero() 
{
  const { siteConfig } = useDocusaurusContext();
  const bannerUrl = 'https://assets.martysmods.com/headers/herobanner.webp';

  return (
    <section
      className={styles.hero}
      aria-label="MartysModsHeroBanner"
      style=
    {
      {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${bannerUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }
    }
    >
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Marty's Mods Guides</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/reshade/downloading">
              ReShade
            </Link>
            <Link className="button button--secondary button--lg" to="/shaders/immerse/launchpad">
              Shaders
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}