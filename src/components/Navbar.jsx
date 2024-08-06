export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-item'>
        <img src='home.svg' />
        <span>home</span>
      </div>

      <div className='nav-item'>
        <img src='cpu.svg' />
        <span>skills</span>
      </div>

      <div className='nav-item'>
        <img src='hdd.svg' />
        <span>projects</span>
      </div>

      <div className='nav-item'>
        <img src='phone.svg' />
        <span>contact</span>
      </div>
    </nav>
  );
}
