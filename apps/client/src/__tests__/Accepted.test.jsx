import { render, screen, waitFor } from "@testing-library/react";
import Accepted from "../pages/Accepted";
import { describe, expect, it, vi } from "vitest";

vi.mock("../services/api", () => ({
  default: {
    get: vi.fn(() =>
      Promise.resolve({
        data: [
          {
            id: 2,
            fullName: "Mark",
            createdAt: "2025-06-24",
            suburb: "Southside",
            category: "Gardening",
            description: "Trim hedge",
            price: 150,
            status: "accepted",
          },
        ],
      })
    ),
  },
}));
describe("Accepted Page", () => {
  it("renders accepted leads", async () => {
    render(<Accepted />);

    await waitFor(() => {
      expect(screen.getByText("Mark")).toBeInTheDocument();
      expect(screen.getByText("Trim hedge")).toBeInTheDocument();
    });
  });
});
