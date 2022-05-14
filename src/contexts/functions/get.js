const get = (applicateion, serviceName, id) => {
    return applicateion.service(serviceName).find(id);
};

export default get;
