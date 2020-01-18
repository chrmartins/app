/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
const readyStatePromiseMiddleware = store => next => action => {
  const promise = action.promise || action.payload.promise;

  if (!promise) {
    return next(action);
  }

  function makeAction(ready, data, status) {
    const newAction = Object.assign({}, action, { ready, status }, data);
    if (newAction.promise) {
      delete newAction.promise;
    }
    if (newAction.payload && newAction.payload.promise) {
      delete newAction.payload.promise;
    }
    return newAction;
  }

  next(makeAction(false, null, "pending"));
  return promise.then(
    result =>
      next(makeAction(true, { ...action.payload, payload: result }, "success")),
    error => next(makeAction(true, { error }, "error"))
  );
};

export default readyStatePromiseMiddleware;
