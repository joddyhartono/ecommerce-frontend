import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useProfile from "@/hooks/useProfile";
import { getInitials } from "@/lib/utils";
import { selectLoginData } from "@/store/authSlice";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const ProfilePage = () => {
  const user = useSelector(selectLoginData);
  const { updateProfile } = useProfile();

  const [form, setForm] = useState({
    image: user?.image,
    name: user?.name,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setForm({ ...form, [e.target.name]: reader.result });
      };
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const payload = {
        ...form,
        image: form.image?.includes(",")
          ? form.image.split(",")[1]
          : form.image,
        email: user?.email,
      };

      await updateProfile(payload);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col items-center gap-6 w-full max-w-md p-6 border rounded-lg shadow-sm"
        onSubmit={handleSubmit}
      >
        <Avatar
          className="w-32 h-32 cursor-pointer"
          onClick={() => {
            return fileInputRef.current?.click();
          }}
        >
          <AvatarImage src={form.image} alt={form.name} />
          <AvatarFallback>{getInitials(form.name)}</AvatarFallback>
        </Avatar>
        <input
          type="file"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          className="hidden"
        />
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>
        <Button className="w-full cursor-pointer">Save Changes</Button>
      </form>
    </div>
  );
};

export default ProfilePage;
