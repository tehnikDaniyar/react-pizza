import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#d6d6d1'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='136' cy='152' r='131' />
    <rect x='4' y='304' rx='0' ry='0' width='300' height='24' />
    <rect x='5' y='347' rx='0' ry='0' width='116' height='29' />
    <rect x='156' y='347' rx='0' ry='0' width='127' height='29' />
    <rect x='7' y='399' rx='0' ry='0' width='68' height='29' />
    <rect x='115' y='400' rx='0' ry='0' width='68' height='29' />
    <rect x='215' y='395' rx='0' ry='0' width='68' height='29' />
  </ContentLoader>
);

export default Skeleton;
