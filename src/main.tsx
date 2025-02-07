import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import "./index.css"

const container = document.getElementById("root")

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/:topic" element={<App />} />
    </Route>
  )
);

if (container) {
  const root = createRoot(container)

  root.render(
    // <React.StrictMode>
    //   <Provider store={store}>
    //     <App />
    //   </Provider>
    // </React.StrictMode>,
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
    
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
