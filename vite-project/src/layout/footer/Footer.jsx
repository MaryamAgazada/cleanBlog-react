import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div>
      <footer>
    <div className='hr'></div>
    <div class="footer__icons">
        <div class="footer__icon">
            <i class="fa-brands fa-twitter"></i>
        </div>
        <div class="footer__icon">
            <i class="fa-brands fa-facebook"></i>
        </div>
        <div class="footer__icon">
            <i class="fa-brands fa-github"></i>
        </div>
    </div>
    <div class="copyright">Copyright © Your Website 2023</div>
</footer>
    </div>
  )
}

export default Footer
