(function (JiraQuery, undefined) {
  'use strict';
  
}(JiraQuery = JiraQuery || {}));

/**
 * @fileoverview Provides the custom function JIRA_ISSUES and 
 * the helper functions that it uses
 * @OnlyCurrentDoc
 */

/**
 * Main Query function. This will run if the credentials have been 
 * properly set and stored for the current execution of the function.
 *
 * @param {string} base_url - The root url of the jira cloud instance. YOUR-DOMAIN.atlassian.net
 * @param {string} search - The root url of the jira cloud instance. YOUR-DOMAIN.atlassian.net
 * @param {string} [fields] - A comma separated list of the fields required to be returned. Specifying this reduces the overhead
 * @param {boolean} [recursive=True] Flag to specify if the query should return all the issues resulting from a query.
 * @param {number} [startAt=0] The first issue to return from the search results. Defaults to 0
 * @param {number} [maxResults=50] - The total number of issues to return in a single query. Defaults to 50.
 * @param {string} [transformation] - Not Implemented.
 * @return The retrieved formatted data.
 * @customfunction
 */
function JIRA_ISSUES(base_url, search, fields, startAt, maxResults, recursive, transformation) {
  var data, 
      message = 'Refresh Jira access credentials in the sidebar';
  
  return data || message;
}