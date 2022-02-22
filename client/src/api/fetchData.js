const FetchData = async () => {
  let dataFetched = [];
  await fetch("http://localhost:4000/products", {
    method: "GET",
    mode: "cors",
  })
    .then((response) => response.json())
    .then(response => {
      if (response.error) {
        throw new Error(response.error)
      }
      return response
    })
    .then((data) => {
      // console.log(data);
      dataFetched = data;
    })
    .catch((error) => console.log(error));

  return dataFetched;
};

export default FetchData;
