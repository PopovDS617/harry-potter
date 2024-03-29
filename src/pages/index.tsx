import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { uiActions } from '../store/ui/uiSlice';
import { useDispatch } from 'react-redux';
import Transitions from '../components/animation/Transitions';

const HomePage = () => {
  const dispatch = useDispatch();

  const changeTheme = (house: string) => {
    dispatch(uiActions.changeTheme(house));
  };

  return (
    <div className="homepage-container">
      <div className="homepage-background">
        <Image
          src="/images/temporary_backg.jpg"
          alt="background image"
          objectFit="cover"
          priority
          layout="fill"
        />
      </div>
      <div className="homepage-header">Choose your house</div>
      <Transitions>
        <div className="crests-container">
          <Link href="/welcome">
            <div
              className="homepage-crest-gryffindor"
              onClick={changeTheme.bind(null, 'gryffindor')}
            >
              <Image
                src="/images/gryffindor_crest.png"
                alt="house crest"
                height="270"
                width="240"
              />
            </div>
          </Link>
          <Link href="/welcome">
            <div
              className="homepage-crest-hufflepuff"
              onClick={changeTheme.bind(null, 'hufflepuff')}
            >
              <Image
                src="/images/hufflepuff_crest.png"
                alt="house crest"
                height="270"
                width="240"
              />
            </div>
          </Link>
          <Link href="/welcome">
            <div
              className="homepage-crest-ravenclaw"
              onClick={changeTheme.bind(null, 'ravenclaw')}
            >
              <Image
                src="/images/ravenclaw_crest.png"
                alt="house crest"
                height="270"
                width="240"
              />
            </div>
          </Link>
          <Link href="/welcome">
            <div
              className="homepage-crest-slytherin"
              onClick={changeTheme.bind(null, 'slytherin')}
            >
              <Image
                src="/images/slytherin_crest.png"
                alt="house crest"
                height="270"
                width="240"
              />
            </div>
          </Link>
        </div>
      </Transitions>
    </div>
  );
};

export default HomePage;
