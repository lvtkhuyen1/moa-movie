/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import DetailMovie from '../DetailMovie';
import { useMovie } from '@/src/hooks/useMoviesContext';
import Title from '../Title';
import Slider from '../Slider';
import ListCategory from '../ListCategory';
import CategoryDetail from '../CategoryDetail';
import Footer from '../Footer';
import MobileNav from '../MobileNav';
export default function Content({ selectedCategory }: any) {
  const isHome = selectedCategory?.name === 'Home';
  const { movie } = useMovie();

  return (
    <div className="w-full">
      <Title />
      {isHome ? (
        <>
          <Slider />
          {/* <Advertisement /> */}
          <ListCategory />
        </>
      ) : (
        <>
          {/* <Advertisement /> */}
          {!movie ? (
            <CategoryDetail
              name={selectedCategory?.name ?? ''}
              id={Number(selectedCategory?.id)}
            />
          ) : (
            <DetailMovie />
          )}
        </>
      )}
      <Footer />
      <MobileNav />
    </div>
  );
}
