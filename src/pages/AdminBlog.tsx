import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RichEditor from '@/components/RichEditor';
import SEOHead from '@/components/SEOHead';
import { 
  PlusCircle, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  LogOut, 
  Eye,
  Calendar,
  Clock,
  Star
} from 'lucide-react';
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

const AdminBlog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [tagInput, setTagInput] = useState('');

  // Form states
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('EndUser Team');
  const [tags, setTags] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);
  const [readTime, setReadTime] = useState(5);

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (!isAuthenticated || !loginTime) {
      navigate('/admin/login');
      return;
    }

    // Check if session is expired (24 hours)
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (now - parseInt(loginTime) > twentyFourHours) {
      localStorage.removeItem('adminAuthenticated');
      localStorage.removeItem('adminLoginTime');
      navigate('/admin/login');
      return;
    }

    // Load posts
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin/login');
  };

  const resetForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setAuthor('EndUser Team');
    setTags([]);
    setFeatured(false);
    setReadTime(5);
    setTagInput('');
    setEditingPost(null);
    setIsCreating(false);
  };

  const startCreating = () => {
    resetForm();
    setIsCreating(true);
  };

  const startEditing = (post: BlogPost) => {
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setAuthor(post.author);
    setTags(post.tags);
    setFeatured(post.featured);
    setReadTime(post.readTime);
    setEditingPost(post);
    setIsCreating(false);
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const savePost = () => {
    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      return;
    }

    const postData: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      author: author.trim(),
      publishedAt: editingPost?.publishedAt || new Date().toISOString(),
      tags,
      featured,
      readTime
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = posts.map(post => post.id === editingPost.id ? postData : post);
    } else {
      updatedPosts = [postData, ...posts];
    }

    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    resetForm();
  };

  const deletePost = (postId: string) => {
    if (confirm('Sei sicuro di voler eliminare questo articolo?')) {
      const updatedPosts = posts.filter(post => post.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    }
  };

  return (
    <>
      <SEOHead 
        title="Admin Blog - EndUser"
        description="Area amministrazione blog EndUser."
        noIndex={true}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Blog Administration</h1>
              <p className="text-muted-foreground">Gestisci i contenuti del blog EndUser</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/blog')}>
                <Eye className="w-4 h-4 mr-2" />
                Visualizza Blog
              </Button>
              <Button variant="outline" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList>
              <TabsTrigger value="posts">Articoli ({posts.length})</TabsTrigger>
              <TabsTrigger value="editor">
                {isCreating ? 'Nuovo Articolo' : editingPost ? 'Modifica Articolo' : 'Editor'}
              </TabsTrigger>
            </TabsList>

            {/* Posts List */}
            <TabsContent value="posts">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Tutti gli Articoli</h2>
                  <Button onClick={startCreating}>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Nuovo Articolo
                  </Button>
                </div>

                {posts.length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-12">
                      <p className="text-muted-foreground mb-4">Nessun articolo pubblicato</p>
                      <Button onClick={startCreating}>
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Crea il primo articolo
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {posts.map(post => (
                      <Card key={post.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-lg">{post.title}</CardTitle>
                                {post.featured && (
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {post.tags.map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {format(new Date(post.publishedAt), 'dd/MM/yyyy', { locale: it })}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime} min
                                </span>
                                <span>di {post.author}</span>
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => startEditing(post)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => deletePost(post.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Editor */}
            <TabsContent value="editor">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      {isCreating ? 'Nuovo Articolo' : editingPost ? 'Modifica Articolo' : 'Editor Articoli'}
                    </CardTitle>
                    {(isCreating || editingPost) && (
                      <Button variant="outline" onClick={resetForm}>
                        <X className="w-4 h-4 mr-2" />
                        Annulla
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {(isCreating || editingPost) ? (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Titolo *</Label>
                          <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Titolo dell'articolo"
                          />
                        </div>
                        <div>
                          <Label htmlFor="author">Autore</Label>
                          <Input
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Nome dell'autore"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="excerpt">Estratto *</Label>
                        <Textarea
                          id="excerpt"
                          value={excerpt}
                          onChange={(e) => setExcerpt(e.target.value)}
                          placeholder="Breve descrizione dell'articolo"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label>Tags</Label>
                        <div className="flex gap-2 mb-2">
                          <Input
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            placeholder="Aggiungi tag"
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                          />
                          <Button type="button" onClick={addTag}>Aggiungi</Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                              {tag} <X className="w-3 h-3 ml-1" />
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="featured"
                            checked={featured}
                            onCheckedChange={setFeatured}
                          />
                          <Label htmlFor="featured">Articolo in evidenza</Label>
                        </div>
                        <div>
                          <Label htmlFor="readTime">Tempo di lettura (minuti)</Label>
                          <Input
                            id="readTime"
                            type="number"
                            value={readTime}
                            onChange={(e) => setReadTime(parseInt(e.target.value) || 5)}
                            min="1"
                            max="60"
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Contenuto *</Label>
                        <RichEditor
                          content={content}
                          onChange={setContent}
                          placeholder="Scrivi il contenuto dell'articolo..."
                        />
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={savePost} disabled={!title.trim() || !excerpt.trim() || !content.trim()}>
                          <Save className="w-4 h-4 mr-2" />
                          {editingPost ? 'Aggiorna Articolo' : 'Pubblica Articolo'}
                        </Button>
                        <Button variant="outline" onClick={resetForm}>
                          Annulla
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-4">
                        Seleziona un articolo da modificare o crea un nuovo articolo
                      </p>
                      <Button onClick={startCreating}>
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Nuovo Articolo
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminBlog;