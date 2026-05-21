import PostItem from './PostItem'
import type { Post } from '../types/post'

type PostListProps = {
  posts: Post[]
  onDeletePost: (id: number) => void
}

function PostList({ posts, onDeletePost }: PostListProps) {
  // 게시글이 하나도 없는 경우
  if (posts.length === 0) {
    return (
      <section className="rounded-lg border border-dashed border-white/15 bg-zinc-950/60 px-5 py-12 text-center">
        <p className="text-zinc-400">아직 작성된 게시글이 없습니다.</p>
      </section>
    )
  }

  // 기본 리턴 - 게시글이 하나 이상 있는 경우
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">게시글 목록</h2>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onDeletePost={onDeletePost}
          />
        ))}
      </div>
    </section>
  )
}

export default PostList
