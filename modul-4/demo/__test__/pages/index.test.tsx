import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import '@testing-library/jest-dom';

describe("Home", () => {
    it('should render the correct title', () => {
        const { getByRole } = render(<Home />);
        const title = getByRole('heading', { level: 1 });
        expect(title).toHaveTextContent('Demo');
      });
    
      it('should render the Hero section', () => {
        render(<Home />);
        const heroSection = screen.getByTestId('hero-section');
        expect(heroSection).toBeInTheDocument();
      });

});

//   it("should render the page with a description meta tag", () => {
//     render(<Home />);
//     expect(
//       document.querySelector('meta[name="description"]')?.getAttribute("content")
//     ).toBe("Generated by create next app");
//   });

//   it("should render the page with a viewport meta tag", () => {
//     render(<Home />);
//     expect(
//       document.querySelector('meta[name="viewport"]')?.getAttribute("content")
//     ).toBe("width=device-width, initial-scale=1");
//   });

//   it("should render the hero section", () => {
//     render(<Home />);
//     const heroSection = screen.getByTestId("hero-section");
//     expect(heroSection).toBeInTheDocument();
//   });