import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
        </div>
        <p className="mb-8 flex text-sm text-gray-500 dark:text-gray-400">
          Made with <span className="text-green-700">&nbsp;❤&nbsp;</span> by&nbsp;
          <Link href="/" className="font-bold">
            {' '}
            {siteMetadata.title}
          </Link>
          &nbsp;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
