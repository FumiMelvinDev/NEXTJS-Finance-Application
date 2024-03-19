"use client";

import { useRouter } from "next/navigation/";
import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const category = [
  {
    id: 1,
    name: "Income",
    transactionColor: "#57A773",
  },
  {
    id: 2,
    name: "Expense",
    transactionColor: "#EE6352",
  },
  {
    id: 3,
    name: "Savings/Investment",
    transactionColor: "#FFD3BA",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AddTransaction() {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    color: "",
  });
  const [selected, setSelected] = useState(category[1]);

  const router = useRouter();

  const { description, amount, color } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      description: description,
      amount: amount,
      category: selected.name,
      color: selected.transactionColor,
    };
    const res = await fetch("/api/Transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("failed to add transaction");
    }

    router.refresh();
  };
  return (
    <section>
      <form onSubmit={handleSubmit} method="post">
        <div className="relative space-y-3 rounded-md shadow-sm">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {category.map((category) => (
                        <Listbox.Option
                          key={category.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={category}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {category.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Transaction name"
          />

          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Transaction amount"
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddTransaction;
