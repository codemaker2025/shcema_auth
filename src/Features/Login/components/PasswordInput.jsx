import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import InformInput from "../../../components/Informed/InformInput";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      Password
      <div className="flex items-center border rounded-lg px-3 py-2">
        <InformInput
          name="password"
          type={showPassword ? "text" : "password"}
          className="flex-1 outline-none border-none bg-transparent"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
