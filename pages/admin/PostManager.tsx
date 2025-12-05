import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { BlogPost } from '../../types';
import { Trash2, Plus, Edit, X } from 'lucide-react';

const PostManager: React.FC = () => {
  const { posts, addPost, deletePost } = useSite();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New Post State
  const [newPost, setNewPost] = useState<Omit<BlogPost, 'id' | 'date'>>({
    title: '',
    author: '',
    category: '',
    excerpt: '',
    content: '',
    imageUrl: 'https://picsum.photos/800/600',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: BlogPost = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      ...newPost
    };
    addPost(post);
    setIsModalOpen(false);
    setNewPost({ title: '', author: '', category: '', excerpt: '', content: '', imageUrl: 'https://picsum.photos/800/600' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Posts Manager</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <Plus size={18} />
          <span>New Post</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Title</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Author</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
              <th className="p-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="p-4 text-gray-900 font-medium">{post.title}</td>
                <td className="p-4 text-gray-500">{post.author}</td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{post.category}</span></td>
                <td className="p-4 text-gray-500">{post.date}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded">
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => deletePost(post.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 && (
          <div className="p-8 text-center text-gray-500">No posts found. Create one to get started.</div>
        )}
      </div>

      {/* Simple Modal for Creating Post */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-xl font-bold">Create New Post</h3>
              <button onClick={() => setIsModalOpen(false)}><X className="text-gray-400 hover:text-gray-800" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
               <div>
                 <label className="block text-sm font-medium mb-1">Title</label>
                 <input required className="w-full border p-2 rounded" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-1">Author</label>
                   <input required className="w-full border p-2 rounded" value={newPost.author} onChange={e => setNewPost({...newPost, author: e.target.value})} />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-1">Category</label>
                   <input required className="w-full border p-2 rounded" value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})} />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">Image URL</label>
                 <input className="w-full border p-2 rounded" value={newPost.imageUrl} onChange={e => setNewPost({...newPost, imageUrl: e.target.value})} />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">Excerpt</label>
                 <textarea required className="w-full border p-2 rounded" rows={2} value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">Content</label>
                 <textarea required className="w-full border p-2 rounded" rows={5} value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
               </div>
               <div className="pt-4 flex justify-end space-x-3">
                 <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                 <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Publish Post</button>
               </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostManager;