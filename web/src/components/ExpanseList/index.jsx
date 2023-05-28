import React from "react";

import { formatMonetarie, formatDate } from "../../utils";
import useGlobalState from "../../hooks/useGlobalState";

export default function ExpanseList() {
  const { transactions, removeTransaction } = useGlobalState();

  if (!transactions.length) {
    return (
      <div className="container-main">
        <div className="flex flex-col justify-center items-center space-y-2 p-6 rounded-md bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-14 h-w-14 text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>

          <p className="text-md text-slate-400">
            Nenhuma transação encontrada.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-main">
      <h2 className="text-center text-slate-700 text-xl font-bold mb-4">
        Transações
      </h2>
      <div className="overflow-x-auto md:overflow-x-hidden">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <td className="p-4 text-slate-600 font-bold">#ID</td>
              <td className="p-4 text-slate-600 font-bold">Data</td>
              <td className="p-4 text-slate-600 font-bold">Descrição</td>
              <td className="p-4 text-slate-600 font-bold" colSpan={2}>
                Valor(R$)
              </td>
            </tr>
          </thead>
          <tbody>
            {transactions.map(({ id, description, amount, createAt }) => {
              return (
                <tr
                  key={id}
                  className="border-b border-slate-200 hover:bg-slate-100 duration-300"
                >
                  <td className="p-4 text-slate-500">{id}</td>
                  <td className="p-4 text-slate-500">{formatDate(createAt)}</td>
                  <td className="p-4 text-slate-500">{description}</td>
                  <td className="p-4 text-slate-500">
                    {formatMonetarie(+amount)}
                  </td>
                  <td>
                    <button
                      className="text-red-400"
                      onClick={() => removeTransaction(id)}
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
