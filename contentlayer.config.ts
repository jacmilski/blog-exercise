import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
        type: 'string',
        description: "The title of the article",
        required: true,
    },
    publishedAt: {
        type: 'string',
        description: "The date the article was published",
        required: true,
    },
/*     isReady: {
      type: 'boolean',
      description: "Whether article is ready to be published or not",
      required: true,
    } */
  },
  computedFields: {
    slug: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath,
    },
    url: {
      type: 'string', resolve: (article) => {
        if (process.env.NODE_ENV === 'development') {
          return `http://localhost:3000/articles/${article._raw.flattenedPath}`
        } else {
          `https://contentlayer.io/articles/${article._raw.flattenedPath}`
        }
      }
    },
  },
}))

export default makeSource({ contentDirPath: 'articles', documentTypes: [Article] })