import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzas';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
