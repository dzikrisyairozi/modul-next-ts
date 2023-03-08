import { render } from '@testing-library/react';
import Poster from '@/components/shared/Poster';
import '@testing-library/jest-dom';

const sampleProps = {
  id: 1,
  link: '/',
  poster_path: 'https://via.placeholder.com/256x384.png',
  title: 'Sample Poster',
  release_date: '2022-01-01',
  overview: 'A sample movie poster',
};

describe('Poster component', () => {
    it('renders correct poster and link with title, release date and overview', () => {
        const { getByAltText, getByRole, getByText } = render(<Poster {...sampleProps} />);
        const posterImg = getByAltText(`${sampleProps.title} Poster`);
        const posterLink = getByRole('link');
        const title = getByText(sampleProps.title);
        const releaseDate = getByText(sampleProps.release_date);
        const overview = getByText(sampleProps.overview);
      
        // expect(posterImg).toHaveAttribute("src", "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F256x384.png&w=640&q=75");
        //expect(posterImg).toHaveAttribute('src', expect.stringMatching(/https:\/\/via\.placeholder\.com\/256x384\.png\?/));
        expect(posterImg).toHaveAttribute("src", expect.stringMatching(/^\/_next\/image\?url=https%3A%2F%2Fvia\.placeholder\.com%2F256x384\.png&w=\d+&q=\d+$/));
        expect(posterLink).toHaveAttribute('href', sampleProps.link);
        //expect(title).toBeInTheDocument();
        expect(title.textContent).toBe(sampleProps.title);
        //expect(releaseDate).toBeInTheDocument();
        expect(releaseDate.textContent).toBe(sampleProps.release_date);
        //expect(overview).toBeInTheDocument();
        expect(overview.textContent).toBe(sampleProps.overview);
      });
});
