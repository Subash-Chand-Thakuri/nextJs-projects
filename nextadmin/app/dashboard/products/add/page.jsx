// import { addProduct } from "@/app/lib/actions";
import { addProduct } from "@/app/lib/action";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select name="" id="">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="computer">Computer</option>
          <option value="laptop">Laptop</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
