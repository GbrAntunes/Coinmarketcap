import { CryptoCard } from '../CryptoCard'

export function Favorites() {
  return (
    <div className='px-28 w-full mb-20'>
      <h2 className='font-bold mb-4'>
        Favoritos
      </h2>

      <ul className='flex'>
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
      </ul>
    </div>
  )
}
