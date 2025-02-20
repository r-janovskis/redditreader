import {  screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"


describe("App launches correctly and renders with all elements", () => {
  
  beforeEach(() => {
    renderWithProviders(<BrowserRouter><App /></BrowserRouter>);
  })

  it("App has header part with logo", () => {
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  })

  it("Reddit topic picker is rendered correctly with initial value Nature", () => {
    expect(screen.getByLabelText("Reddit Topic:")).toBeInTheDocument();
    expect(screen.getByLabelText("Reddit Topic:")).toHaveTextContent(/nature/i);
  })

  it("App has search bar", () => {
    expect(screen.getByPlaceholderText("Search posts for...")).toBeInTheDocument();
  })

  // it("App has at least one post rendered", () => {
  //   expect(screen.getByTestId(/post nr. 1$/i)).toBeInTheDocument();
  // })

  it("App has a footer with basic info about the author", () => {
    expect(screen.getByText(/janovskis/i)).toBeInTheDocument();
  })

})
