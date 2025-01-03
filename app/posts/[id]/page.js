"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Loading from "@/components/Loading";
import { Pencil, Trash2 } from "lucide-react";

export default function PostPage() {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${params.id}`);
      if (!response.ok) throw new Error("Failed to fetch post");
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete post");

      router.push("/posts");
      router.refresh();
    } catch (err) {
      setError(err.message);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!post) return <div className="text-center p-4 text-gray-50">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-bold text-gray-50">{post.title}</h1>
        
        <div className="w-full flex items-center justify-end space-x-2">
        <Link
          href={`/posts/${post._id}/edit`}
          className="inline-flex items-center justify-center px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 max-w-xs"
        >
          <Pencil className="w-4 h-4 mr-1" />
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="inline-flex items-center justify-center px-4 py-2 bg-red-500 text-black rounded-md hover:bg-red-600 max-w-xs"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </button>
      </div>

      </div>

      <div className=" rounded-lg p mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-50">Blog Summary: </h2>
        <p className="text-gray-300">{post.summary}</p>
      </div>

      <div className="prose max-w-none">
        <div className="text-lg font-semibold mb-2 text-gray-50">Original Text: </div>
        <div className="whitespace-pre-wrap text-gray-300">{post.content}</div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Created: {post.formattedCreatedAt}</p>
        <p>Last updated: {post.formattedUpdatedAt}</p>
      </div>
    </div>
  );
}
