import "./styles/index.scss"
import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer
        autoClose={800}
        position="bottom-right" />
    </>
  )
}

export default App