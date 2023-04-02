import logo from '../../assets/marca_com_fundo.svg'
import diamond from '../../assets/diamond.svg'
import search from '../../assets/icone_busca.svg'

export function TopBar() {
  return (
    <div className='bg-white flex justify-between items-center px-28 h-20'>
      <a href="/" className='mr-2'>
        <img src={logo} alt="logo do CoinMarketCap" />
      </a>

      <nav className='flex flex-1 items-center font-semibold'>
        <a className='mr-3' href="/">Cryptocurrencies</a>
        <a className='mr-3' href="/">Exchanges</a>
        <a className='mr-3' href="/">NFT</a>
        <a className='mr-3' href="/">CrypTown</a>
        <a className='mr-3' href="/">Portfolio</a>
        <a className='mr-3' href="/">Watchlist</a>
        <a href="/">Products</a>
      </nav>

      <div className='flex ml-6'>
        <div className='flex font-semibold mr-4 cursor-pointer'>
          <img src={diamond} className='mr-2' alt="diamante" />
          <span className='whitespace-nowrap flex items-center'>Log in</span>
        </div>

        <button className='inline-block px-4 py-2 rounded-lg bg-[#3C67F7] text-white mr-3'>
          Sign up
        </button>

        <div className='flex bg-[#EFF2F5] rounded-lg h-10 items-center px-2 w-fit border-2 border-transparent focus-within:border-black'>
          <img src={search} className='mr-2' alt="lupa de busca" />
          <input type="text" placeholder='Buscar' className='bg-transparent w-32 outline-none' />
          <span className='rounded-lg bg-[#A7B1C2] px-2 justify-center items-center text-white'>
            /
          </span>
        </div>
      </div>
    </div>
  )
}
