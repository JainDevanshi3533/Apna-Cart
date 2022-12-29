import { useState } from "react";

export default function AddItem(props) {
  const [txt, changeTxt] = useState("");
  const [num, changeNum] = useState(0);

  const onChangeNum = (e) => {
    let newNum = Number(e.target.value);
    changeNum(newNum);
  };
  const onChangeTxt = (e) => {
    let newTxt = e.target.value;
    changeTxt(newTxt);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addItem(txt, num);
      }}
    >
      <div className="mb-3 row">
        <div className="col-6">
          <label htmlFor="e1" className="form-label ">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="e1"
            onChange={onChangeTxt}
          />
        </div>
        <div className="col-6">
          <label htmlFor="e2" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="e2"
            onChange={onChangeNum}
          />
        </div>
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
