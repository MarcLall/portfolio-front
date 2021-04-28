import React, { useContext } from 'react'

// import { Container } from 'react-bootstrap'
import GithubButtons from './GitHubButtons'
import { Link } from 'react-scroll'
import PortfolioContext from '../context/context'

// import { githubButtons } from '../../mock/data'

const Footer = () => {
//   const { footer } = useContext(PortfolioContext)
//   const { networks } = footer
    const { isEnabled } = GithubButtons

  return (
    <footer className='footer navbar-static-bottom'>
      {/* <Container> */}
      <span className='back-to-top'>
        <Link to='hero' smooth duration={1000}>
          <i className='fa fa-angle-up fa-2x' aria-hidden='true' />
        </Link>
      </span>
      <div className='social-links'>
        <a
          href={'https://github.com/marclall'}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='marc'
        >
          <i className={`fa fa-marc || 'refresh'} fa-inverse`} />
        </a>
      </div>
      <hr />
      <p className='footer__text'>
        © {new Date().getFullYear()} - Marc Corporation
        <a href='lienversgithub' target='_blank' rel='noopener noreferrer'>
        </a>
      </p>

      {isEnabled && <GithubButtons />}
      {/* </Container> */}
    </footer>
  )
}

export default Footer
