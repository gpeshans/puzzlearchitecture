import * as React from 'react';
import classNames from 'classnames';

import './index.scss';

interface ContainerProps {
  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className?: string;
  children: React.ReactNode;
}

interface RowProps {
  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className?: string;
  children: React.ReactNode;
}

interface ColumnProps {
  children: React.ReactNode;
  /**
   * A space-delimited list of class names to pass along to a child element.
   */
  className?: string;
  spanSm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanMd?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanLg?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanXl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offsetMd?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offsetLg?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offsetXl?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  hiddenXsUp?: boolean;
  hiddenSmUp?: boolean;
  hiddenMdUp?: boolean;
  hiddenLgUp?: boolean;
  hiddenXlUp?: boolean;
  hiddenSmDown?: boolean;
  hiddenMdDown?: boolean;
  hiddenLgDown?: boolean;
  hiddenXlDown?: boolean;
}

/**
 * Grid - Container component.
 */
export const Container = ({ children, className }: ContainerProps) => {
  const classes = classNames('container', className);
  return <div className={classes}>{children}</div>;
};

/**
 * Grid - Container fluid component.
 */
export const ContainerFluid = ({ children, className }: ContainerProps) => {
  const classes = classNames('container container--fluid', className);
  return <div className={classes}>{children}</div>;
};

/**
 * Grid - Row component
 */
export const Row = ({ children, className }: RowProps) => {
  const classes = classNames('container__row', className);
  return <div className={classes}>{children}</div>;
};

/**
 * Grid - Column component
 */
export const Column = ({
  children,
  className,
  spanSm = 12,
  spanMd = 12,
  spanLg = 12,
  spanXl = 12,
  offset = 0,
  offsetMd = 0,
  offsetLg = 0,
  offsetXl = 0,
  hiddenXsUp = false,
  hiddenSmUp = false,
  hiddenSmDown = false,
  hiddenMdUp = false,
  hiddenMdDown = false,
  hiddenLgUp = false,
  hiddenLgDown = false,
  hiddenXlUp = false,
  hiddenXlDown = false,
}: ColumnProps) => {
  const classes = classNames(
    `container__col-sm-${spanSm}`,
    `container__col-md-${spanMd}`,
    `container__col-lg-${spanLg}`,
    `container__col-xl-${spanXl}`,
    `container__col-sm-offset-${offset}`,
    `container__col-md-offset-${offsetMd}`,
    `container__col-lg-offset-${offsetLg}`,
    `container__col-xl-offset-${offsetXl}`,
    hiddenXsUp && `hidden-xs-up`,
    hiddenSmUp && `hidden-sm-up`,
    hiddenSmDown && `hidden-sm-down`,
    hiddenMdUp && `hidden-md-up`,
    hiddenMdDown && `hidden-md-down`,
    hiddenLgUp && `hidden-lg-up`,
    hiddenLgDown && `hidden-lg-down`,
    hiddenXlUp && `hidden-xl-up`,
    hiddenXlDown && `hidden-xl-down`,
    className,
  );
  return <div className={classes}>{children}</div>;
};
