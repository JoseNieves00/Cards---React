import './App.css';
import Card from './card.jsx';
import img1 from './assets/vector1.svg';
import img2 from './assets/vector2.svg';
import img3 from './assets/vector3.svg';

const App = () => {
  return (
    <div className="contenedor">
      <Card style="card" src={img1} class_img="img1" />
      <Card style="card2" src={img2} class_img="img2" />
      <Card style="card3" src={img3} class_img="img3" />
    </div>
  );
};

export default App;
