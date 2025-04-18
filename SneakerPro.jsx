import React, { useState } from "react";
import { WomenCard } from "../components/WomenCard";
import {
  ProductTopdiv,
  ProductSortdiv,
  ProductContainer,
} from "../Styled/productStyled";
import "../Styled/singleProduct.css";
import sneakers from "../data/menSneaker";
import { useNavigate } from "react-router-dom";

export const SneakerPro = () => {
  const navigate = useNavigate();
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);
  const handleChange = (e) => {};
  const handleSort = (e) => {
    if (e.target.value === "h2l") {
      let sneakerdata = sneakers.sort((a, b) => {
        return b.price - a.price;
      });
      //  console.log(topdata,"Women's");
      setHigh(true);
      //  sorted_data(dispatch,topdata)
    }
    if (e.target.value === "l2h") {
      let sneakerdata = sneakers.sort((a, b) => {
        return a.price - b.price;
      });
      setLow(true);
      setHigh(false);
      //  sorted_data(dispatch,topdata)
    }
    // console.log(topdata,"Women's");
  };

  const handleClick = (item) => {
    localStorage.setItem("singleProduct", JSON.stringify(item));

    navigate(`/products/men-sneakers/${item.id}`);
  };

  return (
    <>
      <ProductTopdiv>
        <div>
          <h2>Sneakers</h2>
          <p>{sneakers.length} items found</p>
        </div>
        <div>
          <ProductSortdiv>
            <h5>SortBy</h5>
            <select
              style={{ height: "50px", borderRadius: "10px" }}
              onClick={handleSort}
            >
              <option value="rev">Relevance</option>
              <option value="h2l">High To Low</option>
              <option value="l2h">Low To High</option>
              <option value="rate">Costomer Ratings</option>
              <option value="new">New Arrival</option>
              <option value="brand">Brand Name</option>
            </select>
          </ProductSortdiv>
        </div>
      </ProductTopdiv>

      <ProductContainer>
        <div>
          <div style={{ padding: "2%" }}>
            <div style={{ padding: "2%" }}>
              <h5>Price</h5>
              <hr />
              <div>
                <form>
                  <div>
                    <input
                      style={{ marginLeft: "-50%" }}
                      type="radio"
                      value="under50"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$50 and Under</label>
                  </div>
                  <div>
                    <input
                      style={{ marginLeft: "-50%" }}
                      type="radio"
                      value="under100"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$100 and Under</label>
                  </div>
                  <div>
                    <input
                      style={{ marginLeft: "-50%" }}
                      type="radio"
                      value="under200"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$200 and Under</label>
                  </div>
                  <div>
                    <input
                      style={{ marginLeft: "-50%" }}
                      type="radio"
                      value="above200"
                      name="filterprice"
                      onChange={handleChange}
                    />
                    <label htmlFor="under50">$200 and Over</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="topsdiv">
          {sneakers.map((item) => {
            return (
              <div
                onClick={() => handleClick(item)}
              >
                <WomenCard
                  imageurl={item.imageurl}
                  brand={item.brand}
                  desc={item.desc}
                  ratings={item.ratings}
                  price={item.price}
                  key={item.id}
                />
              </div>
            );
          })}
        </div>
      </ProductContainer>
    </>
  );
};
