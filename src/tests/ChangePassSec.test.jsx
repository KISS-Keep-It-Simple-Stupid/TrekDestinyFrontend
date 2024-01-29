import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ChangePassSec from '../components/Profile/ChangePassSec';

describe('ChangePassSec component', () => {
  it('renders ChangePassSec component and checks if input fields and titles are rendered correctly', () => {
    render(<BrowserRouter><ChangePassSec /></BrowserRouter>);
    const currentPasswordInput = screen.getByText('Current Password');
    expect(currentPasswordInput).toBeInTheDocument();
    const confirmNewPasswordInput = screen.getByText('Confirm New Password');
    expect(confirmNewPasswordInput).toBeInTheDocument();
  });

});
