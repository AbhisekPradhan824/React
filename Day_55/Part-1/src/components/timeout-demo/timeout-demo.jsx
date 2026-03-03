import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function TimeoutDemo() {
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState("Manual");
  let ProductId = useRef(1);
  let timeInterval = useRef(null);

  function LoadProduct(id) {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }

  function NextClick() {
    ProductId.current = ProductId.current + 1;
    LoadProduct(ProductId.current);
  }
  function PreviousClick() {
    ProductId.current = ProductId.current - 1;
    LoadProduct(ProductId.current);
  }

  function LoadProductAuto() {
    ProductId.current = ProductId.current + 1;
    axios
      .get(`https://fakestoreapi.com/products/${ProductId.current}`)
      .then((response) => {
        setProduct(response.data);
      });
  }

  function PlayClick() {
    timeInterval.current = setInterval(LoadProductAuto, 3000);
    setStatus("Slide Show - Started");
  }

  function PauseClick() {
    clearInterval(timeInterval.current);
    setStatus("Slide Show - Paused");
  }

  useEffect(() => {
    LoadProduct(1);
  }, []);
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card p-2 mt-4 w-50">
        <div className="card-header text-center">
          <div>{product.title}</div>
          <div>{status}</div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-1">
              <button
                className="bi bi-chevron-left btn"
                onClick={PreviousClick}
              ></button>
            </div>
            <div className="col-10">
              <img src={product.image} width="100%" height="300" />
            </div>
            <div className="col-1">
              <button
                onClick={NextClick}
                className="bi bi-chevron-right btn"
              ></button>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button
            onClick={PlayClick}
            className="btn btn-danger me-2 bu bi-play"
          ></button>
          <button
            onClick={PauseClick}
            className="btn btn-warning bu bi-pause"
          ></button>
        </div>
      </div>
    </div>
  );
}
