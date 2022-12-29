export default function Footer(props) {
  return (
    <>
      <div className="row mt-5">
        <button
          type="submit"
          className="btn btn-danger col-2"
          onClick={() => {
            props.resetQuantity();
          }}
        >
          Reset
        </button>
        <div className="col-8">{props.totalAmount}</div>
        <button className="btn btn-primary col-2">Pay Now</button>
      </div>
    </>
  );
}
