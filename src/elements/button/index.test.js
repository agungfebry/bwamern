import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should not allowed click button isDisabled is present", () => {
	const { container } = render(<Button isDisabled></Button>);
	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
	const { container, getByText } = render(<Button isLoading></Button>);

	expect(getByText(/loading/i)).toBeInTheDocument();

	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render <a> tag", () => {
	const { container, getByText } = render(
		<Button type="link" isExternal></Button>
	);

	expect(getByText(/loading/i)).toBeInTheDocument();

	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render <Link> component", () => {
	const { container, getByText } = render(<Button type="link"></Button>);

	expect(container.querySelector("a")).toBeInTheDocument();
});
