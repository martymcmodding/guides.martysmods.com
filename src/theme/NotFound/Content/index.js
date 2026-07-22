import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import HeroShaderCanvas from '@site/src/components/HeroShaderCanvas';
import styles from './styles.module.css';

export default function NotFoundContent({ className }) {
  return (
    <main className={clsx(styles.notFound, className)}>
      <HeroShaderCanvas
        className={styles.notFoundShader}
        fragmentShaderUrl="/shaders/404.frag"
      />
      <div className={clsx('container', styles.notFoundInner)}>
        <div className="row">
          <div className="col col--12">
            <Heading as="h1" className="hero__title text--center">
              Page Not Found
            </Heading>
            <div className={styles.terminal}>
              <div className={styles.asciiWrap}>
                <pre className={styles.ascii}>
                  {String.raw
`        a8      ,a888a,            a8
      ,d88    ,8P"   "Y8,        ,d88
     a8P88   ,8P       Y8,      a8P88
   ,d8" 88   88         88    ,d8" 88
  a8P"  88   88         88   a8P"  88
,d8"    88   88         88 ,d8"    88
888888888888 88         88 888888888888
        88   "8b       d8"         88
        88    "8ba, ,ad8"          88
        88      "Y888P"            88  `}
                </pre>
              </div>
              <p className={styles.message}>
                You've hit a broken URL. Please contact Jorban on Discord:{' '}
                <a
                  href="https://discord.gg/wY49KMxjHT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.discordLink}
                >
                  https://discord.gg/wY49KMxjHT
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
