import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const PaymentModel = ({ isOpen, setIsOpen, price }) => {
  const closeModal = () => setIsOpen(false);

  const launchRazorPay = () => {
    const options = {
      key: "rzp_test_4YA1ap8GCVG4Vo",
      amount: price * 100,
      currency: "INR",
      name: "Movie Mingle",
      description: "Movie purchase or rental",
      image:
        "bms\public\MovieMingle.png",
      handler: () => {
        setIsOpen(false);
        alert("Payment Successful");
      },
      theme: { color: "#c4242d" },
    };

    const razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                  Please make a payment
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello, please click on the button below to make a payment.
                  </p>
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    className="inline-flex justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{price}
                  </button>
                  <button
                    className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel Payment
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModel;
