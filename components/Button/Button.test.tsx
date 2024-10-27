import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
	test("テキストが表示される", () => {
		render(<Button />);
		// テキストが表示される
		expect(screen.getByText("button")).toBeInTheDocument();
	});
});
