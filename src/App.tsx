import { ReactNode, useState, useEffect } from 'react'

import Context from './context/context'

type Props = {
  children: ReactNode;
}

function App({ children }: Props) {
  const [favorites, setFavorites] = useState<string[]>([])

  function setNewFavoriteCoin(newCoin: string) {
    if (favorites.includes(newCoin)) {
      const storagedFavorites = JSON.parse(localStorage.getItem("favorites") ?? '[]')
      const filteredFavorites = storagedFavorites.filter((storagedFavorite: string) => storagedFavorite !== newCoin)

      console.log(filteredFavorites);

      localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
      setFavorites(filteredFavorites)

      return
    }

    localStorage.setItem('favorites', JSON.stringify([newCoin, ...favorites]))
    setFavorites([newCoin, ...favorites])
  }

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") ?? '[]'))
  }, [])

  return (
    <Context.Provider value={[favorites, setNewFavoriteCoin]}>
      {children}
    </Context.Provider>
  );
}

export default App;
