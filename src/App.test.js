import { render, fireEvent, cleanup } from "@testing-library/react";
import Search from "./components/Search";

afterEach(cleanup);
describe("Search component", () => {
  const setup = () => {
    const utils = render(<Search />);
    const input = utils.getByLabelText("search-form__input");
    return {
      input,
      ...utils,
    };
  };
  test("onChange event handler's value changes upon input", () => {
    const { input } = setup();
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "Beyonce" } });
    expect(input.value).toBe("Beyonce");
  });
});
