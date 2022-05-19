import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Set up and Use',
    Svg: require('@site/static/img/OneClick-macOS-Simple-KVM logo.svg').default,
    description: (
      <>
        You can install macOS on windows or linux.
      </>
    ),
  },
  {
    title: 'Run your needed apps',
    Png: require('https://www.avanderlee.com/wp-content/uploads/2020/07/xcode-simulator-full-screen-mode.png').default,
    description: (
      <>
        You can run XCode and Final Cut Pro
      </>
    ),
  },
  {
    title: 'Or just use as a main OS',
    Png: require('https://cdn.vox-cdn.com/thumbor/XmSqbwPFBDMwXfO9Jp_ImmrSO0M=/0x0:2562x1444/1120x0/filters:focal(0x0:2562x1444):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22867613/Screen_Shot_2021_09_21_at_9.13.23_AM.png').default,
    description: (
      <>
        If you allot the VM all of your memory and CPUs, you can use it as your main machine.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
