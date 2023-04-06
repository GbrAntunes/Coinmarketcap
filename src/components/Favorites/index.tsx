import { useContext } from 'react'

import { CryptoCard } from '../CryptoCard'
import Context from '../../context/context'

export function Favorites() {
  const [favorites] = useContext(Context)

  return (
    <div className='px-28 w-full mb-20'>
      <h2 className='font-bold mb-4'>
        Favoritos
      </h2>

      <ul className='flex overflow-x-auto'>
        {favorites.map((favorite: any) => <CryptoCard id={favorite}/>)}
      </ul>
    </div>
  )
}
