import React from "react";
import "./CSS/ShopCategory.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import "./CSS/ShopCategory.css";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

const ShopCategory = (props) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllProduct"
        );
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);

  // Filter data based on categoryID
  const filteredData = data.filter((item) => {
    // Kiểm tra nếu type không được cung cấp (hoặc là undefined, null, hoặc chuỗi rỗng), thì không áp dụng bộ lọc theo type
    if (!type) {
      return props.category == item.categoryID;
    }
    // Nếu type được cung cấp, áp dụng bộ lọc theo cả category và type
    return props.category == item.categoryID && type == item.productTypeID;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  // Calculate products for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="shop-category">
        <div className="shopcategory-banner">
          <Slider {...settings}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/${props.banners[0]}`}
                alt=""
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/${props.banners[1]}`}
                alt=""
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/${props.banners[2]}`}
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="shopcategory-indexShort">
          <p>
            <span>
              Showing {indexOfFirstProduct + 1}-{indexOfLastProduct}{" "}
            </span>{" "}
            out of {filteredData.length} products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src="" alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => (
              <Item
                key={item.productID}
                id={item.productID}
                name={item.name}
                description={item.description}
                new_price={
                  item.productVarients && item.productVarients.length > 0
                    ? item.productVarients[0].newPrice
                    : null
                }
                old_price={
                  item.productVarients && item.productVarients.length > 0
                    ? item.productVarients[0].oldPrice
                    : null
                }
                img={item.productImage}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
        <Pagination
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const Pagination = ({ totalPages, paginate, currentPage }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          disabled={number === currentPage}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default ShopCategory;
