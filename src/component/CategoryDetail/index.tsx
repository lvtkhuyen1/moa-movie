import React, { useEffect, useState } from "react";
import Image from "next/image";
import meterial from "@/assets/icons/material-movies.png";
import CardMovie from "../CardMovie";
import { CategoryType, ITEMS_PER_PAGE, MovieType } from "@/libs/type";
import { handleFetchMovieByID, handleFetchMovies } from "@/services/movie";
import { useMovie } from "@/hooks/useMoviesContext";
import Pagination from "../Base/Pagination";

export default function CategoryDetail({ id, name }: CategoryType) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const { setMovie, setCategory } = useMovie();
  console.log({ setCategory });

  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const buttonPerPage = 5;

  const fetchMovies = async (page: number, limit: number) => {
    try {
      const res = await handleFetchMovies(page, limit, id);

      if (res.success) {
        setMovies(res.data.movies);
        setTotalPages(Math.ceil(res.data.total / limit));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage, ITEMS_PER_PAGE);
  }, [currentPage, id]);

  const getPageNumbers = () => {
    const startPage = (pageGroup - 1) * buttonPerPage + 1;
    const endPage = Math.min(startPage + buttonPerPage - 1, totalPages);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNextPageGroup = () => {
    if (pageGroup * buttonPerPage < totalPages) {
      setPageGroup(pageGroup + 1);
    }
  };

  const handlePrevPageGroup = () => {
    if (pageGroup > 1) {
      setPageGroup(pageGroup - 1);
    }
  };

  const handleSelectMovie = async (movieId: string) => {
    try {
      const res = await handleFetchMovieByID(movieId);
      const movieData: MovieType = {
        id: res.data.id,
        title_id: parseInt(res.data.id),
        title: res.data.des,
        des: res.data.des,
        cate_id: res.data.cate_id,
        image: res.data.image,
      };
      if (res.success) {
        setMovie(movieData);
      }
    } catch (error) {
      console.error("Error fetching movie id:", error);
    }
  };

  return (
    <div>
      <div className="mx-4">
        <div className="bg-black absolute left-0 w-10" />
        <div className="flex items-center gap-2 mt-4">
          <Image alt="" src={meterial} height={20} />
          <span className="font-bold text-xl">{name}</span>
        </div>
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie, index) => (
            <CardMovie
              key={index}
              onClick={() => handleSelectMovie(movie.id)}
              movieImage={movie.image}
              movieName={movie.title}
            />
          ))}
        </div>
        <div className="mt-24 flex justify-center items-center space-x-4">
          {pageGroup > 1 && (
            <Pagination
              label="<"
              onClick={handlePrevPageGroup}
              disabled={currentPage === 1 && pageGroup === 1}
            />
          )}

          {getPageNumbers().map((page) => (
            <Pagination
              key={page}
              label={page.toString()}
              isActive={page === currentPage}
              onClick={() => handlePageClick(page)}
              className={`px-3 py-2 rounded-lg ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}

          {pageGroup * buttonPerPage < totalPages && (
            <Pagination
              label=">"
              onClick={handleNextPageGroup}
              disabled={currentPage === totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}
