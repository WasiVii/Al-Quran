"use client";

// import { ToastContainer } from "react-toastify";
export default function Template({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white dark:bg-black">
        {children}
      </div>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </>
  );
}
