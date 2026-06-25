import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/app/router";
import { ScrollManager } from "@/app/ScrollManager";

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <AppRoutes />
    </BrowserRouter>
  );
}
