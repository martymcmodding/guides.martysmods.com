import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import LazyImage from '@site/src/components/lazyimage';

export default {
  ...MDXComponents,
  img: (props) => <LazyImage {...props} />,
};
