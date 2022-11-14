import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
