import React ,{ useState, useEffect }from 'react'
import Header from '../component/Header';
import Images from '../component/Images';
import Pagination from '../component/Pagination';
import axios from 'axios';




const Home = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("office");
  const [isLoding, setIsLoding] = useState(true);


  useEffect(()=>{
    const fetchImages = async()=>{
      const result = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=20`)
      setItems(result.data.results)
      console.log(result.data.results)
      setIsLoding(false)
    }
    fetchImages()
  },[query])



  return (
    <div className='flex flex-col h-screen'>
      <Header searchText={(query) => setQuery(query)}/>
     

      <div className="flex justify-center mx-5">
        {isLoding ? (
          <div className="text-center">
            <div className=" mx-auto lds-dual-ring"></div>
          </div>
        ) : (
          <div className="gap-8 lg:columns-3 md:columns-2 sm:columns-1">
            <Images item={items} isLoding={isLoding} />
          </div>
        )}
      </div>

      
      <Pagination />
    </div>
  );
}

export default Home