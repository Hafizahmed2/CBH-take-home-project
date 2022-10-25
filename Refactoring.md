# Refactoring
​
You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:
​
1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.
​
You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.
​
## Your Explanation Here
​
If the event does not exist TRIVIAL_PARTITION_KEY will be returned in any case so i moved it to the top. If the partitionKey does
not exist , the hash for stringified event will be returned so skipping other executions by checking for partition key in start and returning hash of stringified event, After that stored stringified partition key in candidate and stored hash in candidate if length of candidate was greater than 256 and returning candidate at the end. 
​
