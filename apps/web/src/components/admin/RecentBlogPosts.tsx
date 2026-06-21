import { Plus, Eye } from "lucide-react"

const statusStyles: Record<string, string> = {
  Published: "bg-blue-50 text-blue-700",
  Draft: "bg-zinc-100 text-zinc-600",
}

const posts = [
  { title: "10 Low-Budget Marketing Strategies for African SMEs", views: "3,241", status: "Published", date: "Jun 12, 2025" },
  { title: "How to Secure Funding for Your Business in 2025", views: "2,108", status: "Published", date: "Jun 5, 2025" },
  { title: "WhatsApp Business: The Secret Weapon for SMEs", views: null, status: "Draft", date: null },
  { title: "Building a Personal Brand as an African Entrepreneur", views: "1,870", status: "Published", date: "May 10, 2025" },
]

export function RecentBlogPosts() {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-semibold">Blog Posts</h3>
        <a href="#" className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
          <Plus className="h-3.5 w-3.5" /> New Post
        </a>
      </div>

      <ul className="mt-3 divide-y divide-border">
        {posts.map((post) => (
          <li key={post.title} className="py-3">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium leading-snug">{post.title}</p>
              <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                <Eye className="h-3.5 w-3.5" /> {post.views ?? "\u2014"}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs">
              <span className={`rounded-full px-2 py-0.5 font-medium ${statusStyles[post.status]}`}>{post.status}</span>
              {post.date && <span className="text-muted-foreground">{post.date}</span>}
            </div>
          </li>
        ))}
      </ul>

      <a href="#" className="mt-3 inline-block text-sm font-medium text-blue-600 hover:text-blue-700">
        Manage all posts &rarr;
      </a>
    </div>
  )
}
