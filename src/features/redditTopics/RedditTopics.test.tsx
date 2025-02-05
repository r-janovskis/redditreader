import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./../../utils/test-utils";
import { RedditTopics } from './RedditTopics';

describe('RedditTopics', () => {

    it('renders correctly', () => {
        expect(RedditTopics).toBeDefined();
    })

    it("Can we get field value using label text", () => {
        renderWithProviders(<RedditTopics />)
    
        expect(screen.getByLabelText("Reddit Topic:")).toBeInTheDocument()
        expect(screen.getByLabelText("Reddit Topic:")).toHaveTextContent(/nature/i)
    })

    it("Reddit Topic should changes to selected option - books", () => {
        const { user } = renderWithProviders(<RedditTopics />)

        user.selectOptions(screen.getByLabelText("Reddit Topic:"), "Books")
        expect(screen.getByLabelText("Reddit Topic:")).toHaveTextContent(/books/i)

    })

});


