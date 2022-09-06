import MainRouters from '../../../routers/MainRouters'
import { InfosProvider } from '../../../contexts/ContextAPI'

const App = () => {

  return (
    <InfosProvider>
      <MainRouters />
    </InfosProvider>
  )
}

export default App;