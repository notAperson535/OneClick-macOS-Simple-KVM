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
    Jpg: require('https://is2-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/5f/a6/51/5fa65193-8703-76aa-6a38-562d3ff849f1/b8946957-bf8e-4a55-937e-b516824a4294_1-_Documentation-dark.png/643x0w.jpg').default,
    description: (
      <>
        You can run XCode and Final Cut Pro
      </>
    ),
  },
  {
    title: 'Or just use as a main OS',
    Png: require('https://cdn.vox-cdn.com/thumbor/kmPAYx3chBtbCO_u3j7UKP59YQQ=/0x0:2562x1444/1200x0/filters:focal(0x0:2562x1444):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22867613/Screen_Shot_2021_09_21_at_9.13.23_AM.png').default,
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
