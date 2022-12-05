import fs from 'fs'
import util from 'util'

export default {
    ACL: (object) => util.inspect(object, { showHidden: false, depth: null, colors: true }), // Advanced Console Log
    generateLocaleString: (locale = `en-IN`, timeZone = `Asia/Kolkata`) => new Date().toLocaleString(locale, { timeZone }),
    loadJSON: (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))
}
