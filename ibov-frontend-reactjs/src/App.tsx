import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./hooks";

import GlobalStyle from "./styles/global";

import { AppRoutes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}
