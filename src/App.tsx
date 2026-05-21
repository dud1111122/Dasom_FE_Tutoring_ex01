import { useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import type { Post } from './types/post'

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: '첫 번째 게시글',
      content: 'React로 만든 게시판입니다.',
    },
    {
      id: 2,
      title: '두 번째 게시글',
      content: '컴포넌트와 state를 연습해봅니다.',
    },
  ])

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
    }

    setPosts([newPost, ...posts])
  }

  const handleDeletePost = (id: number) => {
    const nextPosts = posts.filter((post) => post.id !== id)

    setPosts(nextPosts)
  }

  return (
    // 전체 DIV
    <div className="min-h-screen bg-[#050607] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00B493]/20 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-700/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_100%,48px_48px,48px_48px]" />
      </div>

      {/* 헤더 */}
      <header className="relative border-b border-white/10 bg-black/35 backdrop-blur">
        <div className="mx-auto flex max-w-[720px] items-center justify-between px-5 py-4">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#00B493]">
            DEV STUDY
          </p>
          <p className="text-sm text-zinc-400">Mini Board</p>
        </div>
      </header>
      {/* 메인 콘텐츠 */}
      <main className="relative mx-auto flex w-full max-w-[720px] flex-col gap-8 px-5 py-14">
        <section className="space-y-4 text-center">
          <p className="text-sm font-semibold text-[#00B493]">
            React Component Practice
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            개발 스터디 커뮤니티 게시판
          </h1>
          <p className="mx-auto max-w-[560px] text-base leading-7 text-zinc-400">
            컴포넌트, props, state, 이벤트 흐름을 연습하기 위한 미니 게시판입니다.
          </p>
        </section>

        {/* 게시글 작성 폼 */}
        <PostForm onAddPost={handleAddPost} />

        {/* 게시글 리스트 */}
        <PostList posts={posts} onDeletePost={handleDeletePost} />
      </main>
    </div>
  )
}

export default App
