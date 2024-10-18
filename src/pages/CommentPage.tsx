import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

const CommentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: {
        name: 'Jane Doe',
        avatar: 'https://source.unsplash.com/random/100x100?face=1'
      },
      content: '이 룩 정말 멋져요! 어디서 구매할 수 있나요?',
      timestamp: '2시간 전'
    },
    {
      id: 2,
      user: {
        name: 'John Smith',
        avatar: 'https://source.unsplash.com/random/100x100?face=2'
      },
      content: '여름에 딱 어울리는 스타일이네요.',
      timestamp: '1일 전'
    }
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: {
          name: 'Current User',
          avatar: 'https://source.unsplash.com/random/100x100?face=3'
        },
        content: newComment,
        timestamp: '방금 전'
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 p-4 flex items-center border-b">
        <Link to={`/content/${id}`} className="text-gray-800 mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-semibold">댓글</h1>
      </div>

      <div className="pt-16 pb-20 px-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-start">
              <img src={comment.user.avatar} alt={comment.user.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="font-semibold">{comment.user.name}</p>
                <p className="text-gray-600 mt-1">{comment.content}</p>
                <p className="text-xs text-gray-400 mt-2">{comment.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <form onSubmit={handleSubmitComment} className="flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요..."
            className="flex-grow px-4 py-2 border rounded-full mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" className="bg-indigo-600 text-white p-2 rounded-full">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentPage;