export function startGetItem(itemId) {
  return dispatch => dispatch({type: 'start-request', payload: {itemId}});
}

export function getItem(itemId) {
  return dispatch => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
    .then(response => response.json())
    .then((result) => {
      dispatch({
        type: 'get-item',
        payload: result
      });
    });
  };
}

export function setSelectedCommentPath(path) {
  return dispatch => {
    dispatch({
      type: 'set-comment-path',
      payload: {path}
    });
  };
}

export function toggleGraphLayout() {
  return dispatch => dispatch({type: 'toggle-graph-layout'});
}
