import React, { useState } from "react";

const BMCWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[99999]">
      {/* Floating Coffee Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition bg-[#5F7FFF] border border-black hover:scale-110"
      >
        <img
          src="/coffee3.png" // put your uploaded image in /public/coffee.png
          alt="coffee"
          className="w-8 h-8"
        />
      </button>

      {/* Popup Overlay */}
      {open && (
        <div className="fixed inset-0 flex justify-end items-end p-6 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-80 p-5 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-2">Support Rohit Ranjan Kumar</h3>

            <p className="text-sm text-gray-600 mb-3">
              If you like my work, you can support me here 🙂
            </p>

            {/* Input fields */}
            <input
              type="number"
              placeholder="₹ Enter amount"
              className="w-full border rounded-lg px-3 py-2 mb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Name or @yoursocial"
              className="w-full border rounded-lg px-3 py-2 mb-2 text-sm"
            />
            <textarea
              placeholder="Say something nice..."
              className="w-full border rounded-lg px-3 py-2 mb-2 text-sm"
            />

            {/* Monthly checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <input type="checkbox" className="accent-indigo-600" />
              Make this monthly
            </label>

            {/* Submit Button */}
            <a
              href="https://www.buymeacoffee.com/rrkcoder"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#FFDD00] border border-black text-black py-2 rounded-lg text-center font-medium hover:scale-105 transition"
            >
              ☕ Buy me a coffee
            </a>

            {/* Footer */}
            <div className="mt-3 text-center">
              <a
                href="https://www.buymeacoffee.com/rrkcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:underline"
              >
                buymeacoffee.com/rrkcoder
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMCWidget;
