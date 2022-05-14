const find = (applicateion, serviceName, query) => {
  return applicateion.service(serviceName).find(query);
};

export default find;
