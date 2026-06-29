import { createFileRoute } from "@tanstack/react-router";
import { ErrorPage } from "../components/ErrorPage";

export const Route = createFileRoute("/403")({
  head: () => ({
    meta: [{ title: "403 Forbidden — Neminath Global" }],
  }),
  component: () => (
    <ErrorPage
      code="403"
      title="Access"
      subtitle="Restricted."
      description="You don't have clearance to enter this trade corridor. If you believe this is a mistake, reach out to our team."
    />
  ),
});
