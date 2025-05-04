import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

export default function NotFoundContent({ className }) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--12"> { }
          <Heading as="h1" className="hero__title text--center">
            Page Not Found
          </Heading>
          <div style={{ textAlign: 'center', overflowX: 'auto' }}>
            <pre
              style={{
                fontFamily: 'monospace',
                fontSize: '1rem',
                lineHeight: '1.2',
                display: 'inline-block',
                backgroundColor: 'transparent',
                border: 'none',
                color: 'green',
                whiteSpace: 'pre',
                padding: '1rem',
                minWidth: 'fit-content',
              }}
            >
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
            <p style={{ paddingTop: '1rem' }}>
              You've hit a broken URL. Please contact Jorban on Discord:{' '}
              <a
                href="https://discord.gg/wY49KMxjHT"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#7289da', wordBreak: 'break-word' }}
              >
                https://discord.gg/wY49KMxjHT
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}