export default function Product(props) {
  return (
    <>
      <div className="row mt-3">
        <div className="col-4">
          <h2>{props.prod.name}</h2>
          <span className="badge bg-secondary"> ₹ {props.prod.price}</span>
        </div>
        <div className="col-4">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.prod.quantity}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2 ">{props.prod.quantity * props.prod.price}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => {
              props.removeItem(props.index);
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}
