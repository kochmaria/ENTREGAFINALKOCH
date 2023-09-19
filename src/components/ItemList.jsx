
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <h2>Productos</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4" style={{ overflow: 'hidden', height: '500px' }}>
            <Link to={`/item/${item.id}`}>
              <Carousel interval={9000} style={{ backgroundColor: 'grey', color: 'black', height: '220%' }}>
                <Carousel.Item style={{ minHeight: '100px' }}>
                  <img src={item.imageId} alt={item.title} className="d-block w-100" />

                  <Carousel.Caption style={{ textAlign: 'bottom' }}>
                    <h2 style={{ fontSize: '24px', color: 'white' }}>{item.title}</h2>
                    <p style={{ fontSize: '20px', color: 'white' }}>Precio: ${item.price}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <p style={{ textAlign: 'center', color: 'white' }}>{item.description}</p>
                </Carousel.Item>
              </Carousel>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
