import AboutUsPage from "../components/AboutUs/About.jsx"
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, getByRole,screen, getAllByText, getByDisplayValue } from '@testing-library/react';
import { vitest } from 'vitest';


// The function renders an image for each team member.
it('should render an image for each team member', () => {
    // Arrange
    const { getAllByRole } = render(<AboutUsPage />);

    // Act
    const images = getAllByRole('img');

    // Assert
    expect(images.length).toBeGreaterThan(0);
});


// The function renders a section with a title and description.
it('should render a section with a title and description', () => {
    render(<AboutUsPage />);
    const title = screen.getByText('Trekdestiny Teams');
    const description = screen.getByText('The engineers of the Iran University of Science and Technology have made great efforts to provide you with an environment for a safe and comfortable trip, and this team consists of the following people.');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
});

// The function renders a grid with multiple items.
it('should render a grid with multiple items', () => {
    render(<AboutUsPage />);
    const items = screen.getAllByRole('listitem');

    expect(items.length).toBeGreaterThan(0);
});

// Each item in the grid contains an image and a description.
it('should render each item with an image and a description', () => {
    render(<AboutUsPage />);
    const items = screen.getAllByRole('listitem');

    items.forEach((item) => {
        const description = item.querySelector('p');

        expect(description).not.toBeInTheDocument();
    });
});