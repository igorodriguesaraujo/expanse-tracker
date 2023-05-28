export function formatMonetarie(number) {
  if (typeof number !== "number") return;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export function totalTransaction(transactions) {
  if (!transactions) return;
  return transactions
    .map(({ amount }) => +amount)
    .reduce((acc, next) => (acc += next), 0);
}

export function expensesTotal(expenses) {
  if (!expenses) return;
  return expenses
    .map(({ amount }) => +amount)
    .filter((amount) => amount < 0)
    .reduce((acc, next) => (acc += next), 0);
}

export function winningTotal(winn) {
  if (!winn) return;
  return winn
    .map(({ amount }) => +amount)
    .filter((amount) => amount > 0)
    .reduce((acc, next) => (acc += next), 0);
}
