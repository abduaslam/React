import "./App.css"
import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [Posts, setPosts] = useState([])
  const [form, setform] = useState({ title: '', body: "", id: null, userId: 1 })
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(resp => setPosts(resp.data.slice(0, 12)))
  }, [])

  const submit = e => {
    e.preventDefault()
    const url = `https://jsonplaceholder.typicode.com/posts/${form.id || ''}`
    const req = form.id ? axios.put : axios.post;
    
    req(url, { title: form.title, body: form.body, userId: 1 })
      .then(res => {
        setPosts(form.id 
          ? Posts.map(p => p.id === form.id ? res.data : p)
          : [res.data, ...Posts]
        )
        setform({ title: "", body: '', id: null, userId: 1 });
      })
  }

  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(Posts.filter(p => p.id !== id));
      })
  }

  return (
    <div className="min-h-screen bg-blue-300 from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Blog Management Dashboard</h1>
          <p className="text-gray-600">Create, edit and manage your posts</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 sticky top-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {form.id ? "Edit Post" : "Create New Post"}
                </h2>
                <p className="text-gray-600 text-sm">
                  {form.id ? "Update your post details" : "Add a new post to your blog"}
                </p>
              </div>

              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bg-blue-200">
                    <div>Post Title</div>
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    placeholder="Enter post title"
                    onChange={e => setform({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                
                     <div>    Post Content</div>
                  </label>
                  <textarea
                    value={form.body}
                    placeholder="Write your post content here..."
                    onChange={e => setform({ ...form, body: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    rows="5"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    {form.id ? "Update Post" : "Create Post"}
                  </button>
                  
                  {form.id && (
                    <button
                      type="button"
                      onClick={() => setform({ title: "", body: "", id: null, userId: 1 })}
                      className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{Posts.length}</div>
                    <div className="text-sm text-gray-600">Total Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {Posts.filter(p => p.userId === 1).length}
                    </div>
                    <div className="text-sm text-gray-600">Your Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{form.id ? 1 : 0}</div>
                    <div className="text-sm text-gray-600">Editing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Grid Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
              <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full">
                {Posts.length} posts
              </span>
            </div>

            {Posts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow p-12 text-center">
                <div className="text-gray-400 mb-4 text-4xl">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600">Create your first post using the form!</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {Posts.map(p => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Post ID Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Post #{p.id}
                      </span>
                      <span className="text-xs text-gray-500">User {p.userId}</span>
                    </div>

                    {/* Post Content */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {p.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {p.body}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <button
                        onClick={() => setform(p)}
                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 px-5 rounded-lg transition-all"
                      >
                        Edit
                      </button>
                      
                      <button
                        onClick={() => deletePost(p.id)}
                        className="text-red-600 hover:bg-red-50 font-medium py-2 px-5 rounded-lg transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App