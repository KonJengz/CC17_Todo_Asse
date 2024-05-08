import './App.css'
import AuthContextProvider from './context/AuthContext'
import TodoContextProvider from './context/TodoContext'
import Router from './routes/RouterPath'

function App() {

  return (
    <AuthContextProvider>
      <TodoContextProvider>
        <Router />
      </TodoContextProvider>
    </AuthContextProvider>
  )
}

export default App
