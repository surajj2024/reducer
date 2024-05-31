import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import ShowTodo from "./components/ShowTodo";
import toast, { Toaster } from "react-hot-toast";


function App() {

  // console.log(dispatch)

  return (
    <>
    <Header />
    <AddTodo toast={toast}/>
    <ShowTodo toast={toast}/>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
    </>
  )
}

export default App
