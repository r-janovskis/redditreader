import { screen, waitFor, render } from "@testing-library/react";
import { renderWithProviders } from "./../../utils/test-utils";
import { RedditTopics } from './RedditTopics';
import { BrowserRouter } from 'react-router-dom';

describe('RedditTopics', () => {

    beforeEach(() => {
        renderWithProviders(<BrowserRouter><RedditTopics /></BrowserRouter>)
    })

    it('renders correctly', () => {
        expect(RedditTopics).toBeDefined();
    })

    it("Can we get field value using label text", () => {
        //renderWithProviders(<RedditTopics />)
    
        expect(screen.getByLabelText("Reddit Topic:")).toBeInTheDocument()
        expect(screen.getByLabelText("Reddit Topic:")).toHaveTextContent(/nature/i)
    })

    it("Reddit Topic should changes to selected option - books", () => {
        const { user } = renderWithProviders(<BrowserRouter><RedditTopics /></BrowserRouter>)

        user.selectOptions(screen.getByLabelText("Reddit Topic:"), "Books")
        expect(screen.getByLabelText("Reddit Topic:")).toHaveTextContent(/books/i)

    })

});


