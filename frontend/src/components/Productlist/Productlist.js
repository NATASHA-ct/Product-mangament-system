import React from 'react'
import './list.css';
import Navbar from "./components/Navbar/Navbar";

function Productlist() {

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

   const handleProductSelection = (event) => {
     const productId = event.target.value;
     if (event.target.checked) {
       setSelectedProducts([...selectedProducts, productId]);
     } else {
       setSelectedProducts(selectedProducts.filter((id) => id !== productId));
     }
   };

   const handleMassDelete = async () => {
     try {
       const { data } = await axios.post("/delete-products.php", {
         selectedProducts: selectedProducts,
       });
       setStatusMessage(data.message);
       setSelectedProducts([]);
     } catch (error) {
       setStatusMessage("Failed to delete products");
     }
   };

  return (
    <>
      <Navbar handleMassDelete={handleMassDelete} />
      <h2 className="listHd">Product List</h2>

      <div className="listCont">
        <div className="singleProd">
          <input
            type="checkbox"
            value={product.id}
            className="delete-checkbox"
            onChange={handleProductSelection}
            checked={selectedProducts.includes(product.id)}
          />

          <p className="sku">JVC200123</p>
          <p className="name">Acme DISC</p>
          <p className="price">$1.00</p>
          <p className="attributes">Size: 700 MB</p>
        </div>
      </div>
    </>
  );
}

export default Productlist
