
const SUCCESS = 'SUCCESS'
const success = (data) => {
  return {
    operation: SUCCESS,
    data
  }
}

const FAILURE = 'FAILURE'
const failure = (data) => {
  return {
    operation: FAILURE,
    data
  }
}

/*
 * Initializes the persistence layer: this should return the object containing metadata
 * for all tables.
 */
const INITIALIZE_PERSISTANCE = 'INITIALIZE_PERSISTANCE'
const initialize = () => {
  return {
    operation: INITIALIZE_PERSISTANCE
  }
}
/*
 * This is the corrolary to the above message, it tells the persistence layer to save
 * the metadata about a given table to disk
 */
const UPDATE_META = 'UPDATE_META'
const updateMeta = (tables) => {
  return {
    operation: UPDATE_META,
    data: {
      tables
    }
  }
}

const PERSIST_ALL = 'PERSIST_ALL'
const writeToDisk = () => {
  return {
    operation: PERSIST_ALL
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

const STORE_RECORD = 'STORE_RECORD'
const storeRecord = (table, record, id) => {
  return {
    operation: STORE_RECORD,
    data: {
      table,
      record,
      id
    }
  }
}

const FETCH_RECORD = 'FETCH_RECORD'
const fetchRecord = (table, id) => {
  return {
    operation: FETCH_RECORD,
    data: {
      table,
      id
    }
  }
}

const FILTER_RECORDS = 'FILTER_RECORDS'
const comparators = ['EQ','GT','LT']

const filterRecords = (table, key, comparator, value) => {
  if(comparators.indexOf(comparator) < 0) throw new Error(`Invalid comparator: ${comparator}`)
  return {
    operation: FILTER_RECORDS,
    data: {
      table,
      query: {
        key, comparator, value
      }
    }
  }
}

const FETCH_FILTER_RESULT = 'FETCH_FILTER_RESULT'
const fetchFilterResult = (tableName, key, comparator, value) => {
  return {
    operation: FETCH_FILTER_RESULT,
    tableName,
    key,
    comparator,
    value
  }
}

const STORE_FILTER_RESULT = 'STORE_FILTER_RESULT'
const storeFilterResult = (tableName, key, comparator, value, result) => {
  return {
    operation: STORE_FILTER_RESULT,
    tableName,
    result,
    query: {
      key, comparator, value
    }
  }
}

module.exports = {
  FAILURE,
  failure,
  SUCCESS,
  success,
  INITIALIZE_PERSISTANCE,
  initialize,
  UPDATE_META,
  updateMeta,
  PERSIST_ALL,
  writeToDisk,
  MAKE_TABLE,
  makeTable,
  FETCH_RECORD,
  fetchRecord,
  FILTER_RECORDS,
  filterRecords,
  STORE_RECORD,
  storeRecord,
  FETCH_FILTER_RESULT,
  fetchFilterResult,
  STORE_FILTER_RESULT,
  storeFilterResult
}
