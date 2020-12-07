// make a custom Array.map()
/**
 * (1) keeps track of how many items from the array (arr) have been processed,
 * (2) whether or not there’s been an error, and
 * (3)
 * @param arr
 * @param fn a function to be executed for each item in the array.
 * @param onFinish final callback to run after all items have been successfully processed or an error occurs
 * is expected to be call only once
 */

function mapAsync(arr, fn, onFinish) {
  let prevError;
  let nRemaining = arr.length;
  const results = [];

  arr.forEach((item, i) => {
    fn(item, (err, data) => {
      if (prevError) return;

      if (err) {
        prevError = err;
        return onFinish(err);
      }

      results[i] = data;

      nRemaining--;

      if (!nRemaining) onFinish(null, results);
    });
  });
}
