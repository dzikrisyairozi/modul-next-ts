import { render } from '@testing-library/react';
import MovieDetails from '@/components/shared/Details';
import '@testing-library/jest-dom';


const sampleProps = {
  backdrop_path: 'https://via.placeholder.com/1440x512.png',
  title: 'Sample Movie',
  release_date: '2022-01-01',
  popularity: 7.8,
  overview: 'A sample movie overview',
};

describe('MovieDetails component', () => {
  it('renders movie details correctly', () => {
    const { getByAltText, getByText } = render(<MovieDetails {...sampleProps} />);
    const backdropImg = getByAltText(`${sampleProps.title} Backdrop`);
    const title = getByText(sampleProps.title);
    const releaseDate = getByText(sampleProps.release_date);
    const popularity = getByText(`Popularity: ${sampleProps.popularity}`);
    const overview = getByText(sampleProps.overview);


    expect(backdropImg).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(popularity).toBeInTheDocument();
    expect(overview).toBeInTheDocument();

    expect(title.textContent).toBe(sampleProps.title);
    expect(releaseDate.textContent).toBe(sampleProps.release_date);
    expect(popularity.textContent).toBe(`Popularity: ${sampleProps.popularity}`);
    expect(overview.textContent).toBe(sampleProps.overview);
  });
});
