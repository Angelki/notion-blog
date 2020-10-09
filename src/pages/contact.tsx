import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/angelks41',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/angelki',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/%E6%B3%BD%E6%B3%BD-%E5%91%A8-b4a347139',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:3zangelks@gmail.com?subject=blog',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img
          src="https://avatars2.githubusercontent.com/u/14013570?s=460&v=4"
          alt="github avatar"
          height={60}
        />
      </div>
      <div className={contactStyles.name}>
        Edward Chow - A Front End Web Developer
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
