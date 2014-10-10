# Oct. 9 2014: React.js

## A few resources

* http://facebook.github.io/react
* [React: Rethinking best practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY) (30min)
* [Introduction to React.js](https://www.youtube.com/watch?v=XxVg_s8xAms) (1h20min)
* [React's Architecture](https://www.youtube.com/watch?v=eCf5CquV_Bw) (36min)

## Running the examples

You will need to install `jsx`:

```
npm install -g react-tools
```

To compile the jsx files to `build/` (and watch the `src/` directory for changes):

```
jsx --watch src/ build/
```

To actually see the results you'll need to edit `index.html` to reference the example you want to try, for example:

```
...
<script src="build/example-1.js"></script>
...
```

*Have fun learning React.js!*
