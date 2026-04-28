import { articles } from '@/data/blog';
import BlogClient from './BlogClient';
import Link from 'next/link';

export function generateStaticParams() {
   return Object.keys(articles).map((slug) => ({
      slug: slug,
   }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
   const { slug } = await params;
   const article = articles[slug];

   if (!article) {
      return (
         <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 text-center">
            <h1 className="font-serif text-5xl font-bold text-primary-900 mb-6">Article Not Found</h1>
            <p className="text-lg text-primary-900/70 mb-10">This article does not exist or may have been moved.</p>
            <Link href="/blog" className="btn-primary">← Back to Blog</Link>
         </div>
      );
   }

   return <BlogClient article={article} />;
}
