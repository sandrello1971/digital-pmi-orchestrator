import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
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

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <>
      <SEOHead 
        title="Blog - EndUser | Insights su Digitalizzazione e Innovazione"
        description="Scopri le ultime tendenze nella digitalizzazione aziendale, metodologie innovative e strategie per l'ottimizzazione dei processi business."
        keywords="blog digitalizzazione, innovazione aziendale, trasformazione digitale, metodologie agili"
        ogTitle="Blog EndUser - Insights su Digitalizzazione e Innovazione"
        ogDescription="Articoli e approfondimenti sulla digitalizzazione, metodologie innovative e best practices per l'evoluzione del business."
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Blog EndUser
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, metodologie e best practices per la digitalizzazione aziendale
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/admin/blog" className="inline-block">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Area Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
                Nessun articolo pubblicato
              </h2>
              <p className="text-muted-foreground mb-8">
                Il blog è in fase di preparazione. Presto troverai qui contenuti interessanti!
              </p>
              <Link to="/admin/blog">
                <Button>
                  <User className="w-4 h-4 mr-2" />
                  Accedi come Admin
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Articoli in Evidenza</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map(post => (
                      <Card key={post.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map(tag => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: it })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime} min
                              </span>
                            </div>
                            <Link to={`/blog/${post.id}`}>
                              <Button variant="outline" size="sm">Leggi tutto</Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Regular Posts */}
              {regularPosts.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-8">Tutti gli Articoli</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map(post => (
                      <Card key={post.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                          <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                          <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              {format(new Date(post.publishedAt), 'dd/MM/yyyy', { locale: it })}
                            </div>
                            <Link to={`/blog/${post.id}`}>
                              <Button variant="ghost" size="sm">Leggi</Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;