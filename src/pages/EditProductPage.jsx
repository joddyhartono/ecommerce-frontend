import ProductForm from "@/components/seller/ProductForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
    <section className="flex flex-col p-8 gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/seller/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto flex flex-col p-6 gap-6 justify-center items-center">
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-semibold">Edit Product</h1>
          <p className="text-muted-foreground">
            Update your product details. Changes will appear in your shop right
            away.
          </p>
        </div>
        <ProductForm
          key={product?.id}
          handleSubmit={handleSubmit}
          submitLabel={"Save Changes"}
          product={product}
        />
      </div>
    </section>
  );
};

export default EditProductPage;
