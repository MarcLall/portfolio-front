import GitHubButton from 'react-github-btn'
import React from 'react'

const GithubButton = () => (
  <>
    <GitHubButton
      className='github-button'
      href='lienversgithubfork'
      data-icon='octicon-repo-forked'
      data-size='large'
      data-show-count='true'
      aria-label='Fork cobidev/gatsby-simplefolio on GitHub'
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className='github-button'
      href='lienportfolio'
      data-icon='octicon-star'
      data-size='large'
      data-show-count='true'
      aria-label='Star cobidev/gatsby-simplefolio on GitHub'
    >
      Star
    </GitHubButton>
  </>
)

export default GithubButton
