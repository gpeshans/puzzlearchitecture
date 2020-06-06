import * as React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

import { ContainerFluid } from '../grid';
import { SEO, SEOProps } from '../seo';
import { Layout } from '../layout';
import './index.scss';

interface PageProps {
  children: React.ReactNode;
  className?: string;
  seoProps?: SEOProps;
}

const FOOTER_HEIGHT = 100;

export const Page = ({ children, className = '', seoProps }: PageProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > FOOTER_HEIGHT) {
        setHasScrolled(true);
        setBottomPosition(10);
      } else {
        setHasScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // do not forget to unsubscribe :)
    return () => document.removeEventListener('scroll', handleScroll);
  });

  const toTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEO {...seoProps} />
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
