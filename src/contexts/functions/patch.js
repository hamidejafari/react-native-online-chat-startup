const patch = (applicateion, serviceName, params, id = null, query = null) => {
  return applicateion.service(serviceName).patch(query);
};

export default patch;
