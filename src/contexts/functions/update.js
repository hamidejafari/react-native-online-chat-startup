const update = (applicateion, serviceName, params, id = null, query = null) => {
  return applicateion.service(serviceName).update(query);
};

export default update;
