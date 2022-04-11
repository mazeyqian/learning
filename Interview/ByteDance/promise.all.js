// implentment the Promise.all

Promise.all = function (...arg) {
  const len = arg.len;
  const results = new Array(len).fill(null);
  let ok;
  const status = new Promise(resolve => ok = resolve)
  const fn = (ret, index) => {
    results[index] = ret;
    if (results.filter(ret => ret !== null).length === len) {
      ok(results);
    }
  };
  arg.forEach((item, index) => {
    item
      .then(
        res => fn.call(null, res, index)
      )
      .catch(
        err => fn.call(null, err, index)
      );
  });
  return status;
};
