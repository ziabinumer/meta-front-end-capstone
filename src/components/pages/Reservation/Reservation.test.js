import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReservationPage from "./index"; 
import { fetchAPI, submitAPI } from "../../util/fakeApi"; // Import API functions
import { BrowserRouter } from "react-router-dom"; // Required for routing
import "@testing-library/jest-dom/extend-expect";

// Mock fetchAPI and submitAPI
jest.mock("../../util/fakeApi", () => ({
  fetchAPI: jest.fn(() => Promise.resolve(["17:00", "18:30"])), // Mock available times
  submitAPI: jest.fn(() => true), // Mock successful submission
}));

// Helper function to render component with router
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Reservation Component", () => {
  test("renders reservation form correctly", () => {
    renderWithRouter(<ReservationPage />);
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Reserve Table/i })).toBeInTheDocument();
  });

  test("fetches and displays available times", async () => {
    renderWithRouter(<ReservationPage />);
    
    // Wait for dropdown options to load
    await waitFor(() => expect(fetchAPI).toHaveBeenCalled());

    const timeDropdown = screen.getByLabelText(/Select Time/i);
    expect(timeDropdown).toBeInTheDocument();

    // Check if the mocked times are in the dropdown
    expect(screen.getByText("17:00")).toBeInTheDocument();
    expect(screen.getByText("18:30")).toBeInTheDocument();
  });

  test("submits reservation successfully", async () => {
    renderWithRouter(<ReservationPage />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-04-10" } });
    fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: "17:00" } });
    fireEvent.click(screen.getByRole("button", { name: /Reserve Table/i }));

    // Wait for submitAPI to be called
    await waitFor(() => expect(submitAPI).toHaveBeenCalled());

    expect(submitAPI).toHaveBeenCalledWith({
      date: "2025-04-10",
      time: "17:00",
    });
  });
});
