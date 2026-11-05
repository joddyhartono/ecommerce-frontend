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

const CreateProductPage = () => {
  const { createProduct } = useSellerProductDetail();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    const data = await createProduct(form);
    if (data) {
      toast.success("Product successfully created!");
      navigate("/seller/dashboard");
    }
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
            <BreadcrumbPage>New Product</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mx-auto flex flex-col p-6 gap-6 justify-between items-center">
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-semibold">Create Product</h1>
          <p className="text-muted-foreground">
            Fill in your product details. Your product will appear in your shop
            right away.
          </p>
        </div>
        <ProductForm
          submitLabel={"Create Product"}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default CreateProductPage;
