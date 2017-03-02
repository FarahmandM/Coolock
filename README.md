Coolock
=======

A cool clock with pure JavaScript and HTML5.

![Coolock - A Cool Clock](coolock.png)	

## Usage

```javascript
new Coolock(options);
```
where `options` is an object containing these properties:

Property | Type | Description | Default Value
-------- | ---- |------------ | -------------
`size` | *Number* | The size of canvas. | `400`
`strokeColor` | *String* | The html color of strokes like `red` and `#f00`. | `#000`
`fillColor` | *String* | The filling color like `blue` and `#00f`. | `#fff`
`lineCap` | *String* | The type of line cap could be `butt`, `round` or `square`. | `round`
`canvasId` | *String* | The id of canvas. | `coolock`
`canvasWrapperId` | *String* | The id of html element that Coolock canvas should be rendered there. | `coolockWrapper`

	
## Examples

```html
...
<div id="coolockWrapper"></div>
<script>
new Coolock();
coolock1 = new Coolock({size: 500, fillColor: 'brown'});
var o = {size: 200, lineCap: 'butt'}
new Coolock(o);
</script>
...
```

## Author

Farahmand Moslemi

## License

GNU GPL2
