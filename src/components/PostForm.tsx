import { useState } from 'react'

type PostFormProps = {
  onAddPost: (title: string, content: string) => void
}

function PostForm({ onAddPost }: PostFormProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddButtonClick = () => {
    onAddPost(title, content)
    setTitle('')
    setContent('')
  }

  return (
    <section className="rounded-lg border border-white/10 bg-zinc-900/90 p-5 shadow-2xl shadow-black/30">
      {/* 이 컴포넌트의 제목 */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-white">새 게시글 작성</h2>
        <span className="h-2 w-2 rounded-full bg-[#00B493]" />
      </div>

      {/* 제목 칸 시작 */}
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            제목
          </span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}

            className="w-full rounded-md border border-white/10 bg-[#111417] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#00B493] focus:ring-2 focus:ring-[#00B493]/25"
            placeholder="게시글 제목을 입력하세요"
          />
        </label>
        {/* 제목 칸 끝 */}

        {/* 내용 칸 시작 */}
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-zinc-300">
            내용
          </span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}

            className="min-h-28 w-full resize-none rounded-md border border-white/10 bg-[#111417] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[#00B493] focus:ring-2 focus:ring-[#00B493]/25"
            placeholder="게시글 내용을 입력하세요"
          />
        </label>
        {/* 내용 칸 끝 */}

        <button
          type="button"
          onClick={handleAddButtonClick}
          className="w-full rounded-md bg-[#00B493] px-4 py-3 font-bold text-[#04100d] transition hover:bg-[#19c6a7] focus:outline-none focus:ring-2 focus:ring-[#00B493] focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          작성하기
        </button>
      </div>
    </section>
  )
}

export default PostForm
