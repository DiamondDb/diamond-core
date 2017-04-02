const SAVE = 'SAVE'
const save = (table, record) => {
  return {
    operation: SAVE,
    data: { table, record }
  }
}

const FETCH = 'FETCH'
const fetch = (table, id) => {
  return {
    operation: FETCH,
    data: {
      table,
      id
    }
  }
}

const MAKE_TABLE = 'MAKE_TABLE'
const makeTable = (tableData) => {
  return {
    operation: MAKE_TABLE,
    data: {
      tableData
    }
  }
}

const FILTER = 'FILTER'
const comparators = ['EQ','GT','LT']

const filter = (tableName, key, comparator, value) => {
  if(comparators.indexOf(comparator) < 0) throw new Error(`Invalid comparator: ${comparator}`)
  return {
    operation: FILTER,
    data: {
      tableName,
      key,
      comparator,
      value
    }
  }
}

module.exports = {
  SAVE,
  save,
  MAKE_TABLE,
  makeTable,
  FILTER,
  filter,
  FETCH,
  fetch
}
