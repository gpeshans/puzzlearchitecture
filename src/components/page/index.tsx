import * as React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import { ContainerFluid } from '../grid';
import { SEO } from '../seo';
import { Layout } from '../layout';
import './index.scss';

interface PageProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const FOOTER_HEIGHT = 100;

export const Page = ({ children, title, className = '' }: PageProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(10);

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const handleScroll = () => {
      if (document.documentElement.scrollTop > FOOTER_HEIGHT) {
        setHasScrolled(true);

        // adjust the position of the back-to-top button
        const scrollTop = document.documentElement.scrollTop;
        const maxScrollPosition = scrollHeight - clientHeight;
        if (scrollTop >= maxScrollPosition - FOOTER_HEIGHT) {
          setBottomPosition(105);
        } else {
          setBottomPosition(10);
        }
      } else {
        setHasScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  });

  const toTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEO title={title} />
      <ContainerFluid className={className}>{children}</ContainerFluid>
      {hasScrolled && (
        <div className="pz-Page__back-to-top">
          <FontAwesomeIcon
            onClick={toTop}
            icon={faArrowCircleUp}
            size="3x"
            className="pz-Page__back-to-top-icon"
            style={{ bottom: `${bottomPosition}px` }}
          ></FontAwesomeIcon>
        </div>
      )}
    </Layout>
  );
};
