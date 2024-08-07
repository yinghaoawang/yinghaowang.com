export default function Construction() {
  return (
    <div id='construction'>
      <div className='inner-wrapper'>
        <img width='200px' src='barrier.svg' />
        <div className='headline'>Under Construction</div>
        <div className='description'>
          <span>
            Sorry about the mess. The site is current being worked on, but feel
            free to contact me!
          </span>
          <div className='social-icons' style={{ marginTop: '20px' }}>
            <a className='custom-icon' href='mailto:yinghao.a.wang@gmail.com'>
              <img width='32px' src='mail.svg' />
            </a>
            <a
              className='custom-icon linkedin'
              href='https://linkedin.com/in/yinghao-alan-wang'
              target='_blank'
            >
              <img width='24px' src='linkedin.svg' />
            </a>
            <a
              className='custom-icon'
              href='https://github.com/yinghaoawang'
              target='_blank'
            >
              <img style={{ marginTop: '9px' }} width='42px' src='github.svg' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
