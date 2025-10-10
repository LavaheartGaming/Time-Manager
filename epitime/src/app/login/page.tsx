"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLogin && !acceptTerms) {
      alert("You must accept the terms and conditions to continue.");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (isLogin) {
      alert("✅ Login successful!");
      router.push("/dashboard");
    } else {
      alert("✅ Account created successfully!");
      router.push("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center text-white px-4 py-10">
      <div className="max-w-md w-full bg-blue-950/60 rounded-2xl p-8 shadow-2xl border border-blue-700/50 backdrop-blur-xl">
        <div className="flex justify-center mb-6">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2103/2103691.png"
            alt="Epitime Logo"
            width={80}
            height={80}
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  onInvalid={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("Please enter your full name.")
                  }
                  onInput={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("")
                  }
                  className="w-full pl-10 pr-4 py-3 bg-blue-900/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@mail.com"
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("Please enter a valid email address.")
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                className="w-full pl-10 pr-4 py-3 bg-blue-900/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("Please enter your password.")
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
                className="w-full pl-10 pr-10 py-3 bg-blue-900/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-yellow-300"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  onInvalid={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("Please confirm your password.")
                  }
                  onInput={(e) =>
                    (e.target as HTMLInputElement).setCustomValidity("")
                  }
                  className="w-full pl-10 pr-4 py-3 bg-blue-900/50 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
          )}

          {!isLogin && (
            <div className="flex items-start gap-3 text-sm">
              <input
                id="acceptTerms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 accent-yellow-400"
              />
              <label htmlFor="acceptTerms">
                I agree to the{" "}
                <a href="#" className="text-yellow-400 hover:underline">
                  terms of service
                </a>
                .
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105"
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-yellow-400 hover:underline font-semibold"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
