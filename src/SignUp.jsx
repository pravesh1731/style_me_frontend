import React from "react";

const SignUp = () => {
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

        <div className="mt-10">
          <p>Upload Photos for Your Avatar</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="text-sm text-blue-900">
              <p className="mb-2">
                <strong>
                  Upload 3 photos to create your personalized avatar:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li className=""> Clear face photo (front-facing)</li>
                <li className=""> Full body photo (front view)</li>
                <li className=""> Full face photo (back view)</li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SignUp;
