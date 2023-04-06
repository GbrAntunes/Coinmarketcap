import { Link } from 'react-router-dom'

import logo from '../../assets/marca_com_fundo.svg'
import diamond from '../../assets/diamond.svg'
import { InputSearch } from '../InputSearch'

export function TopBar() {
  return (
    <div className='bg-white flex justify-between items-center px-28 h-20'>
      <a href="/" className='mr-2'>
        <img src={logo} alt="logo do CoinMarketCap" />
      </a>

      <nav className='flex flex-1 items-center font-semibold'>
        <Link className='mr-3' to="/">Cryptocurrencies</Link>
        <Link className='mr-3' to="/">Exchanges</Link>
        <Link className='mr-3' to="/">NFT</Link>
        <Link className='mr-3' to="/">CrypTown</Link>
        <Link className='mr-3' to="/">Portfolio</Link>
        <Link className='mr-3' to="/">Watchlist</Link>
        <Link to="/">Products</Link>
      </nav>

      <div className='flex ml-6'>
        <div className='flex font-semibold mr-4 cursor-pointer'>
          <img src={diamond} className='mr-2' alt="diamante" />
          <span className='whitespace-nowrap flex items-center'>Log in</span>
        </div>

        <button className='inline-block px-4 py-2 rounded-lg bg-[#3C67F7] text-white mr-3'>
          Sign up
        </button>

        <InputSearch />

      </div>
    </div>
  )
}
