import { createFileRoute } from "@tanstack/react-router";
import { ErrorPage } from "../components/ErrorPage";

export const Route = createFileRoute("/405")({
  head: () => ({
    meta: [{ title: "405 Method Not Allowed — Neminath Global" }],
  }),
  component: () => (
    <ErrorPage
      code="405"
      title="Method Not"
      subtitle="Allowed."
      description="This port doesn't accept that type of shipment. The request method is not supported for this route."
    />
  ),
});
