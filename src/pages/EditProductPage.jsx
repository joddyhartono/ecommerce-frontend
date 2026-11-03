import ProductForm from "@/components/seller/ProductForm";
import useSellerProductDetail from "@/hooks/useSellerProductDetail";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const EditProductPage = () => {
  const { product, updateProduct } = useSellerProductDetail();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    const success = await updateProduct(form);
    if (success) {
      navigate("/seller/dashboard");
    }
    toast.success("Product successfully updated!");
  };

  return (
    <section className="flex flex-col p-8 gap-8 justify-center items-center">
      <h1 className="text-2xl font-semibold">Edit Product</h1>
      <p className="text-muted-foreground">
        Update your product details. Changes will appear in your shop right
        away.
      </p>
      <ProductForm
        key={product?.id}
        handleSubmit={handleSubmit}
        submitLabel={"Save Changes"}
        product={product}
      />
    </section>
  );
};

export default EditProductPage;
