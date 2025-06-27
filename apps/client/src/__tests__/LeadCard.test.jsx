import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LeadCard from "../components/LeadCard";
import { describe, expect, it, vi } from "vitest";

const mockLead = {
  id: 1,
  firstName: "John",
  createdAt: "2025-06-25",
  suburb: "Downtown",
  category: "Plumbing",
  description: "Fix leaking pipe",
  price: 600,
};

const onUpdate = vi.fn();

vi.mock("../services/api", () => ({
  default: {
    post: vi.fn(() => Promise.resolve()),
  },
}));

describe("LeadCard Component", () => {
  it("renders lead information", () => {
    render(<LeadCard lead={mockLead} onUpdate={onUpdate} />);
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Fix leaking pipe")).toBeInTheDocument();
    expect(screen.getByText((text) => text.includes("600"))).toBeInTheDocument();
  });

  it("calls onUpdate when Accept is clicked", async () => {
    render(<LeadCard lead={mockLead} onUpdate={onUpdate} />);
    fireEvent.click(screen.getByText("Accept"));
  });

  it("calls onUpdate when Decline is clicked", async () => {
    render(<LeadCard lead={mockLead} onUpdate={onUpdate} />);
    fireEvent.click(screen.getByText("Decline"));
  });
});
