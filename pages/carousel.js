import dynamic from 'next/dynamic';

//import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'

const Carousel = dynamic(
    () => import('@brainhubeu/react-carousel'),
    { ssr: false },
   );



const MyCarousel = () => (
    <Carousel plugins={['arrows']}>
      <img src="https://images.unsplash.com/photo-1610297987527-ce5ea2915e5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="ads" />
      <img src="https://images.unsplash.com/photo-1610297987527-ce5ea2915e5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="asdasd"/>
      <img src="https://images.unsplash.com/photo-1610297987527-ce5ea2915e5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="ASDasd"/>
    </Carousel>
  );
  
  export default MyCarousel


  