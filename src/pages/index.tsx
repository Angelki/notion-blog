import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import Sakura from '../components/Sakura'
import Cat from '../components/Cat'
import blogStyles from '../styles/blog.module.css'

import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getNotionUsers from '../lib/notion/getNotionUsers'
import getBlogIndex from '../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

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
export default ({ posts = [], preview }) => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>遗忘 · 笔</h1>
      <h2>技术的矫揉造作，人生的无病呻吟</h2>
      <Sakura count={12} />
      <div className={sharedStyles.layout}>
        {preview && (
          <div className={blogStyles.previewAlertContainer}>
            <div className={blogStyles.previewAlert}>
              <b>Note:</b>
              {` `}Viewing in preview mode{' '}
              <Link href={`/api/clear-preview`}>
                <button className={blogStyles.escapePreview}>
                  Exit Preview
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
          {posts.length === 0 && (
            <p className={blogStyles.noPosts}>There are no posts yet</p>
          )}
          {posts
            .sort((a, b) => b.Date - a.Date)
            .map(post => {
              return (
                <div className={blogStyles.postPreview} key={post.Slug}>
                  <h3>
                    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                      <div className={blogStyles.titleContainer}>
                        {!post.Published && (
                          <span className={blogStyles.draftBadge}>Draft</span>
                        )}
                        <a>{post.Page}</a>
                      </div>
                    </Link>
                  </h3>
                  <div className={blogStyles.infoContainer}>
                    {post.Authors.length > 0 && (
                      <div className="authors">
                        作者：{post.Authors.join(' ')}
                      </div>
                    )}
                    {post.Date && (
                      <div className="posted">
                        发布日期： {getDateStr(post.Date)}
                      </div>
                    )}
                  </div>

                  <p>
                    {(!post.preview || post.preview.length === 0) &&
                      '有本事你进来啊～'}
                    {(post.preview || []).map((block, idx) =>
                      textBlock(block, true, `${post.Slug}${idx}`)
                    )}
                  </p>
                </div>
              )
            })}
        </div>
        <div id="marco">
          <div id="cielo"></div>
          <div id="luna"></div>
          <div id="gato"></div>
          <div id="edificios"></div>
        </div>
      </div>
      {/* <Cat /> */}
    </div>
  </>
)
