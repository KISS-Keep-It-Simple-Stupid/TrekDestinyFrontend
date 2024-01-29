import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditCardFrom from '../components/Profile/EditCardForm';

const mockedData = {
  CardId: '1',
  Description: 'Sample description',
  PreferredLanguages: ['English', 'Spanish'],
  StartDate: '2023-01-01',
  EndDate: '2023-01-07',
  DestinationCountry: 'USA',
  DestinationState: 'California',
  DestinationCity: 'Los Angeles',
  NumberOfTravelers: 2,
};

const fetchData = vi.fn();
const onClose = vi.fn();

describe('EditCardFrom component', () => {
  it('renders EditCardFrom component and checks if fields are rendered correctly', async () => {

    render(
      <BrowserRouter>
        <EditCardFrom fetchData={fetchData} data={mockedData} onClose={onClose} />
      </BrowserRouter>
    );

    // Assert that the fields are in the document
    expect(screen.getByText('Edit your journey announcement')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('State:')).toBeInTheDocument();
    expect(screen.getByText('City:')).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Start Date:')).toBeInTheDocument();
    expect(screen.getByText('End Date:')).toBeInTheDocument();
    expect(screen.getByText('TravelersCount:')).toBeInTheDocument();
    expect(screen.getByText('Preferred Languages:')).toBeInTheDocument();

    expect(screen.getByText('Edit')).toBeInTheDocument();

  });

});
