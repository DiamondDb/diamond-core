module.exports = function promisify(func){
  return function(...args){
    return new Promise((resolve, reject) => {
      args.push(function(err, data){
        if(err) return reject(err)
        return resolve(data)
      })
      return func.apply(null, args)
    })
  }
}
