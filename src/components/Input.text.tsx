import { composeStories } from "@storybook/testing-library";
import * as stories from "./Input.stories";

describe("input", () => {
  const { Default } = composeStories(stories);
  it("test", () => {
    const { queryByText, getByRole } = render(<Default />);
  });
});
