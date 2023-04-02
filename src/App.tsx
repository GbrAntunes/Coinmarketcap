import { Favorites } from './components/Favorites'
import { PageHeader } from './components/PageHeader'
import { TopBar } from './components/TopBar'
import { TopCryptoTable } from './components/TopCryptosTable'

function App() {
  return (
    <>
      <TopBar />
      <PageHeader />
      <Favorites />
      <TopCryptoTable />
    </>
  );
}

export default App;
