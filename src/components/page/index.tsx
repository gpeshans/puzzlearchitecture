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

export const Page = ({ children, title, className = '' }: PageProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  console.log('testes');

  useEffect(() => {
    console.log('test');
    document.addEventListener('scroll', () => {
      console.log('Its happening');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  });

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Layout>
      <SEO title={title} />
      <ContainerFluid className={className}>{children}</ContainerFluid>
      {hasScrolled && (
        <FontAwesomeIcon onClick={toTop} icon={faArrowCircleUp} size="3x" className="pz-Page__Top"></FontAwesomeIcon>
      )}
    </Layout>
  );
};
