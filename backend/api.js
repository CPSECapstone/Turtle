const baseURL = 'http://localhost:4000/'
const headers = new Headers()

headers.set('Content-Type', 'application/JSON')

const reqCfg = {
  headers: headers,
  credentials: 'include'
}

// Helper functions for the common request types, automatically
// adding verb, headers, and error management.
function safeFetch (request, options) {
  return fetch(request, options)
    .catch(err => Promise.reject(['Server Connect Error']))
    .then(res => {
      if (res.ok) {
        return res
      } else {
        if (res.status >= 400) {
          return Promise.resolve(res)
            .then(res => res.json())
            .then(errorlist =>
              Promise.reject(
                errorlist.map(
                  err =>
                    errorTranslate(err.tag) + (err.params ? err.params[0] : '')
                )
              )
            )
        } else {
          return Promise.reject(['Server Connect Error'])
        }
      }
    })
}

export function post (endpoint, body) {
  return safeFetch(baseURL + endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    ...reqCfg
  })
}

export function put (endpoint, body) {
  return safeFetch(baseURL + endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...reqCfg
  })
}

export function get (endpoint) {
  return safeFetch(baseURL + endpoint, {
    method: 'GET',
    ...reqCfg
  })
}

export function del (endpoint) {
  return safeFetch(baseURL + endpoint, {
    method: 'DELETE',
    ...reqCfg
  })
}

// Functions for performing the api requests

// EXAMPLE
/**
 * @returns {Promise} result of the sign out request
 */
// export function signOut () {
//   return del('Ssns/' + sessionId)
// }

const errMap = {
  en: {
    missingField: 'Field missing from request: ',
    badValue: 'Field has bad value: ',
    notFound: 'Entity not present in DB',
    badLogin: 'Email/password combination invalid',
    dupEmail: 'Email duplicates an existing email',
    noTerms: 'Acceptance of terms is required',
    forbiddenRole: 'Role specified is not permitted.',
    noOldPwd: 'Change of password requires an old password',
    oldPwdMismatch: 'Old password that was provided is incorrect.',
    dupTitle: 'Conversation title duplicates an existing one',
    dupEnrollment: 'Duplicate enrollment',
    forbiddenField: 'Field in body not allowed.',
    queryFailed: 'Query failed (server problem).'
  }
}

/**
 * @param {string} errTag
 * @param {string} lang
 */
export function errorTranslate (errTag, lang = 'en') {
  return errMap[lang][errTag] || 'Unknown Error!'
}
