import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import { describe, expect, it, vi } from "vitest";

vi.mock("../services/api", () => ({
  default: {
    get: vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            firstName: "Jane",
            createdAt: "2025-06-25",
            suburb: "Northside",
            category: "Electrical",
            description: "Fix light switch",
            price: 200,
            status: "pending",
          },
        ],
      })
    ),
  },
}));

describe("Home Page", () => {
  it("renders pending leads", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("Jane")).toBeInTheDocument();
      expect(screen.getByText("Fix light switch")).toBeInTheDocument();
    });
  });
});
