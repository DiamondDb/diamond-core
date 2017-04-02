const core = require('../src/main')
const assert = require('assert')

describe('module', () => {
  it('has external operations', () => {
    assert(core.operations.external)
  })
  it('has internal operations', () => {
    assert(core.operations.internal)
  })
  it('has all external operation constants and functions', () => {
    const external = core.operations.external
    assert.equal(external.SAVE,'SAVE')
    assert.equal(external.MAKE_TABLE,'MAKE_TABLE')
    assert.equal(external.FILTER,'FILTER')
    assert.equal(external.FETCH,'FETCH')
    assert(typeof external.save === 'function')
    assert(typeof external.makeTable === 'function')
    assert(typeof external.filter === 'function')
    assert(typeof external.fetch === 'function')
  })
  it('has all internal operation constants and functions', () => {
    const internal = core.operations.internal
    assert.equal(internal.FAILURE,'FAILURE')
    assert.equal(internal.SUCCESS,'SUCCESS')
    assert.equal(internal.PERSIST_ALL,'PERSIST_ALL')
    assert.equal(internal.FETCH_RECORD,'FETCH_RECORD')
    assert.equal(internal.FILTER_RECORDS,'FILTER_RECORDS')
    assert.equal(internal.STORE_RECORD,'STORE_RECORD')
    assert.equal(internal.MAKE_TABLE,'MAKE_TABLE')
    assert.equal(internal.INITIALIZE_PERSISTANCE,'INITIALIZE_PERSISTANCE')
    assert.equal(internal.UPDATE_META,'UPDATE_META')
    assert(typeof internal.failure === 'function')
    assert(typeof internal.success === 'function')
    assert(typeof internal.writeToDisk === 'function')
    assert(typeof internal.fetchRecord === 'function')
    assert(typeof internal.filterRecords === 'function')
    assert(typeof internal.storeRecord === 'function')
    assert(typeof internal.makeTable === 'function')
    assert(typeof internal.initialize === 'function')
    assert(typeof internal.updateMeta === 'function')
  })
})
