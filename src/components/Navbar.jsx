export default function Navbar() {
  return (
    <nav className='navbar'>
      <a className='nav-item' href='#home'>
        <img src='home.svg' />
        <span>home.</span>
      </a>

      <a className='nav-item' href='#experience'>
        <img src='cpu.svg' />
        <span>exper.</span>
      </a>

      <a className='nav-item' href='#projects'>
        <img src='hdd.svg' />
        <span>projs.</span>
      </a>

      <a className='nav-item' href='#construction'>
        <img src='phone.svg' />
        <span>contact.</span>
      </a>
    </nav>
  );
}
