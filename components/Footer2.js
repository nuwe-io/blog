import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Logo from '@/data/logo_white.svg'
import ThemeSwitch from './ThemeSwitch'

export default function Footer2() {
  return (
    <footer
      className="my-20 w-full divide-y bg-gradient-to-tl 
from-gradient-100  to-gradient-500 px-20 text-gray-100"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Logo />
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-3 lg:w-2/3">
            <div className="space-y-3">
              <h3 className="font-bold tracking-wide dark:text-gray-100">I'm a company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold dark:text-gray-100">I'm a developer</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-bold dark:text-gray-100">Contact</div>
              <div className="mb-3 flex space-x-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
                <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-16 flex flex-row justify-between">
          <div className="mb-2 flex space-x-2 text-sm text-gray-900 dark:text-gray-900">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-900 dark:text-gray-900">
            <Link href="/">Terms of use</Link>
            <Link href="/">Cookies</Link>
            <Link href="/">Disclaimer</Link>
            <Link href="/">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
