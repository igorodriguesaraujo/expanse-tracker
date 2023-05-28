import React from "react";

import useGlobalState from "../../hooks/useGlobalState";

import {
  formatMonetarie,
  totalTransaction,
  expensesTotal,
  winningTotal,
} from "../../utils";

export default function Balance() {
  const { transactions, setShow } = useGlobalState();

  return (
    <div className="container-main mb-6">
      <div className="flex items-center justify-between flex-wrap bg-slate-100 p-6 rounded-md space-y-6 md:space-y-0">
        <div className="flex flex-col">
          <strong className="text-sm font-normal text-slate-400">
            Seu Balanço
          </strong>
          <h2 className="text-4xl font-black text-slate-700">
            {formatMonetarie(totalTransaction(transactions))}
          </h2>
        </div>

        <div className="flex space-x-8">
          <div className="flex flex-col">
            <strong className="text-sm font-normal text-emerald-400">
              Total de Receita
            </strong>
            <h2 className="text-2xl font-black text-emerald-400">
              {formatMonetarie(winningTotal(transactions))}
            </h2>
          </div>

          <div className="flex flex-col">
            <strong className="text-sm font-normal text-red-400">
              Total de Despezas
            </strong>
            <h2 className="text-2xl font-black text-red-400">
              {formatMonetarie(expensesTotal(transactions))}
            </h2>
          </div>
        </div>
      </div>

      <button
        className="bg-slate-600 text-white rounded-md h-10 px-4 w-full md:w-auto md:ml-auto mt-4 flex justify-center items-center space-x-2"
        type="button"
        onClick={() => setShow(true)}
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
        <span>Adicionar transação</span>
      </button>
    </div>
  );
}
