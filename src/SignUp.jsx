import { Camera, CheckCircle, Upload, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [uploadedImages, setUploadedImages] = useState([
    { type: "face", file: null, preview: null },
    { type: "front", file: null, preview: null },
    { type: "back", file: null, preview: null },
  ]);

  const handleImageUpload = (type, file) => {
    const preview = URL.createObjectURL(file);

    setUploadedImages((prev) =>
      prev.map((img) =>
        img.type === type ? { ...img, file: file, preview: preview } : img,
      ),
    );
  };

  const removeImage = (type) => {
    setUploadedImages((prev) =>
      prev.map((img) =>
        img.type === type ? { ...img, file: null, preview: null } : img,
      ),
    );
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      handleImageUpload(type, file);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl p-8 shadow-xl">
        <div className="mb-8">
          <h2 className="text-3xl mb-5 font-serif">STYLE-ME</h2>
          <h2 className="text-2xl mb-2 text font-bold">Create Your Account</h2>
          <p className="text-muted-foreground">
            Fill in your details and upload photos to create your personalized
            avatar
          </p>
        </div>

        <div>
          <p className="font-bold">Basic Information</p>
          <div className="flex justify-around mt-2 gap-6">
            <div className="w-full">
              <legend className="">Full Name</legend>
              <input
                type="text"
                placeholder="Pravesh Chaudhary"
                className="input rounded-2xl "
              />
            </div>

            <div className="w-full">
              <legend className="">Email Address</legend>
              <input
                type="email"
                placeholder="pravesh@example.com"
                className="input rounded-2xl "
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-2 gap-10">
            <div className="w-full">
              <legend>Password</legend>
              <label className="input validator rounded-2xl w-full">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              {/* <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p> */}
            </div>

            <div className="w-full">
              <legend className="">Height (cm)</legend>
              <input
                type="number"
                placeholder="175"
                className="input rounded-2xl  "
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-4">Upload Photos for Your Avatar</h3>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex gap-3">
              <Camera className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="mb-2">
                  <strong>
                    Upload 3 photos to create your personalized avatar:
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Clear face photo (front-facing)</li>
                  <li>Full body photo (front view)</li>
                  <li>Full body photo (back view)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {uploadedImages.map((image) => (
              <div key={image.type} className="space-y-2">
                <label className="capitalize">{image.type} Photo</label>
                <div
                  onDrop={(e) => handleDrop(e, image.type)}
                  onDragOver={(e) => e.preventDefault()}
                  className={`
                        relative border-2 border-dashed rounded-xl aspect-[3/4] 
                        flex flex-col items-center justify-center cursor-pointer
                        hover:border-primary transition-colors
                        ${image.preview ? "border-green-500 bg-gray-100" : "border-gray-300 bg-gray-100"}
                      `}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(image.type, file);
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  {image.preview ? (
                    <>
                      <img
                        src={image.preview}
                        alt={`${image.type} preview`}
                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      />

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          removeImage(image.type);
                        }}
                        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100"
                      >
                        <X className="h-4 w-4" />
                      </button>

                      <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg py-2 flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-center px-4">
                        <span className="text-primary">Click to upload</span>
                        <br />
                        <span className="text-muted-foreground text-xs">
                          or drag and drop
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gray-500 p-2 mt-4 text-white"
          size="lg"
          // disabled={!isFormValid}
        >
          Create Account
        </button>

        <p className="text-center mt-6 text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>

      </div>
    </div>
  );
};

export default SignUp;
