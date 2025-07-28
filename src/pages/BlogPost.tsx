import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
  readTime: number;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts && id) {
      const posts: BlogPost[] = JSON.parse(savedPosts);
      const foundPost = posts.find(p => p.id === id);
      setPost(foundPost || null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Caricamento...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <>
        <SEOHead 
          title="Articolo non trovato - EndUser Blog"
          description="L'articolo richiesto non è stato trovato."
        />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Articolo non trovato</h1>
            <p className="text-muted-foreground mb-8">L'articolo che stai cercando non esiste o è stato rimosso.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna al Blog
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${post.title} - EndUser Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogTitle={post.title}
        ogDescription={post.excerpt}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna al Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: it })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} minuti di lettura</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-em:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Footer Navigation */}
          <footer className="max-w-4xl mx-auto mt-16 pt-8 border-t">
            <div className="text-center">
              <Link to="/blog">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Torna al Blog
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default BlogPost;