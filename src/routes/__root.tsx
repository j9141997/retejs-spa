import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link
          to="/editor/$id"
          params={{
            id: "a",
          }}
        >
          Rete.js Editor - a
        </Link>
        <Link
          to="/editor/$id"
          params={{
            id: "b",
          }}
        >
          Rete.js Editor - b
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
