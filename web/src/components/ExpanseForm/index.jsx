import React, { useState } from "react";

import useGlobalState from "../../hooks/useGlobalState";

export default function ExpanseForm() {
  const { addTransaction, show, setShow } = useGlobalState();

  const initialForm = {
    id: window.crypto.randomUUID(),
    createAt: new Date().getTime(),
    description: "",
    amount: 0,
  };
  const [form, setForm] = useState(initialForm);

  function handleForm(e) {
    const { value, name } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: [name] === "amount" ? +value : value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    addTransaction(form);
    setForm(initialForm);
    setShow(false);
  }

  if (!show) return;

  return (
    <div className="fixed bg-black/70 w-full h-screen top-0 left-0 px-2">
      <div className="flex flex-col bg-white rounded-md p-6 max-w-lg mx-auto mt-14">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-slate-700 text-xl font-bold ">
            Adicione suas receitas ou despesas
          </h2>
          <button
            onClick={() => setShow(false)}
            className="text-slate-400 bg-slate-100 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
          <span className="flex flex-col space-y-2">
            <label className="font-bold text-slate-600" htmlFor="descrition">
              Descrição
            </label>
            <input
              type="text"
              className="border border-slate-200 text-slate-600 rounded-md px-4 py-2 w-full h-12"
              placeholder="Digite a descriçao"
              name="description"
              id="description"
              value={form.description}
              onChange={handleForm}
            />
          </span>

          <span className="flex flex-col space-y-2">
            <label className="font-bold text-slate-600" htmlFor="amount">
              Valor (R$)
            </label>
            <input
              type="number"
              className="border border-slate-200 text-slate-600 rounded-md px-4 py-2 w-full h-12"
              placeholder="0.00"
              step="0.01"
              name="amount"
              id="amount"
              value={form.amount}
              onChange={handleForm}
            />
            <small className="text-xs text-slate-400">
              Para despezas use o sinal de subtração (-) na frente da valor
            </small>
          </span>

          <button
            className="bg-slate-600 text-white rounded-md h-12 px-6 py-4 flex justify-center items-center space-x-4"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Salvar</span>
          </button>
        </form>
      </div>
    </div>
  );
}
