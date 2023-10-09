import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas';

function App() {
  console.log(pizzas);
  return (
    <>
      <body>
        <div className='wrapper'>
          <Header />
          <div className='content'>
            <div className='container'>
              <div className='content__top'>
                <Categories />
                <Sort />
              </div>
              <h2 className='content__title'>Все пиццы</h2>
              <div className='content__items'>
                {pizzas.map((obj, i) => {
                  return <PizzaBlock key={obj.id} {...obj} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
