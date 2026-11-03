import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox";
import { useSelector } from "react-redux";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { cn, toImageSrc } from "@/lib/utils";

const ProductForm = ({ handleSubmit, submitLabel, product = null }) => {
  const categories = useSelector((state) => state.categories.data);
  const isEdit = Boolean(product);
  const [form, setForm] = useState({
    categoryId: product?.categoryId || "",
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || "",
    image: product?.image || "",
  });

  const [errors, setErrors] = useState({
    categoryId: "",
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const selectedCategory =
    categories.find((category) => category.id === form?.categoryId) || "";

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (!file) {
        setErrors({
          ...errors,
          [e.target.name]: `The ${e.target.name} field is required`,
        });
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];
        setForm({ ...form, [e.target.name]: base64 });
      };
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      setErrors({
        ...errors,
        [e.target.name]: e.target.value
          ? ""
          : `The ${e.target.name} field is required`,
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md p-6 border rounded-lg shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();

        if (
          isEdit &&
          product.categoryId === form.categoryId &&
          product.name === form.name &&
          product.description === form.description &&
          String(product.price) === String(form.price) &&
          product.image === form.image
        ) {
          return;
        }

        if (!form.categoryId) {
          setErrors((prev) => ({
            ...prev,
            categoryId: "The category field is required",
          }));
        }

        if (!form.name) {
          setErrors((prev) => ({
            ...prev,
            name: "The name field is required",
          }));
        }

        if (!form.description) {
          setErrors((prev) => ({
            ...prev,
            description: "The description field is required",
          }));
        }

        if (!form.price) {
          setErrors((prev) => ({
            ...prev,
            price: "The price field is required",
          }));
        }

        if (!form.image) {
          setErrors((prev) => ({
            ...prev,
            image: "The image field is required",
          }));
        }

        if (
          !form.categoryId ||
          !form.name ||
          !form.description ||
          !form.description ||
          !form.price ||
          !form.image
        ) {
          return;
        }

        handleSubmit(isEdit ? { ...form, id: product.id } : form);
      }}
    >
      <div className="flex flex-col gap-2">
        <Label>Category</Label>
        <Combobox
          items={categories}
          itemToStringLabel={(category) => category.name}
          itemToStringValue={(category) => category.id}
          value={selectedCategory}
          onValueChange={(category) => {
            setForm({ ...form, categoryId: category.id });
          }}
        >
          <ComboboxInput placeholder="Select a category" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(category) => (
                <ComboboxItem key={category.id} value={category}>
                  {category.name}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">{errors.categoryId}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label className={errors.name && "text-red-500"}>Name</Label>
        <Input
          value={form.name}
          onChange={handleChange}
          name="name"
          className={errors.name && "border-red-500 text-red-500"}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label className={errors.description && "text-red-500"}>
          Description
        </Label>
        <Textarea
          value={form.description}
          onChange={handleChange}
          name="description"
          className={errors.description && "border-red-500 text-red-500"}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label className={errors.price && "text-red-500"}>Price</Label>
        <Input
          value={form.price}
          onChange={handleChange}
          name="price"
          className={errors.price && "border-red-500 text-red-500"}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label className={errors.image && "text-red-500"}>Image</Label>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className={cn(
              "text-sm file:mr-3 file:rounded-md file:border file:bg-foreground file:text-white file:px-3 file:py-1.5 file:text-sm file:font-medium hover:file:bg-primary/90",
              errors.image && "text-red-500",
            )}
          />
          <div className="w-30 h-30 rounded-md border flex items-center justify-center">
            {form.image ? (
              <img
                src={toImageSrc(form.image)}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs text-muted-foreground">No image</span>
            )}
          </div>
        </div>
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image}</p>
        )}
      </div>
      <Button>{submitLabel}</Button>
    </form>
  );
};

export default ProductForm;
