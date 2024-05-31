import { useState, useEffect } from 'react';
import Modal from 'react-modal';

import SearchBar from './components/SearchBar/SearchBar';
import { FetchArticles } from './Htpp';  
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import { Item } from './App.type';



function App() {
  const [articles, setArticles] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalItem, setModalItem] = useState<Item | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setArticles([]);
  };

  const openModal = (item: Item) => {
    setModalItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

 useEffect(() => {
  async function getArticles() {
    if (!query) return;
    setIsLoading(true);
    setError(false);

    try {
      const data = await FetchArticles(query, page); 

      
      const formattedData = data.map((item: any) => ({
        ...item,
        urls: {
          small: item.urls.small || item.urls.regular, 
          regular: item.urls.regular || '' 
        },
        description: item.description || null
      }));

      setArticles(prevItems => [...prevItems, ...formattedData]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  getArticles();
}, [query, page]);


  Modal.setAppElement("#root");

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery items={articles.map(article => ({ ...article, description: article.description || null }))} onClick={openModal} />
      {articles.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalItem && (
        <ImageModal
          item={modalItem}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
