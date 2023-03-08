import { render, waitFor } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import MoviesPage from "@/pages/movies";
import { getPopularMovies } from "@/pages/api/rq-tmdb";
import '@testing-library/jest-dom';

jest.mock("@/pages/api/rq-tmdb");

describe("MoviesPage", () => {
  it("should render the list of popular movies", async () => {
    const queryClient = new QueryClient();
    const movies = {
      results: [
        {
          id: 1,
          title: "Movie 1",
          poster_path: "/poster1.jpg",
          release_date: "2021-01-01",
          overview: "Overview 1",
        },
        {
          id: 2,
          title: "Movie 2",
          poster_path: "/poster2.jpg",
          release_date: "2021-02-01",
          overview: "Overview 2",
        },
      ],
    };
    (getPopularMovies as jest.Mock).mockResolvedValueOnce(movies);

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MoviesPage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(getByText((content, element) => {
        return element?.tagName.toLowerCase() === "p" && element.textContent === "Popular Movies"
      })).toBeInTheDocument();
    });

    const posters = await Promise.all(
      movies.results.map((movie: any) => {
        return waitFor(() => {
          return getByText(movie.title);
        });
      })
    );

    expect(posters).toHaveLength(2);
  });
});
