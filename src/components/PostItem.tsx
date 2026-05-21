import type { Post } from '../types/post'

type PostItemProps = {
  post: Post
  onDeletePost: (id: number) => void
}

function PostItem({ post, onDeletePost }: PostItemProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-zinc-900/80 p-5 shadow-lg shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">{post.title}</h3>
          <p className="mt-3 whitespace-pre-wrap leading-7 text-zinc-300">
            {post.content}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDeletePost(post.id)}
          className="shrink-0 rounded-md border border-red-400/20 px-3 py-1.5 text-sm font-semibold text-red-300 transition hover:border-red-300/40 hover:bg-red-400/10 focus:outline-none focus:ring-2 focus:ring-red-300/40"
        >
          삭제
        </button>
      </div>
    </article>
  )
}

export default PostItem
