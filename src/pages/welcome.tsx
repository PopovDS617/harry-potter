import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Transitions from '../components/animation/Transitions';
import useTheme from '../hooks/use-theme';

const WelcomePage = () => {
  const { cardImageSrc, cardTheme } = useTheme();

  return (
    <Layout>
      <Transitions>
        <div className="welcome-container">
          <div className="welcome-card-container">
            <Link href="/characters">
              <div className={cardTheme}>
                <Image
                  src={cardImageSrc}
                  alt="character-image"
                  height={400}
                  width={400}
                  quality={80}
                  priority
                />
                <div className="welcome-card-text">Characters</div>
              </div>
            </Link>

            <Link href="/spells">
              <div className={cardTheme}>
                <Image
                  src="/images/spell.jpg"
                  alt="spell image"
                  height={400}
                  width={400}
                  quality={70}
                />
                <div className="welcome-card-text">Spells</div>
              </div>
            </Link>
            <Link href="/potions">
              <div className={cardTheme}>
                <Image
                  src={'/images/potion.jpg'}
                  alt="image of potion"
                  height={400}
                  width={400}
                  quality={80}
                />
                <div className="welcome-card-text"> Potions</div>
              </div>
            </Link>
          </div>

          <div className="welcome-goback-container">
            <Link href="/">back</Link>
          </div>
        </div>
      </Transitions>
    </Layout>
  );
};

export default WelcomePage;
