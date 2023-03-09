// API URL
export const apiUrl =
  "https://63f9319e473885d837cafdd9.mockapi.io/personal-finance/";

// Functions to fetch and update data
export async function getData(url) {
  const reponse = await fetch(url);
  const data = await reponse.json();

  return data;
}

export async function getIndexData(url, index) {
  const reponse = await fetch(url + index);
  const data = await reponse.json();

  return data;
}

export async function addData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response;
}

export async function updateData(url, index, data) {
  const response = await fetch(url + index, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response;
}

export async function deleteData(url, index) {
  const response = await fetch(url + index, {
    method: "DELETE",
  });

  return response;
}

//  Functions to get data from the api
export async function fetchData(url, setCategory, setExpenses) {
  const data = await getData(url);
  let expenseData = [];
  for (let i = 1; i <= data.length; i++) {
    const categoryExpense = await getData(apiUrl + i + "/expenses");
    expenseData.push(...categoryExpense);
  }

  setCategory(data);
  setExpenses(expenseData);

  return data;
}
